import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Geist } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'Son Ceibe · Folk galego en fusión',
  description:
    'Web oficial de Son Ceibe. Escoita os seus dous discos en Spotify, coñece o grupo e merca a súa música. Folk galego en fusión.',
  generator: 'v0.app',
  icons: {
    icon: '/son-ceibe-logo.png',
    apple: '/son-ceibe-logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f2ede1' },
    { media: '(prefers-color-scheme: dark)', color: '#1c2620' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="gl" className={`${geistSans.variable} ${fraunces.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
