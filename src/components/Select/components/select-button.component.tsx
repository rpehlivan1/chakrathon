import { Button, ButtonProps, PopoverTrigger } from '@chakra-ui/react';
import React from 'react';
import { runIfFn } from '@chakra-ui/utils';
import useSelectContext from '@components/Select/hooks/use-select-context.hook';
import useSelectStyles from '@components/Select/hooks/use-select-styles.hook';

export interface SelectButtonProps extends Omit<ButtonProps, 'leftIcon' | 'rightIcon'> {
  children: React.ReactNode;
  leftIcon?: ((open: boolean) => React.ReactElement) | React.ReactElement;
  rightIcon?: ((open: boolean) => React.ReactElement) | React.ReactElement;
}

const SelectButton = React.forwardRef<HTMLButtonElement, SelectButtonProps>(
  ({ leftIcon, rightIcon, children, sx, onClick, ...restProps }, forwardRef) => {
    const { button } = useSelectStyles();
    const { isOpen = false, onToggle } = useSelectContext();

    const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onToggle();
      onClick?.(e);
    };

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
      <PopoverTrigger>
        <Button
          ref={forwardRef}
          className="chakra-select__select-button"
          sx={{ ...button, ...sx }}
          leftIcon={renderLeftIcon()}
          rightIcon={renderRightIcon()}
          onClick={onButtonClick}
          {...restProps}>
          {children}
        </Button>
      </PopoverTrigger>
    );
  },
);

SelectButton.displayName = 'SelectInput';

export default SelectButton;
