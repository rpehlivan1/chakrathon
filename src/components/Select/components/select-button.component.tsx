import { Button, ButtonProps, Box } from '@chakra-ui/react';
import React from 'react';
import { runIfFn } from '@chakra-ui/utils';
import useSelectContext from '@components/Select/hooks/use-select-context.hook';
import useSelectStyles from '@components/Select/hooks/use-select-styles.hook';
import { MaybeRenderElementProp } from '@src/types/render.type';
import useSelectButton from '@components/Select/hooks/use-select-button.hook';

export interface SelectButtonProps extends Omit<ButtonProps, 'leftIcon' | 'rightIcon'> {
  children: React.ReactNode;
  leftIcon?: MaybeRenderElementProp<boolean>;
  rightIcon?: MaybeRenderElementProp<boolean>;
}

const SelectButton = React.forwardRef<HTMLButtonElement, SelectButtonProps>(
  ({ leftIcon, rightIcon, children, sx, onClick, ...restProps }, forwardRef) => {
    const { button } = useSelectStyles();
    const { isOpen = false } = useSelectContext();
    const buttonProps = useSelectButton({ onClick, forwardRef });

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
        className="chakra-select__select-button"
        sx={{ ...button, ...sx }}
        leftIcon={renderLeftIcon()}
        rightIcon={renderRightIcon()}
        {...buttonProps}
        {...restProps}>
        <Box className="chakra-select__button-label" as="span">
          {children}
        </Box>
      </Button>
    );
  },
);

SelectButton.displayName = 'SelectInput';

export default SelectButton;
