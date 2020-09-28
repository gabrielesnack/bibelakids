import React from 'react';
import { Heading, Flex } from '@chakra-ui/core';

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <Flex align="center" w="100vw" justify="center">
          <Heading as="h1" color="blue.400">
            Wellcome The First Page. I am using the Chakra-UI
          </Heading>
        </Flex>
      </div>
    );
  }
}

export default Home;
