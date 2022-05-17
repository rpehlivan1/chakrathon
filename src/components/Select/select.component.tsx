import { Box, useMultiStyleConfig } from '@chakra-ui/react';
import React from 'react';
import SelectInput from '@components/Select/components/select-input.component';
import SelectStyleContext from './contexts/select-style.context';
import SelectContext from './contexts/select.context';
import useSelect from '@components/Select/hooks/use-select.hook';
import { MaybeRenderProp } from '@chakra-ui/react-utils';
import {
  SelectStyleProps,
  SelectRenderProps,
  SelectControlProps,
  SelectChildrenProps,
} from '@components/Select/interfaces/select.interface';
import { runIfFn } from '@chakra-ui/utils';

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
      isOpen: context.isOpen,
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
            <SelectInput ref={forwardRef} name={name} />
            {runIfFn(children, { isOpen: context.isOpen, option: context.option })}
          </Box>
        </SelectStyleContext.Provider>
      </SelectContext.Provider>
    );
  },
);
Select.displayName = 'Select';

export default Select;
