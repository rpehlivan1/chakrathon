import { Input, InputProps, useStyles } from '@chakra-ui/react';
import React from 'react';

export interface SelectInputProps extends InputProps {}

const SelectInput = React.forwardRef<HTMLInputElement, SelectInputProps>(
  ({ sx, ...restProps }, forwardRef) => {
    const { input } = useStyles();

    return (
      <Input
        ref={forwardRef}
        className="chakra-select__select-input"
        sx={{ ...input, ...sx }}
        {...restProps}
      />
    );
  },
);

SelectInput.displayName = 'SelectInput';

export default SelectInput;
