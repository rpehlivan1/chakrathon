import { render, screen } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import SelectContext from '../../src/components/Select/contexts/select.context';
import { MockPopoverWrapper, selectElement, selectProviderProps } from '../helpers/utils';
import { UseSelectReturn } from '../../src/components/Select/hooks/use-select.hook';
import SelectSelector from '../../src/components/Select/components/select-selector.component';

describe('<SelectSelector/> component:', () => {
  const Component: React.FC<PropsWithChildren<Partial<UseSelectReturn>>> = ({
    children,
    ...rest
  }) => {
    return (
      <SelectContext.Provider value={{ ...selectProviderProps, ...rest }}>
        <MockPopoverWrapper>{children}</MockPopoverWrapper>
      </SelectContext.Provider>
    );
  };

  it('render component without errors', () => {
    render(
      <Component>
        <SelectSelector />
      </Component>,
    );

    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('render <ChevronUpIcon/> when `isOpen = true`:', () => {
    render(
      <Component isOpen>
        <SelectSelector />
      </Component>,
    );

    expect(selectElement('.chakra-icon')).toBeInTheDocument();
  });

  it('do not render icons when `hideDefaultChevron` is passed:', () => {
    render(
      <Component hideDefaultChevron>
        <SelectSelector />
      </Component>,
    );

    expect(document.querySelector('.chakra-icon')).not.toBeInTheDocument();
  });

  it('render placeholder when passed:', () => {
    render(
      <Component option={{ value: '', label: undefined }} placeholder="placeholderSelector">
        <SelectSelector />
      </Component>,
    );

    expect(screen.getByText('placeholderSelector')).toBeInTheDocument();
  });
});
