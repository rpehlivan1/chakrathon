import useSelectContext from '@components/Select/hooks/use-select-context.hook';

const useSelectMenu = () => {
  const { readonly, clearable } = useSelectContext();

  return {
    tabindex: '-1',
    role: 'listbox',
    'aria-required': !clearable,
    'aria-readOnly': readonly,
    'aria-multiSelectable': false,
  };
};

export default useSelectMenu;
