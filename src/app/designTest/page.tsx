'use client'

import {FarmManagement} from '@/classes/FarmManagements'
// import {AriaTable} from '@/components/Table'

export default async function designTest() {
    const farmManagement = new FarmManagement()
    const farmList = await farmManagement.listAllFarmsByFarmer('1')
    console.log(farmList)
    return (
        <div className="flex justify-center items-center">
            <div>
                <h1 className="text-xl font-bold mb-4">Lista de Fazendas</h1>
                {/* <AriaTable tipo="farm" dados={farmList!}></AriaTable> */}
            </div>
        </div>
    )
}
