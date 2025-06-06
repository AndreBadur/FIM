'use client'

import {MachineryManagement, machineryType} from '@/classes/MachineryManagement'
import {FimComboBox} from '@/components/FimComboBox'
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

const machineryManagement = new MachineryManagement()

export default function MachineryControl() {
    const FarmOptions = [
        {id: 22, name: 'Fazenda azul'},
        {id: 87, name: 'Fazenda verde'},
        {id: 88, name: 'Fazenda amarela'},
    ]

    const MachineryTypeOptions = [
        {id: 1, name: 'Ceifadeira'}, //Só a ceifadeira funciona. Provavelmente por não existir outros ids no banco de tipos de maquinários
        {id: 2, name: 'Regadora'},
        {id: 3, name: 'Trator'},
    ]

    const [farmId, setFarmId] = React.useState<Key | null>(null)
    const [machineryTypeId, setMachineryTypeId] = React.useState<Key | null>(
        null,
    )

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

                        const parseData: machineryType = JSON.parse(data)

                        return await machineryManagement.createMachinery({
                            id_farm: Number(farmId),
                            id_machinery_type: Number(machineryTypeId),
                            cost_per_hour: Number(parseData.cost_per_hour),
                            last_maintenance_date: new Date(
                                parseData.last_maintenance_date,
                            ),
                            maintenance_interval: Number(
                                parseData.maintenance_interval,
                            ),
                            model: parseData.model,
                            name: parseData.name,
                            status: parseData.status,
                        })
                    }}>
                    <TextField name="name" isRequired>
                        <div className="flex flex-col">
                            <Label>Nome da Máquina</Label>
                            <Input />
                            <FieldError />
                        </div>
                    </TextField>

                    <TextField name="model" isRequired>
                        <div className="flex flex-col">
                            <Label>Modelo</Label>
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

                    <TextField name="maintenance_interval" isRequired>
                        <div className="flex flex-col">
                            <Label>Intervalo de Manutenção (dias)</Label>
                            <Input type="number" min={0} />
                            <FieldError />
                        </div>
                    </TextField>

                    <TextField name="last_maintenance_date" isRequired>
                        <div className="flex flex-col">
                            <Label>Última Manutenção</Label>
                            <Input type="date" />
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

                    <FimComboBox
                        label="Tipo de Máquina"
                        defaultItems={MachineryTypeOptions}
                        onSelectionChange={setMachineryTypeId}
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
                            <a href="/machineryControl">
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
