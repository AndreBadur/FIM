//gostaria de aplicar a fonte: <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
'use client'

import {useRouter} from 'next/navigation'

export default function Index() {
    const router = useRouter()

    return (
        <div>
            <div className="flex">
                <div className="relative flex-1 bg-[url('/farm.jpg')] bg-cover bg-center h-screen p-4">
                    <div className="absolute top-4 right-4 flex space-x-6 z-20">
                        <div className="flex flex-col items-center">
                            <span className="text-white text-sm mb-1">
                                Já possui conta?
                            </span>
                            <button
                                className="border border-green-500 text-white px-4 py-1 rounded hover:bg-green-500 hover:text-black transition"
                                onClick={() => router.push('/login')}>
                                Entrar
                            </button>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-white text-sm mb-1">
                                Ainda não?
                            </span>
                            <button
                                className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 transition"
                                onClick={() => router.push('/register')}>
                                Cadastrar
                            </button>
                        </div>
                    </div>

                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                        <h1 className="text-white text-4xl font-bebas">
                            Bem-vindo ao FIM!
                        </h1>
                        <h2 className="text-white text-2xl font-bebas">
                            Seu sistema de gerenciamento de fazendas.
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
