'use client'

import {useEffect, useState} from 'react'
import {MachineryManagement, machineryType} from '@/classes/MachineryManagement'
import {AriaTable} from '@/components/Table'
import {verifyFarmbyId} from '@/utils/utilityFunctions'
import {useRouter} from 'next/navigation'

export default function MachineryControl() {
    const [machineryList, setMachineryList] = useState<machineryType[]>([])
    const router = useRouter()

    useEffect(() => {
        const fetchData = async () => {
            const machineryManagement = new MachineryManagement()
            const list =
                await machineryManagement.listAllMachineriesByFarm(
                    verifyFarmbyId(),
                )
            setMachineryList(list ?? [])
        }

        fetchData()
    }, [])

    return (
        <div className="flex justify-center items-center">
            <div className="w-full max-w-4xl px-4">
                <div className="flex justify-between items-center w-full">
                    <h1 className="text-xl font-bold">Lista de Maquinários</h1>
                    <a href="/machineryCreation">
                        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mt-2">
                            CRIAR NOVA
                        </button>
                    </a>
                </div>
                <AriaTable
                    columns={[
                        'ID Fazenda',
                        'ID Tipo de Maquinário',
                        'Custo Por Hora',
                        'última Manutenção',
                        'Intervalo das Manutenções',
                        'Modelo',
                        'Nome',
                        'Status',
                    ]}
                    keys={[
                        'id_farm',
                        'id_machinery_type',
                        'cost_per_hour',
                        'last_maintance_date',
                        'maintenance_interval',
                        'model',
                        'name',
                        'status',
                    ]}
                    onRowClick={(item) =>
                        router.push(
                            `/machineryUpdate?id=${item['id_machinery']}`,
                        )
                    }
                    dados={machineryList}
                />
            </div>
        </div>
    )
}
