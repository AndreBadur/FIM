'use client'

import {useEffect, useState} from 'react'
import {EmployeeManagement, employeeType} from '@/classes/EmployeeManagement'
import {AriaTable} from '@/components/Table'
import {verificarFazendeiro} from '@/utils/utilityFunctions'
import {useRouter} from 'next/navigation'

export default function EmployeeControl() {
    const [employeeList, setEmployeeList] = useState<employeeType[]>([])
    const router = useRouter()

    useEffect(() => {
        const fetchEmployees = async () => {
            const employeeManagement = new EmployeeManagement()
            const farmId = verificarFazendeiro()
            const employees =
                await employeeManagement.listAllEmployeesByFarmer(farmId)
            setEmployeeList(employees ?? [])
        }

        fetchEmployees()
    }, [])

    return (
        <div className="flex justify-center items-center">
            <div className="w-full max-w-4xl px-4">
                <div className="flex justify-between items-center w-full">
                    <h1 className="text-xl font-bold">Lista de Funcionários</h1>
                    <a href="/farmEmployeeCreation">
                        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mt-2">
                            CRIAR NOVA
                        </button>
                    </a>
                </div>
                <AriaTable
                    columns={[
                        'ID Empregado',
                        'ID Fazenda',
                        'CPF',
                        'Nome',
                        'Custo por Hora',
                        'Horas Trabalhadas',
                        'Criado em',
                        'Modificado em',
                    ]}
                    keys={[
                        'id_employee',
                        'id_farm',
                        'cpf',
                        'name',
                        'cost_per_hour',
                        'hours_worked',
                        'created_at',
                        'updated_at',
                    ]}
                    onRowClick={(item) =>
                        router.push(
                            `/farmEmployeeUpdate?id=${item['id_employee']}`,
                        )
                    }
                    dados={employeeList}
                />
            </div>
        </div>
    )
}
