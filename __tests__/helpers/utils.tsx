import React from 'react';
import { UseSelectReturn } from '../../src/components/Select/hooks/use-select.hook';

export const selectProviderProps: UseSelectReturn = {
  leftIcon: <>GlobalLeftIcon</>,
  rightIcon: <>GlobalRightIcon</>,
  value: 'option-1',
  option: { value: 'option-1', label: 'Option 1' },
  isOpen: false,
  invalid: false,
  id: '25',
  isDisabled: false,
  clearable: false,
  hideDefaultChevron: false,
  placeholder: 'Placeholder',
  readonly: false,
  activeIndex: 0,
  onOpen: jest.fn(() => {}),
  onChange: jest.fn(() => {}),
  onClose: jest.fn(() => {}),
  setOption: jest.fn(() => {}),
  onNextOption: jest.fn(),
  selectId: 'select-id',
  activeIndexKey: `chakra-select-key-${1}`,
  options: [{ value: 'option-1', label: 'Option 1' }],
  addOption: jest.fn(),
  onPrevOption: jest.fn(),
  required: false,
  setActiveIndex: jest.fn(),
  updateOption: jest.fn(),
};

/**
 * Selects given element
 *
 * @param selector  Element selector
 */
export const selectElement = (selector: string): Element => {
  const element = document.querySelector(selector);

  if (!element) {
    throw new Error(`Cannot find element ${selector}`);
  }

  return element;
};
