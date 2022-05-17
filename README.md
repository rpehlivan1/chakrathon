## Import

- `Select:` The wrapper component provides context, state, and focus management.
- `SelectGroup:` A wrapper to group related select options.
- `SelectOption:` The trigger that handles selection. Must be a direct child of a Select.

```html
import { Select, SelectGroup, SelectOption } from '@dragonball/select';
```

## Usage

### Fully controllable select
```html
<Select placeholder="Select option" value={value} onChange={onChange}>
    <SelectOption value="option-value-1">Option 1</SelectOption>
    <SelectOption value="option-value-2">Option 2</SelectOption>
</Select>
```

### Fully controllable open state
```html
<Select isOpen={isOpen} onVisibleChange={setIsOpen}>
    <SelectOption>Option 1</SelectOption>
    <SelectOption>Option 2</SelectOption>
</Select>
```

### Fully controllable icons
```html
<Select
    hideDefaultChevron
    defaultValue="option-2"
    leftIcon={(isOpen) => isOpen ? <UpChevronIcon /> : <DownChevronIcon />}>
    <SelectOption value="option-1" leftIcon={<HouseIcon/>}>Option 1</SelectOption>
    <SelectOption value="option-2" rightIcon={<UserIcon/>}>Option 2</SelectOption>
    <SelectOption
        value="option-3"
        rightIcon={(isSelected) => isSelected ? <UserIcon/> : <HouseIcon/>}>
        Option 3
    </SelectOption>
</Select>
```

### Fully controllable disabled state
```html
<Select clearable isDisabled={isDisabled || isLoading}>
    <SelectOption isDisabled>Option 1</SelectOption>
    <SelectOption value="option-value-1">Option 2</SelectOption>
    <SelectOption value="option-value-3">Option 3</SelectOption>
</Select>
```

### Group select options (NICE TO HAVE)
```html
<Select>
    <SelectGroup label="Group label">
        <SelectOption value="option-value-1">Option 1</SelectOption>
        <SelectOption value="option-value-2">Option 2</SelectOption>
    </SelectGroup>
</Select>
```

## Design

[# Select component design](https://www.figma.com/file/PHVkW8n5AbpBAu3KU2Qlt6/Select-component-mock)

## Props

### Select

| Prop                | Description                                                    | Type                                           |
|---------------------|----------------------------------------------------------------|------------------------------------------------|
| rightIcon           | Element placed before the children                             | `React.ReactNode, (isOpen) => React.ReactNode` |
| leftIcon            | Element placed after the children                              | `React.ReactNode, (isOpen) => React.ReactNode` |
| clearable           | The indicator presented to clear the values from the component | `boolean`                                      |
| placeholder         | Placeholder for select                                         | `string `                                      |
| variants            | `outline` `filled`                                              | `string`                                       |
| size                | Sizes for `Select`                                             | `sm` `md` `lg`                                 |
| onChange            | callback fired when `children` are triggered                    | `(value: string) => void`                      | |
| value               | `Select` value                                                 | `string`                                       |
| defaultValue        | `defaultValue` for `Select`                                    | `string`                                       |
| isOpen              | if `true` select container will be opened                      | `boolean`                                      |
| isDisabled          | A utility to manage disabled state.                            | `boolean`
| onOpen              | Callback fired when select opens                                | `() => void`
| onClose             | Callback fired when select closes                               | `() => void`
| invalid             | If `true`, the select component will be invalid                | `boolean`
| readOnly            | If `true`, the select will be readonly                         | `boolean`
| required            | If `true`, the select will be required field                    | `boolean`
| id                  | Select option id value                                         | `string`
| hideDefaultChevron  | If true then default chevron icon will not be displayed        | `boolean`
| option              | `Select` option object                                         | `SelectOption`


### SelectOption

| Prop       | Description                          | Type                                               |
|------------|--------------------------------------|----------------------------------------------------|
| rightIcon  | Element placed before the children   | `React.ReactNode, (isSelected) => React.ReactNode` |
| leftIcon   | Element placed after the children    | `React.ReactNode, (isSelected) => React.ReactNode` |
| value      | `SelectOption` value                 | `string`                                           |
| isDisabled | 	A utility to manage disabled state  | `boolean`                                          |
| label      | `SelectOption` label                 | `React.ReactNode`
| isSelected | Defines if `SelectOption` is selected | `boolean`
