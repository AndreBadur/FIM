'use client'

import { useEffect, useState } from 'react'
import { FarmManagement, farmType } from '../classes/FarmManagements'
import { Button, FieldError, Label, TextField, Input,  Form} from 'react-aria-components'

const farmManagement = new FarmManagement()


type GeneralUpdateProps = {
    farmerId: string
    caseToUpdateId: string
  }

export function GeneralUpdate({ farmerId, caseToUpdateId }: GeneralUpdateProps) {
    const [farmData, setFarmData] = useState<farmType | null>(null)

    useEffect(() => {
      const fetchFarm = async () => {
        const farm = await farmManagement.findUniqueFarmByFarmId(farmerId, caseToUpdateId)
        setFarmData(farm)
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
            }}
        >
            <TextField name="corporate_name">
                <Label>CORPORATE NAME</Label>
                <Input placeholder={farmData?.corporate_name.toString()} defaultValue="teste"/>
                <FieldError />
            </TextField>
            <TextField name="cnpj">
                <Label>CNPJ</Label>
                <Input defaultValue="qweqwe"/>
                <FieldError />
            </TextField>
            <div style={{ display: 'flex', gap: 8 }}>
                <Button type="submit">Submit</Button>
                <Button type="reset">Reset</Button>
            </div>
            </Form>
    )
}
