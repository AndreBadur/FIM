'use client'

import {EmployeeManagement, employeeType} from '@/classes/EmployeeManagement'
import {FimComboBox} from '@/components/FimComboBox'
// import {verifyFarmbyId} from '@/utils/utilityFunctions'
import React from 'react'

import {
    Button,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
    ListBoxItem,
    Key,
} from 'react-aria-components'

const employeeManagement = new EmployeeManagement()

export default function EmployeeControl() {
    const FarmOptions = [
        {id: 22, name: 'Fazenda azul'},
        {id: 61, name: 'Fazenda verde'},
        {id: 62, name: 'Fazenda amarela'},
    ]

    const [farmId, setFarmId] = React.useState<Key | null>(null)

    return (
        <div>
            <div className="flex items-center justify-center flex-1 bg-gray-200 h-screen">
                <Form
                    onSubmit={async (e) => {
                        e.preventDefault()

                        const data = JSON.stringify(
                            Object.fromEntries(new FormData(e.currentTarget)),
                        )

                        console.log(data)

                        const parseData: employeeType = JSON.parse(data)

                        await employeeManagement.createEmployee(
                            {
                                id_farm: Number(farmId),
                                cpf: parseData.cpf,
                                name: parseData.name,
                                cost_per_hour: Number(parseData.cost_per_hour),
                                hours_worked: Number(parseData.hours_worked),
                            },
                            '1',
                            // verifyFarmbyId(),
                        )
                    }}>
                    <TextField name="name" isRequired>
                        <div className="flex flex-col">
                            <Label>Nome do Funcionário</Label>
                            <Input />
                            <FieldError />
                        </div>
                    </TextField>

                    <TextField name="cpf" isRequired>
                        <div className="flex flex-col">
                            <Label>CPF</Label>
                            <Input />
                            <FieldError />
                        </div>
                    </TextField>

                    <TextField name="cost_per_hour" isRequired>
                        <div className="flex flex-col">
                            <Label>Custo por Hora</Label>
                            <Input type="number" min={0} />
                            <FieldError />
                        </div>
                    </TextField>

                    <TextField name="hours_worked" isRequired>
                        <div className="flex flex-col">
                            <Label>Horas Trabalhadas</Label>
                            <Input type="number" min={0} />
                            <FieldError />
                        </div>
                    </TextField>

                    <FimComboBox
                        label="Fazenda"
                        defaultItems={FarmOptions}
                        onSelectionChange={setFarmId}
                        allowsCustomValue={false}>
                        {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
                    </FimComboBox>

                    <div className="flex justify-center space-x-4">
                        <div className="flex bg-green-300 rounded justify-center w-1/5 mt-4">
                            <Button type="submit" className="w-full h-full">
                                Criar
                            </Button>
                        </div>
                        <div className="flex bg-red-300 rounded justify-center w-2/5 mt-4">
                            <a href="/farmEmployeeControl">
                                <Button className="w-full h-full">
                                    Cancelar
                                </Button>
                            </a>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
}
