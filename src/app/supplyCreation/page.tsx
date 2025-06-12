'use client'

// import {SupplyManagement} from '@/classes/SupplyManagement'

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

export default function SupplyCreation() {
    return (
        <div className="bg-yellow-600">
            <h1>FIND SUPPLY</h1>
        </div>
    )
}
