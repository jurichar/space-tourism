import type { Metadata } from 'next'
import { Bellefair } from 'next/font/google'
import './globals.scss'
import NavMenu from './NavMenu'

const bellefair = Bellefair({
  subsets: ['latin'],
  weight: '400'
})



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
      <body className={bellefair.className}>
        <NavMenu />
        {children}</body>
    </html>
  )
}
