import { ReactChild } from 'react';
import { PseudoBoxProps } from '@chakra-ui/core';

export interface INavItem {
  children: ReactChild;
  to: string;
}

export type NavItemProps = INavItem & PseudoBoxProps;
