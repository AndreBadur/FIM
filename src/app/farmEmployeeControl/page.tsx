'use client'

import {useEffect, useState} from 'react'
import {EmployeeManagement, employeeType} from '@/classes/EmployeeManagement'
import {AriaTable} from '@/components/Table'
import {verificarFazendeiro} from '@/utils/utilityFunctions'
import {Button} from 'react-aria-components'

export default function EmployeeControl() {
    const [employeeList, setEmployeeList] = useState<employeeType[]>([])

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
        <div className="min-h-screen flex justify-center items-start bg-white">
            <div className="w-full max-w-4xl px-4">
                <div className="flex justify-between items-center w-full">
                    <h1 className="text-xl font-bold">Lista de Funcionários</h1>
                    <a href="/farmEmployeeCreation">
                        <Button
                            onPress={() =>
                                (window.location.href = '/farmEmployeeCreation')
                            }
                            className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 mt-2">
                            Adicionar
                        </Button>
                    </a>
                </div>
                <AriaTable tipo="employee" dados={employeeList} />
            </div>
        </div>
    )
}
