import React from 'react';
import { Popover } from '@chakra-ui/react';
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
  onToggle: jest.fn(() => {}),
  onOpen: jest.fn(() => {}),
  onChange: jest.fn(() => {}),
  onClose: jest.fn(() => {}),
  setOption: jest.fn(() => {}),
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

/**
 * Compose wrapper for components that require popover.
 *
 * @param children  Children of the popover
 */
export const MockPopoverWrapper: React.FC = ({ children }) => {
  return <Popover>{children}</Popover>;
};
