## Components

### Select

##### Props

---
| Prop         | Description                                                    | Type                                          |
|--------------|----------------------------------------------------------------|-----------------------------------------------|
| rightIcon    | Element placed before the children                             | `React.ReactNode, (props) => React.ReactNode` |
| leftIcon     | Element placed after the children                              | `React.ReactNode, (props) => React.ReactNode` |
| clearable    | The indicator presented to clear the values from the component | `boolean`                                     |
| placeholder  | placeholder for select                                         | `string `                                     |
| variants     | `outline` `filled`                                             | `string`                                      |
| size         | Sizes for `Select`                                             | `sm` `md` `lg`                                |
| onChange     | callback fired when `children` are triggered                   | `(value: string) => void`                     |
| value        | `Select` value                                                 | `string`                                      |
| defaultValue | `defaultValue` for `Select`                                    | `string`                                      |
| isOpen       | if `true` select container will be opened                      | `string`                                      |
| isDisabled   | 	A utility to manage disabled state.                           | `string`                                      |



### SelectOption

#### Props
| Prop       | Description                          | Type                                          |
|------------|--------------------------------------|-----------------------------------------------|
| rightIcon  | Element placed before the children   | `React.ReactNode, (props) => React.ReactNode` |
| leftIcon   | Element placed after the children    | `React.ReactNode, (props) => React.ReactNode` |
| value      | `SelectOption` value                 | `string`                                      |
| isDisabled | 	A utility to manage disabled state. | `string`                                      |