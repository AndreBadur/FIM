'use client'

import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import {useRouter} from 'next/navigation'
import {FarmManagement, farmType} from '@/classes/FarmManagements'

export default function Navbar() {
    const router = useRouter()
    const [selected, setSelected] = useState<string>('')
    const [fazendas, setFazendas] = useState<farmType[]>([])

    useEffect(() => {
        const fetchFarms = async () => {
            const farmManagement = new FarmManagement()
            const farms = await farmManagement.listAllFarmsByFarmer('1')
            setFazendas(farms ?? [])
        }

        fetchFarms()
    }, [])

    useEffect(() => {
        const saved = localStorage.getItem('fazenda_atual')
        if (saved) {
            setSelected(saved)
        } else if (fazendas.length > 0) {
            setSelected('option1')
        }
    }, [fazendas])

    useEffect(() => {
        if (selected) {
            localStorage.setItem('fazenda_atual', selected)
        }
    }, [selected])

    return (
        <div className="bg-green-900 flex items-center justify-between h-14 px-4">
            <button onClick={() => router.push('/home')}>
                <Image src="/img/logo.png" width={80} height={80} alt="Logo" />
            </button>
            <div className="flex-1 text-center">
                <div className="relative inline-block">
                    <select
                        value={selected}
                        onChange={(e) => {
                            const value = e.target.value
                            if (value === 'add') {
                                router.push('/farmsControl')
                            } else {
                                setSelected(value)
                                window.location.reload()
                            }
                        }}
                        className="border border-black bg-white text-black px-4 py-2 pr-10 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-green-500">
                        {selected === '' && (
                            <option value="" disabled>
                                ...
                            </option>
                        )}

                        {fazendas.map((item) => (
                            <option key={item.id_farm} value={item.id_farm}>
                                {item.corporate_name}
                            </option>
                        ))}

                        <option value="add">+ Gerenciar fazendas</option>
                    </select>

                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-green-500">
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24">
                            <path d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>
            <button
                className="flex items-center px-4 text-red-600"
                onClick={() => router.push('/')}>
                <Image
                    src="/img/logOut.png"
                    width={14}
                    height={14}
                    alt="Sair"
                    className="mr-3"
                />
                <span className="text-s">Sair</span>
            </button>
        </div>
    )
}
