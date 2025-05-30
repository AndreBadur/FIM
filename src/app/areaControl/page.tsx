'use client'

import {AreaManagement, areaType} from '@/classes/AreaManagement'
import {FimComboBox} from '@/components/FimComboBox'
import React from 'react'

const areaManagement = new AreaManagement()

// const creation = await areaManagement.createArea({
//     id_type_area: 1,
//     id_farm: 22,
//     name: 'Area de descanso',
//     description: 'Essa area possui redes e sombra',
//     features: 'Features da Area',
//     capacity: 15000,
//     status: true,
// })
// console.log(creation)

// const readAll = await areaManagement.listAllAreasByFarm('22')
// console.log(readAll)

// const update = await areaManagement.updateArea(
//     {
//         id_type_area: 1,
//         id_farm: 22,
//         name: 'Area de gado',
//         description: 'Essa area possui vacas e bezerros',
//         features: 'Features da Area',
//         capacity: 15000,
//         status: true,
//     },
//     {id_area: '3'},
// )
// console.log(update)

// const readOneArea = await areaManagement.findUniqueAreaById({
//     id_farm: '22',
//     id_area: '2',
// })
// console.log(readOneArea)

// const deleteArea = await areaManagement.deleteUniqueAreaByAreaId('22', '3')
// console.log(deleteArea)
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

export default function AreaControl() {
    const FarmOptions = [
        {id: 60, name: 'Fazenda azul'},
        {id: 61, name: 'Fazenda verde'},
        {id: 62, name: 'Fazenda amarela'},
    ]

    const AreaOptions = [
        {id: 1, name: 'Área de descanso'},
        {id: 2, name: 'Área de cultivo'},
        {id: 3, name: 'Área de estoque'},
    ]

    const [farmId, setFarmId] = React.useState<Key | null>(null)
    const [typeAreaId, setTypeAreaId] = React.useState<Key | null>(null)

    return (
        <div className="h-full">
            <div className="flex items-center justify-center flex-1 h-full">
                <div>
                    <div>
                        <h1 className="text-lg font-extrabold pb-5">
                            CRIAR NOVA ÁREA
                        </h1>
                    </div>
                    <Form
                        className="w-96"
                        onSubmit={async (e) => {
                            e.preventDefault()

                            const data = JSON.stringify(
                                Object.fromEntries(
                                    new FormData(e.currentTarget),
                                ),
                            )

                            console.log(data)

                            const parseData: areaType = JSON.parse(data)

                            return await areaManagement.createArea({
                                description: parseData.description,
                                capacity: parseData.capacity,
                                features: parseData.features,
                                id_farm: Number(farmId),
                                id_type_area: Number(typeAreaId),
                                name: parseData.name,
                                status: true,
                            })
                        }}>
                        <TextField name="name" isRequired>
                            <div className="flex flex-col">
                                <Label>Nome</Label>
                                <Input className="w-full px-3 py-2 mb-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent hover:border-green-500" />
                                <FieldError />
                            </div>
                        </TextField>

                        <TextField name="id_farm" isRequired>
                            <FimComboBox
                                label="Fazenda da área"
                                defaultItems={FarmOptions}
                                onSelectionChange={setFarmId}
                                className="w-full"
                                allowsCustomValue>
                                {(item) => (
                                    <ListBoxItem>{item.name}</ListBoxItem>
                                )}
                            </FimComboBox>
                            <FieldError />
                        </TextField>

                        <TextField name="description" isRequired>
                            <div className="flex flex-col">
                                <Label>Descrição</Label>
                                <Input className="w-full px-3 py-2 mb-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent hover:border-green-500" />
                                <FieldError />
                            </div>
                        </TextField>
                        <TextField name="capacity" isRequired>
                            <div className="flex flex-col">
                                <Label>Capacidade</Label>
                                <Input className="w-full px-3 py-2 mb-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent hover:border-green-500" />
                                <FieldError />
                            </div>
                        </TextField>
                        <TextField name="features" isRequired>
                            <div className="flex flex-col">
                                <Label>Características</Label>
                                <Input className="w-full px-3 py-2 mb-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent hover:border-green-500" />
                                <FieldError />
                            </div>
                        </TextField>
                        <TextField name="id_type_area" isRequired>
                            <FimComboBox
                                label="Tipo de área"
                                defaultItems={AreaOptions}
                                onSelectionChange={setTypeAreaId}
                                allowsCustomValue>
                                {(item) => (
                                    <ListBoxItem>{item.name}</ListBoxItem>
                                )}
                            </FimComboBox>
                            <FieldError />
                        </TextField>
                        <div className="flex justify-center">
                            <div className="flex bg-green-300 rounded justify-center mt-4">
                                <Button
                                    type="submit"
                                    className="w-40 px-1 py-3 rounded-md shadow-md bg-green-600 hover:bg-green-700 text-white font-semibold">
                                    Criar
                                </Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}
