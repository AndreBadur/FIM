import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { isDataNullOrUndefined } from '@/utils/verifications'

const prisma = new PrismaClient()

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id_farmer: string }> },
) {
    const { id_farmer } = await params

    try {
        const data = await prisma.farm.findMany({
            where: { id_farmer: Number(id_farmer) },
            orderBy: { id_farm: 'asc' },
        })

        isDataNullOrUndefined(data)
        return NextResponse.json(data, { status: 200 })
    } catch (error) {
        throw error
    }
}

export async function POST(
    request: NextRequest,
    { params }: { params: Promise<{ id_farmer: string }> },
) {
    const { id_address, cnpj, corporate_name } = await request.json()
    const { id_farmer } = await params

    try {
        const data = await prisma.farm.create({
            data: {
                id_farmer: Number(id_farmer),
                id_address,
                cnpj,
                corporate_name,
            },
        })

        isDataNullOrUndefined(data)
        return NextResponse.json(data, { status: 201 })
    } catch (error) {
        throw error
    }
}
