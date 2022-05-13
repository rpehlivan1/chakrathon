import React from 'react';
import SelectStyleContext from '@components/Select/contexts/select-style.context';

const useSelectStyles = () => {
  return React.useContext(SelectStyleContext);
};

export default useSelectStyles;
