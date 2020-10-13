import React from 'react';
import { Box, PseudoBox, Image, Text, Badge } from '@chakra-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IProductItem } from './types';
import { containerStyle, iconStyle } from './styles';

const ProductCard = (props: IProductItem) => {
  const { boxProps, title, img, price, discount } = props;

  return (
    <PseudoBox pos="relative" {...containerStyle} {...boxProps}>
      <Box pos="absolute" top="2" right="2">
        <Box {...iconStyle} mr="2">
          <FontAwesomeIcon size="lg" icon={['far', 'copy']} />
        </Box>
        <Box {...iconStyle}>
          <FontAwesomeIcon size="lg" icon={['far', 'heart']} />
        </Box>
      </Box>
      <Image mx="auto" mb="2" src={img} />
      <Text fontSize="md" fontWeight="bold" mb="1" px="4">
        R$ {price}
        <Badge rounded="9px" ml="2" px="2" variantColor="green">
          {discount}% OFF
        </Badge>
      </Text>
      <Text fontSize="sm" px="4">
        {title}
      </Text>
    </PseudoBox>
  );
};

export default ProductCard;
