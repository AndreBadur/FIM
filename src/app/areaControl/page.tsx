'use client'

import {AreaManagement} from '@/classes/AreaManagement'
import {AriaTable} from '@/components/Table'
import {verifyFarmbyId} from '@/utils/utilityFunctions'

const areaManagement = new AreaManagement()
const areaList = await areaManagement.listAllAreasByFarm(verifyFarmbyId())

export default function areaControl() {
    return (
        <div className="flex justify-center items-center">
            <div className="w-full max-w-4xl px-4">
                {' '}
                {/* 👈 padding lateral */}
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
