import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import useSelectLabel from '../../src/components/Select/hooks/use-select-label.hook';
import SelectContext from '../../src/components/Select/contexts/select.context';
import { selectProviderProps } from '../helpers/utils';

describe('useSelectLabelHook', () => {
  const wrapper: React.FC = ({ children }) => {
    return <SelectContext.Provider value={selectProviderProps}>{children}</SelectContext.Provider>;
  };
  it('return given `for` when `id` is passed:', () => {
    const { result } = renderHook(() => useSelectLabel(), { wrapper });

    expect(result.current.for).toStrictEqual(selectProviderProps.id);
  });
});
