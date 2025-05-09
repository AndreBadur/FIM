'use client'

import { useState } from 'react'

export default function InputText() {
    const [text, setText] = useState('')

    return (
        <div>
            <input
                type="text"
                className="text-black"
                value={text}
                onChange={(userInput) => setText(userInput.target.value)}
                placeholder="Digite"
            />
            <p>Você escreveu: {text}</p>
        </div>
    )
}
