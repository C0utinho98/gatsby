import React, { useState, useEffect } from 'react';
import { Home, Grid } from 'styled-icons/boxicons-solid';
import { SearchAlt2, UpArrowAlt } from 'styled-icons/boxicons-regular';
import { Lightbulb } from 'styled-icons/remix-fill';
import { ThList } from 'styled-icons/typicons';
import { Container, MenuBarGroup, MenuBarItem, MenuBarLink } from './styles';

const MenuBar = () => {
  const [theme, setTheme] = useState(null);
  const [display, setDisplay] = useState(null);

  const isDarkMode = theme === 'dark';
  const isListMode = display === 'list';

  useEffect(() => {
    setTheme(window.__theme);
    setDisplay(window.__display);

    window.__onThemeChange = () => setTheme(window.__theme);
    window.__onDisplayChange = () => setDisplay(window.__display);
  }, []);

  return (
    <Container>
      <MenuBarGroup>
        <MenuBarLink to="/home">
          <MenuBarItem>
            <Home />
          </MenuBarItem>
        </MenuBarLink>
        <MenuBarLink to="/search">
          <MenuBarItem>
            <SearchAlt2 />
          </MenuBarItem>
        </MenuBarLink>
      </MenuBarGroup>
      <MenuBarGroup>
        <MenuBarItem
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark');
          }}
          className={theme}
        >
          <Lightbulb />
        </MenuBarItem>
        <MenuBarItem onClick={() => window.__setPreferredDisplay(isListMode ? 'grid' : 'list')}>
          {isListMode ? <Grid /> : <ThList />}
        </MenuBarItem>
        <MenuBarItem>
          <UpArrowAlt />
        </MenuBarItem>
      </MenuBarGroup>
    </Container>
  );
};

export default MenuBar;
