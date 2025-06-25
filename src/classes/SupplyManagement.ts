import {verifyApiResponse} from '@/utils/verifications'

export type supplyType = {
    supply_id: number
    supply_name: string
    id_farm: number
    supply_category: number
    supply_quantity: number
    supply_cost_price: number
    created_at: Date
    updated_at: Date
    supply_categories: supply_categories
}

type supply_categories = {
    category_id: number
    category_name: string
    category_description: string
    is_active: boolean
    created_at: Date
    updated_at: Date
}

type specificSupplyRequest = {
    id_farm: string
    supply_id: string
}

export class SupplyManagement {
    constructor() {}

    public async createSupply(
        bodyRequest: Partial<supplyType>,
    ): Promise<Response | undefined> {
        const {
            id_farm,
            supply_name,
            supply_category,
            supply_quantity,
            supply_cost_price,
        } = bodyRequest

        try {
            const response = await fetch(
                `api/supplies/${bodyRequest.id_farm}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id_farm,
                        supply_name,
                        supply_category,
                        supply_quantity,
                        supply_cost_price,
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

    public async listAllSuppliesByFarm(
        id_farm: string,
    ): Promise<supplyType[] | undefined> {
        try {
            const response = await fetch(`api/supplies/${id_farm}`, {
                method: 'GET',
            })

            verifyApiResponse(response)
            return response.json()
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    public async updateSupplyById(
        bodyRequest: Partial<supplyType>,
        bodyInfoRequest: specificSupplyRequest,
    ): Promise<Response | undefined> {
        const {
            supply_name,
            supply_category,
            supply_quantity,
            supply_cost_price,
            created_at,
            updated_at,
        } = bodyRequest
        try {
            const response = await fetch(
                `api/supplies/${bodyInfoRequest.id_farm}/${bodyInfoRequest.supply_id}`,
                {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        supply_id: bodyInfoRequest.supply_id,
                        supply_name,
                        id_farm: bodyInfoRequest.id_farm,
                        supply_category,
                        supply_quantity,
                        supply_cost_price,
                        created_at,
                        updated_at,
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

    public async findSupplyById(
        bodyRequest: specificSupplyRequest,
    ): Promise<supplyType | undefined> {
        try {
            const response = await fetch(
                `api/supplies/${bodyRequest.id_farm}/${bodyRequest.supply_id}`,
                {
                    method: 'GET',
                },
            )

            verifyApiResponse(response)
            const finalResponse = response.json()
            console.log(JSON.stringify(finalResponse, null, 2))
            return finalResponse
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    public async deleteUniqueSupplyId(
        bodyRequest: specificSupplyRequest,
    ): Promise<Response | undefined> {
        try {
            const response = await fetch(
                `api/supplies/${bodyRequest.id_farm}/${bodyRequest.supply_id}`,
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

    public async getAllSupplyCategories(): Promise<
        supply_categories[] | undefined
    > {
        try {
            const response = await fetch(`api/supplies`, {
                method: 'GET',
            })

            verifyApiResponse(response)
            return response.json()
        } catch (error) {
            console.error(error)
            return undefined
        }
    }
}
