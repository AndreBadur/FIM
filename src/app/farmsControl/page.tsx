'use client'

import {useEffect, useState} from 'react'
import {FarmManagement, farmType} from '@/classes/FarmManagements'
import {AriaTable} from '@/components/Table'
import {Button} from 'react-aria-components'
import {verificarFazendeiro} from '@/utils/utilityFunctions'

export default function DesignTest() {
    const [farmList, setFarmList] = useState<farmType[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const farmManagement = new FarmManagement()
            const farms = await farmManagement.listAllFarmsByFarmer(
                verificarFazendeiro(),
            )
            setFarmList(farms ?? [])
        }

        fetchData()
    }, [])

    return (
        <div className="flex justify-center items-center">
            <div>
                <div className="flex justify-between items-center w-full mb-4 pt-4">
                    <h1 className="text-xl font-bold">Lista de Fazendas</h1>
                    <Button
                        onPress={() =>
                            (window.location.href = '/farmsCreation')
                        }
                        className="w-40 px-1 py-3 rounded-md shadow-md bg-green-600 hover:bg-green-700 text-white font-semibold">
                        Adicionar
                    </Button>
                </div>

                <AriaTable tipo="farm" dados={farmList} />
            </div>
        </div>
    )
}
