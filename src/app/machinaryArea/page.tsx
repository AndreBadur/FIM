import Navbar from '@/components/Navbar'
import Menu from '@/components/Menu'

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="flex">
                <Menu />
                <div className="flex items-center justify-center flex-1 bg-black h-screen">
                    <h1 className="text-white text-2xl">Maquinários!</h1>
                </div>
            </div>
        </div>
    )
}
