'use client'

import {usePathname} from 'next/navigation'

export default function ClientWrapper({
    children,
    cleanLayoutChildren,
}: {
    children: React.ReactNode
    cleanLayoutChildren: React.ReactNode
}) {
    const pathname = usePathname()
    const cleanRoutes = ['/login', '/register', '/']
    const isCleanLayout = cleanRoutes.includes(pathname)

    return <>{isCleanLayout ? cleanLayoutChildren : children}</>
}
