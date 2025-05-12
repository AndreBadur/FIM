export default function Navbar() {
    return (
        <div className="bg-gray-700 flex items-center justify-between h-16 px-4">
            <a href="/home">
                <img src="/sample.png" alt="Logo" className="h-10 w-10" />
            </a>
            <div className="flex-1 text-center">
                <h1 className="font-bold text-white">NOME DA FAZENDA</h1>
            </div>
            <img src="/user-account.png" alt="Usuário" className="h-10 w-10" />
        </div>
    )
}
