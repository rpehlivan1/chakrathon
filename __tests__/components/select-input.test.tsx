import SelectInput from '../../src/components/Select/components/select-input.component';
import { render } from '@testing-library/react';
import { selectElement } from '../helpers/utils';

describe('<SelectInput/> component', () => {
  it('should render component', () => {
    render(<SelectInput name="firstName" />);

    expect(selectElement('.chakra-input')).toBeInTheDocument();
  });
});
