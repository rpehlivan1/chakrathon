import React from 'react';
import SelectContext from '../../src/components/Select/contexts/select.context';
import { selectProviderProps } from '../helpers/utils';
import { renderHook } from '@testing-library/react-hooks';
import useSelectButton from '../../src/components/Select/hooks/use-select-button.hook';

describe('<useSelectButton/> hook:', () => {
  const wrapper: React.FC = ({ children }) => {
    return <SelectContext.Provider value={selectProviderProps}>{children}</SelectContext.Provider>;
  };

  it('return defined values from hook:', () => {
    const { result } = renderHook(() => useSelectButton(), { wrapper });

    expect(result.current).toStrictEqual({
      disabled: false,
      'aria-haspopup': 'listbox',
      'aria-expanded': false,
    });
  });
});
