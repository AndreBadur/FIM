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

    public async createFarm(
        bodyRequest: Partial<farmType>,
        id_farmer: string,
    ): Promise<Response | undefined> {
        const { id_address, cnpj, corporate_name } = bodyRequest

        try {
            const response = await fetch(`api/farms/${id_farmer}`, {
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

    public async listAllFarmsByFarmer(id_farmer: string): Promise<farmType[] | undefined> {
        try {
            const response = await fetch(`api/farms/${id_farmer}`, {
                method: 'GET',
            })

            verifyApiResponse(response)
            return response.json()
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    public async updateFarmByFarmId(
        bodyRequest: Partial<farmType>,
        id_farmer: string,
        id_farm: string,
    ): Promise<Response | undefined> {
        const { id_address, cnpj, corporate_name } = bodyRequest

        try {
            const response = await fetch(`api/farms/${Number(id_farmer)}/${Number(id_farm)}`, {
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

    public async findUniqueFarmByFarmId(
        id_farmer: string,
        id_farm: string,
    ): Promise<farmType | undefined> {
        try {
            const response: Response = await fetch(
                `api/farms/${Number(id_farmer)}/${Number(id_farm)}`,
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

    public async deleteFarmByFarmId(
        id_farmer: string,
        id_farm: string,
    ): Promise<Request | undefined> {
        try {
            const response: Response = await fetch(
                `api/farms/${Number(id_farmer)}/${Number(id_farm)}`,
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
