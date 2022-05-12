import { Box, BoxProps, StylesProvider, useMultiStyleConfig } from '@chakra-ui/react';
import SelectInput from './components/select-input.component';
import React from 'react';
import SelectOptionsContainer from '~components/Select/components/select-options-container.component';
import { SelectSize, SelectValue, SelectVariant } from '~components/Select/types/select.type';
import SelectProvider from '~components/Select/components/select-provider.component';

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

const Select = React.forwardRef<HTMLInputElement, SelectProps>(
  ({ children, value, onChange, variant, size, isDisabled, ...restProps }, forwardRef) => {
    const styles = useMultiStyleConfig('SelectStyles', { variant, size, isDisabled });

    const onValueChange = React.useCallback(
      (value: SelectValue) => {
        onChange?.(value);
      },
      [onChange],
    );

    return (
      <SelectProvider value={value} onChange={onValueChange}>
        <Box className="chakra-select" sx={{ ...styles.wrapper, ...restProps.sx }}>
          <StylesProvider value={styles}>
            <SelectInput ref={forwardRef} />
            <SelectOptionsContainer>{children}</SelectOptionsContainer>
          </StylesProvider>
        </Box>
      </SelectProvider>
    );
  },
);
Select.displayName = 'Select';

export default Select;
