import React from 'react';
import SelectContext from '@/components/Select/contexts/select.context';

const useSelectContext = () => {
  return React.useContext(SelectContext);
};

export default useSelectContext;
