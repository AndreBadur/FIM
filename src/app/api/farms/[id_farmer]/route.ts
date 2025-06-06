import {NextRequest, NextResponse} from 'next/server'
import {PrismaClient} from '@prisma/client'
import {
    fromRequestToGenericType,
    isDataNullOrUndefined,
} from '@/utils/verifications'
import {farmType} from '@/classes/FarmManagements'

const prisma = new PrismaClient()

export async function GET(
    request: Request,
    {params}: {params: Promise<{id_farmer: string}>},
) {
    try {
        const {id_farmer} = await params

        const data = await prisma.farm.findMany({
            where: {id_farmer: Number(id_farmer)},
            orderBy: {id_farm: 'asc'},
        })

        isDataNullOrUndefined(data)
        return NextResponse.json(data, {status: 200})
    } catch (error) {
        throw error
    }
}

export async function POST(
    request: NextRequest,
    {params}: {params: Promise<{id_farmer: string}>},
) {
    try {
        const bodyRequest = await fromRequestToGenericType<farmType>(request)
        const {id_farmer} = await params

        const data = await prisma.farm.create({
            data: {
                id_farmer: Number(id_farmer),
                id_address: bodyRequest.id_address,
                cnpj: bodyRequest.cnpj,
                corporate_name: bodyRequest.corporate_name,
            },
        })

        isDataNullOrUndefined(data)
        return NextResponse.json(data, {status: 201})
    } catch (error) {
        throw error
    }
}
