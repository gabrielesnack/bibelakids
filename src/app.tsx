import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './router';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import '~/plugins/';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <CSSReset />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
