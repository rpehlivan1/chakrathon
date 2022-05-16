import React from 'react';
import SelectContext from '../../src/components/Select/contexts/select.context';
import { selectProviderProps } from '../helpers/utils';
import { act, renderHook } from '@testing-library/react-hooks';
import useSelectOption from '../../src/components/Select/hooks/use-select-option.hook';
describe('useSelectLabelHook', () => {
  const mockSetOption = jest.fn();

  const wrapper: React.FC = ({ children }) => {
    return (
      <SelectContext.Provider value={{ ...selectProviderProps, setOption: mockSetOption }}>
        {children}
      </SelectContext.Provider>
    );
  };

  it('return `isSelected` `true` when passed:', () => {
    const { result } = renderHook(() => useSelectOption({ value: 'option-2', label: 'Option 2' }), {
      wrapper,
    });

    act(() => {
      result.current.isSelected = false;
    });

    expect(result.current.isSelected).toStrictEqual(false);
  });

  it('check if `onClick` is called when triggered:', () => {
    const { result } = renderHook(() => useSelectOption({ value: 'option-2', label: 'Option 2' }), {
      wrapper,
    });

    act(() => {
      result.current.onClick();
    });

    expect(mockSetOption).toBeCalled();
  });
});
