import { verifyApiResponse } from '@/utils/verifications'

type areaType = {
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

    public async createArea(bodyRequest: areaType): Promise<Response | undefined> {
        const { id_type_area, id_farm, name, description, features, capacity, status } = bodyRequest
        try {
            const response = await fetch('api/areas', {
                method: 'POST',
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

    //public async listAllArea(request: Request, { params }: { params: Promise<{ id: string }> }) {}
}
