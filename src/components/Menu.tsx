export default function Menu() {
    return (
        <div className="w-64 bg-gray-800 text-white min-h-screen flex flex-col shadow-lg">
            <nav className="flex-1 p-4 space-y-2">
                <h1 className="text-gray-400 uppercase text-s font-semibold px-4 py-2 mb-2">
                    MENU
                </h1>
                <a
                    href="/areaControl"
                    className="flex items-center px-4 py-3 rounded-md transition-colors hover:bg-green-600"
                >
                    <span>Áreas</span>
                </a>
                <a
                    href="/farmEmployeeControl"
                    className="flex items-center px-4 py-3 rounded-md transition-colors hover:bg-green-600"
                >
                    <span>Funcionários</span>
                </a>
                <a
                    href="/machineryControl"
                    className="flex items-center px-4 py-3 rounded-md transition-colors hover:bg-green-600"
                >
                    <span>Maquinários</span>
                </a>
                <a
                    href="/resourseManagementControl"
                    className="flex items-center px-4 py-3 rounded-md transition-colors hover:bg-green-600"
                >
                    <span>Tarefas</span>
                </a>
            </nav>
        </div>
    )
}
