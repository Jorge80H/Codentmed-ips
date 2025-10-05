import type { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Link from 'next/link'
import { 
  CheckCircleIcon, 
  GlobeAltIcon, 
  AcademicCapIcon, 
  CurrencyDollarIcon,
  MapPinIcon,
  ClockIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import { useCustomTranslation } from '@/lib/i18n'
import Navigation from '@/components/Navigation'

const therapeuticAreas = [
  'rheumatology',
  'cardiology', 
  'oncology',
  'neurology',
  'gastroenterology',
  'dermatology',
  'endocrinology',
  'infectious_diseases'
]

const advantages = [
  {
    icon: CurrencyDollarIcon,
    key: 'cost',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: CheckCircleIcon,
    key: 'quality',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: AcademicCapIcon,
    key: 'talent',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: MapPinIcon,
    key: 'location',
    color: 'bg-orange-100 text-orange-600'
  }
]

const services = [
  {
    key: 'site_selection',
    icon: GlobeAltIcon
  },
  {
    key: 'regulatory',
    icon: DocumentTextIcon
  },
  {
    key: 'patient_recruitment',
    icon: UserGroupIcon
  },
  {
    key: 'monitoring',
    icon: ClockIcon
  }
]

export default function SponsorsPage() {
  const { t, locale } = useCustomTranslation()

  return (
    <>
      <Head>
        <title>{t('sponsors.title')} - {t('site.title')}</title>
        <meta name="description" content={t('sponsors.description')} />
        <meta property="og:title" content={`${t('sponsors.title')} - ${t('site.title')}`} />
        <meta property="og:description" content={t('sponsors.description')} />
        <meta property="og:locale" content={locale === 'es' ? 'es_CO' : 'en_US'} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${t('sponsors.title')} - ${t('site.title')}`} />
        <meta name="twitter:description" content={t('sponsors.description')} />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navigation />

        {/* Hero Section */}
        <header className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-500">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative container-max section-padding">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {t('sponsors.title')}
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-4">
                {t('sponsors.subtitle')}
              </p>
              <p className="text-lg text-primary-50 mb-8 max-w-2xl">
                {t('sponsors.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contacto"
                  className="btn-primary bg-white text-primary-600 hover:bg-gray-50 inline-flex items-center justify-center"
                >
                  {t('sponsors.contact_cta')}
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/servicios/investigacion"
                  className="btn-secondary border-white text-white hover:bg-primary-700 inline-flex items-center justify-center"
                >
                  {t('buttons.learn_more')}
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
        </header>

        {/* Competitive Advantages */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('sponsors.advantages.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Colombia como destino estratégico para investigación clínica internacional
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage) => {
                const IconComponent = advantage.icon
                return (
                  <div key={advantage.key} className="text-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${advantage.color}`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {t(`sponsors.advantages.${advantage.key}`)}
                    </h3>
                    <p className="text-gray-600">
                      Ventaja competitiva clave para el éxito de sus estudios clínicos.
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Therapeutic Areas */}
        <section className="bg-gray-50 section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('sponsors.therapeutic_areas')}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experiencia especializada en múltiples áreas terapéuticas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {therapeuticAreas.map((area) => (
                <div key={area} className="card text-center">
                  <div className="card-body">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <div className="w-6 h-6 bg-primary-600 rounded"></div>
                    </div>
                    <h3 className="font-semibold text-gray-900 capitalize">
                      {area.replace('_', ' ')}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services for Sponsors */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Servicios para Patrocinadores
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Soluciones integrales para el éxito de sus estudios clínicos
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service) => {
                const IconComponent = service.icon
                return (
                  <div key={service.key} className="card">
                    <div className="card-body">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-primary-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            {service.key === 'site_selection' && 'Selección de Sitios'}
                            {service.key === 'regulatory' && 'Asuntos Regulatorios'}
                            {service.key === 'patient_recruitment' && 'Reclutamiento de Pacientes'}
                            {service.key === 'monitoring' && 'Monitoreo y Seguimiento'}
                          </h3>
                          <p className="text-gray-600">
                            {service.key === 'site_selection' && 'Identificación y evaluación de sitios de investigación óptimos para sus estudios.'}
                            {service.key === 'regulatory' && 'Navegación experta por los requisitos regulatorios de INVIMA y autoridades locales.'}
                            {service.key === 'patient_recruitment' && 'Estrategias efectivas para el reclutamiento y retención de pacientes calificados.'}
                            {service.key === 'monitoring' && 'Monitoreo continuo y gestión de calidad para garantizar el cumplimiento GCP.'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="bg-primary-600 text-white section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Colombia: Hub de Investigación Clínica
              </h2>
              <p className="text-xl text-primary-100 max-w-2xl mx-auto">
                Datos clave que posicionan a Colombia como destino preferido
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50M+</div>
                <p className="text-primary-100">Población Nacional</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">40%</div>
                <p className="text-primary-100">Menor Costo vs USA/EU</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">95%</div>
                <p className="text-primary-100">Tasa de Retención</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">120+</div>
                <p className="text-primary-100">Estudios Completados</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 section-padding">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Listo para su próximo estudio clínico?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Programe una reunión comercial para explorar oportunidades de colaboración
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="btn-primary inline-flex items-center justify-center"
              >
                {t('sponsors.contact_cta')}
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/nosotros"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Conocer más sobre nosotros
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
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