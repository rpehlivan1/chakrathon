import { fireEvent, render, screen } from '@testing-library/react';
import SelectButton, {
  SelectButtonProps,
} from '../../src/components/Select/components/select-button.component';

describe('<SelectButton/> component:', () => {
  const Component = (buttonProps?: Omit<SelectButtonProps, 'children'>) => {
    return <SelectButton {...buttonProps}>Trigger</SelectButton>;
  };

  it('render component', () => {
    render(<Component />);

    expect(screen.getByText('Trigger')).toBeInTheDocument();
  });

  it('render button with icon', () => {
    render(<Component rightIcon={<>RightIcon</>} leftIcon={<>LeftIcon</>} />);

    expect(screen.getByText('RightIcon')).toBeInTheDocument();
    expect(screen.getByText('LeftIcon')).toBeInTheDocument();
  });

  it('calls `onClick` when `button` element is clicked', () => {
    const mockedOnClick = jest.fn();
    render(<Component onClick={mockedOnClick} />);

    fireEvent.click(screen.getByRole('button'));

    expect(mockedOnClick).toHaveBeenCalled();
  });
});
