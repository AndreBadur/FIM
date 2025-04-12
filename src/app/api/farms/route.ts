import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// export async function GET(request: NextRequest) {
//     return
// }

export async function POST(request: NextRequest) {
    console.log('CHEGUEI NO POST')
    const { idAddress, idFarmer, farmCnpj, corporateName } = await request.json()
    const id_farmer = Number(idFarmer)
    const id_address = Number(idAddress)
    const cnpj = farmCnpj.toString()
    const corporate_name = corporateName.toString()

    const post = await prisma.farm.create({
        data: {
            id_farmer,
            id_address,
            cnpj,
            corporate_name,
        },
    })
    console.log(post)

    return new NextResponse(null, { status: 201 })
}

// export async function PUT(request: Request) {}

// export async function DELETE(request: Request) {}

// export async function HEAD(request: Request) {}
