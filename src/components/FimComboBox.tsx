import {
    Button,
    ComboBox,
    Input,
    Label,
    ListBox,
    ListBoxItem,
    Popover,
} from 'react-aria-components'
import type {
    ComboBoxProps,
    ListBoxItemProps,
    ValidationResult,
} from 'react-aria-components'
import {FieldError, Text} from 'react-aria-components'

interface MyComboBoxProps<T extends object>
    extends Omit<ComboBoxProps<T>, 'children'> {
    label?: string
    description?: string | null
    errorMessage?: string | ((validation: ValidationResult) => string)
    children: React.ReactNode | ((item: T) => React.ReactNode)
}

export function FimComboBox<T extends object>({
    label,
    description,
    errorMessage,
    children,
    ...props
}: MyComboBoxProps<T>) {
    return (
        <ComboBox {...props}>
            <Label>{label}</Label>
            <div className="my-combobox-container">
                <Input />
                <Button className="bg-white">▼</Button>
            </div>
            {description && <Text slot="description">{description}</Text>}
            <FieldError>{errorMessage}</FieldError>
            <Popover className="bg-gray-300">
                <ListBox>{children}</ListBox>
            </Popover>
        </ComboBox>
    )
}

function MyItem(props: ListBoxItemProps) {
    return (
        <ListBoxItem
            {...props}
            className={({isFocused, isSelected}) =>
                `my-item ${isFocused ? 'focused' : ''} ${isSelected ? 'selected' : ''}`
            }
        />
    )
}

;<FimComboBox label="Ice cream flavor">
    <MyItem>Chocolate</MyItem>
    <MyItem>Mint</MyItem>
    <MyItem>Strawberry</MyItem>
    <MyItem>Vanilla</MyItem>
</FimComboBox>
