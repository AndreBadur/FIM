'use client'

import {SupplyManagement, supplyType} from '@/classes/SupplyManagement'
import {verifyFarmbyId} from '@/utils/utilityFunctions'
import Link from 'next/link'
import React from 'react'

import {
    Button,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from 'react-aria-components'

const supplyManagement = new SupplyManagement()
const supplyTypeOptions = await supplyManagement.getAllSupplyCategories()

export default function SupplyCreation() {
    const supplyCategories = supplyTypeOptions

    const [supplyTypeId, setSupplyTypeId] = React.useState<number>(1)

    if (!supplyCategories) return <div>Erro: id não fornecido</div>

    return (
        <div className="flex flex-row items-center justify-center h-full w-full">
            <Form
                className="w-[320px] rounded-md p-4 shadow-xl"
                onSubmit={async (e) => {
                    e.preventDefault()

                    const data = JSON.stringify(
                        Object.fromEntries(new FormData(e.currentTarget)),
                    )

                    const parseData: supplyType = JSON.parse(data)
                    window.location.href = '/supplyControl'

                    return await supplyManagement.createSupply({
                        supply_name: parseData.supply_name,
                        id_farm: Number(verifyFarmbyId()),
                        supply_category: Number(supplyTypeId),
                        supply_cost_price: Number(parseData.supply_cost_price),
                        supply_quantity: Number(parseData.supply_quantity),
                    })
                }}>
                <div className="mt-3">
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        Tipo de Suprimento
                    </Label>
                    <select
                        value={supplyTypeId}
                        onChange={(e) =>
                            setSupplyTypeId(Number(e.target.value))
                        }
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                        {supplyCategories.map((category) => (
                            <option
                                key={category.category_id}
                                value={category.category_id}>
                                {category.category_name}
                            </option>
                        ))}
                    </select>
                </div>

                <TextField name="supply_name" isRequired>
                    <div className="flex flex-col">
                        <Label className="block text-sm font-medium text-black-700 mb-1">
                            Nome do insumo
                        </Label>
                        <Input className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                        <FieldError />
                    </div>
                </TextField>

                <TextField name="supply_cost_price" isRequired>
                    <div className="flex flex-col">
                        <Label className="block text-sm font-medium text-black-700 mb-1">
                            Custo
                        </Label>
                        <Input className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                        <FieldError />
                    </div>
                </TextField>

                <TextField name="supply_quantity" isRequired>
                    <div className="flex flex-col">
                        <Label className="block text-sm font-medium text-black-700 mb-1">
                            Quantidade
                        </Label>
                        <Input className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                        <FieldError />
                    </div>
                </TextField>

                <div className="flex w-1/2 justify-self-end mt-4 gap-2">
                    <Link href="/supplyControl">
                        <Button className="w-full h-full px-1 py-1 rounded-md shadow-md border border-red-600 hover:bg-red-700 hover:text-white text-red-600 font-semibold">
                            Cancelar
                        </Button>
                    </Link>

                    <Button
                        type="submit"
                        className="w-full h-full px-1 py-1 rounded-md text-center shadow-md bg-green-600 hover:bg-green-700 text-white font-semibold">
                        Salvar
                    </Button>
                </div>
            </Form>
        </div>
    )
}
