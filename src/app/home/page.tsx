import Navbar from '@/components/Navbar'
import Menu from '@/components/Menu'
import InputText from '@/components/InputText'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Menu />
        <div className="flex items-center justify-center flex-1 bg-black h-screen">
          <h1 className="text-white text-2xl">HOME!</h1>
          <InputText />
        </div>
      </div>
    </div>
  )
}
