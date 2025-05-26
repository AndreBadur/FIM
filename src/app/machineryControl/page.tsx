'use client'

//import {MachineryManagement} from '@/classes/MachineryManagement'
//import {AriaTable} from '@/components/Table'

//const machineryManagement = new MachineryManagement()
//const machineryList = await machineryManagement.listAllMachineriesByFarm('22')

export default function MachineryControl() {
    return (
        <div className="flex justify-center items-center">
            <div className="w-full max-w-4xl px-4">
                <div className="flex justify-between items-center w-full">
                    <h1 className="text-xl font-bold">Lista de Maquinários</h1>
                    <a href="/machineryCreation">
                        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mt-2">
                            CRIAR NOVA
                        </button>
                    </a>
                </div>
                {/* <AriaTable tipo="machinery" dados={machineryList!} /> */}
            </div>
        </div>
    )
}
