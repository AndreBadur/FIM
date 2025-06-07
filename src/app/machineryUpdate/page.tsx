'use client'

import {
    MachineryManagement,
    machineryStatus,
    machineryType,
} from '@/classes/MachineryManagement'
import {verifyFarmbyId} from '@/utils/utilityFunctions'
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

const machineryManagement = new MachineryManagement()

function UpdateWrapper() {
    const searchParams = useSearchParams()
    const id_machinery = searchParams.get('id')
    const id_farm = verifyFarmbyId()

    const [machineryData, setMachineryData] = useState({
        name: '',
        model: '',
        cost_per_hour: '',
        maintenance_interval: '',
        last_maintenance_date: '',
        status: null as Key | null,
        id_machinery_type: null as Key | null,
    })

    useEffect(() => {
        const fetchMachinery = async () => {
            if (!id_machinery) return

            const machinery = await machineryManagement.findMachineryById({
                id_farm,
                id_machinery,
            })

            if (machinery) {
                setMachineryData({
                    name: machinery.name ?? '',
                    model: machinery.model ?? '',
                    cost_per_hour: machinery.cost_per_hour?.toString() ?? '',
                    maintenance_interval:
                        machinery.maintenance_interval?.toString() ?? '',
                    last_maintenance_date:
                        machinery.last_maintenance_date
                            ?.toString()
                            .split('T')[0] ?? '',
                    status: machinery.status ?? null,
                    id_machinery_type:
                        machinery.id_machinery_type?.toString() ?? null,
                })
            }
        }

        fetchMachinery()
    }, [id_machinery])

    if (!id_machinery) return <div>Erro: id não fornecido</div>

    const MachineryTypeOptions = [
        {id: 1, name: 'Trator'},
        {id: 2, name: 'Colheitadeira'},
        {id: 3, name: 'Plantadeira'},
    ]

    const StatusOptions = [
        {id: machineryStatus.active, name: 'Ativo'},
        {id: machineryStatus.inactive, name: 'Inativo'},
        {id: machineryStatus.onMaintenance, name: 'Em manutenção'},
    ]

    const handleUpdate = async () => {
        const payload: machineryType = {
            name: machineryData.name,
            model: machineryData.model,
            cost_per_hour: Number(machineryData.cost_per_hour),
            maintenance_interval: Number(machineryData.maintenance_interval),
            last_maintenance_date: new Date(
                machineryData.last_maintenance_date,
            ),
            id_farm: Number(id_farm),
            id_machinery_type: machineryData.id_machinery_type
                ? Number(machineryData.id_machinery_type)
                : 0,
            status: machineryData.status as machineryStatus,
        }

        await machineryManagement.updateMachineryById(payload, {id_machinery})
        window.location.href = '/machineryControl'
    }

    const handleDelete = async () => {
        await machineryManagement.deleteUniqueMachineryId({
            id_farm,
            id_machinery,
        })
        window.location.href = '/machineryControl'
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
                        value={machineryData.name}
                        onChange={(e) =>
                            setMachineryData({
                                ...machineryData,
                                name: e.target.value,
                            })
                        }
                    />
                    <FieldError />
                </TextField>

                <TextField name="model" className="mt-3">
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        Modelo
                    </Label>
                    <Input
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        value={machineryData.model}
                        onChange={(e) =>
                            setMachineryData({
                                ...machineryData,
                                model: e.target.value,
                            })
                        }
                    />
                    <FieldError />
                </TextField>

                <TextField name="cost_per_hour" className="mt-3">
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        Custo por hora
                    </Label>
                    <Input
                        type="number"
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        value={machineryData.cost_per_hour}
                        onChange={(e) =>
                            setMachineryData({
                                ...machineryData,
                                cost_per_hour: e.target.value,
                            })
                        }
                    />
                    <FieldError />
                </TextField>

                <TextField name="maintenance_interval" className="mt-3">
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        Intervalo de manutenção (dias)
                    </Label>
                    <Input
                        type="number"
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        value={machineryData.maintenance_interval}
                        onChange={(e) =>
                            setMachineryData({
                                ...machineryData,
                                maintenance_interval: e.target.value,
                            })
                        }
                    />
                    <FieldError />
                </TextField>

                <TextField name="last_maintenance_date" className="mt-3">
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        Última manutenção
                    </Label>
                    <Input
                        type="date"
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        value={machineryData.last_maintenance_date}
                        onChange={(e) =>
                            setMachineryData({
                                ...machineryData,
                                last_maintenance_date: e.target.value,
                            })
                        }
                    />
                    <FieldError />
                </TextField>

                <div className="mt-3">
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        Tipo de máquina
                    </Label>
                    <select
                        value={machineryData.id_machinery_type ?? ''}
                        onChange={(e) =>
                            setMachineryData({
                                ...machineryData,
                                id_machinery_type: e.target.value
                                    ? Number(e.target.value)
                                    : null,
                            })
                        }
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                        <option value="">Selecione uma área</option>
                        {MachineryTypeOptions.map((tipos) => (
                            <option key={tipos.id} value={tipos.id}>
                                {tipos.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mt-3">
                    <Label className="block text-sm font-medium text-black-700 mb-1">
                        Status
                    </Label>
                    <select
                        value={machineryData.status ?? ''}
                        onChange={(e) =>
                            setMachineryData({
                                ...machineryData,
                                status: e.target.value,
                            })
                        }
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                        <option value="">Selecione uma área</option>
                        {StatusOptions.map((status) => (
                            <option key={status.id} value={status.id}>
                                {status.name}
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

export default function MachineryUpdate() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <UpdateWrapper />
        </Suspense>
    )
}
