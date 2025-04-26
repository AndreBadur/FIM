'use client'

import { useState } from 'react'
import { FarmManagement } from '../classes/FarmManagements'
import { useRouter } from 'next/navigation'

const farmManagement = new FarmManagement()
console.log(await farmManagement.listAllFarm())

export default function FarmCreation() {
    const [idFarmer, setIdFarmer] = useState<string>('')
    const [idAddress, setIdAddress] = useState<string>('')
    const [cnpj, setCnpj] = useState<string>('')
    const [corporateName, setCorporateName] = useState<string>('')
    const router = useRouter()

    return (
        <div className="flex flex-col items justify-center h-screen">
            <h1>CRIAR</h1>
            <form
                className="flex flex-col items-center justify-center h-screen"
                onSubmit={async (e) => {
                    e.preventDefault()
                    const teste = await farmManagement.createFarm({
                        id_farmer: Number(idFarmer),
                        id_address: Number(idAddress),
                        cnpj: cnpj,
                        corporate_name: corporateName,
                    })
                    console.log(teste)
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
                >
                    CRIAR FAZENDA
                </button>
            </form>

            <h1>ATUALIZAR</h1>
            <form
                className="flex flex-col items-center justify-center h-screen"
                onSubmit={async (e) => {
                    e.preventDefault()
                    const teste = await farmManagement.updateFarm(
                        {
                            id_address: Number(idAddress),
                            cnpj: cnpj,
                            corporate_name: corporateName,
                        },
                        idFarmer,
                    )
                    console.log(teste)
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
                >
                    ATUALIZAR FAZENDA
                </button>
            </form>

            <h1>BUSCAR UMA UNICA FAZENDA</h1>
            <form
                className="flex flex-col items-center justify-center h-screen"
                onSubmit={async (e) => {
                    e.preventDefault()
                    const teste = await farmManagement.findUniqueFarm(idFarmer)
                    if (teste) {
                        console.log(teste?.corporate_name)
                    } else {
                        router.push('/')
                    }
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
                <button
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                    type="submit"
                >
                    BUSCAR FAZENDA
                </button>
            </form>

            <h1>DELETAR UMA UNICA FAZENDA</h1>
            <form
                className="flex flex-col items-center justify-center h-screen"
                onSubmit={async (e) => {
                    e.preventDefault()
                    const teste = await farmManagement.deleteUniqueFarm(idFarmer)
                    console.log(teste)
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
                <button
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                    type="submit"
                >
                    DELETAR FAZENDA
                </button>
            </form>
        </div>
    )
}
