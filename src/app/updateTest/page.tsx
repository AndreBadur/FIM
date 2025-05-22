'use client'

import {FarmUpdate} from '@/components/UpdateTable'
import {useSearchParams} from 'next/navigation'

export default function UpdateTest() {
    const searchParams = useSearchParams()
    const idFarm = searchParams.get('id')
    if (idFarm != null) {
        //Adicionei para parar de dar erro
        return <FarmUpdate farmerId="1" caseToUpdateId={idFarm!.toString()} />
    }
}
