import type { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Link from 'next/link'
import { 
  HeartIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline'
import { useCustomTranslation } from '@/lib/i18n'
import Navigation from '@/components/Navigation'

const benefits = [
  {
    icon: ShieldCheckIcon,
    title: 'Acceso a Tratamientos Innovadores',
    description: 'Acceda a medicamentos y terapias de última generación antes de su comercialización.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Atención Médica Gratuita',
    description: 'Reciba atención médica especializada sin costo durante el estudio.',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: HeartIcon,
    title: 'Seguimiento Especializado',
    description: 'Monitoreo médico continuo con profesionales especializados.',
    color: 'bg-red-100 text-red-600'
  },
  {
    icon: AcademicCapIcon,
    title: 'Contribución a la Ciencia',
    description: 'Ayude a desarrollar nuevos tratamientos para futuras generaciones.',
    color: 'bg-purple-100 text-purple-600'
  }
]

const activeStudies = [
  {
    title: 'Estudio de Artritis Reumatoide',
    phase: 'Fase III',
    participants: '40 pacientes',
    duration: '12 meses',
    status: 'Reclutando',
    area: 'Reumatología'
  },
  {
    title: 'Investigación en Diabetes Tipo 2',
    phase: 'Fase II',
    participants: '60 pacientes', 
    duration: '8 meses',
    status: 'Pronto',
    area: 'Endocrinología'
  },
  {
    title: 'Estudio Cardiovascular',
    phase: 'Fase III',
    participants: '80 pacientes',
    duration: '15 meses', 
    status: 'Reclutando',
    area: 'Cardiología'
  }
]

const participationProcess = [
  {
    step: '1',
    title: 'Evaluación Inicial',
    description: 'Complete nuestra evaluación inicial para determinar elegibilidad.'
  },
  {
    step: '2',
    title: 'Consentimiento Informado',
    description: 'Revise y firme el consentimiento informado con nuestro equipo médico.'
  },
  {
    step: '3',
    title: 'Exámenes Médicos',
    description: 'Realice los exámenes médicos necesarios sin costo alguno.'
  },
  {
    step: '4',
    title: 'Inicio del Estudio',
    description: 'Comience su participación con seguimiento médico especializado.'
  }
]

export default function PatientsPage() {
  const { t, locale } = useCustomTranslation()

  return (
    <>
      <Head>
        <title>{t('patients.title')} - {t('site.title')}</title>
        <meta name="description" content={t('patients.subtitle')} />
        <meta property="og:title" content={`${t('patients.title')} - ${t('site.title')}`} />
        <meta property="og:description" content={t('patients.subtitle')} />
        <meta property="og:locale" content={locale === 'es' ? 'es_CO' : 'en_US'} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${t('patients.title')} - ${t('site.title')}`} />
        <meta name="twitter:description" content={t('patients.subtitle')} />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navigation />

        {/* Hero Section */}
        <header className="relative overflow-hidden bg-gradient-to-r from-green-600 to-blue-600">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative container-max section-padding">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {t('patients.title')}
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-4">
                {t('patients.subtitle')}
              </p>
              <p className="text-lg text-blue-50 mb-8 max-w-2xl">
                Forme parte de la investigación médica que está transformando vidas
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contacto"
                  className="btn-primary bg-white text-blue-600 hover:bg-gray-50 inline-flex items-center justify-center"
                >
                  {t('patients.apply_study')}
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="#como-funciona"
                  className="btn-secondary border-white text-white hover:bg-blue-700 inline-flex items-center justify-center"
                >
                  ¿Cómo funciona?
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
        </header>

        {/* What is Clinical Study */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {t('patients.what_is_clinical_study')}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {t('patients.study_description')}
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <InformationCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Rigurosa Supervisión</h3>
                      <p className="text-gray-600">Todos nuestros estudios siguen protocolos internacionales y son supervisados por autoridades regulatorias.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ShieldCheckIcon className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Seguridad Garantizada</h3>
                      <p className="text-gray-600">Su seguridad es nuestra prioridad. Monitoreo médico continuo durante toda su participación.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Participación Voluntaria</h3>
                      <p className="text-gray-600">Puede retirarse del estudio en cualquier momento sin afectar su atención médica habitual.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <HeartIcon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Su Participación Importa</h3>
                  <p className="text-gray-600 mb-6">
                    Cada participante contribuye al desarrollo de tratamientos que beneficiarán a millones de personas.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
                    <div className="text-sm text-gray-600">Pacientes han participado exitosamente</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-gray-50 section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('patients.participation_benefits')}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Beneficios exclusivos de participar en nuestros estudios clínicos
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <div key={index} className="card text-center">
                    <div className="card-body">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${benefit.color}`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Active Studies */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('patients.active_studies')}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Estudios clínicos disponibles para participación
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {activeStudies.map((study, index) => (
                <div key={index} className="card">
                  <div className="card-body">
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-sm font-medium text-gray-500">
                        {study.area}
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        study.status === 'Reclutando' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {study.status}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {study.title}
                    </h3>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Fase:</span>
                        <span className="font-medium">{study.phase}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Participantes:</span>
                        <span className="font-medium">{study.participants}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Duración:</span>
                        <span className="font-medium">{study.duration}</span>
                      </div>
                    </div>

                    <Link
                      href="/contacto"
                      className={`w-full text-center py-2 px-4 rounded-lg font-medium transition-colors ${
                        study.status === 'Reclutando'
                          ? 'bg-green-600 text-white hover:bg-green-700'
                          : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                      }`}
                    >
                      {study.status === 'Reclutando' ? 'Aplicar Ahora' : 'Próximamente'}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="como-funciona" className="bg-blue-50 section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ¿Cómo Participar?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Proceso simple y transparente para unirse a nuestros estudios
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {participationProcess.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                  {index < participationProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-8 right-0 w-8 h-0.5 bg-blue-200 transform translate-x-4"></div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/contacto"
                className="btn-primary bg-blue-600 hover:bg-blue-700 inline-flex items-center justify-center"
              >
                Comenzar Evaluación Inicial
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Preguntas Frecuentes
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="card">
                <div className="card-body">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    ¿Es seguro participar en un estudio clínico?
                  </h3>
                  <p className="text-gray-600">
                    Sí, todos nuestros estudios siguen estrictos protocolos de seguridad internacionales y son supervisados por autoridades regulatorias como INVIMA y comités de ética independientes.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    ¿Puedo retirarme del estudio en cualquier momento?
                  </h3>
                  <p className="text-gray-600">
                    Absolutamente. Su participación es completamente voluntaria y puede retirarse en cualquier momento sin afectar su atención médica habitual.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    ¿Hay algún costo por participar?
                  </h3>
                  <p className="text-gray-600">
                    No, la participación es completamente gratuita. Además, todos los exámenes médicos, consultas y medicamentos del estudio son proporcionados sin costo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white section-padding">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para hacer la diferencia?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Su participación puede ayudar a desarrollar los tratamientos del mañana
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="btn-primary bg-white text-blue-600 hover:bg-gray-50 inline-flex items-center justify-center"
              >
                {t('patients.apply_study')}
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/servicios/investigacion"
                className="btn-secondary border-white text-white hover:bg-blue-700 inline-flex items-center justify-center"
              >
                Más sobre investigación
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