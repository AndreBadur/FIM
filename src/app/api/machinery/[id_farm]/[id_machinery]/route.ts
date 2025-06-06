import {machineryType} from '@/classes/MachineryManagement'
import {
    fromRequestToGenericType,
    isDataNullOrUndefined,
} from '@/utils/verifications'
import {PrismaClient} from '@prisma/client'
import {NextRequest, NextResponse} from 'next/server'

const prisma = new PrismaClient()

export async function GET(
    request: Request,
    {params}: {params: Promise<{id_machinery: string}>},
) {
    try {
        const {id_machinery} = await params

        const data = await prisma.machinery.findUnique({
            where: {
                id_machinery: Number(id_machinery),
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
    {params}: {params: Promise<{id_machinery: string}>},
) {
    const body = await fromRequestToGenericType<machineryType>(request)
    const {id_machinery} = await params

    try {
        const data = await prisma.machinery.update({
            data: {
                id_machinery_type: Number(body.id_machinery_type),
                name: body.name,
                model: body.model,
                status: body.status,
                cost_per_hour: Number(body.cost_per_hour),
                maintenance_interval: Number(body.maintenance_interval),
                last_maintenance_date: body.last_maintenance_date,
            },
            where: {
                id_machinery: Number(id_machinery),
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
    {params}: {params: Promise<{id_machinery: string}>},
) {
    const {id_machinery} = await params

    try {
        const data = await prisma.machinery.delete({
            where: {
                id_machinery: Number(id_machinery),
            },
        })

        isDataNullOrUndefined(data)
        return NextResponse.json(data, {status: 201})
    } catch (error) {
        throw error
    }
}
