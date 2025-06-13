import '@/styles/globals.css'
import Menu from '@/components/Menu'
import Navbar from '@/components/Navbar'
import ClientWrapper from '@/components/ClientWrapper'
import {Poppins, Bebas_Neue} from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins',
})

const bebas = Bebas_Neue({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-bebas',
})

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en" className={`${poppins.variable} ${bebas.variable}`}>
            <body className="min-h-screen flex flex-col">
                <ClientWrapper
                    cleanLayoutChildren={
                        <main className="flex-1 p-0">{children}</main>
                    }>
                    <>
                        <Navbar />
                        <div className="flex flex-1 min-h-0">
                            <Menu />
                            <main className="flex-1 p-0">{children}</main>
                        </div>
                    </>
                </ClientWrapper>
            </body>
        </html>
    )
}
