import {isDataNullOrUndefined} from '@/utils/verifications'
import {PrismaClient} from '@prisma/client'
import {NextRequest, NextResponse} from 'next/server'

const prisma = new PrismaClient()

export async function GET(
    request: Request,
    {params}: {params: Promise<{id_farm: string}>},
) {
    const {id_farm} = await params

    try {
        const data = await prisma.area.findMany({
            where: {id_farm: Number(id_farm)},
            orderBy: {created_at: 'asc'},
        })

        isDataNullOrUndefined(data)
        return NextResponse.json(data, {status: 200})
    } catch (error) {
        throw error
    }
}

export async function POST(request: NextRequest) {
    const {
        id_type_area,
        id_farm,
        name,
        description,
        features,
        capacity,
        status,
    } = await request.json()

    try {
        const data = await prisma.area.create({
            data: {
                id_type_area: Number(id_type_area),
                id_farm: Number(id_farm),
                name,
                description,
                features,
                capacity: Number(capacity),
                status: Boolean(status),
            },
        })

        isDataNullOrUndefined(data)
        return NextResponse.json(data, {status: 201})
    } catch (error) {
        throw error
    }
}
