'use client'

import {useRouter} from 'next/navigation'
import {useState} from 'react'

export default function Login() {
    const [user, setUser] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const router = useRouter()

    console.log(user, password)

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <form>
                <label>USUÁRIO</label>
                <input type="text" onChange={(e) => setUser(e.target.value)} />
                <label>SENHA</label>
                <input
                    type="text"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="button"
                    onClick={() => router.push('/home')}
                    value={'OLA SOU O BOTÃO'}
                />
            </form>
        </div>
    )
}
