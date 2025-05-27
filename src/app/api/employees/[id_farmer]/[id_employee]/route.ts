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
    {params}: {params: Promise<{id_employee: string}>},
) {
    const {id_employee} = await params
    try {
        const data = await prisma.employee.findUnique({
            where: {
                id_employee: Number(id_employee),
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
    {params}: {params: Promise<{id_employee: string}>},
) {
    const {id_employee} = await params
    const bodyRequest = await handleRequestJsonData<employeeType>(request)

    try {
        const data = await prisma.employee.update({
            where: {
                id_employee: Number(id_employee),
            },
            data: {
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

export async function DELETE(
    request: Request,
    {params}: {params: Promise<{id_employee: string}>},
) {
    const {id_employee} = await params
    try {
        const data = await prisma.employee.delete({
            where: {
                id_employee: Number(id_employee),
            },
        })

        isDataNullOrUndefined(data)
        return NextResponse.json(data, {status: 201})
    } catch (error) {
        throw error
    }
}
