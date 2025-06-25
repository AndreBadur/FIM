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
        'ID Fazenda',
        'ID Fazendeiro',
        'ID Endereço',
        'Criado em',
        'Modificado em',
        'CNPJ',
        'Nome',
    ],
    ['ID Fazendeiro', 'Criado em', 'Modificado em', 'CNPJ', 'Nome'],
    ['ID Tipo da Área', 'ID Fazenda', 'Nome', 'Descrição', 'Características'],
    [
        'ID Fazenda',
        'ID Tipo de Maquinário',
        'Custo por Hora',
        'Última Manutenção ',
        'Intervalo das Manutenções',
        'Modelo',
        'Nome',
        'Status',
    ],
    [
        'ID Empregado',
        'ID Fazenda',
        'CPF',
        'Nome',
        'Custo por Hora',
        'Horas Trabalhadas',
        'Criado em',
        'Modificado em',
    ],
    ['ID Fazenda', 'Nome do Insumo', 'Categoria de Insumos', 'Custo do Insumo', 'Quantidade'],
    [
        'ID Fazenda',
        'ID Empregado',
        'ID Inusmo ',
        'ID Maquinário',
        'Quantidade do Insumo',
        'Data de Conclusão',
        'Status',
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
    [
        'id_farm',
        'supply_name',
        'supply_categories.category_name',
        'supply_cost_price',
        'supply_quantity',
    ],
    [
        'id_farm',
        'id_employee',
        'id_supply',
        'id_machinery',
        'supply_quantity',
        'conclusion_date',
        'status',
    ],
]

type TipoTabela =
    | 'farm'
    | 'generalFarms'
    | 'area'
    | 'machinery'
    | 'employee'
    | 'supply'
    | 'supplyCategories'
    | 'task'

type Props<T> = {
    tipo: TipoTabela
    dados: T[]
}

function getNestedValue<T>(obj: T, path: string): unknown {
    return path.split('.').reduce((acc: unknown, part) => {
        if (typeof acc === 'object' && acc !== null && part in acc) {
            return (acc as Record<string, unknown>)[part]
        }
        return undefined
    }, obj)
}

export function AriaTable<T extends Record<string, unknown>>({
    tipo,
    dados,
}: Props<T>) {
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
            case 'supply':
                return 5
            case 'task':
                return 6
            default:
                return 0
        }
    })()

    return (
        <Table
            aria-label="Files"
            selectionMode="multiple"
            className="w-full mt-4 text-sm text-left border border-gray-300 border-collapse">
            <TableHeader className="bg-green-300 uppercase">
                {columnTable[indexType].map((valor, index) => (
                    <Column
                        isRowHeader
                        key={index}
                        className="px-3 py-2 text-base font-medium border border-gray-300">
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
                                        : tipo === 'supply'
                                          ? `/supplyUpdate?id=${item['supply_id']}`
                                          : tipo === 'task'
                                            ? `/taskUpdate?id=${item['id_task']}`
                                            : `/farmsUpdate?id=${item[columnData[indexType][0]]}`,
                            )
                        }
                        className={
                            index % 2 === 0
                                ? 'bg-white cursor-pointer hover:bg-green-500'
                                : 'bg-green-100 cursor-pointer hover:bg-green-500'
                        }>
                        {columnData[indexType].map((column, colIndex) => (
                            <Cell
                                key={colIndex}
                                className="px-3 py-2 text-sm border border-gray-300">
                                {String(getNestedValue(item, column))}
                            </Cell>
                        ))}
                    </Row>
                ))}
            </TableBody>
        </Table>
    )
}
