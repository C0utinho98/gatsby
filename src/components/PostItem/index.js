import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  PostItemDate,
  PostItemDescription,
  PostItemInfo,
  PostItemLink,
  PostItemTitle,
  PostItemTag,
} from './styles';

const PostItem = ({ slug, background, category, date, title, description }) => (
  <PostItemLink to={slug}>
    <Container>
      <PostItemTag background={background}>{category}</PostItemTag>
      <PostItemInfo>
        <PostItemDate>{date}</PostItemDate>
        <PostItemTitle>{title}</PostItemTitle>
        <PostItemDescription>{description}</PostItemDescription>
      </PostItemInfo>
    </Container>
  </PostItemLink>
);

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PostItem;
