## Import

- `Select:` The wrapper component provides context, state, and focus management.
- `SelectGroup:` A wrapper to group related select options.
- `SelectOption:` The trigger that handles selection. Must be a direct child of a Select.

```jsx
import {
  Select,
  SelectMenu,
  SelectButton,
  SelectSelector,
  SelectGroup,
  SelectOption,
} from "@dragonball/select";
```

## Usage

### Fully controllable select
```tsx
<Select placeholder="Select option" value={value} onChange={onChange}>
  {({ option }) => (
    <>
        <SelectButton>{option?.label ?? 'Placeholder'}</SelectButton>
        <SelectMenu>
          <SelectOption value="option-value-1">Option 1</SelectOption>
          <SelectOption value="option-value-2">Option 2</SelectOption>
        </SelectMenu>
    </>
  )}
</Select>;

```

### Fully controllable open state
```tsx
<Select isOpen={isOpen} onClose={onClose} onOpen={onOpen}>
    <SelectSelector />
    <SelectMenu>
      <SelectOption>Option 1</SelectOption>
      <SelectOption>Option 2</SelectOption>
    </SelectMenu>
</Select>
```

### Fully controllable icons
```tsx
<Select
    hideDefaultChevron
    defaultValue="option-2">
    <SelectSelector leftIcon={(isOpen) => isOpen ? <UpChevronIcon /> : <DownChevronIcon />} />
    <SelectMenu>
      <SelectOption value="option-1" leftIcon={<HouseIcon/>}>Option 1</SelectOption>
      <SelectOption value="option-2" rightIcon={<UserIcon/>}>Option 2</SelectOption>
      <SelectOption
      value="option-3"
      rightIcon={(isSelected) => isSelected ? <UserIcon/> : <HouseIcon/>}>
      Option 3
      </SelectOption>
    </SelectMenu>
</Select>
```

### Fully controllable disabled state
```tsx
<Select clearable isDisabled={isDisabled || isLoading}>
    <SelectSelector />
    <SelectMenu>
      <SelectOption isDisabled>Option 1</SelectOption>
      <SelectOption value="option-value-1">Option 2</SelectOption>
      <SelectOption value="option-value-3">Option 3</SelectOption>
    </SelectMenu>
</Select>
```

### Group select options (NICE TO HAVE)
```tsx
<Select>
    <SelectSelector />
    <SelectMenu>
      <SelectGroup label="Group label">
        <SelectOption value="option-value-1">Option 1</SelectOption>
        <SelectOption value="option-value-2">Option 2</SelectOption>
      </SelectGroup>
    </SelectMenu>
</Select>
```

## Design

[# Select component design](https://www.figma.com/file/PHVkW8n5AbpBAu3KU2Qlt6/Select-component-mock)

## Props

### Select

| Prop               | Description                                                    | Type                                                                       |
|--------------------|----------------------------------------------------------------|----------------------------------------------------------------------------|
| rightIcon          | Element placed before the option children                      | `React.ReactNode, (props: SelectOptionIconRenderProps) => React.ReactNode` |
| leftIcon           | Element placed after the option children                       | `React.ReactNode, (props: SelectOptionIconRenderProps) => React.ReactNode` |
| clearable          | The indicator presented to clear the values from the component | `boolean`                                                                  |
| closeOnSelect      | Closes container on select                                     | `boolean`                                                                  |
| placeholder        | Placeholder for select                                         | `string `                                                                  |
| variants           | `outline` `filled`                                             | `string`                                                                   |
| size               | Sizes for `Select`                                             | `sm` `md` `lg`                                                             |
| onChange           | callback fired when `children` are triggered                   | `(value: string) => void`                                                  | |
| value              | `Select` value                                                 | `string`                                                                   |
| defaultValue       | `defaultValue` for `Select`                                    | `string`                                                                   |
| isOpen             | if `true` select container will be opened                      | `boolean`                                                                  |
| isDisabled         | A utility to manage disabled state.                            | `boolean`                                                                  |
| onOpen             | Callback fired when select opens                               | `() => void`                                                               |
| onClose            | Callback fired when select closes                              | `() => void`                                                               |
| invalid            | If `true`, the select component will be invalid                | `boolean`                                                                  |
| readOnly           | If `true`, the select will be readonly                         | `boolean`                                                                  |
| required           | If `true`, the select will be required field                   | `boolean`                                                                  |
| id                 | Select option id value                                         | `string`                                                                   |
| hideDefaultChevron | If true then default chevron icon will not be displayed        | `boolean`                                                                  |
| option             | `Select` option object                                         | `SelectOption`                                                             |

### SelectMenu

| Prop       | Description                 | Type                |
|------------|-----------------------------|---------------------|
| children   | `SelectMenu` children       | `React.ReactNode`   |
| rootStyles | `SelectMenu` wrapper styles | `SystemStyleObject` |

### SelectOption

| Prop       | Description                           | Type                                                        |
|------------|---------------------------------------|-------------------------------------------------------------|
| children   | `SelectOption` children               | `React.ReactNode`                                           |
| value      | `SelectOption` value                  | `string` or `number`                                        |
| rightIcon  | Element placed before the children    | `React.ReactNode, (isSelected: boolean) => React.ReactNode` |
| leftIcon   | Element placed after the children     | `React.ReactNode, (isSelected: boolean) => React.ReactNode` |
| isDisabled | 	A utility to manage disabled state   | `boolean`                                                   |

### SelectButton

| Prop       | Description                                | Type                                                    |
|------------|--------------------------------------------|---------------------------------------------------------|
| children   | `SelectButton` children                    | `React.ReactNode`                                       |
| rightIcon  | Element placed before the option children  | `React.ReactNode, (isOpen: boolean) => React.ReactNode` |
| leftIcon   | Element placed after the option children   | `React.ReactNode, (isOpen: boolean) => React.ReactNode` |

### SelectSelector

| Prop       | Description                                | Type                                                    |
|------------|--------------------------------------------|---------------------------------------------------------|
| rightIcon  | Element placed before the option children  | `React.ReactNode, (isOpen: boolean) => React.ReactNode` |
| leftIcon   | Element placed after the option children   | `React.ReactNode, (isOpen: boolean) => React.ReactNode` |
