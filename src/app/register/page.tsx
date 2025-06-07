'use client'

import {
    InputEmail,
    InputPassword,
    InputConfirmPassword,
    InputName,
} from '@/components/CamposLogin'
import {Title, SubTitle, Line} from '@/components/TextoAuth'
import Image from 'next/image'
import {useRouter} from 'next/navigation'
import {FormEvent} from 'react'

export default function SignUp() {
    const router = useRouter()

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')
        const name = formData.get('name')
        const confirm_password = formData.get('confirm_password')

        const response = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password, name, confirm_password}),
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
        <div className={`flex justify-between w-[100%]`}>
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
                        <Title text="Cadastre-se agora!"></Title>
                        <SubTitle text="Insira seus dados para criar uma conta!"></SubTitle>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="h-[45vh] flex flex-col justify-around">
                            <InputName></InputName>
                            <InputEmail></InputEmail>
                            <InputPassword></InputPassword>
                            <InputConfirmPassword></InputConfirmPassword>
                        </div>

                        <div
                            className={`w-[100%] flex justify-center mt-[1.3rem]`}>
                            <div>
                                <button
                                    type="submit"
                                    className={`bg-[#00F511] h-[3.1rem] w-[14.8rem] rounded-lg text-[1.5rem] text-[#ffffff] font-bebasNeue`}
                                    onClick={() => router.push('/home')}>
                                    Cadastrar
                                </button>
                            </div>
                        </div>
                    </form>

                    <Line></Line>
                    <div
                        className={`flex justify-center text-[0.938rem] mt-[0.4rem]`}>
                        <p>
                            Possui uma conta? Faça{' '}
                            <a href="login" className="text-[#7B9A41]">
                                login
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
