'use client'

import { useState } from 'react'

export default function InputText() {
    const [text, setText] = useState('')

    return (
        <div className='mt-4 mb-2'>
            <input
                type="text"
                className="text-black"
                value={text}
                onChange={(userInput) => setText(userInput.target.value)}
                placeholder="Digite"
            />
        </div>
    )
}
