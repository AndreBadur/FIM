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

const readAll = await areaManagement.listAllAreasByFarm('22')
console.log(readAll)

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

// const readOneArea = await areaManagement.findUniqueAreaByAreaId('22', '3')
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
    console.log(typeAreaId)

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
                    }}
                >
                    <TextField name="name" isRequired>
                        <div className="flex flex-col">
                            <Label>Nome</Label>
                            <Input />
                            <FieldError />
                        </div>
                    </TextField>

                    <TextField name="id_farm" isRequired>
                        <FimComboBox
                            label="Fazenda da área"
                            defaultItems={FarmOptions}
                            onSelectionChange={setFarmId}
                            allowsCustomValue
                        >
                            {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
                        </FimComboBox>
                        <FieldError />
                    </TextField>

                    <TextField name="description" isRequired>
                        <div className="flex flex-col">
                            <Label>Descrição</Label>
                            <Input />
                            <FieldError />
                        </div>
                    </TextField>
                    <TextField name="capacity" isRequired>
                        <div className="flex flex-col">
                            <Label>Capacidade</Label>
                            <Input />
                            <FieldError />
                        </div>
                    </TextField>
                    <TextField name="features" isRequired>
                        <div className="flex flex-col">
                            <Label>Características</Label>
                            <Input />
                            <FieldError />
                        </div>
                    </TextField>
                    <TextField name="id_type_area" isRequired>
                        <FimComboBox
                            label="Tipo de área"
                            defaultItems={AreaOptions}
                            onSelectionChange={setTypeAreaId}
                            allowsCustomValue
                        >
                            {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
                        </FimComboBox>
                        <FieldError />
                    </TextField>
                    <div className="flex justify-center">
                        <div className="flex bg-green-300 rounded justify-center w-3/5 mt-4">
                            <Button type="submit" className="w-full h-full">
                                Salvar alterações
                            </Button>
                            {/* <Button type="reset">Reset</Button> */}
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
}
