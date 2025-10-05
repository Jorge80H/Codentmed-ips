import PageLayout from '@/components/PageLayout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const therapeuticAreas = [
  {
    name: 'Reumatología',
    icon: '🦴',
    description: 'Especialización en enfermedades autoinmunes y del sistema musculoesquelético',
    conditions: [
      'Artritis Reumatoide',
      'Lupus Eritematoso Sistémico',
      'Espondiloartritis',
      'Artritis Psoriásica',
      'Síndrome de Sjögren',
      'Esclerodermia',
      'Vasculitis',
      'Gota y otras artropatías'
    ],
    expertise: 'Con más de 25 años de experiencia liderados por el Dr. Wilson Bautista, CODENTMED IPS es reconocido como centro de referencia en investigación reumatológica en Colombia.'
  },
  {
    name: 'Medicina Interna',
    icon: '⚕️',
    description: 'Manejo integral de enfermedades sistémicas y complejas',
    conditions: [
      'Enfermedades autoinmunes sistémicas',
      'Hipertensión arterial',
      'Diabetes mellitus',
      'Enfermedades cardiovasculares',
      'Trastornos metabólicos',
      'Manejo de comorbilidades'
    ],
    expertise: 'Enfoque interdisciplinario que permite abordar pacientes con condiciones crónicas complejas desde una perspectiva integral.'
  },
  {
    name: 'Odontología y Salud Oral',
    icon: '🦷',
    description: 'Investigación en la interacción entre salud oral y sistémica',
    conditions: [
      'Enfermedad periodontal',
      'Vínculo periodoncia-artritis reumatoide',
      'Manifestaciones orales de enfermedades sistémicas',
      'Evaluación de materiales dentales',
      'Protocolos de rehabilitación oral',
      'Biocompatibilidad de tratamientos'
    ],
    expertise: 'Pioneros en Colombia en el estudio de las conexiones entre enfermedad periodontal y condiciones reumatológicas.'
  },
  {
    name: 'Enfermedades Inflamatorias Crónicas',
    icon: '🔬',
    description: 'Investigación de procesos inflamatorios sistémicos',
    conditions: [
      'Marcadores inflamatorios',
      'Respuesta a terapias biológicas',
      'Evaluación de nuevos anti-inflamatorios',
      'Estudios de farmacovigilancia'
    ],
    expertise: 'Experiencia en estudios de medicamentos biológicos y terapias dirigidas para condiciones inflamatorias crónicas.'
  }
]

const researchCapabilities = [
  {
    title: 'Infraestructura Clínica',
    description: 'Consultorios especializados, áreas de procedimientos y equipamiento diagnóstico de última generación'
  },
  {
    title: 'Equipo Médico Experto',
    description: 'Especialistas certificados con formación en investigación clínica y GCP (Good Clinical Practice)'
  },
  {
    title: 'Base de Datos de Pacientes',
    description: 'Acceso a población de pacientes con diagnósticos confirmados en áreas terapéuticas de interés'
  },
  {
    title: 'Sistemas de Gestión',
    description: 'EDC, CTMS y sistemas de gestión de datos conforme a estándares internacionales'
  }
]

export default function AreasTerapeuticasPage() {
  return (
    <PageLayout
      title="Áreas Terapéuticas"
      description="Especialización y experiencia de CODENTMED IPS en múltiples áreas terapéuticas para investigación clínica."
      breadcrumbs={[
        { label: 'Investigación', href: '/investigacion/estudios-activos' },
        { label: 'Áreas Terapéuticas' }
      ]}
      hero={{
        title: 'Áreas Terapéuticas',
        subtitle: 'Experiencia especializada en investigación médica y odontológica'
      }}
    >
      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              CODENTMED IPS cuenta con experiencia comprobada en investigación clínica en áreas terapéuticas
              específicas, donde nuestro equipo médico ha desarrollado expertise técnico, capacidad de
              reclutamiento y conocimiento profundo de las condiciones clínicas.
            </p>
          </div>
        </div>
      </section>

      {/* Therapeutic Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {therapeuticAreas.map((area, index) => (
              <Card key={index} className="p-8">
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-1">
                    <div className="text-6xl mb-4">{area.icon}</div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{area.name}</h2>
                    <p className="text-gray-600">{area.description}</p>
                  </div>

                  <div className="lg:col-span-2">
                    <h3 className="font-semibold text-gray-900 mb-3">Condiciones Estudiadas:</h3>
                    <div className="grid md:grid-cols-2 gap-3 mb-6">
                      {area.conditions.map((condition, idx) => (
                        <div key={idx} className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span className="text-gray-700">{condition}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-primary-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Experiencia:</h4>
                      <p className="text-gray-700">{area.expertise}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Capabilities */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Capacidades de Investigación
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {researchCapabilities.map((capability, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-gray-600">{capability.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interdisciplinary Approach */}
      <section className="section-padding bg-primary-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Enfoque Interdisciplinario
            </h2>

            <Card className="p-8">
              <p className="text-lg text-gray-700 mb-6">
                Una de nuestras fortalezas distintivas es el <strong>abordaje interdisciplinario</strong> que
                integramos en nuestros estudios. La conexión entre medicina interna, reumatología y odontología
                nos permite:
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Explorar interacciones sistémicas
                    </h4>
                    <p className="text-gray-600">
                      Investigar cómo condiciones orales afectan enfermedades sistémicas y viceversa
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Identificar biomarcadores compartidos
                    </h4>
                    <p className="text-gray-600">
                      Descubrir marcadores comunes entre enfermedad periodontal y artritis reumatoide
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Desarrollar protocolos innovadores
                    </h4>
                    <p className="text-gray-600">
                      Crear abordajes terapéuticos que consideren la salud integral del paciente
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Publicar hallazgos relevantes
                    </h4>
                    <p className="text-gray-600">
                      Contribuir al conocimiento científico en journals especializados
                    </p>
                  </div>
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
            ¿Interesado en colaborar en investigación?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contáctenos para explorar oportunidades de colaboración en nuestras áreas de expertise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contacto"
              variant="primary"
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              Contactar Equipo Científico
            </Button>
            <Button
              href="/investigacion/estudios-activos"
              variant="secondary"
              size="lg"
              className="border-white text-white hover:bg-primary-700"
            >
              Ver Estudios Activos
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
