import { ComponentMultiStyleConfig } from '@chakra-ui/react';

const SelectStyles: ComponentMultiStyleConfig = {
  parts: ['wrapper', 'input', 'button', 'menu', 'option', 'popover'],
  baseStyle: ({ colorScheme }) => ({
    wrapper: {
      minWidth: '200px',
    },
    input: {
      display: 'none',
      width: '100%',
    },
    button: {
      justifyContent: 'space-between',
      alignItems: 'center',
      p: '12px 20px',
      h: 0,
      fontSize: '14px',
      fontWeight: 400,
      bg: 'none',
      width: '100%',
      borderRadius: '4px',
      borderWidth: '1px',
      height: '100%',
      _disabled: {
        bg: '#EDF2F7',
        color: '#4A5568',
        _hover: {
          borderColor: '#EDF2F7',
          bg: '#CBD5E0',
          cursor: 'not-allowed',
        },
      },
      _hover: {
        bg: 'none',
        borderColor: '#2B6CB0',
      },
      _active: {
        bg: 'none',
      },
      _focus: {
        borderColor: '#2B6CB0',
      },
      '.chakra-select__button-label': {
        flex: 1,
        textAlign: 'left',
      },
    },
    menu: {
      width: '100%',
    },
    option: {
      p: '8px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      '.chakra-select__option-label': {
        flex: 1,
        px: '8px',
      },
      _hover: {
        bg: '#EBF8FF',
        color: '#2B6CB0',
      },
      '&.chakra-select__option-active': {
        color: 'white',
        backgroundColor: `${colorScheme}.600`,
      },
    },
    popover: {
      width: '100%',
      _focus: {
        boxShadow: 'none',
      },
    },
  }),
  variants: {},
  defaultProps: {
    colorScheme: 'blue',
  },
};

export default SelectStyles;
