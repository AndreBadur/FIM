'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { FarmManagement, farmType } from '../classes/FarmManagements'
import { Button, FieldError, Label, TextField, Input, Form } from 'react-aria-components'

const farmManagement = new FarmManagement()

type GeneralUpdateProps = {
    farmerId: string
    caseToUpdateId: string
}

export function GeneralUpdate({ farmerId, caseToUpdateId }: GeneralUpdateProps) {
    const router = useRouter()
    const [farmData, setFormData] = useState({
        corporate_name: '',
        cnpj: '',
    })

    useEffect(() => {
        const fetchFarm = async () => {
            const farm = await farmManagement.findUniqueFarmByFarmId(farmerId, caseToUpdateId)
            if (farm) {
                setFormData({
                    corporate_name: farm.corporate_name ?? '',
                    cnpj: farm.cnpj ?? '',
                })
            }
        }
        fetchFarm()
    }, [farmerId, caseToUpdateId])

    return (
        <Form
            onSubmit={async (e) => {
                e.preventDefault()
                const data = JSON.stringify(Object.fromEntries(new FormData(e.currentTarget)))
                const parseData: farmType = JSON.parse(data)

                const teste = await farmManagement.updateFarmByFarmId(
                    {
                        id_address: Number(parseData.id_address),
                        cnpj: parseData.cnpj,
                        corporate_name: parseData.corporate_name,
                    },
                    farmerId,
                    caseToUpdateId,
                )

                console.log(teste)

                router.push('/designTest')
                router.refresh()
            }}
        >
            <TextField name="corporate_name">
                <Label>CORPORATE NAME</Label>
                <Input
                    value={farmData.corporate_name}
                    onChange={(e) => setFormData({ ...farmData, corporate_name: e.target.value })}
                />
                <FieldError />
            </TextField>
            <TextField name="cnpj">
                <Label>CNPJ</Label>
                <Input
                    value={farmData.cnpj}
                    onChange={(e) => setFormData({ ...farmData, cnpj: e.target.value })}
                />
                <FieldError />
            </TextField>
            <div style={{ display: 'flex', gap: 8 }}>
                <Button type="submit">Submit</Button>
                <Button
                    type="button"
                    onPress={async () => {
                        await farmManagement.deleteFarmByFarmId(farmerId, caseToUpdateId)
                        router.push('/designTest')
                        router.refresh()
                    }}
                >
                    Delete
                </Button>
            </div>
        </Form>
    )
}
