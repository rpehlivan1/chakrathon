import useSelectContext from '@components/Select/hooks/use-select-context.hook';
import { SelectOption } from '@components/Select/interfaces/select.interface';
import React from 'react';

const useSelectOption = (option: SelectOption) => {
  const { value, setOption } = useSelectContext();

  const isSelected = value === option.value;

  React.useEffect(() => {
    if (isSelected) {
      setOption(option);
    }
  }, [isSelected, option, setOption]);

  const onClick = React.useCallback(() => {
    setOption(option);
  }, [option, setOption]);

  return { isSelected, role: 'option', 'aria-selected': isSelected, onClick };
};

export default useSelectOption;
