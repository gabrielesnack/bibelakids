//
// most all properties overriding struct of chakra ui, such as bg, height, brand
//
import { ReactChild } from 'react';
import { GridProps } from '@chakra-ui/core';

export interface IFuncOnClickMenu {
  (): void;
}

export interface IBrand {
  src: string;
  alt: string;
  size: string | (string | null)[];
}

export interface INavbar {
  children?: ReactChild;
  height?: (string | null)[];
  brand: IBrand;
  isMenuOpen: boolean;
  onClickMenu: IFuncOnClickMenu;
}

export type NavbarProps = INavbar & GridProps;
