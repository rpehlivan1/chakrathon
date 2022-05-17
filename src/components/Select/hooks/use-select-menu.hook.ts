import useSelectContext from '@components/Select/hooks/use-select-context.hook';
import { BoxProps } from '@chakra-ui/react';
import { KeyboardEvent } from 'react';
import { SelectKeys } from '@components/Select/types/select.type';

const useSelectMenu = (): BoxProps => {
  const { selectId, readonly, clearable, activeIndexKey, onNextOption, onPrevOption } =
    useSelectContext();

  const onKeyUp = (event: KeyboardEvent) => {
    event.preventDefault();

    const key = event.key as SelectKeys;

    if (key === 'ArrowUp') {
      onPrevOption();
    } else if (key === 'ArrowDown') {
      onNextOption();
    }
  };

  const onKeyDown = (event: KeyboardEvent) => {
    event.preventDefault();
  };

  return {
    id: `${selectId}-menu`,
    tabIndex: -1,
    role: 'listbox',
    'aria-required': !clearable,
    'aria-readonly': readonly,
    'aria-multiselectable': false,
    'aria-activedescendant': activeIndexKey,
    onKeyUp,
    onKeyDown,
  };
};

export default useSelectMenu;
