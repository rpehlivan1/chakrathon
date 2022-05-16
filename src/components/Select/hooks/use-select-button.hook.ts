import useSelectContext from '@components/Select/hooks/use-select-context.hook';

const useSelectButton = () => {
  const { isOpen, isDisabled } = useSelectContext();

  return {
    disabled: isDisabled,
    'aria-haspopup': 'listbox',
    'aria-expanded': isOpen,
  };
};

export default useSelectButton;
