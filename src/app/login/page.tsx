'use client'

import {InputEmail, InputPassword} from '@/components/CamposLogin'
import {Title, SubTitle, Option, Line} from '@/components/TextoAuth'
import Image from 'next/image'
import {FormEvent} from 'react'
import {useRouter} from 'next/navigation'

export default function Login() {
    const router = useRouter()

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')

        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password}),
        })

        if (response.ok) {
            router.push('/')
        } else {
            // Handle errors
        }
    }

    function handleBack() {
        router.push('/')
    }

    return (
        <div className={`flex justify-between w-[100%] relative`}>
            <button
                onClick={handleBack}
                className="absolute top-4 left-4 bg-green-500 hover:bg-green-600 text-white font-bebasNeue py-2 px-4 rounded shadow"
                type="button">
                Voltar
            </button>

            <section
                className={`flex justify-center items-center h-screen w-[100%]`}>
                <div>
                    <div className={`h-20vh flex flex-col`}>
                        <Title text="Bem-vindo de volta!"></Title>
                        <SubTitle text="Insira seus dados para acessar sua conta!"></SubTitle>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="h-[24vh] flex flex-col justify-around">
                            <InputEmail></InputEmail>
                            <InputPassword></InputPassword>
                        </div>

                        <a href="passReset">
                            <Option text="esqueceu a senha?"></Option>
                        </a>

                        <div
                            className={`w-[100%] flex justify-center mt-[1.3rem]`}>
                            <button
                                type="submit"
                                className={`bg-[#00F511] h-[3.1rem] w-[14.8rem] rounded-lg text-[1.5rem] text-[#ffffff] font-bebasNeue`}
                                onClick={() => router.push('/home')}>
                                Login
                            </button>
                        </div>
                    </form>

                    <Line></Line>
                    <div
                        className={`flex justify-center text-[0.938rem] mt-[0.4rem]`}>
                        <p>
                            Não possui uma conta?{' '}
                            <a href="/register" className="text-[#7B9A41]">
                                Cadastre-se
                            </a>
                        </p>
                    </div>
                </div>
            </section>

            <div className={`relative w-[100%]`}>
                <Image
                    src="/img/loginbg2.png"
                    alt="Imagem"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    )
}
