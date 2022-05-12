import { Box, BoxProps } from '@chakra-ui/react';
import React from 'react';
import useSelectOptionsContainer from '~components/Select/hooks/use-select-options-container.hook';

export interface SelectOptionsContainerProps extends BoxProps {
  children: React.ReactNode;
}

const SelectOptionsContainer: React.FC<SelectOptionsContainerProps> = ({
  children,
  sx,
  ...restProps
}) => {
  const { container } = useStyles();
  const containerProps = useSelectOptionsContainer();

  return (
    <Box
      className="chakra-select__select-options-container"
      as="ul"
      sx={{ ...container, ...sx }}
      {...containerProps}
      {...restProps}>
      {children}
    </Box>
  );
};

export default SelectOptionsContainer;
