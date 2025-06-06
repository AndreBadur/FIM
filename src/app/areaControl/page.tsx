'use client'

import {AreaManagement} from '@/classes/AreaManagement'
import {AriaTable} from '@/components/Table'
import {verifyFarmbyId} from '@/utils/utilityFunctions'
import React from 'react'

const areaManagement = new AreaManagement()

const areaList = await areaManagement.listAllAreasByFarm(verifyFarmbyId())

import {Key} from 'react-aria-components'

export default function AreaControl() {
    const FarmOptions = [
        {id: 60, name: 'Fazenda azul'},
        {id: 61, name: 'Fazenda verde'},
        {id: 62, name: 'Fazenda amarela'},
    ]

    const AreaOptions = [
        {id: 1, name: 'Área de descanso'},
        {id: 2, name: 'Área de cultivo'},
        {id: 3, name: 'Área de estoque'},
    ]

    const [farmId, setFarmId] = React.useState<Key | null>(null)
    const [typeAreaId, setTypeAreaId] = React.useState<Key | null>(null)

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
                <AriaTable tipo="area" dados={areaList!} />
            </div>
        </div>
    )
}
