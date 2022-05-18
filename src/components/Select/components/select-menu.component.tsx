import { Box, BoxProps } from '@chakra-ui/react';
import React from 'react';
import useSelectMenu from '@components/Select/hooks/use-select-menu.hook';
import useSelectStyles from '@components/Select/hooks/use-select-styles.hook';
import { SystemStyleObject } from '@chakra-ui/styled-system';
import useSelectContext from '@components/Select/hooks/use-select-context.hook';

export interface SelectMenuProps extends BoxProps {
  children: React.ReactNode;
  rootStyles?: SystemStyleObject;
}

const SelectMenu: React.FC<SelectMenuProps> = ({ children, sx, rootStyles, ...restProps }) => {
  const { menu } = useSelectStyles();
  const { isOpen } = useSelectContext();
  const containerProps = useSelectMenu();

  return (
    <Box
      className="chakra-select__select-menu"
      as="ul"
      sx={{ ...menu, ...sx }}
      {...containerProps}
      {...restProps}>
      {isOpen && children}
    </Box>
  );
};

export default SelectMenu;
