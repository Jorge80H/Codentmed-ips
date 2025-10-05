import PageLayout from '@/components/PageLayout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { BeakerIcon, GlobeAltIcon, AcademicCapIcon, HeartIcon } from '@heroicons/react/24/outline'

export default function QuienesSomosPage() {
  return (
    <PageLayout
      title="Quiénes Somos"
      description="CODENTMED IPS es un centro líder en investigación clínica en Colombia, con reconocimiento nacional e internacional."
      breadcrumbs={[
        { label: 'Nosotros', href: '/nosotros/quienes-somos' },
        { label: 'Quiénes Somos' }
      ]}
      hero={{
        title: 'Quiénes Somos',
        subtitle: 'Centro líder en investigación clínica con visión internacional'
      }}
    >
      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed">
                <strong>CODENTMED IPS</strong> es un Centro Integrado de Medicina, Odontología e Investigación Clínica
                ubicado en Bogotá, Colombia, con más de 20 años de experiencia en la conducción de estudios clínicos
                de alta calidad bajo estándares internacionales GCP (Good Clinical Practice).
              </p>

              <p className="text-lg text-gray-600 mt-6">
                Nos especializamos en investigación clínica Fases I-IV, brindando servicios integrales a patrocinadores
                farmacéuticos y CROs a nivel nacional e internacional. Nuestro compromiso es contribuir al desarrollo
                de nuevos medicamentos y tratamientos que beneficien a pacientes en Colombia y el mundo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h2>
              <p className="text-gray-600 leading-relaxed">
                Conducir investigación clínica de la más alta calidad, cumpliendo con estándares éticos e
                internacionales, contribuyendo al desarrollo científico y ofreciendo acceso a tratamientos
                innovadores para nuestros pacientes, mientras servimos como socios estratégicos confiables
                para la industria farmacéutica global.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Visión</h2>
              <p className="text-gray-600 leading-relaxed">
                Ser reconocidos como el centro de investigación clínica líder en Colombia y un referente
                a nivel latinoamericano, destacándonos por la excelencia científica, el cumplimiento
                regulatorio y la innovación en la conducción de estudios clínicos que transformen
                la medicina moderna.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo diario
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BeakerIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Excelencia Científica</h3>
              <p className="text-gray-600">
                Compromiso con el rigor metodológico y la calidad en cada estudio
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ética y Transparencia</h3>
              <p className="text-gray-600">
                Prioridad absoluta a la seguridad del paciente y cumplimiento ético
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GlobeAltIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visión Global</h3>
              <p className="text-gray-600">
                Estándares internacionales y colaboración con instituciones globales
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AcademicCapIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovación</h3>
              <p className="text-gray-600">
                Mejora continua y adopción de nuevas tecnologías y metodologías
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Colombia */}
      <section className="section-padding bg-primary-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Colombia: Hub Estratégico para Investigación Clínica
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">✓ Marco Regulatorio Robusto</h3>
                <p className="text-gray-600">
                  INVIMA como autoridad regulatoria reconocida internacionalmente, con procesos alineados a FDA y EMA
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">✓ Costos Competitivos</h3>
                <p className="text-gray-600">
                  Reducción significativa en costos operativos comparado con mercados desarrollados, sin comprometer calidad
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">✓ Talento Médico Especializado</h3>
                <p className="text-gray-600">
                  Médicos altamente calificados con formación internacional y experiencia en GCP
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">✓ Ubicación Estratégica</h3>
                <p className="text-gray-600">
                  Posición geográfica privilegiada en Latinoamérica, facilitando colaboración regional e internacional
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">✓ Población Diversa</h3>
                <p className="text-gray-600">
                  Diversidad étnica y genética ideal para estudios multicéntricos y globales
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">✓ Infraestructura de Salud</h3>
                <p className="text-gray-600">
                  Sistema de salud estructurado con hospitales y centros de investigación de nivel internacional
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Quieres conocer más sobre nuestro equipo?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Conoce a los profesionales que hacen posible nuestra excelencia en investigación clínica
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/nosotros/equipo" variant="primary" size="lg">
              Nuestro Equipo
            </Button>
            <Button href="/nosotros/certificaciones" variant="secondary" size="lg">
              Certificaciones
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
