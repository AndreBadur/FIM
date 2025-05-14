'use client'

import {AreaManagement} from '@/classes/AreaManagement'

const areaManagement = new AreaManagement()

// const creation = await areaManagement.createArea({
//     id_type_area: 1,
//     id_farm: 22,
//     name: 'Area de descanso',
//     description: 'Essa area possui redes e sombra',
//     features: 'Features da Area',
//     capacity: 15000,
//     status: true,
// })
// console.log(creation)

const readAll = await areaManagement.listAllAreasByFarm('22')
console.log(readAll)

// const update = await areaManagement.updateArea(
//     {
//         id_type_area: 1,
//         id_farm: 22,
//         name: 'Area de gado',
//         description: 'Essa area possui vacas e bezerros',
//         features: 'Features da Area',
//         capacity: 15000,
//         status: true,
//     },
//     {id_area: '3'},
// )
// console.log(update)

// const readOneArea = await areaManagement.findUniqueAreaByAreaId('22', '3')
// console.log(readOneArea)

// const deleteArea = await areaManagement.deleteUniqueAreaByAreaId('22', '3')
// console.log(deleteArea)

export default function areaControl() {
    return (
        <div>
            <h1 className="flex items-center">AREA CONTROL</h1>
        </div>
    )
}
