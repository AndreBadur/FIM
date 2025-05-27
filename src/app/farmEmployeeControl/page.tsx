'use client'
// import {EmployeeManagement} from '@/classes/EmployeeManagement'

// const employeeManagement = new EmployeeManagement()

// const create = await employeeManagement.createEmployee(
//     {
//         cost_per_hour: 1,
//         cpf: '1233322211',
//         hours_worked: 40,
//         id_farm: 22,
//         name: 'Mithril',
//     },
//     '1',
// )
// console.log(await create)
// await employeeManagement.updateEmployeeByEmployeeId(
//     {
//         cost_per_hour: 12,
//         cpf: '1233322211',
//         hours_worked: 40,
//         id_farm: 22,
//         name: 'Mithril',
//     },
//     '1',
//     '7',
// )

// const employee = await employeeManagement.findUniqueEmployeeByEmployeeId('1', '7')

// await employeeManagement.deleteEmployeeByEmployeeId('1', '7')

// FUNCIONANDO
// console.log(await employeeManagement.listAllEmployeesByFarmer('1'))

export default function FarmEmployeeControl() {
    return (
        <div>
            <div className="flex">
                <div className="flex items-center justify-center flex-1 bg-black h-screen">
                    <h1 className="text-white text-2xl">Funcionários!</h1>
                </div>
            </div>
        </div>
    )
}
