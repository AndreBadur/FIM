'use client'

import {EmployeeManagement} from '@/classes/EmployeeManagement'
import {MachineryManagement} from '@/classes/MachineryManagement'
// import {SupplyManagement} from '@/classes/SupplyManagement'
import {TaskManagement, taskStatus, taskType} from '@/classes/TaskManagement'
import {verificarFazendeiro, verifyFarmbyId} from '@/utils/utilityFunctions'
import {useSearchParams} from 'next/navigation'
import {Suspense, useEffect, useState} from 'react'
import {
    Button,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from 'react-aria-components'

const taskManagement = new TaskManagement()
const employeeManagement = new EmployeeManagement()
// const supplyManagement = new SupplyManagement()
const machineryManagement = new MachineryManagement()

function UpdateWrapper() {
    const searchParams = useSearchParams()
    const id_task = searchParams.get('id')
    const id_farmer = verificarFazendeiro()

    const [employee, setEmployee] = useState<{id: number; name: string}[]>([])
    // const [supply, setSupply] = useState<{id: number; name: string}[]>([])
    const [machinery, setMachinery] = useState<{id: number; name: string}[]>([])

    const [taskData, setTaskData] = useState<Partial<taskType>>({
        id_farm: Number(id_farmer),
        id_employee: 0,
        id_supply: 0,
        id_machinery: 0,
        supply_quantity: 0,
        conclusion_date: new Date(),
        status: taskStatus.to_do,
    })

    useEffect(() => {
        const fetchTask = async () => {
            if (!id_task) return

            const task = await taskManagement.findTaskById(
                verificarFazendeiro(),
                id_task,
            )

            if (task) {
                setTaskData({
                    id_farm: task.id_farm,
                    id_employee: task.id_employee,
                    id_supply: task.id_supply,
                    id_machinery: task.id_machinery,
                    supply_quantity: task.supply_quantity,
                    conclusion_date: new Date(task.conclusion_date),
                    status: task.status,
                })
            }
        }

        fetchTask()
    }, [id_task])

    useEffect(() => {
        const fetchEmployees = async () => {
            const employees = await employeeManagement.listAllEmployeesByFarmer(
                verificarFazendeiro(),
            )
            if (employees) {
                const options = employees.map((employee) => ({
                    id: employee.id_employee!,
                    name: employee.name,
                }))
                setEmployee(options)
            }
        }

        fetchEmployees()
    }, [])

    // useEffect(() => {
    //     const fetchSupplies = async () => {
    //         const supply =
    //             await supplyManagement.listAllSuppliesByFarm(verifyFarmbyId())
    //         if (supply) {
    //             const options = supply.map((sup) => ({
    //                 id: sup.supply_id!,
    //                 name: sup.supply_categories.category_name,
    //             }))
    //             setSupply(options)
    //         }
    //     }

    //     fetchSupplies()
    // }, [])

    const SupplyTypeOptions = [
        {id: 1, name: 'Café'},
        {id: 2, name: 'Trigo'},
    ]

    useEffect(() => {
        const fetchMachinery = async () => {
            const machineries =
                await machineryManagement.listAllMachineriesByFarm(
                    verifyFarmbyId(),
                )
            if (machineries) {
                const options = machineries.map((mac) => ({
                    id: Number(mac.id_machinery)!,
                    name: mac.name,
                }))
                setMachinery(options)
            }
        }

        fetchMachinery()
    }, [])

    if (!id_task) return <div>Erro: id não fornecido</div>

    const handleUpdate = async () => {
        await taskManagement.updateTaskByTaskId(taskData, id_farmer, id_task)
        window.location.href = '/taskControl'
    }

    const handleDelete = async () => {
        await taskManagement.deleteUniqueTaskById(
            verificarFazendeiro(),
            id_task,
        )
        window.location.href = '/taskControl'
    }

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
                        ID Funcipnário
                    </Label>
                    <select
                        value={taskData.id_employee ?? ''}
                        onChange={(e) =>
                            setTaskData({
                                ...taskData,
                                id_employee: e.target.value
                                    ? Number(e.target.value)
                                    : undefined,
                            })
                        }
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                        <option value="">Selecione um Funcionário</option>
                        {employee.map((emp) => (
                            <option key={emp.id} value={emp.id}>
                                {emp.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mt-3">
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        Insumo
                    </Label>
                    <select
                        value={taskData.id_supply}
                        onChange={(e) =>
                            setTaskData({
                                ...taskData,
                                id_supply: e.target.value
                                    ? Number(e.target.value)
                                    : undefined,
                            })
                        }
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                        <option value="">Selecione um Insumo</option>
                        {SupplyTypeOptions.map((sup) => (
                            <option key={sup.id} value={sup.id}>
                                {sup.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* <TextField name="id_supply" className="mt-3">
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        ID Insumo
                    </Label>
                    <Input
                        type="number"
                        value={taskData.id_supply ?? ''}
                        onChange={(e) =>
                            setTaskData({
                                ...taskData,
                                id_supply: Number(e.target.value),
                            })
                        }
                        className="w-full px-3 py-2 border rounded-md"
                    />
                    <FieldError />
                </TextField> */}

                <div className="mt-3">
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        Maquinário
                    </Label>
                    <select
                        value={taskData.id_machinery}
                        onChange={(e) =>
                            setTaskData({
                                ...taskData,
                                id_machinery: e.target.value
                                    ? Number(e.target.value)
                                    : undefined,
                            })
                        }
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                        <option value="">Selecione um Maquinário</option>
                        {machinery.map((mac) => (
                            <option key={mac.id} value={mac.id}>
                                {mac.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* <TextField name="id_machinery" className="mt-3">
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        ID Máquina
                    </Label>
                    <Input
                        type="number"
                        value={taskData.id_machinery ?? ''}
                        onChange={(e) =>
                            setTaskData({
                                ...taskData,
                                id_machinery: Number(e.target.value),
                            })
                        }
                        className="w-full px-3 py-2 border rounded-md"
                    />
                    <FieldError />
                </TextField> */}

                <TextField name="supply_quantity" className="mt-3">
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        Quantidade de insumo
                    </Label>
                    <Input
                        type="number"
                        value={taskData.supply_quantity ?? ''}
                        onChange={(e) =>
                            setTaskData({
                                ...taskData,
                                supply_quantity: Number(e.target.value),
                            })
                        }
                        className="w-full px-3 py-2 border rounded-md"
                    />
                    <FieldError />
                </TextField>

                <TextField name="conclusion_date" className="mt-3">
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        Data de conclusão
                    </Label>
                    <Input
                        type="date"
                        value={
                            taskData.conclusion_date
                                ? new Date(taskData.conclusion_date)
                                      .toISOString()
                                      .split('T')[0]
                                : ''
                        }
                        onChange={(e) =>
                            setTaskData({
                                ...taskData,
                                conclusion_date: new Date(e.target.value),
                            })
                        }
                        className="w-full px-3 py-2 border rounded-md"
                    />
                    <FieldError />
                </TextField>

                <div className="mt-3">
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        Status
                    </Label>
                    <select
                        value={taskData.status ?? ''}
                        onChange={(e) =>
                            setTaskData({
                                ...taskData,
                                status: e.target.value as taskStatus,
                            })
                        }
                        className="w-full px-3 py-2 border rounded-md">
                        {Object.values(taskStatus).map((status) => (
                            <option key={status} value={status}>
                                {status}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex w-1/2 justify-self-end mt-4 gap-2">
                    <Button
                        type="button"
                        className="w-full h-full px-1 py-1 rounded-md shadow-md border border-red-600 hover:bg-red-700 hover:text-white text-red-600 font-semibold"
                        onPress={handleDelete}>
                        Deletar
                    </Button>
                    <Button
                        type="submit"
                        className="w-full h-full px-1 py-1 rounded-md text-center shadow-md bg-green-600 hover:bg-green-700 text-white font-semibold">
                        Salvar
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default function TaskUpdate() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <UpdateWrapper />
        </Suspense>
    )
}
