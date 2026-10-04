import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { LanguageProvider } from '@/components/language-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Son Ceibe · Folk galego en fusión',
  description:
    'Web oficial de Son Ceibe. Escoita a música publicada, consulta as letras e coñece o grupo. Folk galego en fusión.',
  icons: {
    icon: '/son-ceibe-logo.webp',
    apple: '/son-ceibe-logo.webp',
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
    <html lang="gl" className="bg-background">
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
