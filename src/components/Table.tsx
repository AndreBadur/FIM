import React from 'react'
import {
    Cell,
    Column,
    Row,
    Table,
    TableBody,
    TableHeader,
} from 'react-aria-components'


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
    
    // const router =  useRouter()
    
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
                    <Row
                        key={index}
                        onAction={() => {}}
                        className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
                        // href="/updateTest"
                    >
                        {columnData[indexType].map((column, colIndex) => (
                            <Cell key={colIndex} className="px-3 py-3">
                                {item[column]}
                            </Cell>
                        ))}
                    </Row>  
                ))}
            </TableBody>
        </Table>
    )
}
