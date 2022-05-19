## Project Setup

`git clone https://github.com/rpehlivan1/chakrathon.git`

 - Install deps -> `yarn install`
 - Start Storybook -> `yarn storybook`
 - Run tests -> `yarn test`
 - Run test coverage -> `yarn test:coverage`
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

### Hooks

- `useSelect` is a hook that manages all stateful logic needed to make a select functional.
returns a set of props which lets you control the select component
- `useSelectOption` is a hook that manages all stateful logic of the option item, setting active index, specific selected id and so on.
- `useSelectMenu` is a hook that manages <SelectMenu/> stateful logic.

### useSelect
| Returned prop  | Description                                       | Type                                                |
|----------------|---------------------------------------------------|-----------------------------------------------------|
| selectId       | Select Id to be used                              | `string`                                            |
| isOpen         | `open` status of menu                             | `boolean`                                           |
| activeIndex    | active index of select option                     | `number`                                            |
| activeIndex    | active index of select option                     | `number`                                            |
| activeIndexKey | active index key of select option                 | `string`                                            |
| setActiveIndex | Sets given active index                           | `React.Dispatch<React.SetStateAction<number>>`      |
| value          | Select value                                      | `string` or `number`                                |
| option         | select option value                               | `{value: string or number, label: React.ReactNode}` |
| onOpen         | controls open state of select option              | `() => void`                                        |
| onClose        | controls close of select option                   | `() => void`                                        |
| onChange       | callback when select value changes                | `(value: SelectValue) => void`                      |
| setOption      | callback when select option value changes         | `(value: SelectOption) => void`                     |
| addOption      | callback which sets options                       | `(value: SelectOption) => void`                     |
| updateOptions  | fn that updates current option based on condition | `(newOption: SelectOption, prevOption) => void`     |
| onNextOption   | fn that sets active index on next option          | `() => void`                                        |
| onPrevOption   | fn that sets active index on prev option          | `() => void`                                        |


### useSelectOption
| Returned prop | Description                                          | Type                              |
|---------------|------------------------------------------------------|-----------------------------------|
| selectId      | Select Id to be used                                 | `string`                          |
| ref           | Select option reference                              | `React.RefObject<HTMLDivElement>` |
| id            | Select option id                                     | `id`                              |
| tabIndex      | Select option tabIndex                               | `number`                          |
| role          | role of the select option                            | `option`                          |
| aria-selected | returns if aria-selected=true or aria-selected=false | `boolean`                         |
| onClick       | callback fired on click is fired                     | `() => void`                      |
| onKeyUp       | callback fired on onKeyUp is fired                   | `(event) => void`                 |
| onKeyDown     | callback fired on KeyDown click                      | `(event) => void`                 |

### useSelectMenu
| Returned prop         | Description                              | Type              |
|-----------------------|------------------------------------------|-------------------|
| id                    | select menu id                           | `string`          |
| tabIndex              | Select option tabIndex                   | `number`          |
| role                  | role of the select menu                  | `option`          |
| aria-required         | returns of aria-required                 | `boolean`         |
| aria-readonly         | returns aria-readonly prop               | `boolean`         |
| aria-multiselectable  | returns of aria-multiselectable          | `boolean`         |
| aria-activedescendant | returns of aria-activedescendant of menu | `string`          |
| onKeyUp               | callback fired on onKeyUp is fired       | `(event) => void` |
| onKeyDown             | callback fired on KeyDown click          | `(event) => void` |
