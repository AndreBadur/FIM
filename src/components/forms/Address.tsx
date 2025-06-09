'use client'

import {
    Button,
    Cell,
    Column,
    FieldError,
    Form,
    Input,
    Label,
    Row,
    Table,
    TableBody,
    TableHeader,
    TextField,
} from 'react-aria-components'

export function CreateAddressForms() {
    return (
        <Form
            className="space-y-6 w-full max-w-md mt-5"
            // onSubmit={async (e) => {
            //     e.preventDefault()
            //     const data = JSON.stringify(
            //         Object.fromEntries(new FormData(e.currentTarget)),
            //     )
            //     const parseData: farmType = JSON.parse(data)

            //     try {
            //         const createdFarm = await farmManagement.createFarm(
            //             {
            //                 id_address: Number(parseData.id_address),
            //                 cnpj: parseData.cnpj,
            //                 corporate_name: parseData.corporate_name,
            //             },
            //             '1',
            //         )
            //         console.log('Fazenda criada:', createdFarm)

            //
            //         router.push('/farmsControl')
            //         router.refresh()
            //     } catch (error) {
            //         console.error('Erro ao criar fazenda:', error)
            //     }
            // }}
        >
            <TextField name="street" isRequired>
                <Label className="block text-sm font-medium text-black-700 mb-1">
                    Logradouro
                </Label>
                <Input className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                <FieldError />
            </TextField>
            <TextField name="number" isRequired>
                <Label className="block text-sm font-medium text-black-700 mb-1">
                    Numero
                </Label>
                <Input className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                <FieldError />
            </TextField>
            <TextField name="state" isRequired>
                <Label className="block text-sm font-medium text-black-700 mb-1">
                    Estado
                </Label>
                <Input className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                <FieldError />
            </TextField>
            <TextField name="country" isRequired>
                <Label className="block text-sm font-medium text-black-700 mb-1">
                    País
                </Label>
                <Input className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                <FieldError />
            </TextField>
            <div className="flex justify-end gap-3 h-12">
                <Button
                    type="reset"
                    className="w-40 px-1 py-2 rounded-md border active:bg-blue-950 active:text-white hover:border-blue-950  font-normal">
                    limpar dados
                </Button>
                <Button
                    type="submit"
                    className="w-40 px-1 py-2 rounded-md shadow-md bg-green-600 hover:bg-green-700 text-white font-semibold ">
                    Adicionar endereço
                </Button>
            </div>
        </Form>
    )
}
export function ListAddress() {
    //Array de Dicionario temporario com um registro do banco simulando um findMany do prisma.
    //no momento eu removi as chaves updated e created para visualizar somente o basico
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
    ]

    //pega o nome das chaves de um dicionario e transforma em uma array
    const columns = Object.keys(listAddressTest[0])

    return (
        <Table
            aria-label="Files"
            selectionMode="multiple"
            className="w-full mt-4 text-sm text-left rounded-xl border">
            <TableHeader className="bg-gray-100 uppercase rounded-xl">
                {columns.map((valor, index) => (
                    <Column
                        key={index}
                        className="px-3 py-2 text-base font-medium">
                        {valor}
                    </Column>
                ))}
            </TableHeader>
            <TableBody>
                {listAddressTest.map((item, index) => (
                    <Row
                        key={index}
                        className={
                            index % 2 === 0
                                ? 'bg-white cursor-pointer hover:bg-green-600'
                                : 'bg-gray-100 cursor-pointer hover:bg-green-600'
                        }>
                        {columns.map((column, colIndex) => (
                            <Cell key={colIndex} className="px-3 py-2 text-sm">
                                {
                                    //o typescript não permite usar uma variavel como chave sem que tenha o trecho 'as keyof typeof <variavel>'
                                    String(item[column as keyof typeof item])
                                }
                            </Cell>
                        ))}
                    </Row>
                ))}
            </TableBody>
        </Table>
    )
}

export function ListAddressAlterations() {
    const listAddressTest = [
        {
            id_address: 1,
            street: 'rua do teste',
            number: '169',
            state: 'são paulo',
            country: 'brasil',
            postal_code: '31469874',
            created_at: '2025-04-12 16:11:42',
            updated_at: '2025-04-12 16:11:42',
        },
    ]

    //pega o nome das chaves de um dicionario e transforma em uma array
    const columns = Object.keys(listAddressTest[0])
    return (
        <div>
            <Table
                aria-label="listAlterations"
                selectionMode="multiple"
                className="w-full mt-4 text-sm text-left rounded-xl border">
                <TableHeader className="bg-gray-100 uppercase rounded-xl">
                    {columns.map((valor, index) => (
                        <Column
                            key={index}
                            isRowHeader={true}
                            className="px-3 py-2 text-base font-medium">
                            {valor}
                        </Column>
                    ))}
                </TableHeader>
                <TableBody>
                    {listAddressTest.map((item, index) => (
                        <Row
                            key={index}
                            className={
                                index % 2 === 0
                                    ? 'bg-white cursor-pointer hover:bg-green-600'
                                    : 'bg-gray-100 cursor-pointer hover:bg-green-600'
                            }>
                            {columns.map((column, colIndex) => (
                                <Cell
                                    key={colIndex}
                                    className="px-3 py-2 text-sm">
                                    {
                                        //o typescript não permite usar uma variavel como chave sem que tenha o trecho 'as keyof typeof <variavel>'
                                        String(
                                            item[column as keyof typeof item],
                                        )
                                    }
                                </Cell>
                            ))}
                        </Row>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
