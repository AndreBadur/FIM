import {employeeType} from '@/classes/EmployeeManagement'
import {
    handleRequestJsonData,
    isDataNullOrUndefined,
} from '@/utils/verifications'
import {PrismaClient} from '@prisma/client'
import {NextRequest, NextResponse} from 'next/server'

const prisma = new PrismaClient()

export async function GET(
    request: Request,
    {params}: {params: Promise<{id_farmer: string}>},
) {
    try {
        const {id_farmer} = await params

        const data = await prisma.employee.findMany({
            where: {
                id_farmer: Number(id_farmer),
            },
            orderBy: {
                id_farm: 'asc',
            },
        })

        isDataNullOrUndefined(data)
        return NextResponse.json(data, {status: 200})
    } catch (error) {
        throw error
    }
}

export async function POST(
    request: NextRequest,
    {params}: {params: Promise<{id_farmer: string}>},
) {
    try {
        const bodyRequest = await handleRequestJsonData<employeeType>(request)
        const {id_farmer} = await params

        console.log(bodyRequest)

        const data = await prisma.employee.create({
            data: {
                id_farmer: Number(id_farmer),
                cpf: bodyRequest.cpf,
                name: bodyRequest.name,
                cost_per_hour: bodyRequest.cost_per_hour,
                hours_worked: bodyRequest.hours_worked,
                id_farm: Number(bodyRequest.id_farm),
            },
        })

        isDataNullOrUndefined(data)
        return NextResponse.json(data, {status: 201})
    } catch (error) {
        throw error
    }
}
