import { render } from '@testing-library/react';
import SelectMenu from '../../src/components/Select/components/select-menu.component';
import { selectElement } from '../helpers/utils';

describe('<SelectInput/> component', () => {
  it('should render component', () => {
    render(
      <SelectMenu>
        <>MenuItem</>
      </SelectMenu>,
    );

    expect(selectElement('.chakra-select__select-menu')).toBeInTheDocument();
  });
});
