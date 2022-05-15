import { render, screen } from '@testing-library/react';
import SelectButton from '../../src/components/Select/components/select-button.component';

describe('<SelectButton/> component:', () => {
  it('test snapshot', () => {
    render(<SelectButton>Trigger</SelectButton>);

    expect(screen.getByText('Trigger')).toBeInTheDocument();
  });
});
