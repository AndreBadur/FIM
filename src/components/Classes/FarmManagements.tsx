export class FarmManagement {
    constructor() {}

    public async FarmCreation(
        farmerId: string,
        idAddress: string,
        farmCnpj: string,
        corporateName: string,
    ): Promise<Response> {
        const response: Response = await fetch('api/farms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                idFarmer: farmerId,
                idAddress: idAddress,
                farmCnpj: farmCnpj,
                corporateName: corporateName,
            }),
        })

        if (response.ok) {
            return response
        } else {
            throw new Error('Error handling the Farm POST method')
        }
    }

    public async FarmListAll(): Promise<Response[]> {
        console.log('farm list')
        const response: Response = await fetch('api/farms')

        if (response.ok) {
            return response.json()
        } else {
            throw new Error('Error handling the Farm GET method')
        }
    }
}
