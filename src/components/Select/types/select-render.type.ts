import React from 'react';
import { SelectOption } from '@components/Select/interfaces/select.interface';

export type IconRenderCallback = ((open: boolean) => React.ReactElement) | React.ReactElement;
export type OptionIconRenderCallback =
  | ((option: SelectOption, isSelected: boolean) => React.ReactElement)
  | React.ReactElement;
