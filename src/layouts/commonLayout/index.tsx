import React from 'react';
import { ICommonLayout } from './types';

import { CommonHeader } from '@/components/headers';

const CommonLayout = (props: ICommonLayout) => {
  const { children } = props;
  return (
    <>
      <CommonHeader px={['5', '6', '12']} bg="blue.400"></CommonHeader>
      {children}
    </>
  );
};
export default CommonLayout;
