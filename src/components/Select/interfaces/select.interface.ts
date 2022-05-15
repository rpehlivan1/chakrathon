import { SelectValue } from '@components/Select';
import React from 'react';

export interface SelectOption {
  value: SelectValue;
  label: React.ReactNode;
}

export interface SelectChildrenProps {
  isOpen?: boolean;
  option?: SelectOption;
}

export interface SelectOptionIconRenderProps {
  option: SelectOption;
  isSelected: boolean;
}
