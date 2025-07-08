'use client'

import {useEffect, useState} from 'react'
import {AreaManagement, areaType} from '@/classes/AreaManagement'
import {AriaTable} from '@/components/Table'
import {verifyFarmbyId} from '@/utils/utilityFunctions'
import {useRouter} from 'next/navigation'

export default function AreaControl() {
    const [areaList, setAreaList] = useState<areaType[]>([])
    const router = useRouter()

    useEffect(() => {
        const fetchAreas = async () => {
            const areaManagement = new AreaManagement()
            const farmId = verifyFarmbyId()
            const areas = await areaManagement.listAllAreasByFarm(farmId)
            setAreaList(areas ?? [])
        }

        fetchAreas()
    }, [])

    return (
        <div className="flex justify-center items-center">
            <div className="w-full max-w-4xl px-4">
                <div className="flex justify-between items-center w-full">
                    <h1 className="text-xl font-bold">Lista de Áreas</h1>
                    <a href="/areaCreation">
                        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mt-2">
                            CRIAR NOVA
                        </button>
                    </a>
                </div>
                <AriaTable
                    columns={[
                        'ID tipo da Área',
                        'ID Fazenda',
                        'Nome',
                        'Descrição',
                        'Características',
                    ]}
                    keys={[
                        'id_type_area',
                        'id_farm',
                        'name',
                        'description',
                        'features',
                    ]}
                    onRowClick={(item) =>
                        router.push(`/areaUpdate?id=${item['id_area']}`)
                    }
                    dados={areaList}
                />
            </div>
        </div>
    )
}
