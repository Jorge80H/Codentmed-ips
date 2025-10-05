import type { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Link from 'next/link'
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  GlobeAltIcon,
  VideoCameraIcon,
  BuildingOfficeIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'
import { useCustomTranslation } from '@/lib/i18n'
import Navigation from '@/components/Navigation'

const contactInfo = {
  phone: '+57 (1) 234-5678',
  whatsapp: '+57 310 123 4567',
  email: 'info@codentmedips.com',
  address: 'Carrera 15 #93-07, Bogotá, Colombia',
  hours: {
    weekdays: '8:00 AM - 6:00 PM',
    saturday: '9:00 AM - 2:00 PM',
    sunday: 'Cerrado'
  }
}

const offices = [
  {
    city: 'Bogotá',
    address: 'Carrera 15 #93-07, Zona Rosa',
    phone: '+57 (1) 234-5678',
    email: 'bogota@codentmedips.com',
    main: true
  },
  {
    city: 'Medellín',
    address: 'Carrera 43A #16A-38, El Poblado',
    phone: '+57 (4) 567-8901',
    email: 'medellin@codentmedips.com',
    main: false
  }
]

const serviceTypes = [
  {
    title: 'Consulta Médica General',
    description: 'Atención médica integral y seguimiento especializado'
  },
  {
    title: 'Consulta Odontológica',
    description: 'Evaluación y tratamiento odontológico especializado'
  },
  {
    title: 'Participación en Estudios Clínicos',
    description: 'Información sobre estudios clínicos disponibles'
  },
  {
    title: 'Colaboraciones de Investigación',
    description: 'Oportunidades para patrocinadores e instituciones'
  },
  {
    title: 'Consulta Privada Dr. Wilson',
    description: 'Consulta especializada en reumatología'
  },
  {
    title: 'Servicios Corporativos',
    description: 'Asesorías y servicios para empresas'
  }
]

export default function ContactPage() {
  const { t, locale } = useCustomTranslation()

  return (
    <>
      <Head>
        <title>{t('contact.title')} - {t('site.title')}</title>
        <meta name="description" content={t('contact.subtitle')} />
        <meta property="og:title" content={`${t('contact.title')} - ${t('site.title')}`} />
        <meta property="og:description" content={t('contact.subtitle')} />
        <meta property="og:locale" content={locale === 'es' ? 'es_CO' : 'en_US'} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${t('contact.title')} - ${t('site.title')}`} />
        <meta name="twitter:description" content={t('contact.subtitle')} />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navigation />

        {/* Hero Section */}
        <header className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-cyan-600">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative container-max section-padding">
            <div className="max-w-4xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <PhoneIcon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {t('contact.title')}
                  </h1>
                  <p className="text-xl text-white text-opacity-90">
                    {t('contact.subtitle')}
                  </p>
                </div>
              </div>
              <p className="text-lg text-white text-opacity-80 mb-8 max-w-2xl">
                Múltiples canales de comunicación para brindarle la mejor atención
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
        </header>

        {/* Contact Options */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="card text-center">
                <div className="card-body">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <PhoneIcon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Teléfono</h3>
                  <p className="text-gray-600 text-sm mb-3">Línea principal</p>
                  <a href={`tel:${contactInfo.phone}`} className="text-primary-600 font-medium hover:text-primary-700">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="card text-center">
                <div className="card-body">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <EnvelopeIcon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600 text-sm mb-3">Correo institucional</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-primary-600 font-medium hover:text-primary-700 break-all">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="card text-center">
                <div className="card-body">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <VideoCameraIcon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Telemedicina</h3>
                  <p className="text-gray-600 text-sm mb-3">Consulta virtual</p>
                  <button className="text-primary-600 font-medium hover:text-primary-700">
                    Agendar cita
                  </button>
                </div>
              </div>

              <div className="card text-center">
                <div className="card-body">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ClockIcon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Horarios</h3>
                  <p className="text-gray-600 text-xs mb-1">L-V: {contactInfo.hours.weekdays}</p>
                  <p className="text-gray-600 text-xs mb-1">Sáb: {contactInfo.hours.saturday}</p>
                  <p className="text-gray-600 text-xs">Dom: {contactInfo.hours.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="card">
                <div className="card-body p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Envíanos un Mensaje
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Complete el siguiente formulario y nos pondremos en contacto con usted en las próximas 24 horas.
                  </p>
                  
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          Nombre *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Apellidos *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          {t('forms.email')} *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          {t('forms.phone')}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                        Tipo de Consulta *
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Seleccione una opción</option>
                        {serviceTypes.map((service, index) => (
                          <option key={index} value={service.title}>
                            {service.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('forms.message')} *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        placeholder="Describa brevemente su consulta o necesidad..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>

                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="privacy"
                        name="privacy"
                        required
                        className="mt-1 mr-3 h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                      />
                      <label htmlFor="privacy" className="text-sm text-gray-600">
                        Acepto el tratamiento de mis datos personales según la política de privacidad *
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-primary bg-primary-600 hover:bg-primary-700 inline-flex items-center justify-center"
                    >
                      {t('forms.submit')}
                      <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </button>
                  </form>
                </div>
              </div>

              {/* Map & Office Info */}
              <div className="space-y-8">
                {/* Map Placeholder */}
                <div className="card">
                  <div className="card-body p-0">
                    <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPinIcon className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500">Mapa Interactivo</p>
                        <p className="text-sm text-gray-400">Google Maps Integration</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Offices */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Nuestras Sedes</h3>
                  
                  {offices.map((office, index) => (
                    <div key={index} className="card">
                      <div className="card-body">
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            <BuildingOfficeIcon className="h-6 w-6 text-primary-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <h4 className="text-lg font-semibold text-gray-900 mr-2">
                                {office.city}
                              </h4>
                              {office.main && (
                                <span className="px-2 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded">
                                  Sede Principal
                                </span>
                              )}
                            </div>
                            <div className="space-y-1 text-sm text-gray-600">
                              <div className="flex items-center">
                                <MapPinIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                                {office.address}
                              </div>
                              <div className="flex items-center">
                                <PhoneIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                                <a href={`tel:${office.phone}`} className="hover:text-primary-600">
                                  {office.phone}
                                </a>
                              </div>
                              <div className="flex items-center">
                                <EnvelopeIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                                <a href={`mailto:${office.email}`} className="hover:text-primary-600">
                                  {office.email}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* International Attention */}
        <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container-max">
            <div className="text-center mb-12">
              <GlobeAltIcon className="h-16 w-16 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('contact.international_attention')}
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Atendemos pacientes y colaboradores de todo el mundo
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClockIcon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t('contact.multiple_timezones')}
                </h3>
                <p className="text-blue-100">
                  Coordinación en diferentes zonas horarias para su comodidad
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <VideoCameraIcon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t('contact.virtual_consultation')}
                </h3>
                <p className="text-blue-100">
                  Consultas médicas virtuales con especialistas certificados
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GlobeAltIcon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Soporte Multiidioma</h3>
                <p className="text-blue-100">
                  Atención en español e inglés para colaboraciones internacionales
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="https://drwilsonbautista.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-white text-blue-600 hover:bg-gray-50 inline-flex items-center justify-center"
              >
                Consulta Internacional Dr. Wilson
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Contact */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Preguntas Frecuentes de Contacto
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="card">
                <div className="card-body">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    ¿Cuál es el tiempo de respuesta a consultas?
                  </h3>
                  <p className="text-gray-600">
                    Respondemos todas las consultas en un máximo de 24 horas en días hábiles. Para urgencias médicas, contáctenos por teléfono.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    ¿Ofrecen consultas de segunda opinión?
                  </h3>
                  <p className="text-gray-600">
                    Sí, ofrecemos consultas de segunda opinión tanto presenciales como virtuales. Contacte con nosotros para programar una cita especializada.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    ¿Atienden pacientes internacionales?
                  </h3>
                  <p className="text-gray-600">
                    Absolutamente. Tenemos experiencia atendiendo pacientes de toda Latinoamérica y ofrecemos servicios de coordinación internacional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="bg-red-50 section-padding">
          <div className="container-max text-center">
            <div className="max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="h-8 w-8 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contacto de Emergencia
              </h2>
              <p className="text-gray-600 mb-6">
                Para emergencias médicas fuera de horarios de atención, contacte:
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-lg font-semibold text-gray-900">
                  Línea de Emergencia: +57 310 123 4567
                </p>
                <p className="text-sm text-gray-600">
                  Disponible 24/7 para participantes de estudios clínicos
                </p>
              </div>
              <div className="text-xs text-gray-500">
                * Solo para emergencias relacionadas con estudios clínicos activos
              </div>
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