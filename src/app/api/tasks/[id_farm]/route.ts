// import {supplyType} from '@/classes/SupplyManagement'
import {taskType} from '@/classes/TaskManagement'
import {
    fromRequestToGenericType,
    isDataNullOrUndefined,
} from '@/utils/verifications'
import {PrismaClient, task_status} from '@prisma/client'
import {NextRequest, NextResponse} from 'next/server'

const prisma = new PrismaClient()

export async function GET(
    request: Request,
    {params}: {params: Promise<{id_farm: string}>},
) {
    const {id_farm} = await params

    try {
        const data = await prisma.task.findMany({
            where: {id_farm: Number(id_farm)},
            orderBy: {conclusion_date: 'asc'},
            include: {
                supply: true,
                employee: true,
                farm: true,
                machinery: true,
            },
        })

        isDataNullOrUndefined(data)
        return NextResponse.json(data, {status: 200})
    } catch (error) {
        throw error
    }
}

export async function POST(request: NextRequest) {
    const body = await fromRequestToGenericType<taskType>(request)

    try {
        const data = await prisma.task.create({
            data: {
                id_farm: body.id_farm,
                id_employee: body.id_employee,
                id_machinery: body.id_machinery,
                id_supply: body.id_supply,
                supply_quantity: body.supply_quantity,
                conclusion_date: body.conclusion_date,
                status: task_status[body.status],
            },
        })

        isDataNullOrUndefined(data)
        return NextResponse.json(data, {status: 201})
    } catch (error) {
        throw error
    }
}
