import React from 'react';
import { Container, SocialLinksList, SocialListItem, SocialLinksLink, IconWrapper } from './styles';
import Icons from './Icons';
import links from './content';

const SocialLinks = () => (
  <Container>
    <SocialLinksList>
      {links.map((link, i) => {
        const Icon = Icons[link.label];

        return (
          <SocialListItem key={i}>
            <SocialLinksLink href={link.url} title={link.label} target="_blan" rel="noopener noopener">
              <IconWrapper>
                <Icon />
              </IconWrapper>
            </SocialLinksLink>
          </SocialListItem>
        );
      })}
    </SocialLinksList>
  </Container>
);

export default SocialLinks;
