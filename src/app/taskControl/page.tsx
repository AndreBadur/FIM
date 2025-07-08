'use client'

import {TaskManagement, taskType} from '@/classes/TaskManagement'
import {AriaTable} from '@/components/Table'
import {verifyFarmbyId} from '@/utils/utilityFunctions'
import {useRouter} from 'next/navigation'
import {useEffect, useState} from 'react'
import {Button} from 'react-aria-components'

export default function TaskControl() {
    const [taskList, setTaskList] = useState<taskType[]>([])
    const router = useRouter()

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
                <AriaTable
                    columns={[
                        'ID Fazenda',
                        'ID Empregado',
                        'ID Inusmo ',
                        'ID Maquinário',
                        'Quantidade do Insumo',
                        'Data de Conclusão',
                        'Status',
                    ]}
                    keys={[
                        'id_farm',
                        'id_employee',
                        'id_supply',
                        'id_machinery',
                        'supply_quantity',
                        'conclusion_date',
                        'status',
                    ]}
                    onRowClick={(item) =>
                        router.push(`/taskUpdate?id=${item['id_task']}`)
                    }
                    dados={taskList}
                />
            </div>
        </div>
    )
}
