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
