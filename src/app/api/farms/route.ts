import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { isDataNullOrUndefined } from '@/utils/verifications'

const prisma = new PrismaClient()

export async function GET() {
    try {
        const data = await prisma.farm.findMany({ orderBy: { id_farm: 'asc' } })

        isDataNullOrUndefined(data)
        return NextResponse.json(data, { status: 200 })
    } catch (error) {
        throw error
    }
}

export async function POST(request: NextRequest) {
    const { id_farmer, id_address, cnpj, corporate_name } = await request.json()

    try {
        const data = await prisma.farm.create({
            data: {
                id_farmer,
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
