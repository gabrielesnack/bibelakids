import React from 'react';
import { Link as ReachLink } from 'react-router-dom';
import { Link, ListItem } from '@chakra-ui/core';
import { NavItemProps } from './types';

const Navitem = (props: NavItemProps) => {
  return (
    <ListItem {...props}>
      <Link
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        as={ReachLink}
        d="block"
        w="100%"
        to={props.to}
      >
        {props.children}
      </Link>
    </ListItem>
  );
};

export default Navitem;
