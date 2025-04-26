'use server'
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET(request: Request, { params }: { params: { id: number } }) {
    const { id } = await params

    const farm = await prisma.farm.findUnique({
        where: {
            id_farm: Number(id),
        },
    })

    if (farm) {
        return NextResponse.json(farm, { status: 200 })
    } else {
        return NextResponse.json(null, { status: 404 })
    }
}

export async function PATCH(request: Request, { params }: { params: { id: number } }) {
    const { id } = await params
    const { idAddress, farmCnpj, corporateName } = await request.json()
    const id_address = Number(idAddress)
    const cnpj = farmCnpj.toString()
    const corporate_name = corporateName.toString()

    console.log('IN PATCH')

    const farm = await prisma.farm.update({
        where: {
            id_farm: Number(id),
        },
        data: {
            corporate_name: corporate_name,
            id_address: id_address,
            cnpj: cnpj,
        },
    })

    return NextResponse.json(farm, { status: 200 })
}

export async function DELETE(request: Request, { params }: { params: { id: number } }) {
    console.log('route DELETE')
    console.log(params.id)
    const id = params.id

    const farm = await prisma.farm.delete({
        where: {
            id_farm: Number(id),
        },
    })
    console.log('DELETE: ', farm)
    if (farm) {
        return NextResponse.json(farm, { status: 200 })
    } else {
        return NextResponse.json(null, { status: 404 })
    }
}
