import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box, Divider, Text } from '@chakra-ui/react';
import {
  AddIcon,
  ChatIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CopyIcon,
  MinusIcon,
  PhoneIcon,
} from '@chakra-ui/icons';
import React from 'react';
import SelectOption from '@components/Select/components/select-option.component';
import Select from '@components/Select/select.component';
import { SelectValue } from '@components/Select/types/select.type';
import SelectMenu from '@components/Select/components/select-menu.component';
import SelectSelector from '@components/Select/components/select-selector.component';
import SelectButton from '@components/Select/components/select-button.component';

const selectStories: ComponentMeta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    value: {
      description: '',
      defaultValue: '',
      control: 'text',
    },
    isDisabled: {
      description: '',
      defaultValue: false,
      options: [true, false],
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: 'false',
        category: 'Controls',
      },
    },
  },
  args: {
    value: '',
    isDisabled: false,
  },
  parameters: {
    controls: {
      expanded: true,
      include: ['value', 'isDisabled'],
    },
  },
};

const ExampleContainer = ({ header, children }: { header: string; children: React.ReactNode }) => {
  return (
    <Box m={15}>
      <Text as="h2">{header}</Text>
      <Divider mb={5} />
      <Box>{children}</Box>
    </Box>
  );
};

export const SelectComponent: ComponentStory<typeof Select> = (props) => {
  const [value, onChange] = React.useState<SelectValue>();

  return (
    <Box>
      <Text as="h1">Select component</Text>
      <Divider mb={10} />
      <Box>Selected: {value}</Box>
      <Select {...props} value={value} onChange={onChange} placeholder="Select">
        <SelectSelector />
        <SelectMenu>
          <SelectOption value="value-1">Option 1</SelectOption>
          <SelectOption value="value-2" leftIcon={<AddIcon />}>
            Option 2
          </SelectOption>
          <SelectOption value="value-3" leftIcon={<AddIcon />} rightIcon={<PhoneIcon />}>
            Option 3
          </SelectOption>
        </SelectMenu>
      </Select>
      <Divider mb={10} />
      <Text as="h1">Examples</Text>
      <ExampleContainer header="1. Selector with left icon">
        <Select value={value} onChange={onChange} placeholder="Please select value">
          <SelectSelector leftIcon={<CopyIcon />} />
          <SelectMenu>
            <SelectOption value="value-1">Option 1</SelectOption>
            <SelectOption value="value-2">Option 2</SelectOption>
            <SelectOption value="value-3">Option 3</SelectOption>
          </SelectMenu>
        </Select>
      </ExampleContainer>
      <ExampleContainer header="2. Selector with custom right icon">
        <Select value={value} onChange={onChange} placeholder="Please select value">
          <SelectSelector rightIcon={(isOpen) => (isOpen ? <MinusIcon /> : <AddIcon />)} />
          <SelectMenu>
            <SelectOption value="value-1">Option 1</SelectOption>
            <SelectOption value="value-2">Option 2</SelectOption>
            <SelectOption value="value-3">Option 3</SelectOption>
          </SelectMenu>
        </Select>
      </ExampleContainer>
      <ExampleContainer header="3. Select options with icon">
        <Select
          leftIcon={<ChatIcon />}
          rightIcon={({ isSelected }) => isSelected && <CheckIcon />}
          value={value}
          onChange={onChange}
          placeholder="Please select value">
          <SelectSelector />
          <SelectMenu>
            <SelectOption value="value-1">Option 1</SelectOption>
            <SelectOption value="value-2">Option 2</SelectOption>
            <SelectOption value="value-3">Option 3</SelectOption>
          </SelectMenu>
        </Select>
      </ExampleContainer>
      <ExampleContainer header="4. Select options with custom icon">
        <Select value={value} onChange={onChange} placeholder="Please select value">
          <SelectSelector />
          <SelectMenu>
            <SelectOption value="value-1" leftIcon={<PhoneIcon />}>
              Option 1
            </SelectOption>
            <SelectOption value="value-2" leftIcon={<ChatIcon />}>
              Option 2
            </SelectOption>
            <SelectOption value="value-3" leftIcon={<CopyIcon />}>
              Option 3
            </SelectOption>
          </SelectMenu>
        </Select>
      </ExampleContainer>
      <ExampleContainer header="5. Select custom button (trigger)">
        <Select value={value} onChange={onChange} placeholder="Please select value">
          <SelectButton rightIcon={(isOpen) => (isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />)}>
            Trigger
          </SelectButton>
          <SelectMenu>
            <SelectOption value="value-1">Option 1</SelectOption>
            <SelectOption value="value-2">Option 2</SelectOption>
            <SelectOption value="value-3">Option 3</SelectOption>
          </SelectMenu>
        </Select>
      </ExampleContainer>
    </Box>
  );
};

SelectComponent.storyName = 'Select';

export default selectStories;
