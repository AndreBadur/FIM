'use client'

// import { Title, Subtitle, Text, Label } from '@/components/Typography'
import { FarmManagement } from '@/components/Classes/FarmManagements'
import TabelaGeral from '@/components/Table'
import { GenericTables } from '@/components/Table'

const farmManagement = new FarmManagement()
const farmList = await farmManagement.FarmListAll()

export default function designTest() {
    return (
        <div className="flex justify-center items-center">
            <div>
                <h1 className="text-xl font-bold mb-4">Lista de Empresas</h1>
                <TabelaGeral tipo="farm" dados={farmList} />
                <GenericTables tipo="farm" dados={farmList}></GenericTables>
            </div>
        </div>
    )
}
