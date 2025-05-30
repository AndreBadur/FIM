import {
    Button,
    // Button,
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
            <div className="my-combobox-container w-full flex">
                <div className="relative w-full mb-3">
                    <Input className="w-full pl-3 pr-8 py-2 border rounded-md shadow-sm focus:outline-none" />
                    <Button className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 focus:outline-none">
                        ▼
                    </Button>
                </div>
            </div>
            {description && <Text slot="description">{description}</Text>}
            <FieldError>{errorMessage}</FieldError>
            <Popover className=" px-3 py-2 border rounded-md shadow-sm bg-white w-64 ">
                <ListBox className="w-full">{children}</ListBox>
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
