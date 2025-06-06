'use client'

import React from 'react'
import {FimComboBox} from './FimComboBox'
import {ListBoxItem} from 'react-aria-components'

export default function Navbar() {
    const FarmOptions = [
        {id: 60, name: 'Fazenda azul'},
        {id: 61, name: 'Fazenda verde'},
        {id: 62, name: 'Fazenda amarela'},
    ]

    //const [farmId, setFarmId] = React.useState<Key | null>(null)

    return (
        <div className="bg-gray-700 flex items-center justify-between h-14 px-4">
            <a href="/home">
                <img src="/sample.png" alt="Logo" className="h-9 w-9" />
            </a>
            <div className="flex-1 text-center">
                <FimComboBox
                    defaultItems={FarmOptions}
                    //onSelectionChange={setFarmId}
                    allowsCustomValue>
                    {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
                </FimComboBox>
            </div>
        </div>
    )
}
