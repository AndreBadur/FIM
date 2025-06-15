'use client'
import FarmCreation from '@/components/FarmCreation'

export default function Home() {
    return (
        <div>
            <div className="flex">
                <div className="flex items-center justify-center flex-1 bg-gray-400 h-screen">
                    <FarmCreation></FarmCreation>
                </div>
            </div>
        </div>
    )
}
