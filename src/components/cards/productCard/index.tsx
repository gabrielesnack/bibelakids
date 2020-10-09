import React from 'react';
import { Box, BoxProps, Image, Text, Badge } from '@chakra-ui/core';

const ProductCard = (props: BoxProps) => {
  return (
    <Box pb="4" borderWidth="1px" rounded="lg" overflow="hidden" {...props}>
      <Image
        mx="auto"
        src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Gtx260.jpg"
      />
      <Text fontSize="lg" px="4">
        R$ 1.400,00
        <Badge rounded="9px" px="2" variantColor="green">
          23% OFF
        </Badge>
      </Text>
      <Text fontSize="md" px="4">
        Placa de vídeo Nvidia GeForce GTX 10 Series GTX 1050 Ti
      </Text>
    </Box>
  );
};

export default ProductCard;
