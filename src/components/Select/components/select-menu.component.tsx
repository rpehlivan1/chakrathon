import { Box, BoxProps, PopoverBody, PopoverContent } from '@chakra-ui/react';
import React from 'react';
import useSelectMenu from '@components/Select/hooks/use-select-menu.hook';
import useSelectStyles from '@components/Select/hooks/use-select-styles.hook';
import { SystemStyleObject } from '@chakra-ui/styled-system';

export interface SelectMenuProps extends BoxProps {
  children: React.ReactNode;
  rootStyles?: SystemStyleObject;
}

const SelectMenu: React.FC<SelectMenuProps> = ({ children, sx, rootStyles, ...restProps }) => {
  const { menu, popover } = useSelectStyles();
  const containerProps = useSelectMenu();

  return (
    <PopoverContent sx={{ ...popover, ...rootStyles }}>
      <PopoverBody p={0}>
        <Box
          className="chakra-select__select-menu"
          as="ul"
          sx={{ ...menu, ...sx }}
          {...containerProps}
          {...restProps}>
          {children}
        </Box>
      </PopoverBody>
    </PopoverContent>
  );
};

export default SelectMenu;
