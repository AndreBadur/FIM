import {machineryType} from '@/classes/MachineryManagement'
import {
    handleRequestJsonData,
    isDataNullOrUndefined,
} from '@/utils/verifications'
import {machinery_status, PrismaClient} from '@prisma/client'
import {NextRequest, NextResponse} from 'next/server'

const prisma = new PrismaClient()

export async function GET(
    request: Request,
    {params}: {params: Promise<{id_farm: string}>},
) {
    const {id_farm} = await params

    try {
        const data = await prisma.machinery.findMany({
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
    const body = await handleRequestJsonData<machineryType>(request)

    try {
        const data = await prisma.machinery.create({
            data: {
                id_machinery_type: body.id_machinery_type,
                id_farm: body.id_farm,
                name: body.name,
                model: body.model,
                status: machinery_status[body.status],
                cost_per_hour: body.cost_per_hour,
                maintenance_interval: body.maintenance_interval,
                last_maintenance_date: body.last_maintenance_date,
            },
        })

        isDataNullOrUndefined(data)
        return NextResponse.json(data, {status: 201})
    } catch (error) {
        throw error
    }
}
