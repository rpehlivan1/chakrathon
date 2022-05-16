import SelectOption from '../../src/components/Select/components/select-option.component';
import { render, screen } from '@testing-library/react';
import SelectContext from '../../src/components/Select/contexts/select.context';
import * as useSelectOptionHook from '../../src/components/Select/hooks/use-select-option.hook';
import { selectProviderProps } from '../helpers/utils';

describe('<SelectOption/> component:', () => {
  it('should render without crashing', () => {
    render(<SelectOption value="option-1">Option 1</SelectOption>);

    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('render icons:', () => {
    render(
      <SelectOption value="option-1" leftIcon={<>LeftIcon</>} rightIcon={<>RightIcon</>}>
        Option 1
      </SelectOption>,
    );

    expect(screen.getByText('LeftIcon')).toBeInTheDocument();
    expect(screen.getByText('RightIcon')).toBeInTheDocument();
  });

  it('render global icons:', () => {
    render(
      <SelectContext.Provider value={selectProviderProps}>
        <SelectOption value="option-1">Option 1</SelectOption>
      </SelectContext.Provider>,
    );

    expect(screen.getByText('GlobalLeftIcon')).toBeInTheDocument();
    expect(screen.getByText('GlobalRightIcon')).toBeInTheDocument();
  });

  it('apply className when item is `isSelected`:', () => {
    jest.spyOn(useSelectOptionHook, 'default').mockImplementation(() => ({
      ...jest.requireActual('../../src/components/Select/hooks/use-select-option.hook'),
      isSelected: true,
    }));

    const { container } = render(<SelectOption value="option-1">Option 1</SelectOption>);

    expect(container.firstChild).toHaveClass('chakra-select__option-active');
  });
});
