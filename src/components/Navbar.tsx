export default function Navbar() {
    return (
        <div className="bg-gray-700 flex items-center justify-between h-14 px-4">
            <a href="/home">
                <img src="/sample.png" alt="Logo" className="h-9 w-9" />
            </a>
            <div className="flex items-center">
                <div className="flex-1 text-center pr-4">
                    <h1 className="font-bold text-white text-sm">
                        NOME DA FAZENDA
                    </h1>
                </div>
                <img
                    src="/user-account.png"
                    alt="Usuário"
                    className="h-9 w-9"
                />
            </div>
        </div>
    )
}
