export default function Menu() {
    return (
        <div className="bg-gray-600 w-48 h-screen flex flex-col items-center pt-4">
            <h1 className="font-bold text-white mb-2">MENU</h1>
            <a href="/equipamentArea" className="text-white mt-6">
                Equipamentos
            </a>
            <a href="/storageArea" className="text-white mt-6">
                Estoque
            </a>
            <a href="/funcionaryArea" className="text-white mt-6">
                Funcionários
            </a>
            <a href="/machinaryArea" className="text-white mt-6">
                Maquinário
            </a>
            <a href="/cultivationArea" className="text-white mt-6">
                Cultivo
            </a>
            <a href="/resourseManagementArea" className="text-white mt-6">
                Tarefas
            </a>
        </div>
    )
}
