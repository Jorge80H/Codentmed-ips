import PageLayout from '@/components/PageLayout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { DocumentTextIcon, ClipboardDocumentCheckIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

const services = [
  {
    title: 'Trámites ante INVIMA',
    description: 'Gestión completa de permisos y autorizaciones para estudios clínicos',
    items: [
      'Preparación y radicación de dossieres',
      'Seguimiento de proceso de evaluación',
      'Respuesta a requerimientos',
      'Obtención de certificado de aprobación',
      'Gestión de enmiendas al protocolo',
      'Renovaciones y extensiones'
    ]
  },
  {
    title: 'Documentación Regulatoria',
    description: 'Preparación de documentación conforme a estándares internacionales',
    items: [
      'Investigator Brochure (IB)',
      'Protocolos clínicos',
      'Informed Consent Forms (ICF)',
      'Case Report Forms (CRF)',
      'Manual del Investigador',
      'Essential documents (TMF)'
    ]
  },
  {
    title: 'Cumplimiento Normativo',
    description: 'Aseguramiento de cumplimiento de regulaciones nacionales e internacionales',
    items: [
      'Auditorías de cumplimiento GCP',
      'Revisión de procedimientos',
      'Capacitación en regulación',
      'Preparación para inspecciones',
      'Gap analysis regulatorio',
      'Implementación de CAPA'
    ]
  },
  {
    title: 'Importación de Medicamentos',
    description: 'Gestión de trámites de importación y nacionalización',
    items: [
      'Permisos de importación',
      'Licencias sanitarias',
      'Registro de lotes',
      'Certificados de liberación',
      'Gestión aduanera',
      'Trazabilidad de producto'
    ]
  }
]

const authorities = [
  {
    name: 'INVIMA',
    fullName: 'Instituto Nacional de Vigilancia de Medicamentos y Alimentos',
    country: 'Colombia',
    description: 'Autoridad regulatoria nacional para aprobación de estudios clínicos'
  },
  {
    name: 'FDA',
    fullName: 'Food and Drug Administration',
    country: 'Estados Unidos',
    description: 'Experiencia en estudios con requerimientos FDA'
  },
  {
    name: 'EMA',
    fullName: 'European Medicines Agency',
    country: 'Unión Europea',
    description: 'Conocimiento de regulación europea'
  }
]

const timeline = [
  { phase: 'Preparación Dossier', duration: '2-3 semanas', description: 'Recopilación y organización de documentación' },
  { phase: 'Radicación INVIMA', duration: '1 semana', description: 'Presentación formal ante la autoridad' },
  { phase: 'Evaluación Técnica', duration: '8-12 semanas', description: 'Revisión por parte de INVIMA' },
  { phase: 'Respuesta a Requerimientos', duration: '1-2 semanas', description: 'Atención a solicitudes adicionales' },
  { phase: 'Aprobación Final', duration: '1 semana', description: 'Emisión de certificado de aprobación' }
]

export default function AsuntosRegulatoriosPage() {
  return (
    <PageLayout
      title="Asuntos Regulatorios"
      description="Experiencia en gestión regulatoria ante INVIMA, FDA y EMA para estudios clínicos."
      breadcrumbs={[
        { label: 'Servicios', href: '/servicios/para-patrocinadores' },
        { label: 'Asuntos Regulatorios' }
      ]}
      hero={{
        title: 'Asuntos Regulatorios',
        subtitle: 'Experiencia en cumplimiento normativo nacional e internacional'
      }}
    >
      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Nuestro equipo de asuntos regulatorios cuenta con amplia experiencia en la gestión de trámites
              ante autoridades sanitarias, asegurando cumplimiento normativo y tiempos de aprobación predecibles.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios Regulatorios
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soporte integral en todos los aspectos regulatorios de su estudio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Authorities */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Experiencia con Autoridades Regulatorias
            </h2>

            <div className="space-y-4">
              {authorities.map((authority, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-primary-600">{authority.name}</h3>
                      <p className="text-sm text-gray-600">{authority.fullName}</p>
                    </div>
                    <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded">
                      {authority.country}
                    </span>
                  </div>
                  <p className="text-gray-700">{authority.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-primary-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Timeline de Aprobación INVIMA
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Proceso típico de aprobación en Colombia (tiempos aproximados)
            </p>

            <div className="space-y-6">
              {timeline.map((phase, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                      {index + 1}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{phase.phase}</h3>
                        <span className="text-sm font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded">
                          {phase.duration}
                        </span>
                      </div>
                      <p className="text-gray-600">{phase.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-6 mt-8 bg-white border-2 border-primary-600">
              <div className="flex items-start">
                <ShieldCheckIcon className="w-8 h-8 text-primary-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Tiempo Total Estimado</h3>
                  <p className="text-gray-700">
                    <strong>12-18 semanas</strong> desde preparación hasta aprobación final,
                    dependiendo de la complejidad del estudio y rapidez en respuestas a requerimientos.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Ventajas de Nuestro Servicio
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <DocumentTextIcon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Experiencia Comprobada</h3>
                <p className="text-gray-600">
                  Más de 150 estudios aprobados exitosamente ante INVIMA
                </p>
              </Card>

              <Card className="p-6 text-center">
                <ClipboardDocumentCheckIcon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Tasa de Aprobación</h3>
                <p className="text-gray-600">
                  100% de aprobación en primera radicación o con requerimientos menores
                </p>
              </Card>

              <Card className="p-6 text-center">
                <ShieldCheckIcon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Relación con Autoridades</h3>
                <p className="text-gray-600">
                  Comunicación fluida y constructiva con evaluadores de INVIMA
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="section-padding bg-gray-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Documentación Requerida
            </h2>

            <Card className="p-8">
              <p className="text-gray-700 mb-6">
                Para iniciar el proceso de aprobación ante INVIMA, típicamente se requiere:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Documentos del Patrocinador:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Protocolo clínico aprobado</li>
                    <li>• Investigator Brochure actualizado</li>
                    <li>• Informed Consent Form</li>
                    <li>• Insurance certificate</li>
                    <li>• CVs de equipo investigador</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Documentos del Sitio:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Certificado de habilitación IPS</li>
                    <li>• CV investigador principal</li>
                    <li>• Aprobación Comité de Ética</li>
                    <li>• Facilities description</li>
                    <li>• Licenses y certificaciones</li>
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
            ¿Necesita apoyo regulatorio para su estudio?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Nuestro equipo está listo para guiarle en el proceso de aprobación
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contacto"
              variant="primary"
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              Solicitar Asesoría
            </Button>
            <Button
              href="/servicios/para-patrocinadores"
              variant="secondary"
              size="lg"
              className="border-white text-white hover:bg-primary-700"
            >
              Ver Todos los Servicios
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
