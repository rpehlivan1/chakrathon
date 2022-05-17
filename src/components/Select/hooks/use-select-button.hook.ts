import useSelectContext from '@components/Select/hooks/use-select-context.hook';
import { ButtonProps } from '@chakra-ui/react';
import { KeyboardEvent } from 'react';
import { SelectKeys } from '@components/Select/types/select.type';

const useSelectButton = (): ButtonProps => {
  const { isOpen, isDisabled, onNextOption } = useSelectContext();

  const onKeyUp = (event: KeyboardEvent) => {
    event.preventDefault();

    const key = event.key as SelectKeys;
    if (key === 'ArrowDown') {
      onNextOption();
    }
  };

  const onKeyDown = (event: KeyboardEvent) => {
    event.preventDefault();
  };

  return {
    disabled: isDisabled,
    'aria-haspopup': 'listbox',
    'aria-expanded': isOpen,
    onKeyUp,
    onKeyDown,
  };
};

export default useSelectButton;
