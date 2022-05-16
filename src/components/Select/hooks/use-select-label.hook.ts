import useSelectContext from '@components/Select/hooks/use-select-context.hook';

const useSelectLabel = () => {
  const { id } = useSelectContext();

  return {
    for: id,
  };
};

export default useSelectLabel;
