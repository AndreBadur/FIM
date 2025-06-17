'use client'

import {TaskManagement, taskType} from '@/classes/TaskManagement'
import {AriaTable} from '@/components/Table'
import {verifyFarmbyId} from '@/utils/utilityFunctions'
import {useEffect, useState} from 'react'
import {Button} from 'react-aria-components'

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

export default function TaskControl() {
    const [taskList, setTaskList] = useState<taskType[]>([])

    useEffect(() => {
        const fetchSupplies = async () => {
            const taskManagement = new TaskManagement()
            const farmId = verifyFarmbyId()
            const tasks = await taskManagement.listAllTasksByFarm(farmId)
            setTaskList(tasks ?? [])
        }

        fetchSupplies()
    }, [])

    return (
        <div className="min-h-screen flex justify-center items-start bg-white">
            <div className="w-full max-w-4xl px-4">
                <div className="flex justify-between items-center w-full">
                    <h1 className="text-xl font-bold">Lista de Tarefas</h1>
                    <a href="/taskCreation">
                        <Button
                            onPress={() =>
                                (window.location.href = '/taskCreation')
                            }
                            className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 mt-2">
                            Adicionar
                        </Button>
                    </a>
                </div>
                <AriaTable tipo="task" dados={taskList} />
            </div>
        </div>
    )
}
