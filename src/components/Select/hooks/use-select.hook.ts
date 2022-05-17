import React from 'react';
import {
  SelectControlProps,
  SelectOption,
  SelectRenderProps,
} from '@components/Select/interfaces/select.interface';
import { SelectValue } from '@components/Select';
import usePrevious from '@hooks/use-previous.hook';
import { useIds } from '@chakra-ui/react';

export type UseSelectProps = SelectControlProps & SelectRenderProps;

const useSelect = ({
  isOpen,
  value: currentValue,
  defaultValue,
  onChange,
  onOpen,
  onClose,
  ...restProps
}: UseSelectProps) => {
  const [open, setOpen] = React.useState<boolean>();
  const [option, setOption] = React.useState<SelectOption>();
  const [value, setValue] = React.useState<SelectValue>();

  const [options, setOptions] = React.useState<SelectOption[]>([]);
  const [activeIndex, setActiveIndex] = React.useState<number>(-1);

  const prevValue = usePrevious(value);

  const [selectId] = useIds(restProps.id, 'chakra-select');

  const activeIndexKey = React.useMemo(() => {
    if (activeIndex < 0) {
      return;
    }

    return `chakra-select-option-${activeIndex}`;
  }, [activeIndex]);

  React.useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  React.useEffect(() => {
    if (prevValue === value && currentValue !== value) {
      setValue(currentValue);
    }
  }, [value, prevValue, currentValue]);

  React.useEffect(() => {
    setOpen(isOpen);
  }, [isOpen, setOpen]);

  const onSelectOpen = () => {
    setOpen(true);
    onOpen?.();
  };

  const onSelectClose = () => {
    setOpen(false);
    onClose?.();
    setOptions([]);
    setActiveIndex(-1);
  };

  const onSelectToggle = React.useCallback(() => {
    setOpen(!open);
    open ? onClose?.() : onOpen?.();
  }, [open, setOpen, onOpen, onClose]);

  const onValueChange = React.useCallback(
    (newValue: SelectValue) => {
      if (value !== newValue) {
        onChange?.(newValue);
        setValue(newValue);
      }
    },
    [value, setValue, onChange],
  );

  const onOptionChange = React.useCallback(
    (newOption: SelectOption) => {
      if (newOption.value !== value) {
        setOption(newOption);
        onValueChange(newOption.value);
      }
    },
    [value, onValueChange, setOption],
  );

  const addOption = React.useCallback(
    (option: SelectOption) => {
      setOptions((prevState) => [...prevState, option]);
    },
    [setOptions],
  );

  const updateOption = React.useCallback(
    (newOption: SelectOption, prevOption: SelectOption) => {
      setOptions((prevState) => [
        ...prevState.map((item) => {
          if (item.value === prevOption.value) {
            return newOption;
          }

          return item;
        }),
      ]);
    },
    [setOptions],
  );

  const onNextOption = () => {
    if (options.length - 1 > activeIndex) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    } else {
      setActiveIndex(0);
    }
  };

  const onPrevOption = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };

  return {
    selectId,
    isOpen: open,
    activeIndexKey,
    setActiveIndex,
    value,
    option,
    options,
    onOpen: onSelectOpen,
    onClose: onSelectClose,
    onToggle: onSelectToggle,
    onChange: onValueChange,
    setOption: onOptionChange,
    addOption,
    updateOption,
    onNextOption,
    onPrevOption,
    ...restProps,
  };
};

export type UseSelectReturn = ReturnType<typeof useSelect>;

export default useSelect;
