import React from 'react';
import { SelectOption } from '@components/Select/interfaces/select.interface';
import { SelectValue } from '@components/Select';
import { UseSelectReturn } from '@components/Select/hooks/use-select.hook';

export interface SelectContextProps {
  isOpen: boolean;
  onOptionClear: () => void;
  setIsOpen: (status: boolean) => void;
  onOptionSelect: (value: SelectOption) => void;
  value?: SelectValue;
}

const defaultSelectContext: UseSelectReturn = {
  selectId: '',
  activeIndex: 0,
  activeIndexKey: '',
  options: [],
  isOpen: false,
  value: undefined,
  option: undefined,
  onOpen: () => {},
  onClose: () => {},
  setOption: () => {},
  onChange: () => {},
  addOption: () => {},
  updateOption: () => {},
  onNextOption: () => {},
  onPrevOption: () => {},
  setActiveIndex: () => {},
};

const SelectContext = React.createContext<UseSelectReturn>(defaultSelectContext);

SelectContext.displayName = 'SelectContext';

export default SelectContext;
