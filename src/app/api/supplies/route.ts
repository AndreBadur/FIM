import {isDataNullOrUndefined} from '@/utils/verifications'
import {PrismaClient} from '@prisma/client'
import {NextResponse} from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
    try {
        const data = await prisma.supply_categories.findMany()
        isDataNullOrUndefined(data)
        return NextResponse.json(data, {status: 200})
    } catch (error) {
        throw error
    }
}
