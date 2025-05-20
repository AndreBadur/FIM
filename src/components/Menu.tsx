export default function Menu() {
    return (
        <div className="w-48 h-screen bg-gray-600 flex flex-col items-center pt-4">
            <h1 className="font-bold text-white mb-2">MENU</h1>
            <a href="/areaCreation" className="text-white mt-6">
                Áreas
            </a>
            <a href="/farmEmployeeControl" className="text-white mt-6">
                Funcionários
            </a>
            <a href="/machineryControl" className="text-white mt-6">
                Maquinários
            </a>
            <a href="/resourseManagementControl" className="text-white mt-6">
                Tarefas
            </a>
        </div>
    )
}
