import {
    Button,
    Dialog,
    DialogTrigger,
    Heading,
    Input,
    Label,
    Modal,
    TextField,
} from 'react-aria-components'

export function ModalUpdate() {
    return (
        <DialogTrigger>
            <Button>Sign up…</Button>
            <Modal>
                <Dialog>
                    <form>
                        <Heading slot="title">Sign up</Heading>
                        <TextField autoFocus>
                            <Label>First Name:</Label>
                            <Input />
                        </TextField>
                        <TextField>
                            <Label>Last Name:</Label>
                            <Input />
                        </TextField>
                        <Button slot="close">Submit</Button>
                    </form>
                </Dialog>
            </Modal>
        </DialogTrigger>
    )
}
