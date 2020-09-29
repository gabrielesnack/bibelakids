import React, { useState, useEffect } from 'react';
import { Image, Box, Grid } from '@chakra-ui/core';
import { INavbar } from '../../interfaces/navbar';

const defaultHeight = ['70px', null, '60px'];

export default function navbar({
  bg = 'blue.400',
  brand,
  height = defaultHeight,
  isMenuOpen,
  onClickMenu,
}: INavbar) {
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
      pos={[isMenuOpen ? 'fixed' : 'static', null, 'static']}
      w="100%"
      templateColumns={['repeat(1, 1fr)', null, 'repeat(2, 1fr)']}
    >
      <Box
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        h={height}
        px="6"
        bg={bg}
      >
        <Box size={brand.size}>
          <Image src={brand.src} alt={brand.alt} />
        </Box>
        <Box
          display={{ sm: 'block', md: 'none' }}
          cursor="pointer"
          onClick={onClickMenu}
        >
          <svg
            fill="black"
            width="30px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>
      </Box>
      <Box
        d={[isMenuOpen ? 'block' : 'none', null, 'block']}
        w="100%"
        h={secondGridHeight}
        bg={bg}
      />
    </Grid>
  );
}
