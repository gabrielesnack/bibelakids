import React from 'react';
import { Grid, Heading } from '@chakra-ui/core';

import CommonLayout from '@/layouts/commonLayout';
import ProductCard from '@/components/cards/productCard';

const columnsProduct = [
  'repeat(1, 100%)',
  'repeat(2, 48%)',
  'repeat(3, 32%)',
  'repeat(4, 23%)',
];

const Home = () => {
  return (
    <CommonLayout>
      <>
        <Heading as="h2" size="lg" my="4">
          Produtos com maiores ofertas
        </Heading>
        <Grid
          w="100%"
          templateColumns={columnsProduct}
          templateRows="repeat(4, auto)"
          justifyContent="space-between"
        >
          <ProductCard mb="4"></ProductCard>
          <ProductCard mb="4"></ProductCard>
          <ProductCard mb="4"></ProductCard>
          <ProductCard mb="4"></ProductCard>
        </Grid>
      </>
    </CommonLayout>
  );
};

export default Home;
