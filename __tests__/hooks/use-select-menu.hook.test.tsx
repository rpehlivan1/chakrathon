import { renderHook } from '@testing-library/react-hooks';
import useSelectMenu from '../../src/components/Select/hooks/use-select-menu.hook';
import React from 'react';
import SelectContext from '../../src/components/Select/contexts/select.context';
import { selectProviderProps } from '../helpers/utils';

describe('<useSelectMenu/> hook:', () => {
  const wrapper: React.FC = ({ children }) => {
    return <SelectContext.Provider value={selectProviderProps}>{children}</SelectContext.Provider>;
  };

  it('return defined values from hook:', () => {
    const { result } = renderHook(() => useSelectMenu(), { wrapper });

    expect(result.current).toStrictEqual({
      tabIndex: -1,
      role: 'listbox',
      'aria-required': true,
      'aria-readonly': false,
      'aria-multiselectable': false,
    });
  });
});
