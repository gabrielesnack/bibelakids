import { BoxProps } from '@chakra-ui/core';

export interface IProductItem {
  title: string;
  img: string;
  price: number | string;
  discount: number | string;
  boxProps?: BoxProps;
}
