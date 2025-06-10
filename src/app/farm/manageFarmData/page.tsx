'use client'

import {FarmUpdateForms} from '@/components/FarmUpdateForms'
import {useSearchParams} from 'next/navigation'
import {Suspense} from 'react'

function UpdateWrapper() {
    const searchParams = useSearchParams()
    const idFarm = searchParams.get('id')

    if (!idFarm) return <div>Erro: id não fornecido</div>

    return <FarmUpdateForms farmerId="1" farmId={idFarm} />
}

export default function ManageFarmData() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <UpdateWrapper />
        </Suspense>
    )
}
