import {verifyApiResponse} from '@/utils/verifications'
import {NextResponse} from 'next/server'
import {machineryType} from './MachineryManagement'
import {employeeType} from './EmployeeManagement'
import {supplyType} from './SupplyManagement'

export enum taskStatus {
    to_do = 'to_do',
    doing = 'doing',
    verifying = 'verifying',
    cancelled = 'cancelled',
    done = 'done',
}

export type taskType = {
    id_task: number
    id_farm: number
    id_employee: number
    id_supply: number
    id_machinery: number
    supply_quantity: number
    conclusion_date: Date
    status: taskStatus
    created_at: Date
    updated_at: Date
    employee: employeeType
    supply: supplyType
    machinery: machineryType
}

export class TaskManagement {
    constructor() {}

    public async createTask(
        bodyRequest: Partial<taskType>,
    ): Promise<Response | undefined> {
        try {
            const response = await fetch(`api/tasks/${bodyRequest.id_farm}`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    id_farm: bodyRequest.id_farm,
                    id_employee: bodyRequest.id_employee,
                    id_supply: bodyRequest.id_supply,
                    id_machinery: bodyRequest.id_machinery,
                    supply_quantity: bodyRequest.supply_quantity,
                    conclusion_date: bodyRequest.conclusion_date,
                    status: bodyRequest.status,
                }),
            })

            verifyApiResponse(response)
            return response.json()
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    public async listAllTasksByFarm(
        id_farm: string,
    ): Promise<taskType[] | undefined> {
        try {
            const response = await fetch(`api/tasks/${id_farm}`, {
                method: 'GET',
            })

            verifyApiResponse(response)
            return response.json()
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    public async updateTaskByTaskId(
        bodyRequest: Partial<taskType>,
        id_farm: string,
        id_task: string,
    ): Promise<Response | undefined> {
        try {
            const response = await fetch(`api/tasks/${id_farm}/${id_task}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id_farm: bodyRequest.id_farm,
                    id_employee: bodyRequest.id_employee,
                    id_supply: bodyRequest.id_supply,
                    id_machinery: bodyRequest.id_machinery,
                    supply_quantity: bodyRequest.supply_quantity,
                    conclusion_date: bodyRequest.conclusion_date,
                    status: bodyRequest.status,
                }),
            })

            verifyApiResponse(response)
            return response.json()
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    public async findTaskById(
        id_farm: string,
        id_task: string,
    ): Promise<taskType | undefined> {
        try {
            const response = await fetch(`api/tasks/${id_farm}/${id_task}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            verifyApiResponse(response)
            return response.json()
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    public async deleteUniqueTaskById(
        id_farm: string,
        id_task: string,
    ): Promise<NextResponse | undefined> {
        try {
            const response = await fetch(`api/tasks/${id_farm}/${id_task}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            verifyApiResponse(response)
            return response.json()
        } catch (error) {
            console.error(error)
            return undefined
        }
    }
}
