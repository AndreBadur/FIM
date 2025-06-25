'use client'

import React, {useEffect, useState} from 'react'
import {TaskManagement, taskStatus} from '@/classes/TaskManagement'
import {verificarFazendeiro, verifyFarmbyId} from '@/utils/utilityFunctions'
import {
    Button,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
    Link,
} from 'react-aria-components'
import {EmployeeManagement, employeeType} from '@/classes/EmployeeManagement'
import {SupplyManagement, supplyType} from '@/classes/SupplyManagement'
import {MachineryManagement, machineryType} from '@/classes/MachineryManagement'

// Instância da classe de gerenciamento de tarefas
const taskManagement = new TaskManagement()

export default function TaskCreation() {
    const [employee, setEmployees] = useState<employeeType[]>([])
    const [supplies, setSupplies] = useState<supplyType[]>([])
    const [machinery, setMachineries] = useState<machineryType[]>([])
    const [status, setStatus] = useState<taskStatus>(taskStatus.to_do)

    // Aqui você pode definir opções de funcionários, insumos, máquinas vindas da API futuramente

    useEffect(() => {
        const fetchFarms = async () => {
            const employeeManagement = new EmployeeManagement()
            const employees = await employeeManagement.listAllEmployeesByFarmer(
                verificarFazendeiro(),
            )
            setEmployees(employees ?? [])

            const supplyManagement = new SupplyManagement()
            const supplies =
                await supplyManagement.listAllSuppliesByFarm(verifyFarmbyId())
            setSupplies(supplies ?? [])

            const machineryManagement = new MachineryManagement()
            const machinery =
                await machineryManagement.listAllMachineriesByFarm(
                    verifyFarmbyId(),
                )
            setMachineries(machinery ?? [])
        }

        fetchFarms()
    }, [])

    return (
        <div className="flex flex-row items-center justify-center h-full w-full">
            <Form
                className="w-[320px] rounded-md p-4 shadow-xl"
                onSubmit={async (e) => {
                    e.preventDefault()
                    const formData = new FormData(e.currentTarget)
                    const data = Object.fromEntries(formData)

                    const farmId = Number(verifyFarmbyId())

                    await taskManagement.createTask({
                        id_farm: farmId,
                        id_employee: Number(data.id_employee),
                        id_supply: Number(data.id_supply),
                        id_machinery: Number(data.id_machinery),
                        supply_quantity: Number(data.supply_quantity),
                        conclusion_date: new Date(
                            data.conclusion_date as string,
                        ),
                        status: status,
                    })

                    window.location.href = '/taskControl'
                }}>
                <TextField name="conclusion_date" isRequired>
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        Data de Conclusão
                    </Label>
                    <Input
                        type="date"
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    <FieldError />
                </TextField>

                <Label className="block text-sm font-medium text-black-700 mb-1">
                    Funcionário
                </Label>
                <select
                    name="id_employee"
                    className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    {employee.map((emp) => (
                        <option key={emp.id_employee} value={emp.id_employee}>
                            {emp.name}
                        </option>
                    ))}
                </select>

                <Label className="block text-sm font-medium text-black-700 mb-1">
                    Insumo
                </Label>
                <select
                    name="id_supply"
                    className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    {supplies.map((supply) => (
                        <option
                            key={supply.supply_categories.category_id}
                            value={supply.supply_id}>
                            {supply.supply_categories.category_name}
                        </option>
                    ))}
                </select>

                <TextField name="supply_quantity" isRequired>
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        Quantidade de Insumo
                    </Label>
                    <Input
                        type="number"
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    <FieldError />
                </TextField>

                <Label className="block text-sm font-medium text-black-700 mb-1">
                    Máquina
                </Label>
                <select
                    name="id_machinery"
                    className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    {machinery.map((mac) => (
                        <option key={mac.id_machinery} value={mac.id_machinery}>
                            {mac.name}
                        </option>
                    ))}
                </select>

                <Label className="block text-sm font-medium text-black-700 mb-1">
                    Status da Tarefa
                </Label>
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value as taskStatus)}
                    className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    {' '}
                    {Object.values(taskStatus).map((statusValue) => (
                        <option key={statusValue} value={statusValue}>
                            {statusValue}
                        </option>
                    ))}
                </select>

                <div className="flex w-full justify-between gap-2">
                    <Link href="/taskControl">
                        <Button className="w-full px-1 py-1 rounded-md shadow-md border border-red-600 hover:bg-red-700 hover:text-white text-red-600 font-semibold">
                            Cancelar
                        </Button>
                    </Link>

                    <Button
                        type="submit"
                        className="w-full px-1 py-1 rounded-md shadow-md bg-green-600 hover:bg-green-700 text-white font-semibold">
                        Salvar
                    </Button>
                </div>
            </Form>
        </div>
    )
}
