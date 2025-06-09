'use client'

import {FarmManagement, farmType} from '@/classes/FarmManagements'
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

    //Array de Dicionario temporario com um registro do banco simulando um findMany do prisma.
    const listAddressTest = [
        {
            id_address: 1,
            street: 'rua do teste',
            number: '169',
            state: 'são paulo',
            country: 'brasil',
            // postal_code:"31469874",
            // updated_at:"2025-04-12 16:11:42",
            // created_at: "2025-04-12 16:11:42"
        },
        {
            id_address: 2,
            street: 'rodovia montes verdes',
            number: '128',
            state: 'rio de janeiro',
            country: 'brasil',
            // postal_code:"31469874",
            // updated_at:"2025-04-12 16:11:42",
            // created_at: "2025-04-12 16:11:42"
        },
    ]

    return (
        <div className="flex flex-row items-center justify-center h-full w-full">
            <Form
                className="w-[320px] rounded-md p-4 shadow-xl"
                onSubmit={async (e) => {
                    e.preventDefault()
                    const data = JSON.stringify(
                        Object.fromEntries(new FormData(e.currentTarget)),
                    )
                    const parseData: farmType = JSON.parse(data)

                    try {
                        const createdFarm = await farmManagement.createFarm(
                            {
                                id_address: Number(parseData.id_address),
                                cnpj: parseData.cnpj,
                                corporate_name: parseData.corporate_name,
                            },
                            '1',
                        )
                        console.log('Fazenda criada:', createdFarm)

                        window.location.href = '/farmsControl'
                    } catch (error) {
                        console.error('Erro ao criar fazenda:', error)
                    }
                }}>
                <TextField name="id_address" isRequired>
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        ID ADDRESS
                    </Label>
                    {listAddressTest.map((item) => (
                        <div key={item.id_address}>
                            <Input
                                type="radio"
                                value={String(item.id_address)}
                                name="address"
                                key={item.id_address}
                                id={'address-' + item.id_address}
                                className="w-10 h-5 mt-1"
                            />
                            <label htmlFor={'address-' + item.id_address}>
                                {(
                                    item.street +
                                    ', ' +
                                    item.number +
                                    ', ' +
                                    item.state +
                                    ', ' +
                                    item.country
                                ).toUpperCase()}{' '}
                            </label>
                        </div>
                    ))}
                </TextField>
                <div className="flex flex-row-reverse">
                    <a
                        href="/addressControl"
                        className="justify-end text-blue-600 ">
                        + Adicionar Novo Enderedeço
                    </a>
                </div>
                {/*TODO!!  Esse trecho está funcionando, porém não consigo alterar a cor.
                    Por não ser algo vital vou usar o modelo em html acima.
                <RadioGroup name='id_address' className='flex flex-col w-full gap-2 ' onChange={(value)=>console.log(value)} isRequired={true}>
                    <Label className='font-semibold'>Selecione um endereço</Label>
                   

                     {
                        listAddressTest.map((item, index)=>(
                        <Radio value={String(item.id_address)} key={item.id_address} className='px-4 py-2 border rounded cursor-pointer text-sm hover:border-green-500 '> 
                        {(index+1+". "+item.street+", "+item.number+", "+item.state+", "+item.country).toUpperCase()}                         
                        </Radio>
                     ))
                    }
                <div className="flex flex-row-reverse">
                    <a href="/" className='justify-end text-blue-600 '>+ Adicionar Novo Enderedeço</a></div>
                </RadioGroup> 
                */}
                <TextField name="cnpj" isRequired>
                    <Label className="block text-sm font-medium text-black-700 mb-1 mt-2">
                        CNPJ
                    </Label>
                    <Input className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                    <FieldError />
                </TextField>
                <TextField name="corporate_name" isRequired>
                    <Label className="block text-sm font-medium text-black-700 mb-1 mt-2">
                        CORPORATE NAME
                    </Label>
                    <Input className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                    <FieldError />
                </TextField>
                <div className="flex justify-end gap-3 h-16">
                    <Button
                        onClick={() => router.push('/')}
                        type="button"
                        className="w-40 px-1 py-2 rounded-md shadow-md bg-blue-600/55 hover:bg-blue-600 text-white font-normal">
                        Adicionar Novo endereço
                    </Button>
                    <Button
                        type="submit"
                        className="w-40 px-1 py-2 rounded-md shadow-md bg-green-600 hover:bg-green-700 text-white font-semibold">
                        Criar nova fazenda
                    </Button>
                </div>
            </Form>
        </div>
    )
}
