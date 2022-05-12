import useSelectContext from '~components/Select/hooks/use-select-context.hook';
import { SelectValue } from '~components/Select';

const useSelectOption = (optionValue: SelectValue) => {
  const { value, onChange } = useSelectContext();

  const isSelected = value === optionValue;

  const onClick = () => {
    onChange(optionValue);
  };

  return { isSelected, role: 'option', onClick };
};

export default useSelectOption;
