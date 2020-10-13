import React, { useState, useEffect } from 'react';
import { Image, Box, Text, Grid } from '@chakra-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavbarProps } from './types';

const defaultHeight = ['70px', null, '60px'];

const Navbar = (props: NavbarProps) => {
  const {
    bg,
    px,
    brand,
    height = defaultHeight,
    isMenuOpen,
    onClickMenu,
    children,
  } = props;

  const [secondGridHeight, setSecondGridHeight] = useState(defaultHeight);

  //fix height of second grid
  useEffect(() => {
    const fixHeight = height.map((e, i): string | null => {
      if (i == 0) return isMenuOpen ? `calc(100vh - ${height[0]})` : height[0];
      return e;
    });
    setSecondGridHeight(fixHeight);
  }, [height, isMenuOpen]);

  return (
    <Grid
      as="nav"
      w="100%"
      h="auto"
      px={px}
      templateColumns={['auto auto 1fr', null, 'auto auto 1fr']}
      templateRows="auto auto"
      alignItems="center"
    >
      <Box d="flex" h={height} bg={bg}>
        <Box my="auto" mr="4" size={brand.size}>
          <Image src={brand.src} alt={brand.alt} />
        </Box>
      </Box>
      <Text fontSize="xl">My Company</Text>

      <Box
        display={{ sm: 'block', md: 'none' }}
        cursor="pointer"
        onClick={onClickMenu}
      >
        <FontAwesomeIcon
          size="2x"
          icon={isMenuOpen ? ['fas', 'times'] : ['fas', 'bars']}
          style={{ display: 'block', marginLeft: 'auto' }}
        />
      </Box>
      <Box
        d={[isMenuOpen ? 'block' : 'none', null, 'block']}
        gridArea={['2 / 1 / 2 / span 3', null, '1 / 3 / 1 / 3']}
        w="100%"
        h={secondGridHeight}
        bg={bg}
      >
        {children}
      </Box>
    </Grid>
  );
};

export default Navbar;
