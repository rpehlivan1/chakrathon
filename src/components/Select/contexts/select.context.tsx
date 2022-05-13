import React from 'react';
import { SelectValue } from '@components/Select';

export interface SelectContextProps {
  value?: SelectValue;
  onChange: (value: SelectValue) => void;
}

const defaultSelectContext: SelectContextProps = {
  value: '',
  onChange: () => {},
};

const SelectContext = React.createContext<SelectContextProps>(defaultSelectContext);

SelectContext.displayName = 'SelectContext';

export default SelectContext;
