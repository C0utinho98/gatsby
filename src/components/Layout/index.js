import React from 'react';
import PropTypes from 'prop-types';
import { TransitionPortal } from 'gatsby-plugin-transition-link';
import { LayoutMain, LayoutWrapper } from './styles';
import GlobalStyles from '../../styles/global';
import Sidebar from '../Sidebar';
import MenuBar from '../MenuBar';

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <TransitionPortal leve="top">
        <Sidebar />
      </TransitionPortal>
      <LayoutMain>{children}</LayoutMain>
      <TransitionPortal leve="top">
        <MenuBar />
      </TransitionPortal>
    </LayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
