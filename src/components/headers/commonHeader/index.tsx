import React, { useState } from 'react';
import { Grid, Box, BoxProps } from '@chakra-ui/core';
import CommonNavbar from '@/components/navbars/commonNavbar';
import CommonNavitem from '@/components/navbars/commonNavitem';
import logo from '@/img/icon.png';

import { navGroupLinksStyle, navLinksStyle, navFirstLinkStyle } from './styles';

const Header = (props: BoxProps) => {
  const { bg, px } = props;

  const [isMenuOpen, openMenu] = useState(false);

  function toggleMenu(): void {
    openMenu(!isMenuOpen);
  }

  return (
    <Box as="header" pos="fixed" zIndex={100} w="100%" top="0" bg={bg}>
      <CommonNavbar
        bg={bg}
        px={px}
        brand={{
          size: ['50px', null, '45px'],
          src: logo,
          alt: 'Bibela Kids',
        }}
        isMenuOpen={isMenuOpen}
        onClickMenu={toggleMenu}
      >
        <Grid as="ul" {...navGroupLinksStyle}>
          <CommonNavitem to="/" {...navFirstLinkStyle}>
            Início
          </CommonNavitem>
          <CommonNavitem to="/busca" {...navLinksStyle}>
            Busca
          </CommonNavitem>
          <CommonNavitem to="/sobre" {...navLinksStyle}>
            Sobre
          </CommonNavitem>
          <CommonNavitem to="/sobre" {...navLinksStyle}>
            Contato
          </CommonNavitem>
        </Grid>
      </CommonNavbar>
    </Box>
  );
};

export default Header;
