'use client'
import {useEffect, useState} from 'react'
import {AriaTable} from '@/components/Table'
import {verifyFarmbyId} from '@/utils/utilityFunctions'
import {SupplyManagement, supplyType} from '@/classes/SupplyManagement'
import {Button} from 'react-aria-components'

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

export default function SupplyControl() {
    const [supplyList, setSupplyList] = useState<supplyType[]>([])

    useEffect(() => {
        const fetchSupplies = async () => {
            const supplyManagement = new SupplyManagement()
            const farmId = verifyFarmbyId()
            const supplies =
                await supplyManagement.listAllSuppliesByFarm(farmId)
            setSupplyList(supplies ?? [])
        }

        fetchSupplies()
    }, [])

    return (
        <div className="min-h-screen flex justify-center items-start bg-white">
            <div className="w-full max-w-4xl px-4">
                <div className="flex justify-between items-center w-full">
                    <h1 className="text-xl font-bold">Lista de Insumos</h1>
                    <a href="/supplyCreation">
                        <Button
                            onPress={() =>
                                (window.location.href = '/supplyCreation')
                            }
                            className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 mt-2">
                            Adicionar
                        </Button>
                    </a>
                </div>
                <AriaTable tipo="supply" dados={supplyList} />
            </div>
        </div>
    )
}
