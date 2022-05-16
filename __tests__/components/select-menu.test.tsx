import { render } from '@testing-library/react';
import SelectMenu from '../../src/components/Select/components/select-menu.component';
import { MockPopoverWrapper, selectElement } from '../helpers/utils';

describe('<SelectInput/> component', () => {
  it('should render component', () => {
    render(
      <MockPopoverWrapper>
        <SelectMenu>
          <>MenuItem</>
        </SelectMenu>
      </MockPopoverWrapper>,
    );

    expect(selectElement('.chakra-select__select-menu')).toBeInTheDocument();
  });
});
