import useSelectContext from '@components/Select/hooks/use-select-context.hook';
import { ButtonProps, useMergeRefs } from '@chakra-ui/react';
import React, { KeyboardEvent, LegacyRef } from 'react';
import { SelectKeyboardKey } from '@components/Select/enums/select.enum';

interface UseSelectButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  forwardRef?: React.ForwardedRef<HTMLButtonElement>;
}

interface UseSelectButtonReturn extends ButtonProps {
  ref?: LegacyRef<HTMLButtonElement>;
}

const useSelectButton = ({ onClick, forwardRef }: UseSelectButtonProps): UseSelectButtonReturn => {
  const ref = React.createRef<HTMLButtonElement>();
  const { isOpen, onOpen, onClose, isDisabled, activeIndex, onNextOption, onPrevOption } =
    useSelectContext();

  React.useEffect(() => {
    if (!isOpen || activeIndex === undefined) {
      ref.current?.focus();
    }
  }, [isOpen, activeIndex]);

  const onKeyUp = (event: KeyboardEvent) => {
    event.preventDefault();

    switch (event.key) {
      case SelectKeyboardKey.ArrowDown: {
        onNextOption();

        break;
      }
      case SelectKeyboardKey.ArrowUp: {
        onPrevOption();

        break;
      }
      case SelectKeyboardKey.Escape: {
        isOpen && onClose();

        break;
      }
      case SelectKeyboardKey.Enter:
      case SelectKeyboardKey.Space: {
        !isOpen ? onOpen() : onClose();

        break;
      }
    }
  };

  const onKeyDown = (event: KeyboardEvent) => {
    event.preventDefault();
  };

  const onBlur = () => {
    // onClose();
  };

  const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    isOpen ? onClose() : onOpen();
    onClick?.(event);
  };

  return {
    ref: useMergeRefs(forwardRef, ref),
    type: 'button',
    role: 'button',
    disabled: isDisabled,
    'aria-haspopup': 'listbox',
    'aria-expanded': isOpen,
    onKeyUp,
    onKeyDown,
    onClick: onButtonClick,
    onBlur,
  };
};

export default useSelectButton;
