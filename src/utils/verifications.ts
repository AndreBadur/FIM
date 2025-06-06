import {NextRequest} from 'next/server'

export function verifyApiResponse(response: Response) {
    if (response.ok) {
        return true
    }
    throw Error
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isDataNullOrUndefined(data: any) {
    if (data !== null && data !== undefined) {
        return false
    }
    throw Error
}

export async function fromRequestToGenericType<T>(request: NextRequest) {
    const data: T = await request.json()
    return data
}

function validarDatas() {
    const start: Date = new Date()
}

type resource = {
    farm: {
        id: string
        name: string
    }
    machinery: {
        id: string
        name: string
    }
    employee: {
        id: string
        name: string
    }
    supply: {
        id: string
        name: string
        quantity: number
    }
}
