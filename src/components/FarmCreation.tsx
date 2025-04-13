'use client'

import { useState } from 'react'

async function fetchHandler(
    idFarmer: string,
    idAddress: string,
    farmCnpj: string,
    corporateName: string,
): Promise<Response> {
    console.log(idFarmer, idAddress)

    const response: Response = await fetch('api/farms', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            idFarmer,
            idAddress,
            farmCnpj,
            corporateName,
        }),
    })
    if (response.ok) {
        alert('Post created successfully!')
        return response
    } else {
        alert('Error creating post.')
        return response
    }
}

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
                    fetchHandler(idFarmer, idAddress, cnpj, corporateName)
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
        </div>
    )
}
