'use client'

import {MachineryManagement, machineryType} from '@/classes/MachineryManagement'
import {verifyFarmbyId} from '@/utils/utilityFunctions'
import Link from 'next/link'
import React from 'react'

import {
    Button,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from 'react-aria-components'

const machineryManagement = new MachineryManagement()

export default function MachineryControl() {
    const MachineryTypeOptions = [
        {id: 1, name: 'Ceifadeira'}, //Só a ceifadeira funciona. Provavelmente por não existir outros ids no banco de tipos de maquinários
        {id: 2, name: 'Regadora'},
        {id: 3, name: 'Trator'},
    ]

    const [machineryTypeId, setMachineryTypeId] = React.useState<{
        id_machinery: number | null
    }>({
        id_machinery: null,
    })

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

                    const parseData: machineryType = JSON.parse(data)
                    window.location.href = '/machineryControl'

                    return await machineryManagement.createMachinery({
                        id_farm: Number(verifyFarmbyId()),
                        id_machinery_type: Number(machineryTypeId.id_machinery),
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
                        <Label className="block text-sm font-medium text-black-700 mb-1">
                            Nome da Máquina
                        </Label>
                        <Input className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                        <FieldError />
                    </div>
                </TextField>

                <TextField name="model" isRequired>
                    <div className="flex flex-col">
                        <Label className="block text-sm font-medium text-black-700 mb-1">
                            Modelo
                        </Label>
                        <Input className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                        <FieldError />
                    </div>
                </TextField>

                <TextField name="cost_per_hour" isRequired>
                    <div className="flex flex-col">
                        <Label className="block text-sm font-medium text-black-700 mb-1">
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

                <TextField name="maintenance_interval" isRequired>
                    <div className="flex flex-col">
                        <Label className="block text-sm font-medium text-black-700 mb-1">
                            Intervalo de Manutenção (dias)
                        </Label>
                        <Input
                            type="number"
                            min={0}
                            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                        <FieldError />
                    </div>
                </TextField>

                <TextField name="last_maintenance_date" isRequired>
                    <div className="flex flex-col">
                        <Label className="block text-sm font-medium text-black-700 mb-1">
                            Última Manutenção
                        </Label>
                        <Input
                            type="date"
                            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                        <FieldError />
                    </div>
                </TextField>

                <div className="mt-3">
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        Tipo de maquinários
                    </Label>
                    <select
                        value={machineryTypeId.id_machinery ?? ''}
                        onChange={(e) =>
                            setMachineryTypeId({
                                ...machineryTypeId,
                                id_machinery: e.target.value
                                    ? Number(e.target.value)
                                    : null,
                            })
                        }
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                        <option value="">Selecione uma área</option>
                        {MachineryTypeOptions.map((tipos) => (
                            <option key={tipos.id} value={tipos.id}>
                                {tipos.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex w-1/2 justify-self-end mt-4 gap-2">
                    <Link href="/machineryControl">
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
