'use server'

import {supplyType} from '@/classes/SupplyManagement'
import {
    fromRequestToGenericType as fromNextRequestToGenericType,
    isDataNullOrUndefined,
} from '@/utils/verifications'
import {PrismaClient} from '@prisma/client'
import {NextRequest, NextResponse} from 'next/server'

const prisma = new PrismaClient()

export async function GET(
    request: Request,
    {params}: {params: Promise<{supply_id: string}>},
) {
    try {
        const {supply_id} = await params

        const data = await prisma.supplies.findUnique({
            where: {
                supply_id: Number(supply_id),
            },
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

export async function PATCH(
    request: NextRequest,
    {params}: {params: Promise<{supply_id: string}>},
) {
    const {supply_id} = await params
    const requestData = await fromNextRequestToGenericType<supplyType>(request)

    try {
        const data = await prisma.supplies.update({
            where: {
                supply_id: Number(supply_id),
            },
            data: {
                supply_category: requestData.supply_category,
                supply_cost_price: requestData.supply_cost_price,
                supply_quantity: requestData.supply_quantity,
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
    {params}: {params: Promise<{supply_id: string}>},
) {
    const {supply_id} = await params
    try {
        const data = await prisma.supplies.delete({
            where: {
                supply_id: Number(supply_id),
            },
        })

        isDataNullOrUndefined(data)
        return NextResponse.json(data, {status: 201})
    } catch (error) {
        throw error
    }
}
