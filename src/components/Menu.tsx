'use client'
import Image from 'next/image'
import {Link} from 'react-aria-components'
import {useRouter, usePathname} from 'next/navigation'
import {useState, useEffect} from 'react'

export default function Menu() {
    const router = useRouter()
    const pathname = usePathname()

    const [selected, setSelected] = useState<string>('')

    useEffect(() => {
        setSelected(pathname)
    }, [pathname])

    const linkClasses = (href: string) =>
        `flex items-center px-4 py-3 rounded-md transition-colors ${
            selected === href ? 'bg-green-600' : 'hover:bg-green-600'
        }`

    return (
        <div className="w-64 bg-gray-800 text-white flex flex-col shadow-lg">
            <nav className="flex-2 p-4 space-y-2">
                <h1 className="text-gray-400 uppercase text-xs font-semibold px-4 py-2 mb-2">
                    PRINCIPAL
                </h1>

                <Link
                    href="/"
                    className={linkClasses('/')}
                    onPress={() => setSelected('/')}>
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
                    href="/resourseManagementControl"
                    className={linkClasses('/resourseManagementControl')}
                    onPress={() => setSelected('/resourseManagementControl')}>
                    <Image
                        src="/img/toDoList.png"
                        width={18}
                        height={18}
                        alt="Tarefas"
                        className="mr-3"
                    />
                    <span>Tarefas</span>
                </Link>

                <Link
                    href="/areaControl"
                    className={linkClasses('/areaControl')}
                    onPress={() => setSelected('/areaControl')}>
                    <Image
                        src="/img/location.png"
                        width={18}
                        height={18}
                        alt="Áreas"
                        className="mr-3"
                    />
                    <span>Áreas</span>
                </Link>

                <Link
                    href="/farmEmployeeControl"
                    className={linkClasses('/farmEmployeeControl')}
                    onPress={() => setSelected('/farmEmployeeControl')}>
                    <Image
                        src="/img/employees.png"
                        width={18}
                        height={18}
                        alt="Funcionários"
                        className="mr-3"
                    />
                    <span>Funcionários</span>
                </Link>

                <Link
                    href="/machineryControl"
                    className={linkClasses('/machineryControl')}
                    onPress={() => setSelected('/machineryControl')}>
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
                    href="/farmsControl"
                    className={linkClasses('/farmsControl')}
                    onPress={() => setSelected('/farmsControl')}>
                    <Image
                        src="/img/farmIcon.png"
                        width={18}
                        height={18}
                        alt="Fazendas"
                        className="mr-3"
                    />
                    <span>Fazendas</span>
                </Link>
            </nav>

            <div className="p-4 border-t border-gray-700 space-y-2">
                <h1 className="text-gray-400 uppercase text-xs font-semibold px-4 py-2 mb-2">
                    FERRAMENTAS
                </h1>
                <div className="h-[12rem]">
                    <div className="min-h-full flex flex-col justify-between">
                        <Link
                            href="/settings"
                            className={linkClasses('/settings')}
                            onPress={() => setSelected('/settings')}>
                            <Image
                                src="/img/setting.png"
                                width={18}
                                height={18}
                                alt="Configurações"
                                className="mr-3"
                            />
                            <span>Configurações</span>
                        </Link>

                        <button
                            className="flex items-center px-4 text-red-600"
                            onClick={() => router.push('/home')}>
                            <Image
                                src="/img/logOut.png"
                                width={14}
                                height={14}
                                alt="Sair"
                                className="mr-3"
                            />
                            <span className="text-s">Sair</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
