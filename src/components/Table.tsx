import React from 'react'
import { Cell, Column, Row, Table, TableBody, TableHeader } from 'react-aria-components'

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

export function GenericTables<T extends Record<string, string | number>>({
    tipo,
    dados,
}: Props<T>) {
    switch (tipo) {
        case 'generalFarms':
            indexType = 0
            break
        case 'farm':
            indexType = 1
            break
    }
    return (
        <table className="w-full mt-4 text-sm text-left">
            <thead className="bg-gray-100 uppercase rounded-md">
                <tr>
                    {columnTable?.[indexType].map((valor, index) => (
                        <th key={index} className="px-4 py-3 font-medium">
                            {valor}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="divide-gray-200">
                {dados.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                        {columnData[indexType].map((column, colIndex) => (
                            <td key={colIndex} className="px-3 py-3">
                                {item[column]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

// export function AriaTable<T extends Record<string, string | number>>({ tipo, dados }: Props<T>) {
//     switch (tipo) {
//         case 'generalFarms':
//             indexType = 0
//             break
//         case 'farm':
//             indexType = 1
//             break
//     }
//     return (
//         <Table aria-label="Files" selectionMode="multiple">
//             <TableHeader>
//                 {columnTable?.[indexType].map((valor, index) => (
//                     <th key={index} className="px-4 py-3 font-medium">
//                         {valor}
//                     </th>
//                 ))}
//                 <Column isRowHeader>Name</Column>
//                 <Column>Type</Column>
//                 <Column>Date Modified</Column>
//             </TableHeader>
//             <TableBody>
//                 <Row>
//                     <Cell>Testes</Cell>
//                     <Cell>File folder</Cell>
//                     <Cell>6/7/2020</Cell>
//                 </Row>
//                 <Row>
//                     <Cell>Program Files</Cell>
//                     <Cell>File folder</Cell>
//                     <Cell>4/7/2021</Cell>
//                 </Row>
//                 <Row>
//                     <Cell>bootmgr</Cell>
//                     <Cell>System file</Cell>
//                     <Cell>11/20/2010</Cell>
//                 </Row>
//                 <Row onAction={() => alert('teste')}>
//                     <Cell>log.txt</Cell>
//                     <Cell>Text Document</Cell>
//                     <Cell>1/18/2016</Cell>
//                 </Row>
//             </TableBody>
//         </Table>
//     )
// }

export function AriaTablefs() {
    return (
        <Table aria-label="Files" selectionMode="multiple">
            <TableHeader>
                <Column isRowHeader>Name</Column>
                <Column>Type</Column>
                <Column>Date Modified</Column>
            </TableHeader>
            <TableBody>
                <Row>
                    <Cell>Testes</Cell>
                    <Cell>File folder</Cell>
                    <Cell>6/7/2020</Cell>
                </Row>
                <Row>
                    <Cell>Program Files</Cell>
                    <Cell>File folder</Cell>
                    <Cell>4/7/2021</Cell>
                </Row>
                <Row>
                    <Cell>bootmgr</Cell>
                    <Cell>System file</Cell>
                    <Cell>11/20/2010</Cell>
                </Row>
                <Row onAction={() => alert('teste')}>
                    <Cell>log.txt</Cell>
                    <Cell>Text Document</Cell>
                    <Cell>1/18/2016</Cell>
                </Row>
            </TableBody>
        </Table>
    )
}
