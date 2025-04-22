'use client'

import { useState } from 'react'
import { FarmManagement } from './Classes/FarmManagements'

type farmType = [
    {
        cnpj: string
        corporate_name: string
        created_at: string
        id_address: number
        id_farm: number
        id_farmer: number
        updated_at: number
    },
]

const farmManagement = new FarmManagement()
const farmList = JSON.stringify(await farmManagement.FarmListAll())
const parseFarmList: farmType = JSON.parse(farmList)

parseFarmList.map((value) => {
    console.log(value.id_farm, value.corporate_name)
})

export default function FarmCreation() {
    const [idFarmer, setIdFarmer] = useState<string>('')
    const [idAddress, setIdAddress] = useState<string>('')
    const [cnpj, setCnpj] = useState<string>('')
    const [corporateName, setCorporateName] = useState<string>('')

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <form
                className="flex flex-col items-center justify-center h-screen"
                onSubmit={(e) => {
                    e.preventDefault()
                }}
            >
                <h1>ID FARMER</h1>
                <input
                    className="border-black"
                    type="text"
                    name="setIdFamer"
                    onChange={(e) => {
                        setIdFarmer(e.target.value)
                    }}
                />

                <h1>ID ADDRESS</h1>
                <input
                    className="border-black"
                    type="text"
                    onChange={(e) => {
                        setIdAddress(e.target.value)
                    }}
                />

                <h1>CNPJ</h1>
                <input
                    className="border-black"
                    type="text"
                    onChange={(e) => {
                        setCnpj(e.target.value)
                    }}
                />

                <h1>CORPORATE NAME</h1>
                <input
                    className="border-black"
                    type="text"
                    onChange={(e) => {
                        setCorporateName(e.target.value)
                    }}
                />

                <button
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                    type="submit"
                    onClick={farmManagement.FarmCreation(idFarmer, idAddress, cnpj, corporateName)}
                >
                    CRIAR FAZENDA
                </button>
            </form>
        </div>
    )
}
