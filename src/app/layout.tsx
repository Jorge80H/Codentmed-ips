import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'CODENTMED IPS - Centro Integrado de Medicina, Odontología e Investigación Clínica',
    template: '%s | CODENTMED IPS'
  },
  description: 'Centro líder en investigación clínica, medicina interna, reumatología y odontología especializada en Colombia. Atención integral con visión científica.',
  keywords: [
    'investigación clínica Colombia',
    'estudios clínicos Bogotá',
    'medicina interna',
    'reumatología',
    'odontología especializada',
    'Dr Wilson Bautista',
    'CODENTMED IPS'
  ],
  authors: [{ name: 'CODENTMED IPS' }],
  creator: 'CODENTMED IPS',
  publisher: 'CODENTMED IPS',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://codentmed-ips.netlify.app'),
  alternates: {
    canonical: '/',
    languages: {
      'es': '/es',
      'en': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    alternateLocale: ['en_US'],
    title: 'CODENTMED IPS - Centro Integrado de Medicina, Odontología e Investigación Clínica',
    description: 'Centro líder en investigación clínica, medicina interna, reumatología y odontología especializada en Colombia.',
    siteName: 'CODENTMED IPS',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CODENTMED IPS - Centro Integrado de Medicina, Odontología e Investigación',
    description: 'Centro líder en investigación clínica, medicina interna, reumatología y odontología especializada en Colombia.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div id="__next">
          {children}
        </div>
      </body>
    </html>
  )
}