import '@/styles/globals.css'

export const metadata = {
    title: 'Next.js',
    description: 'Generated by Next.js',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body>
                <div>TEXTO DE LAYOUT</div>
                {children}
            </body>
        </html>
    )
}
