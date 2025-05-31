import {FarmManagement, farmType} from '@/classes/FarmManagements'
import {useRouter} from 'next/navigation'
import {
    Button,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from 'react-aria-components'

const farmManagement = new FarmManagement()

export default function CreateFormFarm() {
    const router = useRouter()

    return (
        <Form
            className="space-y-6 w-full max-w-md mt-5 "
            onSubmit={async (e) => {
                e.preventDefault()
                const data = JSON.stringify(
                    Object.fromEntries(new FormData(e.currentTarget)),
                )
                console.log(data)
                const parseData: farmType = JSON.parse(data)
                console.log(parseData.id_address)

                const teste = await farmManagement.createFarm(
                    {
                        id_address: Number(parseData.id_address),
                        cnpj: parseData.cnpj,
                        corporate_name: parseData.corporate_name,
                    },
                    `1`,
                )
                console.log(teste)
            }}>
            <TextField name="id_address" isRequired>
                <Label className="block text-sm font-medium text-black-700 mb-1">
                    ID ADDRESS
                </Label>
                <Input className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                <FieldError />
            </TextField>
            <TextField name="cnpj" isRequired>
                <Label className="block text-sm font-medium text-black-700 mb-1">
                    CNPJ
                </Label>
                <Input className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                <FieldError />
            </TextField>
            <TextField name="corporate_name" isRequired>
                <Label className="block text-sm font-medium text-black-700 mb-1">
                    CORPORATE NAME
                </Label>
                <Input className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                <FieldError />
            </TextField>
            <div style={{display: 'flex', gap: 8}}>
                <Button
                    type="submit"
                    className="w-40 px-1 py-3 rounded-md shadow-md bg-green-600 hover:bg-green-700 text-white font-semibold"
                    onPress={async () => {
                        router.push('/designTest')
                        router.refresh()
                    }}>
                    Submit
                </Button>
            </div>
        </Form>
    )
}
