import React, { useState } from 'react';
import { Grid, Box, BoxProps } from '@chakra-ui/core';
import CommonNavbar from '@/components/navbars/commonNavbar';
import CommonNavitem from '@/components/navbars/commonNavitem';
import logo from '@/img/icon.png';

const fontLinks = ['2xl', 'xl'];
const marginLinks = [4, 0];

const Header = (props: BoxProps) => {
  const { bg, px } = props;

  const [isMenuOpen, openMenu] = useState(false);

  function toggleMenu(): void {
    openMenu(!isMenuOpen);
  }

  return (
    <Box
      as="header"
      pos={[isMenuOpen ? 'fixed' : 'static', null, 'static']}
      w="100%"
      bg={bg}
    >
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
        <Grid
          as="ul"
          h={[null, null, '100%']}
          templateColumns={['repeat(1, 1fr)', null, 'repeat(4, auto)']}
          gap={[2, 4, 6]}
          justifyContent="end"
          alignItems={[null, null, 'center']}
          style={{ listStyle: 'none' }}
        >
          <CommonNavitem
            to="/"
            mt={marginLinks}
            mb={marginLinks}
            fontSize={fontLinks}
          >
            Início
          </CommonNavitem>
          <CommonNavitem to="/busca" mb={marginLinks} fontSize={fontLinks}>
            Busca
          </CommonNavitem>
          <CommonNavitem to="/sobre" mb={marginLinks} fontSize={fontLinks}>
            Sobre
          </CommonNavitem>
          <CommonNavitem to="/sobre" mb={marginLinks} fontSize={fontLinks}>
            Contato
          </CommonNavitem>
        </Grid>
      </CommonNavbar>
    </Box>
  );
};

export default Header;
