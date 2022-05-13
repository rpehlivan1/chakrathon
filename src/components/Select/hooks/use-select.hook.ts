import React from 'react';
import { SelectOption } from '@components/Select/interfaces/select.interface';
import { SelectValue } from '@components/Select';

interface UseSelectProps {
  isOpen?: boolean;
  value?: SelectValue;
  onChange?: (value: SelectValue) => void;
}

const useSelect = ({ isOpen, value, onChange }: UseSelectProps) => {
  const [open, setOpen] = React.useState<boolean>();
  const [option, setOption] = React.useState<SelectOption>();

  React.useEffect(() => {
    setOpen(isOpen);
  }, [isOpen, setOpen]);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onToggle = () => {
    setOpen(!open);
  };

  return { isOpen: open, onOpen, onClose, onToggle, value, onChange, option, setOption };
};

export type UseSelectReturn = ReturnType<typeof useSelect>;
export default useSelect;
