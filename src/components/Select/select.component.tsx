import { Box, BoxProps, StylesProvider, useMultiStyleConfig } from '@chakra-ui/react';
import SelectButton from './components/select-button.component';
import React from 'react';
import { SelectSize, SelectValue, SelectVariant } from '@/components/Select/types/select.type';
import SelectProvider from '@/components/Select/components/select-provider.component';
import SelectListBox from '@/components/Select/components/select-list-box.component';

export interface SelectProps extends Omit<BoxProps, 'value' | 'onChange'> {
  children: React.ReactNode;
  value?: SelectValue;
  variant?: SelectVariant;
  size?: SelectSize;
  isOpen?: boolean;
  clearable?: boolean;
  isDisabled?: boolean;
  hideDefaultChevron?: boolean;
  placeholder?: string;
  defaultValue?: SelectValue;
  leftIcon?: ((open: boolean) => React.ReactElement) | React.ReactElement;
  rightIcon?: ((open: boolean) => React.ReactElement) | React.ReactElement;
  onChange?: (value: SelectValue) => void;
  onVisibleChange?: (status: boolean) => void;
}

const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  (
    { children, placeholder, value, onChange, variant, size, isDisabled, ...restProps },
    forwardRef,
  ) => {
    const styles = useMultiStyleConfig('SelectStyles', { variant, size, isDisabled });

    const onValueChange = React.useCallback(
      (value: SelectValue) => {
        onChange?.(value);
      },
      [onChange],
    );

    // TODO: show selected value
    return (
      <SelectProvider value={value} onChange={onValueChange}>
        <StylesProvider value={styles}>
          <Box className="chakra-select" sx={{ ...styles.wrapper, ...restProps.sx }}>
            <SelectButton ref={forwardRef}>{placeholder || 'Please select value'}</SelectButton>
            <SelectListBox>{children}</SelectListBox>
          </Box>
        </StylesProvider>
      </SelectProvider>
    );
  },
);
Select.displayName = 'Select';

export default Select;
