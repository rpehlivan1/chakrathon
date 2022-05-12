import { ComponentMultiStyleConfig } from '@chakra-ui/react';

const SelectStyles: ComponentMultiStyleConfig = {
  parts: ['wrapper', 'input', 'container', 'option'],
  baseStyle: () => ({
    wrapper: {
      minWidth: '100px',
    },
    option: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  }),
  variants: {},
  defaultProps: {},
};

export default SelectStyles;
