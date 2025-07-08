import {
    Cell,
    Column,
    Row,
    Table,
    TableBody,
    TableHeader,
} from 'react-aria-components'

type Props<T> = {
    columns: string[]
    keys: string[]
    dados: T[]
    onRowClick?: (item: T) => void
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
    columns,
    keys,
    dados,
    onRowClick,
}: Props<T>) {
    return (
        <Table
            aria-label="Tabela"
            selectionMode="multiple"
            className="w-full mt-4 text-sm text-left border border-gray-300 border-collapse">
            <TableHeader className="bg-green-300 uppercase">
                {columns.map((label, index) => (
                    <Column
                        isRowHeader
                        key={index}
                        className="px-3 py-2 text-base font-medium border border-gray-300">
                        {label}
                    </Column>
                ))}
            </TableHeader>
            <TableBody>
                {dados.map((item, rowIndex) => (
                    <Row
                        key={rowIndex}
                        onAction={() => onRowClick?.(item)}
                        className={
                            rowIndex % 2 === 0
                                ? 'bg-white cursor-pointer hover:bg-green-500'
                                : 'bg-green-100 cursor-pointer hover:bg-green-500'
                        }>
                        {keys.map((key, colIndex) => (
                            <Cell
                                key={colIndex}
                                className="px-3 py-2 text-sm border border-gray-300">
                                {String(getNestedValue(item, key))}
                            </Cell>
                        ))}
                    </Row>
                ))}
            </TableBody>
        </Table>
    )
}
