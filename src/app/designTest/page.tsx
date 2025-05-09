'use client'

import { FarmManagement } from '@/classes/FarmManagements'
import { AriaTablefs, GenericTables } from '@/components/Table'
import { Button } from 'react-aria-components'

const farmManagement = new FarmManagement()
const farmList = await farmManagement.listAllFarmsByFarmer('1')

export default function designTest() {
    return (
        <div className="flex justify-center items-center">
            <div>
                <h1 className="text-xl font-bold mb-4">Lista de Empresas</h1>
                <GenericTables tipo="farm" dados={farmList!} />
                <GenericTables tipo="generalFarms" dados={farmList!} />
                <Button onPress={() => alert('teste')}>Teste</Button>
                <AriaTablefs></AriaTablefs>
                {/* <AriaTable tipo="farm" dados={farmList!}></AriaTable> */}
            </div>
        </div>
    )
}
