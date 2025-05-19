'use client'

import {useEffect, useState} from 'react'
import {useRouter} from 'next/navigation'
import {FarmManagement, farmType} from '../classes/FarmManagements'
import {
    Button,
    FieldError,
    Label,
    TextField,
    Input,
    Form,
} from 'react-aria-components'

const farmManagement = new FarmManagement()

type GeneralUpdateProps = {
    farmerId: string
    caseToUpdateId: string
}

export function FarmUpdate({farmerId, caseToUpdateId}: GeneralUpdateProps) {
    const router = useRouter()
    const [farmData, setFormData] = useState({
        corporate_name: '',
        cnpj: '',
    })

    useEffect(() => {
        const fetchFarm = async () => {
            const farm = await farmManagement.findUniqueFarmByFarmId(
                farmerId,
                caseToUpdateId,
            )
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
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '40vh',
                width: '82vw',
            }}
        >
            <Form
                className="space-y-6 w-full max-w-md "
                onSubmit={async (e) => {
                    e.preventDefault()
                    const data = JSON.stringify(
                        Object.fromEntries(new FormData(e.currentTarget)),
                    )
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
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        CORPORATE NAME
                    </Label>
                    <Input
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        value={farmData.corporate_name}
                        onChange={(e) =>
                            setFormData({
                                ...farmData,
                                corporate_name: e.target.value,
                            })
                        }
                    />
                    <FieldError />
                </TextField>
                <TextField name="cnpj">
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        CNPJ
                    </Label>
                    <Input
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        value={farmData.cnpj}
                        onChange={(e) =>
                            setFormData({...farmData, cnpj: e.target.value})
                        }
                    />
                    <FieldError />
                </TextField>
                <div style={{display: 'flex', gap: 8}}>
                    <Button
                        type="submit"
                        className="w-40 px-1 py-3 rounded-md shadow-md bg-green-600 hover:bg-green-700 text-white font-semibold"
                    >
                        Submit
                    </Button>
                    <Button
                        type="button"
                        className="w-40 px-1 py-3 rounded-md shadow-md bg-green-600 hover:bg-green-700 text-white font-semibold"
                        onPress={async () => {
                            await farmManagement.deleteFarmByFarmId(
                                farmerId,
                                caseToUpdateId,
                            )
                            router.push('/designTest')
                            router.refresh()
                        }}
                    >
                        Delete
                    </Button>
                </div>
            </Form>
        </div>
    )
}
