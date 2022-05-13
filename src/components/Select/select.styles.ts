import { ComponentMultiStyleConfig } from '@chakra-ui/react';

const SelectStyles: ComponentMultiStyleConfig = {
  parts: ['wrapper', 'input', 'button', 'menu', 'option'],
  baseStyle: ({ colorScheme }) => ({
    wrapper: {
      position: 'absolute',
      minWidth: '100px',
    },
    input: {
      display: 'none',
      backgroundColor: 'red',
      width: '100%',
    },
    button: {
      width: '100%',
    },
    menu: {
      width: '100%',
    },
    option: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      '.chakra-select__option-label': {
        flex: 1,
      },
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
