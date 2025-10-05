import type { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Link from 'next/link'
import { 
  HeartIcon,
  AcademicCapIcon,
  BeakerIcon,
  UserGroupIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  TrophyIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon
} from '@heroicons/react/24/outline'
import { useCustomTranslation } from '@/lib/i18n'
import Navigation from '@/components/Navigation'

const teamMembers = [
  {
    name: 'Dr. Wilson Bautista',
    role: 'Director Científico',
    speciality: 'Reumatología & Medicina Interna',
    description: 'Especialista en reumatología con amplia experiencia en investigación clínica y medicina interna.',
    achievements: ['10+ años en investigación', 'Más de 50 publicaciones científicas', 'Reconocimiento internacional'],
    image: '/images/dr-wilson-placeholder.jpg'
  },
  {
    name: 'Dra. Sonia Unriza',
    role: 'Directora Médica',
    speciality: 'Odontología Especializada',
    description: 'Odontóloga especializada con enfoque en rehabilitación oral y seguimiento interdisciplinario.',
    achievements: ['15+ años de experiencia', 'Especialista en periodoncia', 'Líder en integración médico-dental'],
    image: '/images/dra-sonia-placeholder.jpg'
  }
]

const values = [
  {
    icon: HeartIcon,
    title: 'Excelencia Médica',
    description: 'Compromiso con los más altos estándares de calidad en atención médica y investigación clínica.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Integridad Científica',
    description: 'Transparencia y rigor científico en todos nuestros procesos y estudios de investigación.'
  },
  {
    icon: UserGroupIcon,
    title: 'Atención Humanizada',
    description: 'Cada paciente es único y merece atención personalizada con calidez humana.'
  },
  {
    icon: GlobeAltIcon,
    title: 'Visión Global',
    description: 'Perspectiva internacional con impacto local en el desarrollo de la medicina.'
  }
]

const achievements = [
  {
    icon: TrophyIcon,
    metric: '120+',
    label: 'Estudios Clínicos Completados'
  },
  {
    icon: UserGroupIcon,
    metric: '5000+',
    label: 'Pacientes Atendidos'
  },
  {
    icon: AcademicCapIcon,
    metric: '50+',
    label: 'Publicaciones Científicas'
  },
  {
    icon: GlobeAltIcon,
    metric: '15+',
    label: 'Países con Colaboraciones'
  }
]

const certifications = [
  'Certificación GCP (Good Clinical Practice)',
  'Acreditación INVIMA',
  'Miembro de redes internacionales de investigación',
  'Certificación ISO en calidad médica',
  'Reconocimiento Ministerio de Salud',
  'Afiliación a asociaciones médicas especializadas'
]

export default function AboutPage() {
  const { t, locale } = useCustomTranslation()

  return (
    <>
      <Head>
        <title>{t('navigation.about')} - {t('site.title')}</title>
        <meta name="description" content={`Conoce más sobre ${t('site.title')}, centro líder en medicina, odontología e investigación clínica en Colombia.`} />
        <meta property="og:title" content={`${t('navigation.about')} - ${t('site.title')}`} />
        <meta property="og:description" content={`Conoce más sobre ${t('site.title')}, centro líder en medicina, odontología e investigación clínica en Colombia.`} />
        <meta property="og:locale" content={locale === 'es' ? 'es_CO' : 'en_US'} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${t('navigation.about')} - ${t('site.title')}`} />
        <meta name="twitter:description" content={`Conoce más sobre ${t('site.title')}, centro líder en medicina, odontología e investigación clínica en Colombia.`} />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navigation />

        {/* Hero Section */}
        <header className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-blue-600">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative container-max section-padding">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Nosotros
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-4">
                Quiénes somos y nuestra misión
              </p>
              <p className="text-lg text-primary-50 mb-8 max-w-2xl">
                Centro integrado de medicina, odontología e investigación clínica comprometido con la excelencia y la innovación médica.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contacto"
                  className="btn-primary bg-white text-primary-600 hover:bg-gray-50 inline-flex items-center justify-center"
                >
                  Contactar Equipo
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/para-patrocinadores"
                  className="btn-secondary border-white text-white hover:bg-primary-700 inline-flex items-center justify-center"
                >
                  Conocer Servicios
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
        </header>

        {/* Mission & Vision */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="card">
                <div className="card-body">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <HeartIcon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Misión</h2>
                  <p className="text-lg text-gray-600">
                    Brindar servicios médicos y odontológicos especializados de alta calidad, desarrollando investigación clínica innovadora que contribuya al avance de la medicina y mejore la calidad de vida de nuestros pacientes.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                    <GlobeAltIcon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Visión</h2>
                  <p className="text-lg text-gray-600">
                    Ser reconocidos como un centro de referencia nacional e internacional en medicina, odontología e investigación clínica, liderando la transformación del sector salud mediante la innovación científica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-gray-50 section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nuestros Valores
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Principios que guían nuestro trabajo diario y compromiso con la excelencia
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nuestro Equipo Directivo
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Líderes con experiencia y visión científica
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {teamMembers.map((member, index) => (
                <div key={index} className="card">
                  <div className="card-body">
                    <div className="flex items-start space-x-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <UserGroupIcon className="h-12 w-12 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          {member.name}
                        </h3>
                        <p className="text-primary-600 font-semibold mb-1">
                          {member.role}
                        </p>
                        <p className="text-gray-600 text-sm mb-3">
                          {member.speciality}
                        </p>
                        <p className="text-gray-700 mb-4">
                          {member.description}
                        </p>
                        <div className="space-y-2">
                          {member.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-center">
                              <StarIcon className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="bg-primary-600 text-white section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nuestros Logros
              </h2>
              <p className="text-xl text-primary-100 max-w-2xl mx-auto">
                Resultados que demuestran nuestro compromiso con la excelencia
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div className="text-4xl font-bold mb-2">
                      {achievement.metric}
                    </div>
                    <p className="text-primary-100">
                      {achievement.label}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* History & Certifications */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* History */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Nuestra Historia
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary-600 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2015</h3>
                    <p className="text-gray-600">
                      Fundación de CODENTMED IPS con la visión de integrar medicina, odontología e investigación clínica.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-primary-600 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2018</h3>
                    <p className="text-gray-600">
                      Primer estudio clínico internacional completado exitosamente, estableciendo nuestra reputación en investigación.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-primary-600 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2021</h3>
                    <p className="text-gray-600">
                      Expansión de servicios médicos especializados y consolidación como centro de referencia.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-primary-600 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2025</h3>
                    <p className="text-gray-600">
                      Posicionamiento como líder nacional en investigación clínica con proyección internacional.
                    </p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Certificaciones y Reconocimientos
                </h2>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{cert}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-green-50 rounded-lg">
                  <div className="flex items-center mb-4">
                    <ShieldCheckIcon className="h-8 w-8 text-green-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Compromiso con la Calidad
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Todas nuestras operaciones cumplen con los más altos estándares internacionales de calidad y seguridad médica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="bg-gray-50 section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nuestras Instalaciones
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Infraestructura moderna diseñada para la excelencia médica
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="card-body">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BeakerIcon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Laboratorio de Investigación
                  </h3>
                  <p className="text-gray-600">
                    Equipamiento de última tecnología para estudios clínicos y análisis especializados.
                  </p>
                </div>
              </div>

              <div className="card text-center">
                <div className="card-body">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <HeartIcon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Consultorios Médicos
                  </h3>
                  <p className="text-gray-600">
                    Espacios modernos y cómodos diseñados para la atención médica especializada.
                  </p>
                </div>
              </div>

              <div className="card text-center">
                <div className="card-body">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UserGroupIcon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Unidad Odontológica
                  </h3>
                  <p className="text-gray-600">
                    Instalaciones odontológicas con tecnología avanzada para tratamientos especializados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary-600 to-blue-600 text-white section-padding">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para trabajar con nosotros?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Descubra cómo podemos colaborar para avanzar en la medicina y mejorar vidas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/para-patrocinadores"
                className="btn-primary bg-white text-primary-600 hover:bg-gray-50 inline-flex items-center justify-center"
              >
                Para Patrocinadores
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/para-pacientes"
                className="btn-secondary border-white text-white hover:bg-primary-700 inline-flex items-center justify-center"
              >
                Para Pacientes
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