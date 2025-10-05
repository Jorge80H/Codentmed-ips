import type { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { useCustomTranslation } from '@/lib/i18n'
import Navigation from '@/components/Navigation'

interface Service {
  key: string
  href: string
  external?: boolean
}

const services: Service[] = [
  { key: 'medicine', href: '/servicios/medicina' },
  { key: 'dentistry', href: '/servicios/odontologia' },
  { key: 'research', href: '/servicios/investigacion' },
  { key: 'education', href: '/servicios/educacion' },
  { key: 'consultation', href: 'https://drwilsonbautista.com', external: true },
  { key: 'advisory', href: '/servicios/asesorias' }
]

export default function HomePage() {
  const { t, locale } = useCustomTranslation()

  return (
    <>
      <Head>
        <title>{t('meta.home_title')}</title>
        <meta name="description" content={t('meta.home_description')} />
        <meta property="og:title" content={t('meta.home_title')} />
        <meta property="og:description" content={t('meta.home_description')} />
        <meta property="og:locale" content={locale === 'es' ? 'es_CO' : 'en_US'} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('meta.home_title')} />
        <meta name="twitter:description" content={t('meta.home_description')} />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Navigation */}
        <Navigation />

        {/* Hero Section */}
        <header className="relative overflow-hidden bg-primary-600">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500"></div>
          <div className="relative container-max section-padding">
            <div className="text-center">
              {/* Logo placeholder */}
              <div className="mb-8 flex justify-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-primary-600 font-bold text-xl">LOGO</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {t('site.title')}
              </h1>
              
              <p className="text-xl md:text-2xl text-primary-100 mb-4 max-w-4xl mx-auto">
                {t('site.subtitle')}
              </p>
              
              <p className="text-lg text-primary-50 mb-8 max-w-2xl mx-auto">
                {t('site.tagline')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/para-patrocinadores"
                  className="btn-primary bg-white text-primary-600 hover:bg-gray-50 inline-flex items-center justify-center"
                >
                  {t('navigation.for_sponsors')}
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
                
                <Link
                  href="/para-pacientes"
                  className="btn-secondary border-white text-white hover:bg-primary-700 inline-flex items-center justify-center"
                >
                  {t('navigation.for_patients')}
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
        </header>
        
        {/* Services Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('services.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t('services.subtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.key} className="card group hover:shadow-medical-lg transition-shadow duration-300">
                  <div className="card-body">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                      <div className="w-6 h-6 bg-primary-600 rounded"></div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {t(`services.${service.key}.title`)}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {t(`services.${service.key}.description`)}
                    </p>
                    {service.external ? (
                      <a
                        href={service.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                      >
                        {t('buttons.learn_more')} ↗
                      </a>
                    ) : (
                      <Link
                        href={service.href}
                        className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                      >
                        {t('buttons.learn_more')} →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-primary-50 section-padding">
          <div className="container-max text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('cta.ready_to_start')}
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('cta.contact_description')}
            </p>
            <Link
              href="/contacto"
              className="btn-primary inline-flex items-center justify-center"
            >
              {t('buttons.contact_now')}
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white section-padding">
          <div className="container-max">
            <div className="text-center">
              <div className="mb-8">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">LOGO</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{t('site.title')}</h3>
                <p className="text-gray-400">
                  {t('site.footer_tagline')}
                </p>
              </div>
              
              <div className="border-t border-gray-800 pt-8">
                <p className="text-gray-400">
                  © 2025 {t('site.title')}. {locale === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'es', ['common'])),
    },
  }
}