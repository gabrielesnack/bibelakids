import React from 'react';
import { Link as Redirect } from 'react-router-dom';
import { Heading, Flex, Link } from '@chakra-ui/core';

class Search extends React.Component {
  render() {
    return (
      <div className="App">
        <Flex align="center" w="100vw" justify="center" flexDirection="column">
          <Heading as="h1" color="red.400">
            Wellcome to The Search Page. I am using the Chakra-UI
          </Heading>
          <Link as={Redirect} to="/">
            Go to Home Page
          </Link>
        </Flex>
      </div>
    );
  }
}

export default Search;
