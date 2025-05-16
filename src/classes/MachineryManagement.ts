import {handleFormBodyRequest, verifyApiResponse} from '@/utils/verifications'

export enum machineryStatus {
    active = 'active',
    inactive = 'inactive',
    onMaintenance = 'onMaintenance',
}
export type machineryType = {
    id_machinery_type: number
    id_farm: number
    name: string
    model: string
    status: machineryStatus
    cost_per_hour: number
    maintenance_interval: number
    last_maintenance_date: Date
}

export class MachineryManagement {
    constructor() {}

    public async createMachinery(
        bodyRequest: machineryType,
    ): Promise<Response | undefined> {
        const bodyData = handleFormBodyRequest<machineryType>(bodyRequest)

        try {
            const response = await fetch(`api/machinery/${bodyData.id_farm}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id_machinery_type: bodyData.id_machinery_type,
                    id_farm: bodyData.id_farm,
                    name: bodyData.name,
                    model: bodyData.model,
                    status: bodyData.status,
                    cost_per_hour: bodyData.cost_per_hour,
                    maintenance_interval: bodyData.maintenance_interval,
                    last_maintenance_date: bodyData.last_maintenance_date,
                }),
            })

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
            const response = await fetch(`api/machinery/${id_farm}`, {
                method: 'GET',
            })

            verifyApiResponse(response)
            return response.json()
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    public async updateMachineryById() {}

    public async findMachineryById() {}

    public async deleteUniqueMachineryId() {}
}
