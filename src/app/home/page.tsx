//gostaria de aplicar a fonte: <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
'use client'

export default function Home() {

    return (
        <div>
            <div className="flex">
                <div className="relative flex-1 bg-[url('/farm.jpg')] bg-cover bg-center h-screen p-4">
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
