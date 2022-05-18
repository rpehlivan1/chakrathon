import useSelect from '../../src/components/Select/hooks/use-select.hook';
import { act, renderHook } from '@testing-library/react-hooks';

describe('useSelect hook:', () => {
  const selectOptions = { value: 'option-1', label: 'Option 1' };
  it('return `isOpen` when `onOpen` is called:', () => {
    const { result } = renderHook(() => useSelect({ isOpen: false }));

    act(() => {
      result.current.onOpen();
    });

    expect(result.current.isOpen).toStrictEqual(true);
  });

  it('return `value` when on `onValueChange` is called:', () => {
    const { result } = renderHook(() => useSelect({ value: 'option-1' }));
    const optionValue = 'option-2';

    act(() => {
      result.current.onChange(optionValue);
    });

    expect(result.current.value).toStrictEqual(optionValue);
  });

  it('return `option` when on `onOptionChange` is called:', () => {
    const { result } = renderHook(() => useSelect({ isOpen: false }));

    act(() => {
      result.current.setOption(selectOptions);
    });

    expect(result.current.option).toStrictEqual(selectOptions);
  });

  it('return `isOpen = false` when `onToggle is called`:', () => {
    const { result } = renderHook(() => useSelect({ isOpen: true }));

    act(() => {
      result.current.isOpen = false;
    });

    expect(result.current.isOpen).toStrictEqual(false);
  });

  it('return `isOpen = true` when `onToggle is called when initial `isOpen` value is `false`:', () => {
    const { result } = renderHook(() => useSelect({ isOpen: false }));

    act(() => {
      result.current.isOpen = true;
    });

    expect(result.current.isOpen).toStrictEqual(true);
  });

  it('return `isOpen = false` when `onSelectClose` is called:', () => {
    const { result } = renderHook(() => useSelect({ isOpen: true }));

    act(() => {
      result.current.onClose();
    });

    expect(result.current.isOpen).toStrictEqual(false);
  });

  it('return `activeIndexKey` when `activeIndex > 0`:', () => {
    const { result } = renderHook(() => useSelect({ isOpen: true }));

    act(() => {
      result.current.setActiveIndex(1);
    });

    expect(result.current.activeIndexKey).toStrictEqual(`chakra-select-option-${1}`);
  });
});
