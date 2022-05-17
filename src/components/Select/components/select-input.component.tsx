import { Input, InputProps } from '@chakra-ui/react';
import React from 'react';
import useSelectContext from '@components/Select/hooks/use-select-context.hook';
import useSelectStyles from '@components/Select/hooks/use-select-styles.hook';

interface SelectInputProps extends InputProps {
  name?: string;
}

const SelectInput = React.forwardRef<HTMLInputElement, SelectInputProps>(
  ({ name, sx, ...restProps }, forwardRef) => {
    const styles = useSelectStyles();
    const { value } = useSelectContext();

    return (
      <Input
        {...restProps}
        ref={forwardRef}
        sx={{ ...styles.input, ...sx }}
        readOnly
        name={name}
        value={value || ''}
      />
    );
  },
);

SelectInput.displayName = 'SelectInput';

export default SelectInput;
