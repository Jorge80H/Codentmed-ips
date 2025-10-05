import PageLayout from '@/components/PageLayout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { CheckCircleIcon, GlobeAltIcon, CurrencyDollarIcon, UserGroupIcon, BeakerIcon, ClockIcon } from '@heroicons/react/24/outline'

const advantages = [
  {
    icon: CurrencyDollarIcon,
    title: 'Costos Competitivos',
    description: 'Reducción significativa en costos operativos sin comprometer la calidad de datos y cumplimiento regulatorio'
  },
  {
    icon: CheckCircleIcon,
    title: 'Estándares GCP',
    description: 'Cumplimiento riguroso de Good Clinical Practice (ICH-E6R2) y regulaciones INVIMA, FDA y EMA'
  },
  {
    icon: UserGroupIcon,
    title: 'Talento Especializado',
    description: 'Equipo médico y de investigación altamente calificado con formación internacional'
  },
  {
    icon: GlobeAltIcon,
    title: 'Ubicación Estratégica',
    description: 'Colombia como hub ideal para estudios latinoamericanos y globales con población diversa'
  },
  {
    icon: ClockIcon,
    title: 'Reclutamiento Eficiente',
    description: 'Alta capacidad de reclutamiento de pacientes con seguimiento cercano y baja tasa de dropout'
  },
  {
    icon: BeakerIcon,
    title: 'Infraestructura Completa',
    description: 'Instalaciones modernas, laboratorio clínico, farmacia y sistemas de gestión de datos robustos'
  }
]

const therapeuticAreas = [
  'Reumatología',
  'Medicina Interna',
  'Cardiología',
  'Endocrinología',
  'Oncología',
  'Dermatología',
  'Neurología',
  'Gastroenterología',
  'Nefrología',
  'Infectología'
]

const services = [
  {
    title: 'Estudios Clínicos Fase I-IV',
    description: 'Conducción de estudios desde early phase hasta post-marketing, con experiencia en diseños complejos y endpoints diversos'
  },
  {
    title: 'Estudios Observacionales',
    description: 'Registry studies, estudios epidemiológicos y de seguimiento a largo plazo con recolección de datos de vida real'
  },
  {
    title: 'Asuntos Regulatorios',
    description: 'Apoyo completo en trámites ante INVIMA, preparación de documentación regulatoria y comunicación con autoridades'
  },
  {
    title: 'Site Management',
    description: 'Gestión integral del sitio, coordinación con CROs, manejo de monitores y auditorías, timeline management'
  },
  {
    title: 'Farmaco vigilancia',
    description: 'Sistema robusto de detección, documentación y reporte de eventos adversos conforme a ICH-E2A'
  },
  {
    title: 'Datos y Estadística',
    description: 'Gestión de datos electrónicos (EDC), control de calidad, análisis estadístico y generación de reportes'
  }
]

export default function ParaPatrocinadoresPage() {
  return (
    <PageLayout
      title="Para Patrocinadores"
      description="CODENTMED IPS como socio estratégico para su investigación clínica en Colombia y Latinoamérica."
      breadcrumbs={[
        { label: 'Servicios', href: '/servicios/para-patrocinadores' },
        { label: 'Para Patrocinadores' }
      ]}
      hero={{
        title: 'Socios Estratégicos en Investigación Clínica',
        subtitle: 'Su partner confiable para estudios clínicos de alta calidad en Colombia'
      }}
    >
      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              CODENTMED IPS ofrece servicios integrales de investigación clínica para la industria farmacéutica,
              biotecnológica y CROs a nivel global. Con más de 20 años de experiencia, somos su socio confiable
              en Colombia para estudios que requieren excelencia científica, cumplimiento regulatorio y
              eficiencia operacional.
            </p>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="section-padding bg-gray-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ventajas Competitivas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Por qué elegir Colombia y CODENTMED IPS para su investigación
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <advantage.icon className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluciones integrales para cada fase de su investigación
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Therapeutic Areas */}
      <section className="section-padding bg-primary-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Áreas Terapéuticas
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Experiencia comprobada en múltiples especialidades médicas
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {therapeuticAreas.map((area, index) => (
                <div key={index} className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                  <p className="text-gray-900 font-medium">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Colombia Advantages */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Colombia: Hub Estratégico de Investigación
            </h2>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Marco Regulatorio Sólido
                </h3>
                <p className="text-gray-600">
                  INVIMA como autoridad regulatoria robusta, con procesos alineados a FDA y EMA. Tiempos de
                  aprobación predecibles y sistema de farmacovigilancia estructurado.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Población Diversa
                </h3>
                <p className="text-gray-600">
                  Diversidad étnica y genética ideal para estudios globales. Población naïve a tratamientos en
                  muchas áreas terapéuticas, facilitando reclutamiento.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Sistema de Salud Estructurado
                </h3>
                <p className="text-gray-600">
                  Infraestructura hospitalaria moderna, historia clínica electrónica implementada ampliamente,
                  y seguimiento de pacientes facilitado por el sistema de salud.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para iniciar su estudio en Colombia?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contacte a nuestro equipo de desarrollo de negocios para discutir su proyecto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contacto"
              variant="primary"
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              Agendar Reunión
            </Button>
            <Button
              href="/nosotros/certificaciones"
              variant="secondary"
              size="lg"
              className="border-white text-white hover:bg-primary-700"
            >
              Ver Certificaciones
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
