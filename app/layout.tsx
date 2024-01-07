import type { Metadata } from 'next'
import Image from 'next/image'
import { Roboto_Mono, Roboto } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/ui/theme-switch'
import './globals.css'

const robotoMono = Roboto_Mono({ subsets: ['latin'] })
const roboto = Roboto({ weight: "400", subsets: ['latin'] })


export const metadata: Metadata = {
  title: '3kh0 V5',
  description: 'A new generation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>
        <ThemeProvider
        attribute='class'
        defaultTheme='dark'
        enableSystem
        >

          <nav className={roboto.className}>
            <div className="mx-auto border-b-2 border-green-600"> 
              <div className="flex justify-around items-center py-4">
                <ModeToggle />
                <div className="flex justify-around items-center">
                  <Image src="/logo.png" alt="Logo" width="50" height="50" className="rounded-full w-10 h-10" />
                  <h1 className="text-4xl ml-4">3kh0</h1>
                </div>
                <div className="flex justify-around items-center space-x-6">
                  <p>Home</p>
                  <p><span>G</span><span>a</span><span>m</span><span>e</span><span>s</span></p>
                  <p>Apps</p>
                </div>
              </div>
            </div>
          </nav>
          {children}
        </ThemeProvider>
        </body>
    </html>
  )
}
