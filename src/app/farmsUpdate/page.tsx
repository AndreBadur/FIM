'use client'

import {FarmManagement, farmType} from '@/classes/FarmManagements'
import ErrorScreen from '@/components/ErrorScreen'
import {useSearchParams} from 'next/navigation'
import {Suspense, useEffect, useState} from 'react'
import {
    Button,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from 'react-aria-components'

const farmManagement = new FarmManagement()

function UpdateWrapper() {
    const searchParams = useSearchParams()
    const idFarm = searchParams.get('id')
    const farmerId = '1'

    const [farmData, setFormData] = useState({
        corporate_name: '',
        cnpj: '',
    })

    const [shouldReload, setShouldReload] = useState(false)

    useEffect(() => {
        const fetchFarm = async () => {
            if (!idFarm) return
            const farm = await farmManagement.findUniqueFarmByFarmId(
                farmerId,
                idFarm,
            )
            if (farm) {
                setFormData({
                    corporate_name: farm.corporate_name ?? '',
                    cnpj: farm.cnpj ?? '',
                })
            }
        }
        fetchFarm()
    }, [shouldReload, idFarm])

    if (!idFarm) return <ErrorScreen />
    return (
        <div className="flex flex-row items-center justify-center h-full w-full bg-white">
            <Form
                className="w-[320px] rounded-md p-4 shadow-xl bg-green-300"
                onSubmit={async (e) => {
                    e.preventDefault()
                    const data = JSON.stringify(
                        Object.fromEntries(new FormData(e.currentTarget)),
                    )
                    const parseData: farmType = JSON.parse(data)

                    await farmManagement.updateFarmByFarmId(
                        {
                            id_address: Number(parseData.id_address),
                            cnpj: parseData.cnpj,
                            corporate_name: parseData.corporate_name,
                        },
                        farmerId,
                        idFarm,
                    )
                    setShouldReload(true)
                    window.location.href = '/farmsControl'
                }}>
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
                <TextField name="cnpj" className="mt-3">
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
                <div className="flex w-1/2 justify-self-end mt-3 gap-2">
                    <Button
                        type="button"
                        className="w-full h-full px-1 py-1 rounded-md shadow-md border border-red-600 hover:bg-red-700 hover:text-white text-red-600 font-semibold"
                        onPress={async () => {
                            await farmManagement.deleteFarmByFarmId(
                                farmerId,
                                idFarm,
                            )
                            window.location.href = '/farmsControl'
                        }}>
                        Delete
                    </Button>
                    <Button
                        type="submit"
                        className="w-full h-full px-1 py-1  rounded-md text-center shadow-md bg-green-600 hover:bg-green-700 text-white font-semibold">
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    )
}

// function UpdateWrapper() {
//     const searchParams = useSearchParams()
//     const idFarm = searchParams.get('id')

//     if (!idFarm) return <div>Erro: id não fornecido</div>

//     return <FarmUpdateForms farmerId="1" farmId={idFarm} />
// }

export default function UpdateTest() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <UpdateWrapper />
        </Suspense>
    )
}
