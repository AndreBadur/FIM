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

    public async FarmCreation(
        idFarmer: string,
        idAddress: string,
        farmCnpj: string,
        corporateName: string,
    ): Promise<Response> {
        try {
            const response: Response = await fetch('api/farms', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    idFarmer,
                    idAddress,
                    farmCnpj,
                    corporateName,
                }),
            })

            if (response.ok) {
                return response
            } else {
                throw new Error('Error handling the Farm Creation method')
            }
        } catch (error) {
            throw error
        }
    }

    public async FarmListAll(): Promise<farmType[]> {
        try {
            const response: Response = await fetch('api/farms')

            if (response.ok) {
                return response.json()
            } else {
                throw response.status
            }
        } catch (error) {
            throw error
        }
    }

    public async updateFarm(
        idAddress: string,
        farmCnpj: string,
        corporateName: string,
        id: string,
    ): Promise<Response> {
        try {
            const response: Response = await fetch(`api/farms/${Number(id)}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    idAddress,
                    farmCnpj,
                    corporateName,
                }),
            })

            if (response.ok) {
                return response
            } else {
                throw response.status
            }
        } catch (error) {
            throw error
        }
    }

    public async findUniqueFarm(id: string): Promise<farmType> {
        try {
            const response: Response = await fetch(`api/farms/${Number(id)}`, {
                method: 'GET',
            })

            if (response.ok) {
                return response.json()
            } else {
                throw response.status
            }
        } catch (error) {
            throw error
        }
    }

    public async deleteUniqueFarm(id: string): Promise<Request> {
        try {
            const response: Response = await fetch(`api/farms/${Number(id)}`, {
                method: 'DELETE',
            })

            if (response.ok) {
                return response.json()
            } else {
                throw response.status
            }
        } catch (error) {
            throw error
        }
    }
}
