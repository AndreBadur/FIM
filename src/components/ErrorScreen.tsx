'use client'

import {useRouter} from 'next/navigation'

export default function ErrorScreen() {
    const router = useRouter()

    const handleClick = () => {
        return router.push('/')
    }

    return (
        <div className="flex flex-col grow  items-center justify-center h-svh   gap-8">
            <h1 className="font-bold text-2xl">
                Desculpe, não conseguimos encontrar essa pagina
            </h1>
            <h3>
                <span
                    onClick={handleClick}
                    className="font-semibold cursor-pointer text-blue-700 text-lg shadow">
                    Clique aqui para retornar a tela inicial
                </span>
            </h3>
        </div>
    )
}
