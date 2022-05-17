import useSelectContext from '@components/Select/hooks/use-select-context.hook';
import { SelectOption } from '@components/Select/interfaces/select.interface';
import React from 'react';
import { usePrevious } from '@chakra-ui/react';

const useSelectOption = (option: SelectOption) => {
  const { selectId, value, setActiveIndex, setOption, options, addOption, updateOption } =
    useSelectContext();
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

  const onClick = React.useCallback(() => {
    setOption(option);
    setActiveIndex(index);
  }, [option, setOption, index, setActiveIndex]);

  return {
    id: `${selectId}-option-${index}`,
    isSelected,
    role: 'option',
    'aria-selected': isSelected,
    onClick,
  };
};

export default useSelectOption;
