'use client'

import {AreaManagement, areaType} from '@/classes/AreaManagement'
import {verifyFarmbyId} from '@/utils/utilityFunctions'
import React from 'react'

const areaManagement = new AreaManagement()

import {
    Button,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
    Link,
} from 'react-aria-components'

export default function AreaControl() {
    const AreaOptions = [
        {id: 1, name: 'Área de descanso'},
        {id: 2, name: 'Área de cultivo'},
        {id: 3, name: 'Área de estoque'},
    ]

    const [area, setAreaData] = React.useState<{
        id_type_area: number | null
    }>({
        id_type_area: null,
    })

    console.log(area.id_type_area)

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

                    const parseData: areaType = JSON.parse(data)
                    window.location.href = '/areaControl'

                    return await areaManagement.createArea({
                        description: parseData.description,
                        capacity: parseData.capacity,
                        features: parseData.features,
                        id_farm: Number(verifyFarmbyId()),
                        id_type_area: Number(area.id_type_area),
                        name: parseData.name,
                        status: true,
                    })
                }}>
                <TextField name="name" isRequired>
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        Nome
                    </Label>
                    <Input className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                    <FieldError />
                </TextField>

                <TextField name="description" isRequired>
                    <Label>Descrição</Label>
                    <Input className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                    <FieldError />
                </TextField>

                <TextField name="capacity" isRequired>
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        Capacidade
                    </Label>
                    <Input className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                    <FieldError />
                </TextField>

                <TextField name="features" isRequired>
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        Características
                    </Label>
                    <Input className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                    <FieldError />
                </TextField>

                <div className="mt-3">
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        Tipo de área
                    </Label>
                    <select
                        value={area.id_type_area ?? ''}
                        onChange={(e) =>
                            setAreaData({
                                ...area,
                                id_type_area: e.target.value
                                    ? Number(e.target.value)
                                    : null,
                            })
                        }
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                        <option value="">Selecione uma área</option>
                        {AreaOptions.map((areas) => (
                            <option key={areas.id} value={areas.id}>
                                {areas.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex w-1/2 justify-self-end mt-4 gap-2">
                    <Link href="/areaControl">
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
