import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import NavMenu from './NavMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Space Tourism',
  description: 'Take a trip to Mars or somewhere in the universe and back.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavMenu />
        {children}</body>
    </html>
  )
}
