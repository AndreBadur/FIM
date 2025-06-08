'use client'

import {EmployeeManagement, employeeType} from '@/classes/EmployeeManagement'
import {verifyFarmbyId} from '@/utils/utilityFunctions'
// import {verifyFarmbyId} from '@/utils/utilityFunctions'
import React from 'react'

import {
    Button,
    FieldError,
    Form,
    Input,
    Label,
    Link,
    TextField,
} from 'react-aria-components'

const employeeManagement = new EmployeeManagement()

export default function EmployeeControl() {
    return (
        <div className="flex flex-row items-center justify-center h-full w-full">
            <Form
                className="w-[320px] rounded-md p-4 shadow-xl"
                onSubmit={async (e) => {
                    e.preventDefault()

                    const data = JSON.stringify(
                        Object.fromEntries(new FormData(e.currentTarget)),
                    )

                    console.log(data)

                    const parseData: employeeType = JSON.parse(data)

                    await employeeManagement.createEmployee(
                        {
                            id_farm: Number(verifyFarmbyId()),
                            cpf: parseData.cpf,
                            name: parseData.name,
                            cost_per_hour: Number(parseData.cost_per_hour),
                            hours_worked: Number(parseData.hours_worked),
                        },
                        '1',
                        // verifyFarmbyId(),
                    )

                    window.location.href = '/farmEmployeeControl'
                }}>
                <TextField name="name" isRequired>
                    <div className="flex flex-col">
                        <Label className="block text-sm font-medium text-black-700 mb-1">
                            Nome do Funcionário
                        </Label>
                        <Input className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                        <FieldError />
                    </div>
                </TextField>

                <TextField name="cpf" isRequired>
                    <div className="flex flex-col">
                        <Label className="block text-sm font-medium text-black-700 mb-1 mt-2">
                            CPF
                        </Label>
                        <Input className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                        <FieldError />
                    </div>
                </TextField>

                <TextField name="cost_per_hour" isRequired>
                    <div className="flex flex-col">
                        <Label className="block text-sm font-medium text-black-700 mb-1 mt-2">
                            Custo por Hora
                        </Label>
                        <Input
                            type="number"
                            min={0}
                            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                        <FieldError />
                    </div>
                </TextField>

                <TextField name="hours_worked" isRequired>
                    <div className="flex flex-col">
                        <Label className="block text-sm font-medium text-black-700 mb-1 mt-2">
                            Horas Trabalhadas
                        </Label>
                        <Input
                            type="number"
                            min={0}
                            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                        <FieldError />
                    </div>
                </TextField>

                <div className="flex w-1/2 justify-self-end mt-4 gap-2">
                    <Link href="/farmEmployeeControl">
                        <Button className="w-full h-full px-1 py-1 rounded-md shadow-md border border-red-600 hover:bg-red-700 hover:text-white text-red-600 font-semibold">
                            Cancelar
                        </Button>
                    </Link>

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
