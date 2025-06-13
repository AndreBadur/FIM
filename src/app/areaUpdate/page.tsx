'use client'

import {AreaManagement, areaType} from '@/classes/AreaManagement'
import {FarmManagement} from '@/classes/FarmManagements'
import {verificarFazendeiro, verifyFarmbyId} from '@/utils/utilityFunctions'
import {useSearchParams} from 'next/navigation'
import {Suspense, useEffect, useState} from 'react'
import {
    Button,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
    Key,
} from 'react-aria-components'

const areaManagement = new AreaManagement()
const farmManagement = new FarmManagement()

function UpdateWrapper() {
    const searchParams = useSearchParams()
    const id_area = searchParams.get('id')
    const id_farm = verifyFarmbyId()

    const [areaData, setAreaData] = useState({
        name: '',
        description: '',
        capacity: '',
        features: '',
        id_farm: null as Key | null,
        id_type_area: null as Key | null,
    })

    const [shouldReload, setShouldReload] = useState(false)

    const [farmOptions, setFarmOptions] = useState<
        {id: number; name: string}[]
    >([])

    useEffect(() => {
        const fetchFarms = async () => {
            const farms = await farmManagement.listAllFarmsByFarmer(
                verificarFazendeiro(),
            )
            if (farms) {
                const options = farms.map((farm) => ({
                    id: farm.id_farm,
                    name: farm.corporate_name,
                }))
                setFarmOptions(options)
            }
        }

        fetchFarms()
    }, [])

    useEffect(() => {
        const fetchArea = async () => {
            if (!id_area) return

            const area = await areaManagement.findUniqueAreaById({
                id_farm,
                id_area,
            })

            if (area) {
                setAreaData({
                    name: area.name ?? '',
                    description: area.description ?? '',
                    capacity: area.capacity?.toString() ?? '',
                    features: area.features ?? '',
                    id_farm: area.id_farm?.toString() ?? null,
                    id_type_area: area.id_type_area?.toString() ?? null,
                })
            }
        }

        fetchArea()
    }, [id_area, shouldReload])

    if (!id_area) return <div>Erro: id não fornecido</div>

    const AreaOptions = [
        {id: 1, name: 'Área de descanso'},
        {id: 2, name: 'Área de cultivo'},
        {id: 3, name: 'Área de estoque'},
    ]

    const handleUpdate = async () => {
        const infoData: areaType = {
            name: areaData.name,
            description: areaData.description,
            capacity: areaData.capacity ? Number(areaData.capacity) : undefined,
            features: areaData.features,
            id_farm: areaData.id_farm ? Number(areaData.id_farm) : undefined,
            id_type_area: areaData.id_type_area
                ? Number(areaData.id_type_area)
                : undefined,
            status: true,
        }

        await areaManagement.updateAreaById(infoData, {id_area})
        setShouldReload(true)
        window.location.href = '/areaControl'
    }

    const handleDelete = async () => {
        await areaManagement.deleteUniqueAreaById({id_farm, id_area})
        window.location.href = '/areaControl'
    }

    return (
        <div className="flex flex-row items-center justify-center h-full w-full">
            <Form
                className="w-[320px] rounded-md p-4 shadow-xl"
                onSubmit={(e) => {
                    e.preventDefault()
                    handleUpdate()
                }}>
                <TextField name="name">
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        Nome
                    </Label>
                    <Input
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        value={areaData.name}
                        onChange={(e) =>
                            setAreaData({...areaData, name: e.target.value})
                        }
                    />
                    <FieldError />
                </TextField>

                <TextField name="description" className="mt-3">
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        Descrição
                    </Label>
                    <Input
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        value={areaData.description}
                        onChange={(e) =>
                            setAreaData({
                                ...areaData,
                                description: e.target.value,
                            })
                        }
                    />
                    <FieldError />
                </TextField>

                <TextField name="capacity" className="mt-3">
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        Capacidade
                    </Label>
                    <Input
                        type="number"
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        value={areaData.capacity}
                        onChange={(e) =>
                            setAreaData({...areaData, capacity: e.target.value})
                        }
                    />
                    <FieldError />
                </TextField>

                <TextField name="features" className="mt-3">
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        Características
                    </Label>
                    <Input
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        value={areaData.features}
                        onChange={(e) =>
                            setAreaData({...areaData, features: e.target.value})
                        }
                    />
                    <FieldError />
                </TextField>

                <div className="mt-3 visibility: hidden">
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        Fazenda da área
                    </Label>
                    <select
                        value={areaData.id_farm ?? ''}
                        onChange={(e) =>
                            setAreaData({
                                ...areaData,
                                id_farm: e.target.value
                                    ? Number(e.target.value)
                                    : null,
                            })
                        }
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                        <option value="">Selecione uma fazenda</option>
                        {farmOptions.map((farm) => (
                            <option key={farm.id} value={farm.id}>
                                {farm.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mt-3">
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        Tipo de área
                    </Label>
                    <select
                        value={areaData.id_type_area ?? ''}
                        onChange={(e) =>
                            setAreaData({
                                ...areaData,
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
                    <Button
                        type="button"
                        className="w-full h-full px-1 py-1 rounded-md shadow-md border border-red-600 hover:bg-red-700 hover:text-white text-red-600 font-semibold"
                        onPress={handleDelete}>
                        Deletar
                    </Button>
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

export default function AreaUpdate() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <UpdateWrapper />
        </Suspense>
    )
}
