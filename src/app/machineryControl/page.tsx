'use client'

// import {
//     MachineryManagement,
//     machineryStatus,
// } from '@/classes/MachineryManagement'

// const machineryManagement = new MachineryManagement()

// const create = await machineryManagement.createMachinery({
//     cost_per_hour: 2,
//     id_farm: 22,
//     id_machinery_type: 1,
//     last_maintenance_date: new Date('2025-05-14'),
//     maintenance_interval: 2,
//     model: 'trato',
//     name: 'trator do coelho',
//     status: machineryStatus.inactive,
// })
// console.log(await create)

// const read = await machineryManagement.listAllMachineriesByFarm('22')
// console.log(await read)

// await machineryManagement.updateMachineryById(
//     {
//         cost_per_hour: 10,
//         id_farm: 22,
//         id_machinery_type: 1,
//         last_maintenance_date: new Date('2025-05-23'),
//         maintenance_interval: 10,
//         model: 'tratorado',
//         name: 'super trator 2000',
//         status: machineryStatus.onMaintenance,
//     },
//     {
//         id_machinery: '3',
//     },
// )

// const readOnly = await machineryManagement.findMachineryById({
//     id_farm: '22',
//     id_machinery: '3',
// })
// console.log(readOnly)

// await machineryManagement.deleteUniqueMachineryId({
//     id_farm: '22',
//     id_machinery: '3',
// })

export default function MachineryControl() {
    return (
        <div>
            <div className="flex">
                <div className="flex items-center justify-center flex-1 bg-black h-screen">
                    <h1 className="text-white text-2xl">Maquinários!</h1>
                </div>
            </div>
        </div>
    )
}
