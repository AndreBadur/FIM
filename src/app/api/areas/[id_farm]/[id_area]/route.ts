import {isDataNullOrUndefined} from '@/utils/verifications'
import {PrismaClient} from '@prisma/client'
import {NextRequest, NextResponse} from 'next/server'

const prisma = new PrismaClient()

export async function GET(
    request: Request,
    {params}: {params: Promise<{id_area: string}>},
) {
    try {
        const {id_area} = await params

        const data = await prisma.area.findUnique({
            where: {
                id_area: Number(id_area),
            },
        })

        isDataNullOrUndefined(data)
        return NextResponse.json(data, {status: 200})
    } catch (error) {
        throw error
    }
}

export async function PATCH(
    request: NextRequest,
    {params}: {params: Promise<{id_area: string}>},
) {
    const {id_type_area, name, description, features, capacity, status} =
        await request.json()
    const {id_area} = await params

    try {
        const data = await prisma.area.update({
            data: {
                id_type_area: Number(id_type_area),
                name,
                description,
                features,
                capacity: Number(capacity),
                status: Boolean(status),
            },
            where: {
                id_area: Number(id_area),
            },
        })

        isDataNullOrUndefined(data)
        return NextResponse.json(data, {status: 201})
    } catch (error) {
        throw error
    }
}

export async function DELETE(
    request: Request,
    {params}: {params: Promise<{id_area: string}>},
) {
    const {id_area} = await params

    try {
        const data = await prisma.area.delete({
            where: {
                id_area: Number(id_area),
            },
        })

        isDataNullOrUndefined(data)
        return NextResponse.json(data, {status: 201})
    } catch (error) {
        throw error
    }
}
