import Textbox from '@/components/Textbox'

export default async function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>LOGIN</h1>
      <Textbox />
      <h1>PASSWORD</h1>
      <Textbox />

      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">LOGIN</button>
    </div>
  )
}
