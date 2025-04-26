import { verifyApiResponse } from '@/utils/verifications'

type farmType = {
    cnpj: string
    corporate_name: string
    created_at: string
    id_address: number
    id_farm: number
    id_farmer: number
    updated_at: number
}

export class FarmManagement {
    constructor() {}

    public async createFarm(bodyRequest: Partial<farmType>): Promise<Response | undefined> {
        const { id_farmer, id_address, cnpj, corporate_name } = bodyRequest

        try {
            const response = await fetch('api/farms', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id_farmer,
                    id_address,
                    cnpj,
                    corporate_name,
                }),
            })

            verifyApiResponse(response)
            return response
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    public async listAllFarm(): Promise<farmType[] | undefined> {
        try {
            const response = await fetch('api/farms', {
                method: 'GET',
            })

            verifyApiResponse(response)
            return response.json()
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    public async updateFarm(
        bodyRequest: Partial<farmType>,
        id: string,
    ): Promise<Response | undefined> {
        const { id_address, cnpj, corporate_name } = bodyRequest

        try {
            const response = await fetch(`api/farms/${Number(id)}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id_address,
                    cnpj,
                    corporate_name,
                }),
            })

            verifyApiResponse(response)
            return response.json()
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    public async findUniqueFarm(id: string): Promise<farmType | undefined> {
        try {
            const response: Response = await fetch(`api/farms/${Number(id)}`, {
                method: 'GET',
            })

            verifyApiResponse(response)
            return response.json()
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    public async deleteUniqueFarm(id: string): Promise<Request | undefined> {
        try {
            const response: Response = await fetch(`api/farms/${Number(id)}`, {
                method: 'DELETE',
            })

            verifyApiResponse(response)
            return response.json()
        } catch (error) {
            console.error(error)
            return undefined
        }
    }
}
