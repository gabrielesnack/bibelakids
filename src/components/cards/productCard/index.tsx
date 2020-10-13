import React from 'react';
import { Box, Image, Text, Badge } from '@chakra-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IProductItem } from './types';
import { iconStyle } from './styles';

const ProductCard = (props: IProductItem) => {
  const { boxProps, title, img, price, discount } = props;

  return (
    <Box
      position="relative"
      pb="4"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      {...boxProps}
    >
      <Box position="absolute" top="2" right="2">
        <Box {...iconStyle} mr="2">
          <FontAwesomeIcon icon={['far', 'copy']} />
        </Box>
        <Box {...iconStyle}>
          <FontAwesomeIcon icon={['far', 'heart']} />
        </Box>
      </Box>
      <Image mx="auto" src={img} />
      <Text fontSize="lg" px="4">
        R$ {price}
        <Badge rounded="9px" px="2" variantColor="green">
          {discount}% OFF
        </Badge>
      </Text>
      <Text fontSize="md" px="4">
        {title}
      </Text>
    </Box>
  );
};

export default ProductCard;
