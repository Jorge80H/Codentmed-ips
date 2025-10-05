import PageLayout from '@/components/PageLayout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { VideoCameraIcon, GlobeAltIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const specialties = [
  {
    name: 'Reumatología',
    conditions: [
      'Artritis Reumatoide',
      'Lupus Eritematoso Sistémico',
      'Espondiloartritis',
      'Artritis Psoriásica',
      'Síndrome de Sjögren',
      'Esclerodermia',
      'Vasculitis',
      'Gota y otras artropatías'
    ]
  },
  {
    name: 'Medicina Interna',
    conditions: [
      'Enfermedades autoinmunes sistémicas',
      'Manejo integral de comorbilidades',
      'Segunda opinión médica',
      'Evaluación pre-quirúrgica'
    ]
  }
]

const consultationTypes = [
  {
    icon: VideoCameraIcon,
    title: 'Consulta Virtual',
    description: 'Atención médica desde cualquier lugar del mundo vía videollamada segura',
    features: [
      'Plataforma HIPAA compliant',
      'Revisión de exámenes digitales',
      'Prescripción electrónica',
      'Seguimiento vía email/WhatsApp'
    ]
  },
  {
    icon: ClockIcon,
    title: 'Consulta Presencial',
    description: 'Atención en nuestras instalaciones en Bogotá, Colombia',
    features: [
      'Examen físico completo',
      'Procedimientos diagnósticos in-situ',
      'Coordinación con especialistas',
      'Acceso a laboratorio clínico'
    ]
  }
]

const process = [
  {
    step: '1',
    title: 'Agendar Cita',
    description: 'Complete el formulario online o contacte vía WhatsApp/teléfono'
  },
  {
    step: '2',
    title: 'Pre-consulta',
    description: 'Envíe historia clínica y exámenes previos para revisión anticipada'
  },
  {
    step: '3',
    title: 'Consulta',
    description: 'Atención personalizada de 45-60 minutos con el Dr. Bautista'
  },
  {
    step: '4',
    title: 'Plan de Tratamiento',
    description: 'Reciba plan detallado, prescripciones y recomendaciones'
  },
  {
    step: '5',
    title: 'Seguimiento',
    description: 'Soporte continuo y seguimiento según necesidad del caso'
  }
]

export default function ConsultaPrivadaPage() {
  return (
    <PageLayout
      title="Consulta Médica Privada"
      description="Consulta especializada con el Dr. Wilson Bautista, autoridad en reumatología con experiencia internacional."
      breadcrumbs={[
        { label: 'Servicios', href: '/servicios/para-patrocinadores' },
        { label: 'Consulta Médica Privada' }
      ]}
      hero={{
        title: 'Consulta Médica Privada',
        subtitle: 'Atención especializada con el Dr. Wilson Bautista'
      }}
    >
      {/* Dr. Wilson Profile */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Dr. Wilson Bautista
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Médico internista y reumatólogo con más de 25 años de experiencia en el diagnóstico y
                tratamiento de enfermedades reumatológicas y autoinmunes.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Director Científico de CODENTMED IPS
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Investigador principal en múltiples estudios clínicos internacionales
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Reconocimiento internacional en reumatología
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Atención a pacientes nacionales e internacionales
                  </span>
                </div>
              </div>
              <Button
                href="https://drwilsonbautista.com"
                variant="secondary"
                size="lg"
                className="mb-4"
              >
                Ver perfil completo →
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <p className="text-gray-500 text-lg">Foto: Dr. Wilson Bautista</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="section-padding bg-gray-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Especialidades Médicas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experiencia en diagnóstico y tratamiento de condiciones complejas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {specialties.map((specialty, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-2xl font-bold text-primary-600 mb-4">{specialty.name}</h3>
                <ul className="space-y-2">
                  {specialty.conditions.map((condition, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>{condition}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Modalidades de Consulta
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Atención personalizada presencial o virtual
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {consultationTypes.map((type, index) => (
              <Card key={index} className="p-8">
                <type.icon className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <h4 className="font-semibold text-gray-900 mb-3">Incluye:</h4>
                <ul className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-primary-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Proceso de Consulta
            </h2>

            <div className="space-y-6">
              {process.map((item, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* International Patients */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <GlobeAltIcon className="w-16 h-16 text-primary-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Atención Internacional
              </h2>
            </div>

            <Card className="p-8">
              <p className="text-lg text-gray-700 mb-6">
                Ofrecemos servicios especializados para pacientes internacionales que buscan
                atención médica de alta calidad en Colombia.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Servicios incluidos:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-700">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>Consulta virtual inicial sin costo adicional</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>Coordinación de agenda y logística</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>Traducción de documentos médicos</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>Asistencia con alojamiento</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Idiomas de atención:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-700">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Español</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Inglés</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para agendar su consulta?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Obtenga atención médica especializada de un experto reconocido internacionalmente
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contacto/agendar-cita"
              variant="primary"
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              Agendar Consulta
            </Button>
            <Button
              href="https://drwilsonbautista.com"
              variant="secondary"
              size="lg"
              className="border-white text-white hover:bg-primary-700"
            >
              Visitar drwilsonbautista.com
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
