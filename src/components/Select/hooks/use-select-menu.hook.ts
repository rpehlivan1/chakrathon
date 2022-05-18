import useSelectContext from '@components/Select/hooks/use-select-context.hook';
import { BoxProps } from '@chakra-ui/react';
import { KeyboardEvent } from 'react';
import { SelectKeyboardKey } from '@components/Select/enums/select.enum';

const useSelectMenu = (): BoxProps => {
  const {
    isOpen,
    selectId,
    readonly,
    clearable,
    activeIndex,
    activeIndexKey,
    onNextOption,
    onPrevOption,
  } = useSelectContext();

  const onKeyUp = (event: KeyboardEvent) => {
    event.preventDefault();

    switch (event.key) {
      case SelectKeyboardKey.ArrowUp: {
        onPrevOption();
        break;
      }
      case SelectKeyboardKey.ArrowDown: {
        onNextOption();
        break;
      }
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
