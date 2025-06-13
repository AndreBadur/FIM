import {verifyApiResponse} from '@/utils/verifications'
import {farmType} from './FarmManagements'

export type employeeType = {
    id_employee?: number
    id_farm: number
    cpf: string
    name: string
    cost_per_hour: number
    hours_worked: number
    created_at?: Date
    updated_at?: Date
    farm: farmType
}

export class EmployeeManagement {
    constructor() {}

    public async createEmployee(
        bodyRequest: Partial<employeeType>,
        id_farmer: string,
    ): Promise<Response | undefined> {
        try {
            const response = await fetch(`/api/employees/${id_farmer}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id_farmer,
                    cpf: bodyRequest.cpf,
                    name: bodyRequest.name,
                    cost_per_hour: bodyRequest.cost_per_hour,
                    hours_worked: bodyRequest.hours_worked,
                    id_farm: bodyRequest.id_farm,
                }),
            })

            verifyApiResponse(response)
            return response.json()
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    public async listAllEmployeesByFarmer(
        id_farmer: string,
    ): Promise<employeeType[] | undefined> {
        try {
            const response = await fetch(`/api/employees/${id_farmer}`, {
                method: 'GET',
            })

            verifyApiResponse(response)
            return response.json()
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    public async updateEmployeeByEmployeeId(
        bodyRequest: employeeType,
        id_farmer: string,
        id_employee: string,
    ): Promise<Response | undefined> {
        try {
            const response = await fetch(
                `/api/employees/${id_farmer}/${id_employee}`,
                {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        cpf: bodyRequest.cpf,
                        name: bodyRequest.name,
                        cost_per_hour: bodyRequest.cost_per_hour,
                        hours_worked: bodyRequest.hours_worked,
                        id_farm: bodyRequest.id_farm,
                    }),
                },
            )

            verifyApiResponse(response)
            return response.json()
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    public async findUniqueEmployeeByEmployeeId(
        id_farmer: string,
        id_employee: string,
    ): Promise<employeeType | undefined> {
        try {
            const response = await fetch(
                `/api/employees/${id_farmer}/${id_employee}`,
                {
                    method: 'GET',
                },
            )

            verifyApiResponse(response)
            return response.json()
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    public async deleteEmployeeByEmployeeId(
        id_farmer: string,
        id_employee: string,
    ): Promise<Response | undefined> {
        try {
            const response = await fetch(
                `/api/employees/${id_farmer}/${id_employee}`,
                {
                    method: 'DELETE',
                },
            )

            verifyApiResponse(response)
            return response.json()
        } catch (error) {
            console.error(error)
            return undefined
        }
    }
}
