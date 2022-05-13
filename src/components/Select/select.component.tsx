import { Box, BoxProps, Popover, useMultiStyleConfig } from '@chakra-ui/react';
import React from 'react';
import { SelectSize, SelectValue, SelectVariant } from '@components/Select/types/select.type';
import SelectInput from '@components/Select/components/select-input.component';
import SelectStyleContext from './contexts/select-style.context';
import SelectContext from './contexts/select.context';
import useSelect from '@components/Select/hooks/use-select.hook';
import {
  IconRenderCallback,
  OptionIconRenderCallback,
} from '@components/Select/types/select-render.type';

interface SelectControlProps {
  isOpen?: boolean;
  invalid?: boolean;
  clearable?: boolean;
  isDisabled?: boolean;
  readonly?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export interface SelectProps extends Omit<BoxProps, 'value' | 'onChange'>, SelectControlProps {
  name: string;
  children: React.ReactNode;
  value?: SelectValue;
  variant?: SelectVariant;
  size?: SelectSize;
  hideDefaultChevron?: boolean;
  placeholder?: string;
  defaultValue?: SelectValue;
  leftIcon?: IconRenderCallback;
  rightIcon?: IconRenderCallback;
  optionLeftIcon?: OptionIconRenderCallback;
  optionRightIcon?: OptionIconRenderCallback;
  onChange?: (value: SelectValue) => void;
}

const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      name,
      children,
      placeholder,
      isOpen,
      value,
      onChange,
      variant,
      size,
      isDisabled,
      ...restProps
    },
    forwardRef,
  ) => {
    const context = useSelect({ isOpen, value, onChange });
    const styles = useMultiStyleConfig('SelectStyles', { variant, size, isDisabled });

    return (
      <SelectContext.Provider value={context}>
        <SelectStyleContext.Provider value={styles}>
          <Box className="chakra-select" sx={{ ...styles.wrapper, ...restProps.sx }}>
            <Popover isOpen={context.isOpen}>
              <SelectInput name={name} />
              {children}
            </Popover>
          </Box>
        </SelectStyleContext.Provider>
      </SelectContext.Provider>
    );
  },
);
Select.displayName = 'Select';

export default Select;
