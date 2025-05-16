import {handleFormBodyRequest, verifyApiResponse} from '@/utils/verifications'

export type areaType = {
    id_type_area?: number
    id_farm?: number
    name?: string
    description: string
    features?: string
    capacity?: number
    status?: boolean
}

export class AreaManagement {
    constructor() {}

    public async createArea(
        bodyRequest: areaType,
    ): Promise<Response | undefined> {
        const bodyData = handleFormBodyRequest<areaType>(bodyRequest)

        try {
            const response = await fetch(`api/areas/${bodyData.id_farm}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id_type_area: bodyData.id_type_area,
                    id_farm: bodyData.id_farm,
                    name: bodyData.description,
                    description: bodyData.description,
                    features: bodyData.features,
                    capacity: bodyData.capacity,
                    status: bodyData.status,
                }),
            })

            verifyApiResponse(response)
            return response
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    public async listAllAreasByFarm(
        id_farm: string,
    ): Promise<areaType[] | undefined> {
        try {
            const response = await fetch(`api/areas/${id_farm}`, {
                method: 'GET',
            })

            verifyApiResponse(response)
            return response.json()
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    public async updateAreaById(
        bodyRequest: areaType,
        {id_area}: {id_area: string},
    ): Promise<Response | undefined> {
        const {
            id_type_area,
            id_farm,
            name,
            description,
            features,
            capacity,
            status,
        } = bodyRequest
        try {
            const response = await fetch(`api/areas/${id_farm}/${id_area}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id_type_area,
                    id_farm,
                    name,
                    description,
                    features,
                    capacity,
                    status,
                }),
            })

            verifyApiResponse(response)
            return response
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    public async findUniqueAreaById(
        id_farm: string,
        id_area: string,
    ): Promise<areaType | undefined> {
        try {
            const response = await fetch(
                `api/areas/${Number(id_farm)}/${Number(id_area)}`,
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

    public async deleteUniqueAreaById(
        id_farm: string,
        id_area: string,
    ): Promise<areaType | undefined> {
        try {
            const response = await fetch(
                `api/areas/${Number(id_farm)}/${Number(id_area)}`,
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
