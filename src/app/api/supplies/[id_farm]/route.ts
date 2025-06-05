import {supplyType} from '@/classes/SupplyManagement'
import {
    fromRequestToGenericType,
    isDataNullOrUndefined,
} from '@/utils/verifications'
import {PrismaClient} from '@prisma/client'
import {NextRequest, NextResponse} from 'next/server'

const prisma = new PrismaClient()

export async function GET(
    request: Request,
    {params}: {params: Promise<{id_farm: string}>},
) {
    const {id_farm} = await params

    try {
        const data = await prisma.supplies.findMany({
            where: {id_farm: Number(id_farm)},
            orderBy: {created_at: 'asc'},
            include: {
                supply_categories: true,
            },
        })

        isDataNullOrUndefined(data)
        return NextResponse.json(data, {status: 200})
    } catch (error) {
        throw error
    }
}

export async function POST(request: NextRequest) {
    const body = await fromRequestToGenericType<supplyType>(request)

    try {
        const data = await prisma.supplies.create({
            data: {
                id_farm: body.id_farm,
                supply_category: body.supply_category,
                supply_cost_price: body.supply_cost_price,
                supply_quantity: body.supply_quantity,
            },
        })

        isDataNullOrUndefined(data)
        return NextResponse.json(data, {status: 201})
    } catch (error) {
        throw error
    }
}
