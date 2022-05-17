import { SelectSize, SelectValue } from '@components/Select';
import React from 'react';
import { MaybeRenderProp } from '@chakra-ui/react-utils';
import { SelectVariant } from '@components/Select/types/select.type';
import { BoxProps } from '@chakra-ui/react';

export interface SelectControlProps {
  isOpen?: boolean;
  invalid?: boolean;
  clearable?: boolean;
  isDisabled?: boolean;
  required?: boolean;
  readonly?: boolean;
  defaultValue?: SelectValue;
  closeOnSelect?: boolean;
  value?: SelectValue;
  onOpen?: () => void;
  onClose?: () => void;
  onChange?: (value: SelectValue) => void;
}

export interface SelectRenderProps {
  id?: string;
  hideDefaultChevron?: boolean;
  placeholder?: string;
  leftIcon?: MaybeRenderProp<SelectOptionIconRenderProps>;
  rightIcon?: MaybeRenderProp<SelectOptionIconRenderProps>;
}

export interface SelectStyleProps {
  size?: SelectSize;
  variant?: SelectVariant;
  rootProps?: Omit<BoxProps, 'value' | 'onChange'>;
}

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
