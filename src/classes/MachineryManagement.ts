import {verifyApiResponse} from '@/utils/verifications'

export enum machineryStatus {
    active = 'active',
    inactive = 'inactive',
    onMaintenance = 'onMaintenance',
}
export type machineryType = {
    id_machinery?: string
    id_machinery_type: number
    id_farm: number
    name: string
    model: string
    status: machineryStatus
    cost_per_hour: number
    maintenance_interval: number
    last_maintenance_date: Date
}

type specificMachineryRequest = {
    id_farm: string
    id_machinery: string
}

export class MachineryManagement {
    constructor() {}

    public async createMachinery(
        bodyRequest: machineryType,
    ): Promise<Response | undefined> {
        const {
            id_machinery_type,
            id_farm,
            name,
            model,
            status,
            cost_per_hour,
            maintenance_interval,
            last_maintenance_date,
        } = bodyRequest
        try {
            const response = await fetch(
                `/api/machinery/${bodyRequest.id_farm}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id_machinery_type,
                        id_farm,
                        name,
                        model,
                        status,
                        cost_per_hour,
                        maintenance_interval,
                        last_maintenance_date,
                    }),
                },
            )

            verifyApiResponse(response)
            return response
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    public async listAllMachineriesByFarm(
        id_farm: string,
    ): Promise<machineryType[] | undefined> {
        try {
            const response = await fetch(`/api/machinery/${id_farm}`, {
                method: 'GET',
            })

            verifyApiResponse(response)
            return response.json()
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    public async updateMachineryById(
        bodyRequest: machineryType,
        {id_machinery}: {id_machinery: string},
    ): Promise<Response | undefined> {
        const {
            id_machinery_type,
            id_farm,
            name,
            model,
            status,
            cost_per_hour,
            maintenance_interval,
            last_maintenance_date,
        } = bodyRequest
        try {
            const response = await fetch(
                `/api/machinery/${id_farm}/${id_machinery}`,
                {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id_machinery_type,
                        name,
                        model,
                        status,
                        cost_per_hour,
                        maintenance_interval,
                        last_maintenance_date,
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

    public async findMachineryById(
        bodyRequest: specificMachineryRequest,
    ): Promise<machineryType | undefined> {
        try {
            const response = await fetch(
                `/api/machinery/${bodyRequest.id_farm}/${bodyRequest.id_machinery}`,
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

    public async deleteUniqueMachineryId(
        bodyRequest: specificMachineryRequest,
    ): Promise<Response | undefined> {
        try {
            const response = await fetch(
                `/api/machinery/${bodyRequest.id_farm}/${bodyRequest.id_machinery}`,
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
