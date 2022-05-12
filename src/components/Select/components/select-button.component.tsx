import { Button, ButtonProps, useStyles } from '@chakra-ui/react';
import React from 'react';
import { runIfFn } from '@chakra-ui/utils';

export interface SelectButtonProps extends Omit<ButtonProps, 'leftIcon' | 'rightIcon'> {
  children: React.ReactNode;
  isOpen?: boolean;
  leftIcon?: ((open: boolean) => React.ReactElement) | React.ReactElement;
  rightIcon?: ((open: boolean) => React.ReactElement) | React.ReactElement;
}

const SelectButton = React.forwardRef<HTMLButtonElement, SelectButtonProps>(
  ({ isOpen = false, leftIcon, rightIcon, children, sx, ...restProps }, forwardRef) => {
    const { button } = useStyles();

    const renderLeftIcon = (): React.ReactElement | undefined => {
      if (!leftIcon) {
        return;
      }

      return runIfFn(leftIcon, isOpen);
    };
    const renderRightIcon = (): React.ReactElement | undefined => {
      if (!rightIcon) {
        return;
      }

      return runIfFn(rightIcon, isOpen);
    };

    return (
      <Button
        ref={forwardRef}
        className="chakra-select__select-button"
        sx={{ ...button, ...sx }}
        leftIcon={renderLeftIcon()}
        rightIcon={renderRightIcon()}
        {...restProps}>
        {children}
      </Button>
    );
  },
);

SelectButton.displayName = 'SelectInput';

export default SelectButton;
