import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../src/theme';

export const decorators = [
  (Story: Function) => (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  ),
];
