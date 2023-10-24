import type { Metadata } from 'next'
import { Chivo } from 'next/font/google'
import './globals.css'

const chivo = Chivo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Project ADA',
  description: 'Project ADA: Girls in Tech 2023',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={chivo.className}>{children}</body>
    </html>
  )
}
