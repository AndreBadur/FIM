'use client'

import {SupplyManagement, supplyType} from '@/classes/SupplyManagement'
import { FimComboBox } from '@/components/FimComboBox'
import {verifyFarmbyId} from '@/utils/utilityFunctions'
import React from 'react'

import {
    Button,
    FieldError,
    Form,
    Input,
    Key,
    Label,
    ListBoxItem,
    TextField,
} from 'react-aria-components'

const supplyManagement = new SupplyManagement()

export default function SupplyCreation() {

    const SupplyTypeOptions = [
        {id: 1, name: 'Café'}, 
        {id: 2, name: 'Trigo'},
    ]

    const [supplyTypeId, setSupplyTypeId] = React.useState<Key | null>(
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

                        const parseData: supplyType = JSON.parse(data)

                        return await supplyManagement.createSupply({
                            id_farm: Number(verifyFarmbyId()),
                            supply_category: Number(supplyTypeId),
                            supply_cost_price: Number(
                                parseData.supply_cost_price,
                            ),
                            supply_quantity: Number(parseData.supply_quantity),
                        })
                    }}>
                    <FimComboBox
                        label="Tipo de Máquina"
                        defaultItems={SupplyTypeOptions}
                        onSelectionChange={setSupplyTypeId}
                        allowsCustomValue={false}>
                        {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
                    </FimComboBox>

                    <TextField name="supply_cost_price" isRequired>
                        <div className="flex flex-col">
                            <Label>Custo</Label>
                            <Input />
                            <FieldError />
                        </div>
                    </TextField>

                    <TextField name="supply_quantity" isRequired>
                        <div className="flex flex-col">
                            <Label>Quantidade</Label>
                            <Input />
                            <FieldError />
                        </div>
                    </TextField>

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
