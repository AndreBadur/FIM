'use client'

import {FarmManagement} from '@/classes/FarmManagements'
import {AriaTable} from '@/components/Table'
import {Button} from 'react-aria-components'

const farmManagement = new FarmManagement()
const farmList = await farmManagement.listAllFarmsByFarmer('1')

export default function designTest() {
    return (
        <div className="flex justify-center items-center">
            <div>
                {/* Container com justify-between e largura total */}
                <div className="flex justify-between items-center w-full mb-4 pt-4">
                    <h1 className="text-xl font-bold">Lista de Fazendas</h1>
                    <Button
                        onPress={() => (window.location.href = '/createTest')}
                        className="w-40 px-1 py-3 rounded-md shadow-md bg-green-600 hover:bg-green-700 text-white font-semibold"
                    >
                        Adicionar
                    </Button>
                </div>

                <AriaTable tipo="farm" dados={farmList!}></AriaTable>
            </div>
        </div>
    )
}
