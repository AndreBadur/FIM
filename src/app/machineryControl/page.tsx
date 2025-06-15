'use client'

import {useEffect, useState} from 'react'
import {MachineryManagement, machineryType} from '@/classes/MachineryManagement'
import {AriaTable} from '@/components/Table'
import {verifyFarmbyId} from '@/utils/utilityFunctions'
import { Button } from 'react-aria-components'

export default function MachineryControl() {
    const [machineryList, setMachineryList] = useState<machineryType[]>([])

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
                        <Button
                            onPress={() =>
                                (window.location.href = '/machineryCreation')
                            }
                            className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 mt-2">
                            Adicionar
                        </Button>
                    </a>
                </div>
                <AriaTable tipo="machinery" dados={machineryList} />
            </div>
        </div>
    )
}
