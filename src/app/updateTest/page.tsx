'use client'

import {FarmUpdate} from '@/components/UpdateTable'
import {useSearchParams} from 'next/navigation'
import {Suspense} from 'react'

function UpdateWrapper() {
    const searchParams = useSearchParams()
    const idFarm = searchParams.get('id')

    if (!idFarm) return <div>Erro: id não fornecido</div>

    return <FarmUpdate farmerId="1" caseToUpdateId={idFarm} />
}

export default function UpdateTest() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <UpdateWrapper />
        </Suspense>
    )
}
