import React from 'react'

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

const TabelaGeral = <T extends Record<string, string | number | undefined>>({
    tipo,
    dados,
}: Props<T>) => {
    return (
        <table className="w-full border border-gray-300 mt-4">
            <thead>
                <tr className="bg-gray-100">
                    {tipo === 'farm' && (
                        <>
                            {columnTable[0].map((valor, index) => (
                                <th key={index} className="p-2 border">
                                    {valor}
                                </th>
                            ))}
                        </>
                    )}
                </tr>
            </thead>
            <tbody>
                {dados.map((item, index) => (
                    <tr key={index}>
                        {tipo === 'farm' && (
                            <>
                                {Object.values(item).map((valor, i) => (
                                    <td key={i} className="p-2 border">
                                        {valor}
                                    </td>
                                ))}
                            </>
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export function GenericTables<T extends Record<string, string | number | undefined>>({
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
        <table className="w-full border border-gray-300 mt-4">
            <thead>
                <tr className="bg-gray-100">
                    {columnTable?.[indexType].map((valor, index) => (
                        <th key={index} className="p-2 border">
                            {valor}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {dados.map((item, index) => (
                    <tr key={index}>
                        {columnData[indexType].map((column) => (
                            <td key={column} className="p-2 border">
                                {item[column]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TabelaGeral
