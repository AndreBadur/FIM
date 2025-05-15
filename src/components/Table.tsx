import React from 'react'
import {
    Button,
    Cell,
    Column,
    Dialog,
    DialogTrigger,
    Heading,
    Input,
    Modal,
    Row,
    Table,
    TableBody,
    TableHeader,
    TextField,
} from 'react-aria-components'
import { Label } from './Typography'

const columnTable = [
    ['ID Farm', 'ID Farmer', 'ID Address', 'Created At', 'Updated At', 'CNPJ', 'Nome'],
    ['ID Farm', 'Created At', 'Updated At', 'CNPJ', 'Nome'],
]

const columnData = [
    ['id_farm', 'id_farmer', 'id_address', 'created_at', 'updated_at', 'cnpj', 'corporate_name'],
    ['id_farm', 'created_at', 'updated_at', 'cnpj', 'corporate_name'],
]

type TipoTabela = 'farm' | 'generalFarms'

let indexType: number

type Props<T> = {
    tipo: TipoTabela
    dados: T[]
}

export function AriaTable<T extends Record<string, string | number>>({ tipo, dados }: Props<T>) {
    switch (tipo) {
        case 'generalFarms':
            indexType = 0
            break
        case 'farm':
            indexType = 1
            break
    }
    return (
        <Table
            aria-label="Files"
            selectionMode="multiple"
            className="w-full mt-4 text-sm text-left"
        >
            <TableHeader className="bg-gray-100 uppercase rounded-md">
                {columnTable?.[indexType].map((valor, index) => (
                    <Column key={index} className="px-4 py-3 font-medium">
                        {valor}
                    </Column>
                ))}
            </TableHeader>
            <TableBody>
                {dados.map((item, index) => (
                    <DialogTrigger key={index}>
                        <Row
                            key={index}
                            onAction={() => {}}
                            className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
                        >
                            {columnData[indexType].map((column, colIndex) => (
                                <Cell key={colIndex} className="px-3 py-3">
                                    {item[column]}
                                </Cell>
                            ))}
                        </Row>
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
                ))}
            </TableBody>
        </Table>
    )
}
