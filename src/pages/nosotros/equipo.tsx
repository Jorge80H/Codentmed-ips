import PageLayout from '@/components/PageLayout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

const teamMembers = [
  {
    name: 'Dr. Wilson Bautista',
    role: 'Director Científico y Médico',
    specialty: 'Reumatología e Investigación Clínica',
    description: 'Autoridad reconocida internacionalmente en reumatología con más de 25 años de experiencia. Investigador principal en múltiples estudios clínicos Fases II-IV.',
    image: '/images/team/dr-wilson-bautista.jpg',
    website: 'https://drwilsonbautista.com'
  },
  {
    name: 'Dra. Sonia Unriza',
    role: 'Directora General',
    specialty: 'Odontología y Gestión Clínica',
    description: 'Especialista en gestión de proyectos de investigación con amplia experiencia en coordinación de estudios multicéntricos.',
    image: '/images/team/dra-sonia-unriza.jpg'
  }
]

const departments = [
  {
    title: 'Departamento de Investigación',
    description: 'Investigadores principales, coordinadores de estudios, monitores clínicos y data managers certificados en GCP',
    icon: '🔬'
  },
  {
    title: 'Departamento Médico',
    description: 'Médicos especialistas en medicina interna, reumatología y otras áreas terapéuticas',
    icon: '👨‍⚕️'
  },
  {
    title: 'Asuntos Regulatorios',
    description: 'Expertos en normativa INVIMA, FDA y EMA para garantizar cumplimiento regulatorio',
    icon: '📋'
  },
  {
    title: 'Farmacia Clínica',
    description: 'Farmacéuticos especializados en manejo y dispensación de medicamentos de investigación',
    icon: '💊'
  },
  {
    title: 'Laboratorio Clínico',
    description: 'Equipo técnico especializado en procesamiento de muestras bajo estándares internacionales',
    icon: '🧪'
  },
  {
    title: 'Gestión de Calidad',
    description: 'Auditoría interna y control de calidad para asegurar el cumplimiento de protocolos',
    icon: '✓'
  }
]

export default function EquipoPage() {
  return (
    <PageLayout
      title="Nuestro Equipo"
      description="Conoce al equipo multidisciplinario de CODENTMED IPS, profesionales altamente calificados en investigación clínica."
      breadcrumbs={[
        { label: 'Nosotros', href: '/nosotros/quienes-somos' },
        { label: 'Nuestro Equipo' }
      ]}
      hero={{
        title: 'Nuestro Equipo',
        subtitle: 'Profesionales altamente calificados en investigación clínica'
      }}
    >
      {/* Leadership Section */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dirección
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Liderazgo con experiencia nacional e internacional
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <p className="text-gray-500">Foto: {member.name}</p>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-1">{member.role}</p>
                  <p className="text-sm text-gray-500 mb-4">{member.specialty}</p>
                  <p className="text-gray-600 mb-4">{member.description}</p>
                  {member.website && (
                    <Link
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Ver perfil completo →
                    </Link>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Departamentos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Equipos especializados trabajando en conjunto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{dept.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{dept.title}</h3>
                <p className="text-gray-600">{dept.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Calificaciones y Experiencia
            </h2>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Certificaciones en Good Clinical Practice (GCP)
                </h3>
                <p className="text-gray-600">
                  Todo nuestro personal de investigación cuenta con certificación vigente en GCP de acuerdo
                  a las guías ICH-E6(R2), asegurando el cumplimiento de estándares éticos e internacionales.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Formación Especializada
                </h3>
                <p className="text-gray-600">
                  Médicos con subespecialidades, investigadores con maestrías y doctorados en ciencias de la salud,
                  y personal técnico con formación avanzada en sus respectivas áreas.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Experiencia Internacional
                </h3>
                <p className="text-gray-600">
                  Participación en estudios multicéntricos globales, colaboraciones con instituciones de
                  Norteamérica, Europa y Latinoamérica, y presentaciones en congresos internacionales.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Actualización Continua
                </h3>
                <p className="text-gray-600">
                  Programa permanente de capacitación en nuevas metodologías, regulaciones actualizadas,
                  y avances científicos relevantes a la investigación clínica.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Interesado en colaborar con nosotros?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contacta a nuestro equipo para conocer cómo podemos apoyar tu proyecto de investigación
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contacto" variant="primary" size="lg">
              Contactar
            </Button>
            <Button href="/servicios/para-patrocinadores" variant="secondary" size="lg">
              Servicios para Patrocinadores
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
