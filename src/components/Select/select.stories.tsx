import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box, Divider, Text } from '@chakra-ui/react';
import { AddIcon, PhoneIcon } from '@chakra-ui/icons';
import React from 'react';
import SelectOption from '@/components/Select/components/select-option.component';
import Select from '@/components/Select/select.component';

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
      {children}
    </Box>
  );
};

export const SelectComponent: ComponentStory<typeof Select> = (props) => {
  return (
    <Box>
      <Text as="h1">Select component</Text>
      <Divider mb={10} />
      <Select {...props} value="value-2">
        <SelectOption value="value-1">Option 1</SelectOption>
        <SelectOption value="value-2" leftIcon={<AddIcon />}>
          Option 2
        </SelectOption>
        <SelectOption value="value-3" leftIcon={<AddIcon />} rightIcon={<PhoneIcon />}>
          Option 3
        </SelectOption>
      </Select>
      <Divider m={10} />
      <ExampleContainer header="1. Example">Example content</ExampleContainer>
    </Box>
  );
};

SelectComponent.storyName = 'Select';

export default selectStories;
