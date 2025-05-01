import { Input, Label, TextField } from 'react-aria-components'
interface Props {
    name: string
    label: string
    password?: boolean
}
export default function TextInput(props: Props) {
    return (
        <TextField name={props.name}>
            <Label className="label">{props.label}</Label>
            <Input type={props.password ? 'password' : 'text'} className="input" />
        </TextField>
    )
}
