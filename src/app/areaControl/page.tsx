'use client'

//import { AreaManagement } from '@/classes/AreaManagement'
//import {AriaTable} from '@/components/Table'

//const areaManagement = new AreaManagement()
//const areaList = await areaManagement.listAllAreasByFarm('22')

export default function areaControl() {
    return (
        <div className="flex justify-center items-center">
            <div>
                <h1 className="text-xl font-bold mb-4">Lista de Áreas</h1>
                {/* <AriaTable tipo="farm" dados={areaList!}></AriaTable> */}
            </div>
        </div>
    )
}
