import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ProfileWrapper, ProfileLink, ProfileAuthor, ProfilePosition, ProfileDescripton, Container } from './styes';
import Avatar from '../Avatar';

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, description },
    },
  } = useStaticQuery(
    graphql`
      query MySideMetadat {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  return (
    <Container>
      <ProfileWrapper>
        <Avatar />
        <ProfileLink>
          <ProfileAuthor>{title}</ProfileAuthor>
          <ProfilePosition>Dev</ProfilePosition>
          <ProfileDescripton>{description}</ProfileDescripton>
        </ProfileLink>
      </ProfileWrapper>
    </Container>
  );
};

export default Profile;
