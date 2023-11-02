import './globals.scss'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { NavBar } from './components'
import { Providers } from './providers'

const inter = Roboto({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Is it your birthday?'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='main'>
          <NavBar />
          <Providers>
            {children}
          </Providers>
        </div>
      </body>
    </html>
  )
}
