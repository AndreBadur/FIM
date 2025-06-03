'use client'

import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import {useRouter} from 'next/navigation'

export default function Navbar() {
    const router = useRouter()

    const [selected, setSelected] = useState<string>('')

    useEffect(() => {
        const saved = localStorage.getItem('combobox-selected')
        if (saved) {
            setSelected(saved)
        } else {
            setSelected('option1')
        }
    }, [])

    useEffect(() => {
        if (selected) {
            localStorage.setItem('combobox-selected', selected)
        }
    }, [selected])

    return (
        <div className="bg-gray-700 flex items-center justify-between h-14 px-4">
            <button onClick={() => router.push('/home')}>
                <Image src="/img/logo.png" width={80} height={80} alt="Logo" />
            </button>

            <div className="flex-1 text-center">
                <div className="relative inline-block">
                    <select
                        value={selected}
                        onChange={(e) => setSelected(e.target.value)}
                        className="
              border 
              border-black
              bg-green-500
              text-white
              px-4 
              py-2 
              pr-10
              rounded 
              appearance-none 
              focus:outline-none 
              focus:ring-2 
              focus:ring-green-500
            ">
                        {selected === '' && (
                            <option value="" disabled>
                                ...
                            </option>
                        )}
                        <option value="option1">Fazenda Azul</option>
                        <option value="option2">Fazenda Amarela</option>
                        <option value="option3">Fazenda Verde</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
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
        </div>
    )
}
