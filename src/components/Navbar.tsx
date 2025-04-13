export default function Navbar() {
    return (
      <div className="bg-gray-700 relative flex items-center justify-between h-16 px-4">
        <img src="/sample.png" alt="Logo" className="h-10 w-10" />
        <h1 className="absolute left-1/2 transform -translate-x-1/2 font-bold">
          NOME DA FAZENDA
        </h1>
        <img src="/user-account.png" alt="Usuário" className="h-10 w-10" />
      </div>
    )
  }
  