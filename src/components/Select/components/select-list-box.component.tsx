import { Box, BoxProps, useStyles } from '@chakra-ui/react';
import React from 'react';
import useSelectOptionsContainer from '@/components/Select/hooks/use-select-options-container.hook';

export interface SelectListBoxProps extends BoxProps {
  children: React.ReactNode;
}

const SelectListBox: React.FC<SelectListBoxProps> = ({ children, sx, ...restProps }) => {
  const { listBox } = useStyles();
  const containerProps = useSelectOptionsContainer();

  return (
    <Box
      className="chakra-select__select-listBox"
      as="ul"
      sx={{ ...listBox, ...sx }}
      {...containerProps}
      {...restProps}>
      {children}
    </Box>
  );
};

export default SelectListBox;
