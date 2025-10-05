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
        <header className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
            }}></div>
          </div>

          <div className="relative container-max py-20 md:py-32">
            <div className="text-center">
              {/* Logo with medical icon */}
              <div className="mb-8 flex justify-center">
                <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center shadow-2xl border-4 border-primary-200 transform hover:scale-105 transition-transform duration-300">
                  <svg className="w-20 h-20 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
                {t('site.title')}
              </h1>

              <p className="text-xl md:text-3xl text-white font-light mb-4 max-w-4xl mx-auto leading-relaxed">
                {t('site.subtitle')}
              </p>

              <p className="text-lg md:text-xl text-primary-50 mb-12 max-w-2xl mx-auto font-medium">
                {t('site.tagline')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/servicios/para-patrocinadores"
                  className="bg-white text-primary-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center transform hover:-translate-y-1"
                >
                  {t('navigation.for_sponsors')}
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>

                <Link
                  href="/pacientes/informacion"
                  className="bg-primary-800 border-2 border-white text-white hover:bg-primary-900 px-8 py-4 rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center transform hover:-translate-y-1"
                >
                  {t('navigation.for_patients')}
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative wave */}
          <div className="absolute bottom-0 left-0 w-full">
            <svg className="w-full h-16 md:h-24 text-white" preserveAspectRatio="none" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 24C240 72 480 72 720 24C960 -24 1200 -24 1440 24V74H0V24Z" fill="currentColor"/>
            </svg>
          </div>
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