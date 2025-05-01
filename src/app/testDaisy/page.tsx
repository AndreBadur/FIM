'use client'
import { Input } from 'react-aria-components'

export default function TestDaisy() {
    return (
        <div className="flex h-screen w-screen flex-col">
            <div className="h-20 w-screen bg-blue-400">NAVBAR</div>
            <div className="flex grow flex-row">
                <div className="w-32 bg-green-400">SIDE CONTENT</div>
                <div className="grow bg-amber-400">MAIN CONTENT</div>
            </div>
            <div className="h-20 w-screen bg-red-400">FOOTER</div>
        </div>
    )
}
