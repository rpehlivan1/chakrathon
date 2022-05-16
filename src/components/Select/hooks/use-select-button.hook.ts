import useSelectContext from '@components/Select/hooks/use-select-context.hook';
import { ButtonProps } from '@chakra-ui/react';

const useSelectButton = (): ButtonProps => {
  const { isOpen, isDisabled } = useSelectContext();

  return {
    disabled: isDisabled,
    'aria-haspopup': 'listbox',
    'aria-expanded': isOpen,
  };
};

export default useSelectButton;
