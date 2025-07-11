'use client'

import {SupplyManagement, supplyType} from '@/classes/SupplyManagement'
import {verifyFarmbyId} from '@/utils/utilityFunctions'
import {useSearchParams} from 'next/navigation'
import {Suspense, useEffect, useState} from 'react'
import {
    Button,
    FieldError,
    Form,
    Input,
    Key,
    Label,
    TextField,
} from 'react-aria-components'

// const supplyManagement = new SupplyManagement()

// const creation = await supplyManagement.createSupply({
//     id_farm: 22,
//     supply_category: 1,
//     supply_cost_price: 101,
//     supply_quantity: 5,
// })

// const update = await supplyManagement.updateSupplyById(
//     {
//         supply_cost_price: 20,
//     },
//     {
//         id_farm: '22',
//         supply_id: '12',
//     },
// )

// const result = await supplyManagement.findSupplyById({
//     id_farm: '22',
//     supply_id: '4',
// })
// console.log(result?.supply_id)
// console.log(result?.supply_cost_price)
// console.log(result?.supply_categories.category_name)

// const deleteUnique = await supplyManagement.deleteUniqueSupplyId({
//     id_farm: '22',
//     supply_id: '10',
// })

// const resultAll = await supplyManagement.listAllSuppliesByFarm('22')
// console.log(resultAll)

// const getSupplyCategory = await supplyManagement.getAllSupplyCategories()
// console.log(getSupplyCategory)

const supplyManagement = new SupplyManagement()

function UpdateSupplyWrapper() {
    const searchParams = useSearchParams()
    const supply_id = searchParams.get('id')
    const id_farm = verifyFarmbyId()

    const [supplyData, setSupplyData] = useState({
        supply_category: null as Key | null,
        supply_quantity: '',
        supply_cost_price: '',
    })

    useEffect(() => {
        const fetchSupply = async () => {
            if (!supply_id) return

            const supply = await supplyManagement.findSupplyById({
                id_farm,
                supply_id,
            })

            if (supply) {
                setSupplyData({
                    supply_category: supply.supply_category.toString(),
                    supply_quantity: supply.supply_quantity.toString(),
                    supply_cost_price: supply.supply_cost_price.toString(),
                })
            }
        }

        fetchSupply()
    }, [supply_id])

    const SupplyTypeOptions = [
        {id: 1, name: 'Café'},
        {id: 2, name: 'Trigo'},
    ]

    const handleUpdate = async () => {
        const payload: Partial<supplyType> = {
            id_farm: Number(id_farm),
            supply_category: Number(supplyData.supply_category),
            supply_quantity: Number(supplyData.supply_quantity),
            supply_cost_price: Number(supplyData.supply_cost_price),
        }

        await supplyManagement.updateSupplyById(payload, {
            id_farm,
            supply_id: supply_id!,
        })
        window.location.href = '/supplyControl'
    }

    const handleDelete = async () => {
        await supplyManagement.deleteUniqueSupplyId({
            id_farm,
            supply_id: supply_id!,
        })
        window.location.href = '/supplyControl'
    }

    if (!supply_id) return <div>Erro: id não fornecido</div>

    return (
        <div className="flex flex-row items-center justify-center h-full w-full">
            <Form
                className="w-[320px] rounded-md p-4 shadow-xl"
                onSubmit={(e) => {
                    e.preventDefault()
                    handleUpdate()
                }}>
                <div className="mt-3">
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        Tipo de Insumos
                    </Label>
                    <select
                        value={supplyData.supply_category ?? ''}
                        onChange={(e) =>
                            setSupplyData({
                                ...supplyData,
                                supply_category: e.target.value
                                    ? Number(e.target.value)
                                    : null,
                            })
                        }
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                        <option value="">Selecione uma área</option>
                        {SupplyTypeOptions.map((tipos) => (
                            <option key={tipos.id} value={tipos.id}>
                                {tipos.name}
                            </option>
                        ))}
                    </select>
                </div>

                <TextField name="supply_quantity" className="mt-3">
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        Quantidade
                    </Label>
                    <Input
                        type="number"
                        className="w-full px-3 py-2 border rounded-md shadow-sm"
                        value={supplyData.supply_quantity}
                        onChange={(e) =>
                            setSupplyData({
                                ...supplyData,
                                supply_quantity: e.target.value,
                            })
                        }
                    />
                    <FieldError />
                </TextField>

                <TextField name="supply_cost_price" className="mt-3">
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        Preço de custo
                    </Label>
                    <Input
                        type="number"
                        className="w-full px-3 py-2 border rounded-md shadow-sm"
                        value={supplyData.supply_cost_price}
                        onChange={(e) =>
                            setSupplyData({
                                ...supplyData,
                                supply_cost_price: e.target.value,
                            })
                        }
                    />
                    <FieldError />
                </TextField>

                <div className="flex w-1/2 justify-self-end mt-4 gap-2">
                    <Button
                        type="button"
                        className="w-full px-1 py-1 rounded-md shadow-md border border-red-600 hover:bg-red-700 hover:text-white text-red-600 font-semibold"
                        onPress={handleDelete}>
                        Deletar
                    </Button>
                    <Button
                        type="submit"
                        className="w-full px-1 py-1 rounded-md shadow-md bg-green-600 hover:bg-green-700 text-white font-semibold">
                        Salvar
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default function SupplyUpdate() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <UpdateSupplyWrapper />
        </Suspense>
    )
}
