import useSelectContext from '@components/Select/hooks/use-select-context.hook';
import { SelectOption } from '@components/Select/interfaces/select.interface';
import React, { KeyboardEvent } from 'react';
import { usePrevious } from '@chakra-ui/react';
import { SelectKeyboardKey } from '@components/Select/enums/select.enum';

const useSelectOption = (option: SelectOption) => {
  const {
    selectId,
    value,
    activeIndex,
    setActiveIndex,
    setOption,
    options,
    onClose,
    addOption,
    updateOption,
  } = useSelectContext();
  const ref = React.createRef<HTMLDivElement>();
  const prevOption = usePrevious(option);

  const isSelected = React.useMemo(() => value === option.value, [value, option.value]);

  const index = React.useMemo(() => {
    return options.findIndex((item) => item.value === option.value);
  }, [options, option]);

  React.useEffect(() => {
    if (!prevOption) {
      addOption(option);
    } else if (prevOption.value !== option.value) {
      updateOption(option, prevOption);
    }
  }, [prevOption, option]);

  React.useEffect(() => {
    if (isSelected) {
      setOption(option);
    }
  }, [isSelected, option, setOption]);

  React.useEffect(() => {
    if (activeIndex !== -1 && activeIndex === index) {
      ref.current?.focus();
    }
  }, [activeIndex, index, ref]);

  const onClick = React.useCallback(() => {
    setOption(option);
    setActiveIndex(index);
  }, [option, setOption, index, setActiveIndex]);

  const onKeyUp = (event: KeyboardEvent) => {
    event.preventDefault();

    switch (event.key) {
      case SelectKeyboardKey.Enter: {
        setOption(option);
        break;
      }
      case SelectKeyboardKey.Escape: {
        onClose();
        break;
      }
    }
  };

  const onKeyDown = (event: KeyboardEvent) => {
    event.preventDefault();
  };

  return {
    ref,
    id: `${selectId}-option-${index}`,
    tabIndex: activeIndex === index ? 0 : -1,
    isSelected,
    role: 'option',
    'aria-selected': isSelected,
    onClick,
    onKeyUp,
    onKeyDown,
  };
};

export default useSelectOption;
