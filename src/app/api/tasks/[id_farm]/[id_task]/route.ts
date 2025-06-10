'use server'

import {supplyType} from '@/classes/SupplyManagement'
import {taskType} from '@/classes/TaskManagement'
import {
    fromRequestToGenericType as fromNextRequestToGenericType,
    isDataNullOrUndefined,
} from '@/utils/verifications'
import {PrismaClient, task_status} from '@prisma/client'
import {NextRequest, NextResponse} from 'next/server'

const prisma = new PrismaClient()

export async function GET(
    request: Request,
    {params}: {params: Promise<{id_task: string}>},
) {
    try {
        const {id_task} = await params

        const data = await prisma.task.findUnique({
            where: {
                id_task: Number(id_task),
            },
            include: {
                farm: true,
                employee: true,
                supply: true,
                machinery: true,
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
    {params}: {params: Promise<{id_task: string}>},
) {
    const {id_task} = await params
    const body = await fromNextRequestToGenericType<taskType>(request)

    try {
        const data = await prisma.task.update({
            where: {
                id_task: Number(id_task),
            },
            data: {
                id_farm: body.id_farm,
                id_employee: body.id_employee,
                id_supply: body.id_supply,
                id_machinery: body.id_machinery,
                supply_quantity: body.supply_quantity,
                conclusion_date: body.conclusion_date,
                status: task_status[body.status],
                updated_at: new Date(),
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
    {params}: {params: Promise<{id_task: string}>},
) {
    const {id_task} = await params
    try {
        const data = await prisma.task.delete({
            where: {
                id_task: Number(id_task),
            },
        })

        isDataNullOrUndefined(data)
        return NextResponse.json(data, {status: 201})
    } catch (error) {
        throw error
    }
}
