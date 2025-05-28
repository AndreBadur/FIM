'use client'
import Image from 'next/image'
import {Link} from 'react-aria-components'

export default function Menu() {
    return (
        <div className="w-64 bg-gray-800 text-white flex flex-col shadow-lg">
            <div className="p-6 text-center text-lg font-normal">
                <h1 className="text-xl font-bold text-white font-inter">
                    GERENCIAMENTO
                </h1>
            </div>
            <nav className="flex-2 p-4 pt-3 space-y-2">
                <h1 className="text-gray-400 uppercase text-xs font-semibold px-4 py-2 mb-2">
                    PRINCIPAL
                </h1>
                <Link
                    href="/"
                    className="flex items-center px-4 py-3 rounded-md transition-colors hover:bg-green-600">
                    <Image
                        src="/img/dashboard.png"
                        width={18}
                        height={18}
                        alt="Dashboard"
                        className="mr-3"
                    />
                    <span>Dashboard</span>
                </Link>
                <Link
                    href="/areaControl"
                    className="flex items-center px-4 py-3 rounded-md transition-colors hover:bg-green-600">
                    <Image
                        src="/img/location.png"
                        width={18}
                        height={18}
                        alt="Tarefas"
                        className="mr-3"
                    />
                    <span>Áreas</span>
                </Link>
                <Link
                    href="/farmEmployeeControl"
                    className="flex items-center px-4 py-3 rounded-md transition-colors hover:bg-green-600">
                    <Image
                        src="/img/employees.png"
                        width={18}
                        height={18}
                        alt="Trabalhadores"
                        className="mr-3"
                    />
                    <span>Funcionários</span>
                </Link>
                <Link
                    href="/machineryControl"
                    className="flex items-center px-4 py-3 rounded-md transition-colors hover:bg-green-600">
                    <Image
                        src="/img/tractor.png"
                        width={18}
                        height={18}
                        alt="Maquinários"
                        className="mr-3"
                    />
                    <span>Maquinários</span>
                </Link>
                <Link
                    href="/resourseManagementControl"
                    className="flex items-center px-4 py-3 rounded-md transition-colors hover:bg-green-600">
                    <Image
                        src="/img/toDoList.png"
                        width={18}
                        height={18}
                        alt="Tarefas"
                        className="mr-3"
                    />
                    <span>Tarefas</span>
                </Link>
            </nav>
            <div className="p-4 border-t border-gray-700 space-y-2">
                <h1 className="text-gray-400 uppercase text-xs font-semibold px-4 py-2 mb-2">
                    FERRAMENTAS
                </h1>
                <Link
                    href="/"
                    className="flex items-center px-4 rounded-md transition-colors hover:bg-green-600">
                    <Image
                        src="/img/setting.png"
                        width={18}
                        height={18}
                        alt="Configurações"
                        className="mr-3"
                    />

                    <span>Configurações</span>
                </Link>
                <button className="flex items-center px-4 pt-16 text-red-600">
                    <Image
                        src="/img/logOut.png"
                        width={14}
                        height={14}
                        alt="Configurações"
                        className="mr-3"
                    />
                    <span className="text-s">Sair</span>
                </button>
            </div>
        </div>
    )
}
