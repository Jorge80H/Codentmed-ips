import PageLayout from '@/components/PageLayout'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

const certifications = [
  {
    name: 'INVIMA',
    fullName: 'Instituto Nacional de Vigilancia de Medicamentos y Alimentos',
    description: 'Autorización como centro de investigación clínica en Colombia',
    status: 'Vigente',
    year: '2000'
  },
  {
    name: 'GCP/ICH-E6(R2)',
    fullName: 'Good Clinical Practice - International Council for Harmonisation',
    description: 'Cumplimiento de estándares éticos y científicos internacionales',
    status: 'Vigente',
    year: 'Renovación anual'
  },
  {
    name: 'ISO 9001:2015',
    fullName: 'Sistema de Gestión de Calidad',
    description: 'Certificación en procesos de gestión de calidad',
    status: 'En proceso',
    year: '2025'
  }
]

const accreditations = [
  {
    category: 'Regulatorias',
    items: [
      'Registro ante INVIMA como IPS habilitada',
      'Cumplimiento normativo Resolución 2378 de 2008',
      'Habilitación para conducción de estudios clínicos',
      'Farmacovigilancia y reporte de eventos adversos'
    ]
  },
  {
    category: 'Éticas',
    items: [
      'Comité de Ética de Investigación (CEI) aprobado',
      'Cumplimiento Declaración de Helsinki',
      'Protección de datos personales (Ley 1581 de 2012)',
      'Consentimiento informado estandarizado'
    ]
  },
  {
    category: 'Técnicas',
    items: [
      'Laboratorio clínico certificado',
      'Cadena de frío para medicamentos de investigación',
      'Sistema de gestión documental electrónico',
      'Archivo regulatorio conforme a GCP'
    ]
  },
  {
    category: 'Personal',
    items: [
      'Investigadores principales certificados en GCP',
      'Coordinadores de estudios con formación especializada',
      'Personal de enfermería capacitado en estudios clínicos',
      'Monitores con experiencia en auditorías'
    ]
  }
]

const partnerships = [
  { name: 'FDA (Food and Drug Administration)', region: 'Estados Unidos' },
  { name: 'EMA (European Medicines Agency)', region: 'Europa' },
  { name: 'PAHO/OPS', region: 'Panamericana' },
  { name: 'Red de Centros de Investigación LATAM', region: 'Latinoamérica' }
]

export default function CertificacionesPage() {
  return (
    <PageLayout
      title="Certificaciones y Acreditaciones"
      description="Certificaciones, acreditaciones y reconocimientos que respaldan la calidad y cumplimiento de CODENTMED IPS."
      breadcrumbs={[
        { label: 'Nosotros', href: '/nosotros/quienes-somos' },
        { label: 'Certificaciones' }
      ]}
      hero={{
        title: 'Certificaciones y Acreditaciones',
        subtitle: 'Compromiso con la excelencia y el cumplimiento regulatorio'
      }}
    >
      {/* Main Certifications */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certificaciones Principales
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Reconocimientos que garantizan nuestros estándares de calidad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-primary-600">{cert.name}</h3>
                  <Badge variant={cert.status === 'Vigente' ? 'primary' : 'secondary'}>
                    {cert.status}
                  </Badge>
                </div>
                <p className="text-sm font-medium text-gray-700 mb-2">{cert.fullName}</p>
                <p className="text-gray-600 mb-4">{cert.description}</p>
                <p className="text-sm text-gray-500">Desde: {cert.year}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations by Category */}
      <section className="section-padding bg-gray-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Acreditaciones y Cumplimiento
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Áreas de cumplimiento normativo y técnico
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {accreditations.map((section, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  {section.category}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
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

      {/* International Recognition */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Reconocimiento Internacional
            </h2>

            <Card className="p-8 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                CODENTMED IPS ha participado en estudios clínicos evaluados y aprobados por agencias regulatorias
                internacionales, demostrando cumplimiento de estándares globales en la conducción de investigación clínica.
              </p>
            </Card>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Colaboraciones con Agencias y Redes Internacionales
              </h3>
              {partnerships.map((partner, index) => (
                <Card key={index} className="p-4 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">{partner.name}</p>
                    <p className="text-sm text-gray-600">{partner.region}</p>
                  </div>
                  <Badge variant="secondary">{partner.region}</Badge>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="section-padding bg-primary-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nuestro Compromiso con la Calidad
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                En CODENTMED IPS, la calidad no es solo una certificación, es parte integral de nuestra cultura organizacional.
                Nos comprometemos a mantener y mejorar continuamente nuestros estándares para ofrecer servicios de investigación
                clínica de clase mundial.
              </p>
              <p className="mt-4">
                Nuestros procesos son auditados regularmente tanto por agencias internas como externas, asegurando el
                cumplimiento de todas las normativas nacionales e internacionales aplicables.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
