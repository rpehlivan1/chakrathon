import React from 'react';
import SelectButton from '@components/Select/components/select-button.component';
import useSelectContext from '@components/Select/hooks/use-select-context.hook';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { ButtonProps } from '@chakra-ui/react';
import { MaybeRenderElementProp } from '@src/types/render.type';

export interface SelectSelectorProps extends Omit<ButtonProps, 'leftIcon' | 'rightIcon'> {
  leftIcon?: MaybeRenderElementProp<boolean>;
  rightIcon?: MaybeRenderElementProp<boolean>;
}

const SelectSelector: React.FC<SelectSelectorProps> = ({ leftIcon, rightIcon, ...restProps }) => {
  const { isOpen, option, placeholder, hideDefaultChevron } = useSelectContext();

  const renderDefaultRightIcon = () => {
    if (hideDefaultChevron) {
      return;
    }

    if (isOpen) {
      return <ChevronUpIcon />;
    }

    return <ChevronDownIcon />;
  };

  return (
    <SelectButton
      leftIcon={leftIcon}
      rightIcon={rightIcon ?? renderDefaultRightIcon()}
      {...restProps}>
      {option?.label ?? placeholder}
    </SelectButton>
  );
};

export default SelectSelector;
