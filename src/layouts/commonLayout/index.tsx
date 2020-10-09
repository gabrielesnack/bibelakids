import React from 'react';
import { Box } from '@chakra-ui/core';
import { ICommonLayout } from './types';

import { CommonHeader } from '@/components/headers';

const CommonLayout = (props: ICommonLayout) => {
  const { children } = props;
  return (
    <>
      <CommonHeader px={['5', '6', '12']} bg="blue.400"></CommonHeader>
      <Box as="main" mt="10" pt="10" px={['5', '6', '12']}>
        {children}
      </Box>
    </>
  );
};
export default CommonLayout;
