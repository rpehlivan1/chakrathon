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
  isOpen: false,
  value: undefined,
  option: undefined,
  onOpen: () => {},
  onClose: () => {},
  onToggle: () => {},
  setOption: () => {},
  onChange: () => {},
};

const SelectContext = React.createContext<UseSelectReturn>(defaultSelectContext);

SelectContext.displayName = 'SelectContext';

export default SelectContext;
