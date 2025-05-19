'use client'

import {FarmManagement} from '@/classes/FarmManagements'
import {AriaTable} from '@/components/Table'

const farmManagement = new FarmManagement()
const farmList = await farmManagement.listAllFarmsByFarmer('1')

export default function designTest() {
    return (
        <div className="flex justify-center items-center">
            <div>
                <h1 className="text-xl font-bold mb-4">Lista de Fazendas</h1>
                <AriaTable tipo="farm" dados={farmList!}></AriaTable>
                <AriaTable tipo="generalFarms" dados={farmList!}></AriaTable>
            </div>
        </div>
    )
}

// TailwindPlay
// <div class="flex h-screen w-screen flex-col">
//     <div class="h-20 w-screen bg-blue-400">NAVBAR</div>
//     <div class="flex grow flex-row">
//         <div class="w-32 bg-green-400">SIDE CONTENT</div>
//         <div class="grow bg-amber-400">MAIN CONTENT</div>
//     </div>
//     <div class="h-20 w-screen bg-red-400">FOOTER</div>
// </div>
