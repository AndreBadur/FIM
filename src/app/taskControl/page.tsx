'use client'
// import {TaskManagement, taskStatus} from '@/classes/TaskManagement'

// const taskManagement = new TaskManagement()

// const createTask = taskManagemente.createTask({
//     id_farm: 22,
//     id_employee: 2,
//     id_supply: 4,
//     id_machinery: 4,
//     supply_quantity: 100,
//     conclusion_date: new Date('2025-06-23'),
//     status: taskStatus.to_do,
// })
// console.log(await createTask)

// const updateTask = taskManagemente.updateTaskByTaskId(
//     {
//         conclusion_date: new Date('2025-06-23'),
//     },
//     '22',
//     '7',
// )
// await updateTask

// const listTasks = await taskManagemente.listAllTasksByFarm('22')
// if(listTasks)
// console.log(listTasks[0].employee.name)

// const getOneTask = await taskManagement.findTaskById('22', '7')
// console.log(getOneTask)

// const deleteOneTask = await taskManagement.deleteUniqueTaskById('22', '7')
// console.log(deleteOneTask)

// console.log(getOneTask)

export default function ResourceManagementControl() {
    return (
        <div>
            <div className="flex">
                <div className="flex items-center justify-center flex-1 bg-black h-screen">
                    <h1 className="text-white text-2xl">Tarefas!</h1>
                </div>
            </div>
        </div>
    )
}
