'use client'

import {useRouter} from 'next/navigation'
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
    [
        'ID Farm',
        'ID Farmer',
        'ID Address',
        'Created At',
        'Updated At',
        'CNPJ',
        'Nome',
    ],
    ['ID Farm', 'Created At', 'Updated At', 'CNPJ', 'Nome'],
    ['ID Type Area', 'ID Farm', 'Name', 'Description', 'Features'],
    [
        'ID Farm',
        'ID Machinary Type',
        'Cost per Hour',
        'Last Maintenance Date',
        'Maintence Interval',
        'Model',
        'Name',
        'Status',
    ],
    [
        'ID Employee',
        'ID Farm',
        'CPF',
        'Name',
        'Cost per Hour',
        'Hours Worked',
        'Created at',
        'Updated at',
    ],
]

const columnData = [
    [
        'id_farm',
        'id_farmer',
        'id_address',
        'created_at',
        'updated_at',
        'cnpj',
        'corporate_name',
    ],
    ['id_farm', 'created_at', 'updated_at', 'cnpj', 'corporate_name'],
    ['id_type_area', 'id_farm', 'name', 'description', 'features'],
    [
        'id_farm',
        'id_machinery_type',
        'cost_per_hour',
        'last_maintenance_date',
        'maintenance_interval',
        'model',
        'name',
        'status',
    ],
    [
        'id_employee',
        'id_farm',
        'cpf',
        'name',
        'cost_per_hour',
        'hours_worked',
        'created_at',
        'updated_at',
    ],
]

type TipoTabela = 'farm' | 'generalFarms' | 'area' | 'machinery' | 'employee'

type Props<T> = {
    tipo: TipoTabela
    dados: T[]
}

export function AriaTable<
    T extends Record<string, string | number | boolean | Date>,
>({tipo, dados}: Props<T>) {
    const router = useRouter()

    const indexType = (() => {
        switch (tipo) {
            case 'generalFarms':
                return 0
            case 'farm':
                return 1
            case 'area':
                return 2
            case 'machinery':
                return 3
            case 'employee':
                return 4
            default:
                return 0
        }
    })()

    return (
        <Table
            aria-label="Files"
            selectionMode="multiple"
            className="w-full mt-4 text-sm text-left">
            <TableHeader className="bg-gray-100 uppercase rounded-md">
                {columnTable[indexType].map((valor, index) => (
                    <Column
                        key={index}
                        className="px-3 py-2 text-base font-medium">
                        {valor}
                    </Column>
                ))}
            </TableHeader>
            <TableBody>
                {dados.map((item, index) => (
                    <Row
                        key={index}
                        onAction={() =>
                            router.push(
                                tipo === 'area'
                                    ? `/areaUpdate?id=${item['id_area']}`
                                    : tipo === 'machinery'
                                      ? `/machineryUpdate?id=${item['id_machinery']}`
                                      : tipo === 'employee'
                                        ? `/farmEmployeeUpdate?id=${item[columnData[indexType][0]]}`
                                        : `/farmsUpdate?id=${item[columnData[indexType][0]]}`,
                            )
                        }
                        className={
                            index % 2 === 0
                                ? 'bg-white cursor-pointer hover:bg-green-500'
                                : 'bg-gray-100 cursor-pointer hover:bg-green-500'
                        }>
                        {columnData[indexType].map((column, colIndex) => (
                            <Cell key={colIndex} className="px-3 py-2 text-sm">
                                {String(item[column])}
                            </Cell>
                        ))}
                    </Row>
                ))}
            </TableBody>
        </Table>
    )
}
