import React from 'react';
import SelectContext, { SelectContextProps } from '../contexts/select.context';

interface SelectProviderProps extends SelectContextProps {
  children: React.ReactNode;
}

const SelectProvider: React.FC<SelectProviderProps> = ({ children, ...restProps }) => {
  return <SelectContext.Provider value={restProps}>{children}</SelectContext.Provider>;
};

export default SelectProvider;
