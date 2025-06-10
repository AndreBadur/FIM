'use client'

import {EmployeeManagement, employeeType} from '@/classes/EmployeeManagement'
import {FarmManagement} from '@/classes/FarmManagements'
import {verificarFazendeiro} from '@/utils/utilityFunctions'
import {useSearchParams} from 'next/navigation'
import {Suspense, useEffect, useState} from 'react'
import {
    Button,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
    Key,
} from 'react-aria-components'

const employeeManagement = new EmployeeManagement()
const farmManagement = new FarmManagement()

function UpdateWrapper() {
    const searchParams = useSearchParams()
    const id_employee = searchParams.get('id')
    const id_farmer = verificarFazendeiro()

    const [employeeData, setEmployeeData] = useState({
        name: '',
        cpf: '',
        cost_per_hour: '',
        hours_worked: '',
        id_farm: null as Key | null,
    })

    const [farmOptions, setFarmOptions] = useState<
        {id: number; name: string}[]
    >([])

    useEffect(() => {
        const fetchFarms = async () => {
            const farms = await farmManagement.listAllFarmsByFarmer(
                verificarFazendeiro(),
            )
            if (farms) {
                const options = farms.map((farm) => ({
                    id: farm.id_farm,
                    name: farm.corporate_name,
                }))
                setFarmOptions(options)
            }
        }

        fetchFarms()
    }, [])

    useEffect(() => {
        const fetchEmployee = async () => {
            if (!id_employee) return

            const employee =
                await employeeManagement.findUniqueEmployeeByEmployeeId(
                    id_farmer,
                    id_employee,
                )

            if (employee) {
                setEmployeeData({
                    name: employee.name ?? '',
                    cpf: employee.cpf ?? '',
                    cost_per_hour: employee.cost_per_hour?.toString() ?? '',
                    hours_worked: employee.hours_worked?.toString() ?? '',
                    id_farm: employee.id_farm?.toString() ?? null,
                })
            }
        }

        fetchEmployee()
    }, [id_employee])

    if (!id_employee) return <div>Erro: id não fornecido</div>

    const handleUpdate = async () => {
        const infoData: employeeType = {
            name: employeeData.name,
            cpf: employeeData.cpf,
            cost_per_hour: Number(employeeData.cost_per_hour),
            hours_worked: Number(employeeData.hours_worked),
            id_farm: Number(employeeData.id_farm),
        }

        await employeeManagement.updateEmployeeByEmployeeId(
            infoData,
            id_farmer,
            id_employee,
        )
        window.location.href = '/farmEmployeeControl'
    }

    const handleDelete = async () => {
        await employeeManagement.deleteEmployeeByEmployeeId(
            id_farmer,
            id_employee,
        )
        window.location.href = '/farmEmployeeControl'
    }

    return (
        <div className="flex flex-row items-center justify-center h-full w-full">
            <Form
                className="w-[320px] rounded-md p-4 shadow-xl"
                onSubmit={(e) => {
                    e.preventDefault()
                    handleUpdate()
                }}>
                <TextField name="name">
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        Nome
                    </Label>
                    <Input
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        value={employeeData.name}
                        onChange={(e) =>
                            setEmployeeData({
                                ...employeeData,
                                name: e.target.value,
                            })
                        }
                    />
                    <FieldError />
                </TextField>

                <TextField name="cpf" className="mt-3">
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        CPF
                    </Label>
                    <Input
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        value={employeeData.cpf}
                        onChange={(e) =>
                            setEmployeeData({
                                ...employeeData,
                                cpf: e.target.value,
                            })
                        }
                    />
                    <FieldError />
                </TextField>

                <TextField name="cost_per_hour" className="mt-3">
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        Custo por hora
                    </Label>
                    <Input
                        type="number"
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        value={employeeData.cost_per_hour}
                        onChange={(e) =>
                            setEmployeeData({
                                ...employeeData,
                                cost_per_hour: e.target.value,
                            })
                        }
                    />
                    <FieldError />
                </TextField>

                <TextField name="hours_worked" className="mt-3">
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        Horas trabalhadas
                    </Label>
                    <Input
                        type="number"
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        value={employeeData.hours_worked}
                        onChange={(e) =>
                            setEmployeeData({
                                ...employeeData,
                                hours_worked: e.target.value,
                            })
                        }
                    />
                    <FieldError />
                </TextField>

                <div className="mt-3">
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        Fazenda
                    </Label>
                    <select
                        value={employeeData.id_farm ?? ''}
                        onChange={(e) =>
                            setEmployeeData({
                                ...employeeData,
                                id_farm: e.target.value
                                    ? Number(e.target.value)
                                    : null,
                            })
                        }
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                        <option value="">Selecione uma fazenda</option>
                        {farmOptions.map((farm) => (
                            <option key={farm.id} value={farm.id}>
                                {farm.name}
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

export default function EmployeeUpdate() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <UpdateWrapper />
        </Suspense>
    )
}
