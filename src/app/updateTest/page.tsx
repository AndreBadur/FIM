'use client'

import { GeneralUpdate } from '@/components/UpdateTable'
import { useSearchParams } from 'next/navigation'

export default function UpdateTest() {
    const searchParams = useSearchParams()
    const idFarm = searchParams.get('id')
    return <GeneralUpdate farmerId="1" caseToUpdateId={idFarm!.toString()} />
}
