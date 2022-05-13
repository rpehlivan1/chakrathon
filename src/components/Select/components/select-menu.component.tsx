import { Box, BoxProps, PopoverBody, PopoverContent } from '@chakra-ui/react';
import React from 'react';
import useSelectMenu from '@components/Select/hooks/use-select-options-container.hook';
import useSelectStyles from '@components/Select/hooks/use-select-styles.hook';

export interface SelectMenuProps extends BoxProps {
  children: React.ReactNode;
}

const SelectMenu: React.FC<SelectMenuProps> = ({ children, sx, ...restProps }) => {
  const { menu } = useSelectStyles();
  const containerProps = useSelectMenu();

  return (
    <PopoverContent>
      <PopoverBody>
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
