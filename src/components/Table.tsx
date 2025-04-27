import React from 'react'

const columnTable = [
    ['ID Farm', 'ID Farmer', 'ID Address', 'Created At', 'Updated At', 'CNPJ', 'Nome'],
    ['ID Farm', 'Created At', 'Updated At', 'CNPJ', 'Nome'],
]

const columnData = [
    ['id_farm', 'id_farmer', 'id_address', 'created_at', 'updated_at', 'cnpj', 'corporate_name'],
    ['id_farm', 'created_at', 'updated_at', 'cnpj', 'corporate_name'],
]

type TipoTabela = 'farm'

type Props<T> = {
    tipo: TipoTabela
    dados: T[]
}

const TabelaGeral = <T extends Record<string, string>>({ tipo, dados }: Props<T>) => {
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

export function GenericTables<T extends Record<string, string>>({ tipo, dados }: Props<T>) {
    return (
        <table className="w-full border border-gray-300 mt-4">
            <thead>
                <tr className="bg-gray-100">
                    {tipo === 'farm' &&
                        columnTable?.[1].map((valor, index) => (
                            <th key={index} className="p-2 border">
                                {valor}
                            </th>
                        ))}
                </tr>
            </thead>
            <tbody>
                {dados.map((item, index) => (
                    <tr key={index}>
                        {tipo === 'farm' &&
                            columnData[1].map((column) => (
                                <td key={column[0]} className="p-2 border">
                                    {item[column]}
                                </td>
                            ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

// const GenericTable: React.FC<Props> = ({ tipo, dados }) => {
//     return (
//         <table className="w-full border border-gray-300 mt-4">
//             <thead>
//                 <tr className="bg-gray-100">
//                     {tipo === 'pessoa' && (
//                         <>
//                             <th className="p-2 border">Nome</th>
//                             <th className="p-2 border">Idade</th>
//                             <th className="p-2 border">Número</th>
//                         </>
//                     )}
//                     {tipo === 'empresa' && (
//                         <>
//                             <th className="p-2 border">CNPJ</th>
//                             <th className="p-2 border">Nome</th>
//                             <th className="p-2 border">Email</th>
//                             <th className="p-2 border">Cidade</th>
//                             <th className="p-2 border">Número</th>
//                         </>
//                     )}
//                 </tr>
//             </thead>
//             <tbody>
//                 {dados.map((item, index) => (
//                     <tr key={index}>
//                         {tipo === 'pessoa' && (
//                             <>
//                                 <td className="p-2 border">{item.nome}</td>
//                                 <td className="p-2 border">{item.idade}</td>
//                                 <td className="p-2 border">{item.numero}</td>
//                             </>
//                         )}
//                         {tipo === 'empresa' && (
//                             <>
//                                 <td className="p-2 border">{item.cnpj}</td>
//                                 <td className="p-2 border">{item.nome}</td>
//                                 <td className="p-2 border">{item.email}</td>
//                                 <td className="p-2 border">{item.cidade}</td>
//                                 <td className="p-2 border">{item.numero}</td>
//                             </>
//                         )}
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     )
// }

export default TabelaGeral
