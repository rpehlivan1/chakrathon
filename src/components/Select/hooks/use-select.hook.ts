import React from 'react';
import { SelectOption } from '@components/Select/interfaces/select.interface';
import { SelectValue } from '@components/Select';
import usePrevious from '@hooks/use-previous.hook';
import { SelectControlProps, SelectRenderProps } from '@components/Select/select.component';
import { setValues } from 'framer-motion/types/render/utils/setters';

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

  const prevValue = usePrevious(value);

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

  return {
    isOpen: open,
    value,
    option,
    onOpen: onSelectOpen,
    onClose: onSelectClose,
    onToggle: onSelectToggle,
    onChange: onValueChange,
    setOption: onOptionChange,
    ...restProps,
  };
};

export type UseSelectReturn = ReturnType<typeof useSelect>;

export default useSelect;
