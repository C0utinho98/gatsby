import React from 'react';
import links from './content';
import { Container, MenuLinksLink, MenuLinksItem, MenuLinksList } from './styles';

import getThemeColor from '../../utils/getThemeColor';

const MenuLinks = () => (
  <Container>
    <MenuLinksList>
      {links.map((link, i) => (
        <MenuLinksItem key={i}>
          <MenuLinksLink
            cover
            directions="left"
            bg={getThemeColor()}
            duration={0.6}
            to={link.url}
            activeClassName="active"
          >
            {link.label}
          </MenuLinksLink>
        </MenuLinksItem>
      ))}
    </MenuLinksList>
  </Container>
);

export default MenuLinks;
