import React from 'react';
import { SystemStyleObject } from '@chakra-ui/styled-system';
import { Dict } from '@chakra-ui/utils';

export type SelectStyleContextProps = Dict<SystemStyleObject>;

const SelectStyleContext = React.createContext<SelectStyleContextProps>({});

SelectStyleContext.displayName = 'SelectStyleContext';

export default SelectStyleContext;
