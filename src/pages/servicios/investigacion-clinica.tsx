import PageLayout from '@/components/PageLayout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const phases = [
  {
    phase: 'Fase I',
    description: 'Evaluación inicial de seguridad y farmacocinética en voluntarios sanos o pacientes',
    capabilities: [
      'Estudios de primera vez en humanos (FIH)',
      'Estudios de dosis ascendente',
      'Evaluación farmacocinética y farmacodinámica',
      'Estudios de interacciones medicamentosas'
    ]
  },
  {
    phase: 'Fase II',
    description: 'Evaluación de eficacia preliminar y determinación de dosis óptima',
    capabilities: [
      'Estudios proof-of-concept',
      'Estudios de búsqueda de dosis',
      'Evaluación de seguridad a mediano plazo',
      'Identificación de biomarcadores'
    ]
  },
  {
    phase: 'Fase III',
    description: 'Confirmación de eficacia y monitoreo de reacciones adversas en poblaciones amplias',
    capabilities: [
      'Estudios pivotales para registro',
      'Comparación con tratamiento estándar',
      'Análisis de subgrupos poblacionales',
      'Estudios de extensión a largo plazo'
    ]
  },
  {
    phase: 'Fase IV',
    description: 'Estudios post-comercialización y farmacovigilancia',
    capabilities: [
      'Estudios de efectividad en práctica real',
      'Programas de uso expandido',
      'Estudios de farmacoeconomía',
      'Seguimiento de seguridad a largo plazo'
    ]
  }
]

const infrastructure = [
  {
    title: 'Instalaciones',
    items: [
      'Consultorios especializados equipados',
      'Áreas de procedimientos menores',
      'Salas de espera confortables',
      'Espacios para educación de pacientes'
    ]
  },
  {
    title: 'Tecnología',
    items: [
      'Sistema EDC (Electronic Data Capture)',
      'Historia clínica electrónica integrada',
      'CTMS (Clinical Trial Management System)',
      'Sistema de randomización y cegamiento'
    ]
  },
  {
    title: 'Laboratorio',
    items: [
      'Procesamiento de muestras in-situ',
      'Centrifugación y alícuoteo',
      'Almacenamiento criogénico (-80°C)',
      'Cadena de custodia certificada'
    ]
  },
  {
    title: 'Farmacia',
    items: [
      'Almacenamiento con control de temperatura',
      'Sistema de dispensación rastreable',
      'Accountability de medicación',
      'Gestión de devoluciones y destrucción'
    ]
  }
]

export default function InvestigacionClinicaPage() {
  return (
    <PageLayout
      title="Investigación Clínica"
      description="Capacidades completas en investigación clínica Fases I-IV con estándares internacionales GCP."
      breadcrumbs={[
        { label: 'Servicios', href: '/servicios/para-patrocinadores' },
        { label: 'Investigación Clínica' }
      ]}
      hero={{
        title: 'Investigación Clínica',
        subtitle: 'Excelencia científica en estudios Fases I-IV'
      }}
    >
      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed text-center mb-8">
              CODENTMED IPS cuenta con más de dos décadas de experiencia en la conducción de estudios clínicos
              de todas las fases, cumpliendo con los más altos estándares de calidad, ética y regulación
              internacional.
            </p>
          </div>
        </div>
      </section>

      {/* Clinical Phases */}
      <section className="section-padding bg-gray-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Capacidades por Fase
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experiencia integral desde early phase hasta post-marketing
            </p>
          </div>

          <div className="space-y-6">
            {phases.map((item, index) => (
              <Card key={index} className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-primary-600 mb-2">{item.phase}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-semibold text-gray-900 mb-3">Capacidades:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {item.capabilities.map((cap, idx) => (
                        <div key={idx} className="flex items-start">
                          <span className="text-primary-600 mr-2">✓</span>
                          <span className="text-gray-600">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Metodología de Investigación
            </h2>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Reclutamiento de Pacientes
                </h3>
                <p className="text-gray-600">
                  Estrategias multicanal para reclutamiento eficiente: base de datos de pacientes, referidos
                  médicos, campañas educativas y screening sistemático. Tasa de retención >90%.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Manejo de Datos
                </h3>
                <p className="text-gray-600">
                  Sistemas EDC validados con controles de calidad en tiempo real, data cleaning continuo,
                  y generación de queries según estándares CDISC. Auditoría trail completo.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Control de Calidad
                </h3>
                <p className="text-gray-600">
                  SOPs robustos, capacitación continua del personal, monitoreo de indicadores de desempeño,
                  y auditorías internas periódicas. Preparación para inspecciones regulatorias.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Farmacovigilancia
                </h3>
                <p className="text-gray-600">
                  Sistema robusto de detección, evaluación y reporte de eventos adversos conforme a ICH-E2A.
                  Comunicación expedita con patrocinadores y autoridades regulatorias.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="section-padding bg-gray-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Infraestructura y Tecnología
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Instalaciones modernas y sistemas tecnológicos de vanguardia
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {infrastructure.map((section, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Indicadores de Desempeño
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">150+</div>
                <div className="text-gray-600">Estudios Completados</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">95%</div>
                <div className="text-gray-600">Tasa de Retención</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">{'<'}5%</div>
                <div className="text-gray-600">Tasa de Query</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-gray-600">Cumplimiento GCP</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-50">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Listo para iniciar su estudio?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contacte a nuestro equipo científico para una evaluación de factibilidad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contacto" variant="primary" size="lg">
              Solicitar Propuesta
            </Button>
            <Button href="/investigacion/estudios-activos" variant="secondary" size="lg">
              Ver Estudios Activos
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
