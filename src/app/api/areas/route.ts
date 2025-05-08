import { isDataNullOrUndefined } from '@/utils/verifications'
import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {}

export async function POST(request: NextRequest) {
    const { id_type_area, id_farm, name, description, features, capacity, status } =
        await request.json()
    const idTypeArea = Number(id_type_area)
    const idFarm = Number(id_farm)
    const areaCapacity = Number(capacity)
    const areaStatus = Boolean(status)

    try {
        const data = await prisma.area.create({
            data: {
                id_type_area: idTypeArea,
                id_farm: idFarm,
                name,
                description,
                features,
                capacity: areaCapacity,
                status: areaStatus,
            },
        })
        console.log('loggind data:', data)

        isDataNullOrUndefined(data)
        return NextResponse.json(data, { status: 201 })
    } catch (error) {
        throw error
    }
}
