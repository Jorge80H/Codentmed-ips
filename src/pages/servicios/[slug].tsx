import type { GetStaticProps, GetStaticPaths } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Link from 'next/link'
import { 
  HeartIcon,
  AcademicCapIcon,
  BeakerIcon,
  UserGroupIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline'
import { useCustomTranslation } from '@/lib/i18n'
import Navigation from '@/components/Navigation'

interface ServicePageProps {
  slug: string
}

const serviceData = {
  medicina: {
    title: 'Medicina General y Especializada',
    subtitle: 'Atención médica integral con enfoque interdisciplinario',
    description: 'Servicios médicos especializados en medicina interna y reumatología con seguimiento médico-odontológico integrado.',
    icon: HeartIcon,
    color: 'bg-red-600',
    specialties: [
      'Medicina Interna',
      'Reumatología', 
      'Cardiología',
      'Endocrinología',
      'Gastroenterología',
      'Seguimiento Interdisciplinario'
    ],
    features: [
      'Consulta médica especializada',
      'Diagnóstico integral',
      'Planes de tratamiento personalizados',
      'Seguimiento médico continuo',
      'Coordinación médico-odontológica',
      'Telemedicina disponible'
    ]
  },
  odontologia: {
    title: 'Odontología Especializada',
    subtitle: 'Cuidado oral integral con tecnología avanzada',
    description: 'Servicios odontológicos especializados con enfoque preventivo y rehabilitador, integrados con seguimiento médico.',
    icon: UserGroupIcon,
    color: 'bg-blue-600',
    specialties: [
      'Odontología General',
      'Periodoncia',
      'Rehabilitación Oral',
      'Ortodoncia',
      'Endodoncia',
      'Cirugía Oral'
    ],
    features: [
      'Evaluación odontológica integral',
      'Tratamientos especializados',
      'Tecnología de última generación',
      'Enfoque preventivo',
      'Rehabilitación completa',
      'Seguimiento post-tratamiento'
    ]
  },
  investigacion: {
    title: 'Investigación Clínica',
    subtitle: 'Centro líder en estudios clínicos internacionales',
    description: 'Investigación clínica de alta calidad con estándares internacionales GCP para el desarrollo de nuevos tratamientos.',
    icon: BeakerIcon,
    color: 'bg-purple-600',
    specialties: [
      'Estudios Clínicos Fase I-IV',
      'Investigación Documental',
      'Evaluación Económica en Salud',
      'Farmacovigilancia',
      'Bioestadística',
      'Asuntos Regulatorios'
    ],
    features: [
      'Estándares GCP internacionales',
      'Equipo médico especializado',
      'Infraestructura tecnológica avanzada',
      'Supervisión ética rigurosa',
      'Reportes de calidad',
      'Soporte regulatorio INVIMA'
    ]
  },
  educacion: {
    title: 'Educación Médica',
    subtitle: 'Formación médica continua y especializada',
    description: 'Programas de educación médica, cursos especializados y formación en investigación clínica.',
    icon: AcademicCapIcon,
    color: 'bg-green-600',
    specialties: [
      'Cursos de Actualización Médica',
      'Formación en Investigación Clínica',
      'Educación Médica Continua',
      'Programas de Capacitación',
      'Seminarios Especializados',
      'Talleres Prácticos'
    ],
    features: [
      'Docentes especializados',
      'Metodología actualizada',
      'Certificación profesional',
      'Modalidad presencial y virtual',
      'Material didáctico incluido',
      'Seguimiento personalizado'
    ]
  },
  asesorias: {
    title: 'Asesorías Institucionales',
    subtitle: 'Consultoría especializada en investigación y gestión médica',
    description: 'Asesoría profesional para instituciones y profesionales independientes en investigación clínica y gestión médica.',
    icon: UserGroupIcon,
    color: 'bg-orange-600',
    specialties: [
      'Asesoría en Investigación Clínica',
      'Consultoría Regulatoria',
      'Gestión de Proyectos de Investigación',
      'Capacitación Institucional',
      'Auditorías de Calidad',
      'Desarrollo de Protocolos'
    ],
    features: [
      'Experiencia comprobada',
      'Consultoría personalizada',
      'Soporte regulatorio',
      'Capacitación especializada',
      'Seguimiento de proyectos',
      'Garantía de calidad'
    ]
  }
}

export default function ServicePage({ slug }: ServicePageProps) {
  const { t, locale } = useCustomTranslation()
  const service = serviceData[slug as keyof typeof serviceData]

  if (!service) {
    return <div>Servicio no encontrado</div>
  }

  const IconComponent = service.icon

  return (
    <>
      <Head>
        <title>{service.title} - {t('site.title')}</title>
        <meta name="description" content={service.description} />
        <meta property="og:title" content={`${service.title} - ${t('site.title')}`} />
        <meta property="og:description" content={service.description} />
        <meta property="og:locale" content={locale === 'es' ? 'es_CO' : 'en_US'} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${service.title} - ${t('site.title')}`} />
        <meta name="twitter:description" content={service.description} />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navigation />

        {/* Hero Section */}
        <header className={`relative overflow-hidden ${service.color}`}>
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative container-max section-padding">
            <div className="max-w-4xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {service.title}
                  </h1>
                  <p className="text-xl text-white text-opacity-90">
                    {service.subtitle}
                  </p>
                </div>
              </div>
              <p className="text-lg text-white text-opacity-80 mb-8 max-w-2xl">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contacto"
                  className="btn-primary bg-white text-gray-800 hover:bg-gray-50 inline-flex items-center justify-center"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Contactar Ahora
                </Link>
                <Link
                  href="/contacto"
                  className="btn-secondary border-white text-white hover:bg-white hover:bg-opacity-10 inline-flex items-center justify-center"
                >
                  <CalendarDaysIcon className="h-5 w-5 mr-2" />
                  Agendar Cita
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
        </header>

        {/* Service Features */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Features */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Características del Servicio
                </h2>
                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircleIcon className={`h-6 w-6 ${service.color.replace('bg-', 'text-')} mr-3 flex-shrink-0 mt-0.5`} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specialties */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Especialidades
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {service.specialties.map((specialty, index) => (
                    <div key={index} className="card">
                      <div className="card-body p-4">
                        <div className="flex items-center">
                          <div className={`w-3 h-3 rounded-full ${service.color} mr-3 flex-shrink-0`}></div>
                          <span className="font-medium text-gray-900">{specialty}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-gray-50 section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nuestro Proceso
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Metodología probada para garantizar la excelencia en cada servicio
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className={`w-16 h-16 ${service.color} text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold`}>
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Evaluación Inicial
                </h3>
                <p className="text-gray-600 text-sm">
                  Evaluación completa de sus necesidades y objetivos específicos.
                </p>
              </div>

              <div className="text-center">
                <div className={`w-16 h-16 ${service.color} text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold`}>
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Planificación
                </h3>
                <p className="text-gray-600 text-sm">
                  Desarrollo de un plan personalizado con cronogramas claros.
                </p>
              </div>

              <div className="text-center">
                <div className={`w-16 h-16 ${service.color} text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold`}>
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Ejecución
                </h3>
                <p className="text-gray-600 text-sm">
                  Implementación del servicio con monitoreo continuo de calidad.
                </p>
              </div>

              <div className="text-center">
                <div className={`w-16 h-16 ${service.color} text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold`}>
                  4
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Seguimiento
                </h3>
                <p className="text-gray-600 text-sm">
                  Seguimiento post-servicio para garantizar resultados óptimos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  ¿Por qué elegir CODENTMED IPS?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <AcademicCapIcon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Experiencia Comprobada</h3>
                      <p className="text-gray-600">Más de 10 años de experiencia en el sector médico y de investigación clínica.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircleIcon className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Estándares Internacionales</h3>
                      <p className="text-gray-600">Cumplimos con los más altos estándares de calidad y regulaciones internacionales.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <UserGroupIcon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Equipo Especializado</h3>
                      <p className="text-gray-600">Profesionales altamente calificados y en constante actualización científica.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <ClockIcon className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Atención Personalizada</h3>
                      <p className="text-gray-600">Cada paciente y proyecto recibe atención individualizada y seguimiento continuo.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
                <div className="text-center">
                  <IconComponent className={`h-16 w-16 mx-auto mb-4 ${service.color.replace('bg-', 'text-')}`} />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Solicitar Información
                  </h3>
                  <p className="text-gray-600 mb-6">
                    ¿Interesado en {service.title.toLowerCase()}? Contáctenos para más información personalizada.
                  </p>
                  <Link
                    href="/contacto"
                    className={`btn-primary ${service.color} hover:opacity-90 inline-flex items-center justify-center w-full`}
                  >
                    Contactar Especialista
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="bg-gray-50 section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Servicios Relacionados
              </h2>
              <p className="text-xl text-gray-600">
                Explore otros servicios que complementan su experiencia
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(serviceData)
                .filter(([key]) => key !== slug)
                .slice(0, 3)
                .map(([key, relatedService]) => {
                  const RelatedIcon = relatedService.icon
                  return (
                    <Link key={key} href={`/servicios/${key}`} className="card group hover:shadow-lg transition-shadow">
                      <div className="card-body">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${relatedService.color} bg-opacity-10`}>
                          <RelatedIcon className={`h-6 w-6 ${relatedService.color.replace('bg-', 'text-')}`} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                          {relatedService.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {relatedService.subtitle}
                        </p>
                        <div className="text-primary-600 font-medium inline-flex items-center">
                          Ver más →
                        </div>
                      </div>
                    </Link>
                  )
                })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`${service.color} text-white section-padding`}>
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para comenzar?
            </h2>
            <p className="text-xl text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
              Contacte con nuestros especialistas para una consulta personalizada sobre {service.title.toLowerCase()}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="btn-primary bg-white text-gray-800 hover:bg-gray-50 inline-flex items-center justify-center"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Contactar Especialista
              </Link>
              <Link
                href="/para-pacientes"
                className="btn-secondary border-white text-white hover:bg-white hover:bg-opacity-10 inline-flex items-center justify-center"
              >
                Ver para Pacientes
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

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const slugs = Object.keys(serviceData)
  const paths: any[] = []

  if (locales) {
    locales.forEach((locale) => {
      slugs.forEach((slug) => {
        paths.push({
          params: { slug },
          locale
        })
      })
    })
  }

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const slug = params?.slug as string

  if (!serviceData[slug as keyof typeof serviceData]) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      slug,
      ...(await serverSideTranslations(locale ?? 'es', ['common'])),
    },
  }
}