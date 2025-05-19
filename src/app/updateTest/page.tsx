'use client'

import {FarmUpdate} from '@/components/UpdateTable'
import {useSearchParams} from 'next/navigation'

export default function UpdateTest() {
    const searchParams = useSearchParams()
    const idFarm = searchParams.get('id')
    return <FarmUpdate farmerId="1" caseToUpdateId={idFarm!.toString()} />
}
