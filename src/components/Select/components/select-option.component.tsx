import { Box, BoxProps, useStyles } from '@chakra-ui/react';
import { cx, runIfFn } from '@chakra-ui/utils';
import React from 'react';
import useSelectOption from '@/components/Select/hooks/use-select-option.hook';
import { SelectValue } from '@/components/Select';

export interface SelectOptionProps extends BoxProps {
  value: SelectValue;
  children: React.ReactNode;
  isDisabled?: boolean;
  leftIcon?: ((selected: boolean) => React.ReactElement) | React.ReactElement;
  rightIcon?: ((selected: boolean) => React.ReactElement) | React.ReactElement;
}

const SelectOption: React.FC<SelectOptionProps> = ({
  value,
  children,
  leftIcon,
  rightIcon,
  sx,
  ...restProps
}) => {
  const { option } = useStyles();
  const { isSelected, ...optionProps } = useSelectOption(value);

  const renderLeftIcon = (): React.ReactNode | undefined => {
    if (!leftIcon) {
      return;
    }

    return (
      <Box as="span" className="chakra-select__option-icon">
        {runIfFn(leftIcon, isSelected)}
      </Box>
    );
  };

  const renderRightIcon = (): React.ReactNode | undefined => {
    if (!rightIcon) {
      return;
    }

    return (
      <Box as="span" className="chakra-select__option-icon">
        {runIfFn(rightIcon, isSelected)}
      </Box>
    );
  };

  const renderContent = (): React.ReactNode => {
    if (!leftIcon && !rightIcon) {
      return children;
    }

    return <Box flex="1">{children}</Box>;
  };

  return (
    <Box
      className={cx('chakra-select__select-option', isSelected && 'chakra-select__option-active')}
      as="li"
      sx={{ ...option, ...sx }}
      {...optionProps}
      {...restProps}>
      {renderLeftIcon()}
      {renderContent()}
      {renderRightIcon()}
    </Box>
  );
};

export default SelectOption;
