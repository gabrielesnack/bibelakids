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

const mockProduct = {
  title: 'Placa de vídeo Nvidia GeForce GTX 10 Series GTX 1050 Ti',
  img: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Gtx260.jpg',
  price: '1.400,00',
  discount: '25',
};

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
          <ProductCard boxProps={{ mb: '4' }} {...mockProduct}></ProductCard>
          <ProductCard boxProps={{ mb: '4' }} {...mockProduct}></ProductCard>
          <ProductCard boxProps={{ mb: '4' }} {...mockProduct}></ProductCard>
          <ProductCard boxProps={{ mb: '4' }} {...mockProduct}></ProductCard>
        </Grid>
      </>
    </CommonLayout>
  );
};

export default Home;
