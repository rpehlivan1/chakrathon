import { ComponentMultiStyleConfig } from '@chakra-ui/react';

const SelectStyles: ComponentMultiStyleConfig = {
  parts: ['wrapper', 'button', 'listBox', 'option'],
  baseStyle: ({ colorScheme }) => ({
    wrapper: {
      minWidth: '100px',
    },
    button: {},
    listBox: {},
    option: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',

      '&.chakra-select__option-active': {
        color: 'white',
        backgroundColor: `${colorScheme}.600`,
      },
    },
  }),
  variants: {},
  defaultProps: {},
};

export default SelectStyles;
