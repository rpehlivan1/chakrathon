import { SelectValue } from '@/components/Select';
import useSelectContext from '@/components/Select/hooks/use-select-context.hook';

const useSelectOption = (optionValue: SelectValue) => {
  const { value, onChange } = useSelectContext();

  const isSelected = value === optionValue;

  const onClick = () => {
    onChange(optionValue);
  };

  return { isSelected, role: 'option', onClick };
};

export default useSelectOption;
