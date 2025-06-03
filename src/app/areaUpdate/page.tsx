'use client'

import {AreaManagement, areaType} from '@/classes/AreaManagement'
import {FimComboBox} from '@/components/FimComboBox'
import React, {useState} from 'react'
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

const areaManagement = new AreaManagement()

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

    const [farmId, setFarmId] = useState<Key | null>(null)
    const [typeAreaId, setTypeAreaId] = useState<Key | null>(null)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!farmId || !typeAreaId) {
            alert('Por favor, selecione a Fazenda e o Tipo de Área.')
            return
        }

        const formData = new FormData(e.currentTarget)
        const formEntries = Object.fromEntries(formData.entries())

        const id_area = formEntries.id_area as string
        if (!id_area) {
            alert('Por favor, informe o ID da área.')
            return
        }

        const areaData: areaType = {
            name: formEntries.name as string,
            description: formEntries.description as string,
            capacity: Number(formEntries.capacity),
            features: formEntries.features as string,
            id_farm: Number(farmId),
            id_type_area: Number(typeAreaId),
            status: true,
        }

        console.log('Dados enviados:', areaData, {id_area})

        await areaManagement.updateAreaById(areaData, {id_area})
    }

    return (
        <div className="flex items-center justify-center flex-1 bg-gray-200 h-screen">
            <Form
                onSubmit={handleSubmit}>
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
                        allowsCustomValue>
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
                        allowsCustomValue>
                        {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
                    </FimComboBox>
                    <FieldError />
                </TextField>
                <div className="flex justify-center space-x-4">
                    <div className="flex bg-green-300 rounded justify-center space-x-4 w-3/5 mt-4">
                        <Button type="submit" className="w-full h-full">
                            Salvar
                        </Button>
                        {/* <Button type="reset">Reset</Button> */}
                    </div>
                    <div className="flex bg-red-300 rounded justify-center w-2/5 mt-4">
                        <a href="/areaControl">
                            <Button className="w-full h-full">Cancelar</Button>
                        </a>
                    </div>
                </div>
            </Form>
        </div>
    )
}
