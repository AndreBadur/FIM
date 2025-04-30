'use server'

import { isDataNullOrUndefined } from '@/utils/verifications'
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET(request: Request, { params }: { params: Promise<{ id_farm: string }> }) {
    try {
        const { id_farm } = await params

        const data = await prisma.farm.findUnique({
            where: {
                id_farm: Number(id_farm),
            },
        })

        isDataNullOrUndefined(data)
        return NextResponse.json(data, { status: 200 })
    } catch (error) {
        throw error
    }
}

export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id_farm: string }> },
) {
    const { id_farm } = await params
    console.log('é o id farm: ', id_farm)
    const { id_address, cnpj, corporate_name } = await request.json()

    try {
        const data = await prisma.farm.update({
            where: {
                id_farm: Number(id_farm),
            },
            data: {
                corporate_name,
                id_address,
                cnpj,
            },
        })

        isDataNullOrUndefined(data)
        return NextResponse.json(data, { status: 201 })
    } catch (error) {
        throw error
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id_farm: string }> },
) {
    const { id_farm } = await params
    try {
        const data = await prisma.farm.delete({
            where: {
                id_farm: Number(id_farm),
            },
        })

        isDataNullOrUndefined(data)
        return NextResponse.json(data, { status: 201 })
    } catch (error) {
        throw error
    }
}
