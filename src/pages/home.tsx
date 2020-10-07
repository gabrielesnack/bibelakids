import React from 'react';

import { CommonHeader } from '@/components/headers';

class Search extends React.Component {
  render() {
    return (
      <>
        <CommonHeader
          className="container"
          px={['5', '6', '12']}
          bg="blue.400"
        ></CommonHeader>
      </>
    );
  }
}

export default Search;
