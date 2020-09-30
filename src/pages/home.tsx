import React from 'react';
import { Link as ReachLink } from 'react-router-dom';
import { Heading, Flex, Link } from '@chakra-ui/core';

import { CommonHeader } from '@/components/headers';

class Search extends React.Component {
  render() {
    return (
      <>
        <CommonHeader></CommonHeader>
        <Flex align="center" w="100vw" justify="center" flexDirection="column">
          <Heading as="h1" color="red.400">
            Wellcome to The First Page. I am using the Chakra-UI
          </Heading>
          <Link as={ReachLink} to="/busca">
            Go to Search Page
          </Link>
        </Flex>
      </>
    );
  }
}

export default Search;
