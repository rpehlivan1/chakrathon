import React from 'react';
import theme from '~theme/index';
import { ChakraProvider } from '@chakra-ui/react';

export const decorators = [
  (Story: Function) => (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  ),
];
