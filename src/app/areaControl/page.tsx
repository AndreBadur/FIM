'use client'

import { AreaManagement } from '@/classes/AreaManagement'

const areaManagement = new AreaManagement()

const creation = areaManagement.createArea({
    id_type_area: 1,
    id_farm: 22,
    name: 'Area de descanso',
    description: 'Essa area possui redes e sombra',
    features: 'Features da Area',
    capacity: 15000,
    status: true,
})
console.log(creation)

// const readAll = areaManagement.listAllAreas()
// console.log(readAll)

// const update = areaManagement.areaUpdate({
//     id_type_area: 1,
//     id_farm: 22,
//     name: 'Area de gado',
//     description: 'Essa area possui vacas e bezerros',
//     features: 'Features da Area',
//     capacity: 15000,
//     status: true,
// })
// console.log(update)

// const readOneArea = areaManagement.findUniqueArea({
//     id_area: 1,
// })
// console.log(readOneArea)

// const deleteArea = areaManagement.deleteUniqueArea({
//     id_area: 1,
// })

export default function areaControl() {
    return (
        <div>
            <h1 className="flex items-center">AREA CONTROL</h1>
        </div>
    )
}
