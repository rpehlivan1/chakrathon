import useSelectContext from '@components/Select/hooks/use-select-context.hook';
import { BoxProps } from '@chakra-ui/react';

const useSelectMenu = (): BoxProps => {
  const { readonly, clearable } = useSelectContext();

  return {
    tabIndex: -1,
    role: 'listbox',
    'aria-required': !clearable,
    'aria-readonly': readonly,
    'aria-multiselectable': false,
  };
};

export default useSelectMenu;
