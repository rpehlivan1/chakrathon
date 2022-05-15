import { Box, BoxProps, Popover, useMultiStyleConfig } from '@chakra-ui/react';
import React from 'react';
import { SelectSize, SelectValue, SelectVariant } from '@components/Select/types/select.type';
import SelectInput from '@components/Select/components/select-input.component';
import SelectStyleContext from './contexts/select-style.context';
import SelectContext from './contexts/select.context';
import useSelect from '@components/Select/hooks/use-select.hook';
import { MaybeRenderProp } from '@chakra-ui/react-utils';
import {
  SelectChildrenProps,
  SelectOptionIconRenderProps,
} from '@components/Select/interfaces/select.interface';
import { runIfFn } from '@chakra-ui/utils';

export interface SelectControlProps {
  isOpen?: boolean;
  invalid?: boolean;
  clearable?: boolean;
  isDisabled?: boolean;
  readonly?: boolean;
  defaultValue?: SelectValue;
  value?: SelectValue;
  onOpen?: () => void;
  onClose?: () => void;
  onChange?: (value: SelectValue) => void;
}

export interface SelectRenderProps {
  hideDefaultChevron?: boolean;
  placeholder?: string;
  leftIcon?: MaybeRenderProp<SelectOptionIconRenderProps>;
  rightIcon?: MaybeRenderProp<SelectOptionIconRenderProps>;
}

interface SelectStyleProps {
  size?: SelectSize;
  variant?: SelectVariant;
  rootProps?: Omit<BoxProps, 'value' | 'onChange'>;
}

export interface SelectProps extends SelectControlProps, SelectRenderProps, SelectStyleProps {
  children: MaybeRenderProp<SelectChildrenProps>;
  name?: string;
}

const Select = React.forwardRef<HTMLInputElement, SelectProps>(
  (
    { name, children, variant, size, isDisabled, readonly, invalid, rootProps, ...restProps },
    forwardRef,
  ) => {
    const { sx, ...restRootProps } = rootProps || {};
    const context = useSelect({ isDisabled, invalid, readonly, ...restProps });
    const styles = useMultiStyleConfig('SelectStyles', {
      variant,
      size,
      isDisabled,
      invalid,
      readonly,
    });

    return (
      <SelectContext.Provider value={context}>
        <SelectStyleContext.Provider value={styles}>
          <Box className="chakra-select" sx={{ ...styles.wrapper, ...sx }} {...restRootProps}>
            <Popover isOpen={context.isOpen}>
              <SelectInput ref={forwardRef} name={name} />
              {runIfFn(children, { isOpen: context.isOpen, option: context.option })}
            </Popover>
          </Box>
        </SelectStyleContext.Provider>
      </SelectContext.Provider>
    );
  },
);
Select.displayName = 'Select';

export default Select;
