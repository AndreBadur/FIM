import React from 'react'

export function Title({ children }: { children: React.ReactNode }) {
    return <h1 className="text-3xl font-bold font-raleway">{children}</h1>
}

export function Subtitle({ children }: { children: React.ReactNode }) {
    return <h2 className="text-xl font-semibold font-raleway">{children}</h2>
}

export function Text({ children }: { children: React.ReactNode }) {
    return <p className="text-base text-gray-800 font-raleway">{children}</p>
}

export function Label({ children }: { children: React.ReactNode }) {
    return <label className="text-sm text-gray-800 font-raleway">{children}</label>
}
