import { render } from '@testing-library/react';
import Select from '../../src/components/Select/select.component';
import React from 'react';
import { selectElement } from '../helpers/utils';
import * as useSelectLabelHook from '../../src/components/Select/hooks/use-select-label.hook';
describe('<Select/> component:', () => {
  it('render component without errors:', () => {
    jest.spyOn(useSelectLabelHook, 'default');

    render(
      <Select>
        <>Children</>
      </Select>,
    );

    expect(selectElement('.chakra-select')).toBeInTheDocument();
  });
});
