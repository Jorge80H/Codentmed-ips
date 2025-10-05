import { ReactNode } from 'react'
import Head from 'next/head'
import { Breadcrumb } from './Navigation'
import { useCustomTranslation } from '@/lib/i18n'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface PageLayoutProps {
  children: ReactNode
  title: string
  description?: string
  breadcrumbs?: BreadcrumbItem[]
  hero?: {
    title: string
    subtitle?: string
    image?: string
  }
}

export default function PageLayout({
  children,
  title,
  description,
  breadcrumbs,
  hero
}: PageLayoutProps) {
  const { locale } = useCustomTranslation()

  const metaTitle = `${title} | CODENTMED IPS`
  const metaDescription = description || 'Centro líder en investigación clínica, medicina y odontología especializada en Colombia.'

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
      </Head>

      {/* Hero Section (optional) */}
      {hero && (
        <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 md:py-24">
          {hero.image && (
            <>
              <div className="absolute inset-0">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${hero.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
              </div>
            </>
          )}
          <div className="relative container-max px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {hero.title}
              </h1>
              {hero.subtitle && (
                <p className="text-xl md:text-2xl text-gray-100">
                  {hero.subtitle}
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Breadcrumbs */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="container-max px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumb items={breadcrumbs} />
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="min-h-screen">
        {children}
      </main>
    </>
  )
}
