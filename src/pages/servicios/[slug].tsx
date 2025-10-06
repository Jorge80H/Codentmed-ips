import type { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '@/components/ui/Button'
import {
  Heart,
  GraduationCap,
  Microscope,
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Calendar,
  Activity,
  FileText
} from 'lucide-react'

interface ServicePageProps {
  slug: string
}

const serviceData = {
  medicina: {
    titleEs: 'Medicina General y Especializada',
    titleEn: 'General and Specialized Medicine',
    subtitleEs: 'Atención médica integral con enfoque interdisciplinario',
    subtitleEn: 'Comprehensive medical care with interdisciplinary approach',
    descriptionEs: 'Servicios médicos especializados en medicina general, medicina interna y reumatología con seguimiento médico-odontológico integrado.',
    descriptionEn: 'Specialized medical services in general medicine, internal medicine and rheumatology with integrated medical-dental follow-up.',
    icon: Heart,
    specialtiesEs: [
      'Medicina General',
      'Medicina Interna',
      'Reumatología',
      'Seguimiento Interdisciplinario Médico-Odontológico'
    ],
    specialtiesEn: [
      'General Medicine',
      'Internal Medicine',
      'Rheumatology',
      'Interdisciplinary Medical-Dental Follow-up'
    ],
    featuresEs: [
      'Consulta médica especializada',
      'Diagnóstico integral',
      'Planes de tratamiento personalizados',
      'Seguimiento médico continuo',
      'Coordinación médico-odontológica',
      'Atención basada en evidencia científica'
    ],
    featuresEn: [
      'Specialized medical consultation',
      'Comprehensive diagnosis',
      'Personalized treatment plans',
      'Continuous medical follow-up',
      'Medical-dental coordination',
      'Evidence-based care'
    ]
  },
  odontologia: {
    titleEs: 'Odontología General y Especializada',
    titleEn: 'General and Specialized Dentistry',
    subtitleEs: 'Cuidado oral integral con tecnología avanzada',
    subtitleEn: 'Comprehensive oral care with advanced technology',
    descriptionEs: 'Servicios odontológicos especializados incluyendo odontología general y preventiva, periodoncia, rehabilitación oral, ortodoncia, cirugía oral y seguimiento interdisciplinario.',
    descriptionEn: 'Specialized dental services including general and preventive dentistry, periodontics, oral rehabilitation, orthodontics, oral surgery and interdisciplinary follow-up.',
    icon: Activity,
    specialtiesEs: [
      'Odontología General y Preventiva',
      'Periodoncia',
      'Rehabilitación Oral',
      'Ortodoncia',
      'Cirugía Oral',
      'Seguimiento Interdisciplinario'
    ],
    specialtiesEn: [
      'General and Preventive Dentistry',
      'Periodontics',
      'Oral Rehabilitation',
      'Orthodontics',
      'Oral Surgery',
      'Interdisciplinary Follow-up'
    ],
    featuresEs: [
      'Evaluación odontológica integral',
      'Tratamientos especializados',
      'Tecnología de última generación',
      'Enfoque preventivo',
      'Rehabilitación completa',
      'Seguimiento post-tratamiento'
    ],
    featuresEn: [
      'Comprehensive dental evaluation',
      'Specialized treatments',
      'State-of-the-art technology',
      'Preventive approach',
      'Complete rehabilitation',
      'Post-treatment follow-up'
    ]
  },
  investigacion: {
    titleEs: 'Investigación Clínica y Documental',
    titleEn: 'Clinical and Documentary Research',
    subtitleEs: 'Investigación de excelencia con estándares internacionales',
    subtitleEn: 'Excellence in research with international standards',
    descriptionEs: 'Investigación clínica en medicina y odontología, evaluación de materiales odontológicos, evaluación económica en salud e investigación documental y académica.',
    descriptionEn: 'Clinical research in medicine and dentistry, dental materials evaluation, health economic evaluation and documentary and academic research.',
    icon: Microscope,
    specialtiesEs: [
      'Investigación Clínica en Medicina y Odontología',
      'Evaluación de Materiales Odontológicos',
      'Evaluación Económica en Salud',
      'Investigación Documental y Académica'
    ],
    specialtiesEn: [
      'Clinical Research in Medicine and Dentistry',
      'Dental Materials Evaluation',
      'Health Economic Evaluation',
      'Documentary and Academic Research'
    ],
    featuresEs: [
      'Protocolos de investigación rigurosos',
      'Equipo científico especializado',
      'Publicaciones en revistas indexadas',
      'Metodología científica robusta',
      'Colaboración con instituciones internacionales',
      'Supervisión ética rigurosa'
    ],
    featuresEn: [
      'Rigorous research protocols',
      'Specialized scientific team',
      'Publications in indexed journals',
      'Robust scientific methodology',
      'Collaboration with international institutions',
      'Rigorous ethical supervision'
    ]
  },
  educacion: {
    titleEs: 'Educación Médica y Odontológica',
    titleEn: 'Medical and Dental Education',
    subtitleEs: 'Formación continua de excelencia',
    subtitleEn: 'Excellence in continuing education',
    descriptionEs: 'Cursos y talleres especializados, formación en investigación, programas de actualización profesional y espacios de discusión científica.',
    descriptionEn: 'Specialized courses and workshops, research training, professional development programs and scientific discussion spaces.',
    icon: GraduationCap,
    specialtiesEs: [
      'Cursos y Talleres Especializados',
      'Formación en Investigación',
      'Programas de Actualización Profesional',
      'Espacios de Discusión Científica'
    ],
    specialtiesEn: [
      'Specialized Courses and Workshops',
      'Research Training',
      'Professional Development Programs',
      'Scientific Discussion Spaces'
    ],
    featuresEs: [
      'Docentes especializados',
      'Metodología actualizada',
      'Certificación profesional',
      'Modalidad presencial y virtual',
      'Material didáctico incluido',
      'Seguimiento personalizado'
    ],
    featuresEn: [
      'Specialized instructors',
      'Updated methodology',
      'Professional certification',
      'In-person and virtual modes',
      'Included educational materials',
      'Personalized follow-up'
    ]
  },
  asesorias: {
    titleEs: 'Asesorías Institucionales',
    titleEn: 'Institutional Advisory',
    subtitleEs: 'Consultoría especializada para instituciones y profesionales',
    subtitleEn: 'Specialized consulting for institutions and professionals',
    descriptionEs: 'Asesoría especializada para instituciones públicas y privadas, así como para profesionales independientes en el área de la salud.',
    descriptionEn: 'Specialized advisory for public and private institutions, as well as independent health professionals.',
    icon: FileText,
    specialtiesEs: [
      'Asesoría para Instituciones Públicas y Privadas',
      'Asesoría para Profesionales Independientes',
      'Consultoría en Investigación',
      'Desarrollo de Proyectos de Salud'
    ],
    specialtiesEn: [
      'Advisory for Public and Private Institutions',
      'Advisory for Independent Professionals',
      'Research Consulting',
      'Health Project Development'
    ],
    featuresEs: [
      'Experiencia comprobada',
      'Consultoría personalizada',
      'Soporte técnico especializado',
      'Capacitación institucional',
      'Seguimiento de proyectos',
      'Garantía de calidad'
    ],
    featuresEn: [
      'Proven experience',
      'Personalized consulting',
      'Specialized technical support',
      'Institutional training',
      'Project follow-up',
      'Quality assurance'
    ]
  }
}

export default function ServicePage({ slug }: ServicePageProps) {
  const { t } = useLanguage()
  const service = serviceData[slug as keyof typeof serviceData]

  if (!service) {
    return <div>Servicio no encontrado</div>
  }

  const IconComponent = service.icon

  return (
    <>
      <Head>
        <title>{t(service.titleEs, service.titleEn)} - CODENTMED IPS</title>
        <meta name="description" content={t(service.descriptionEs, service.descriptionEn)} />
      </Head>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                    {t(service.titleEs, service.titleEn)}
                  </h1>
                  <p className="text-xl text-muted-foreground mt-2">
                    {t(service.subtitleEs, service.subtitleEn)}
                  </p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                {t(service.descriptionEs, service.descriptionEn)}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/contacto">
                    <Phone className="w-5 h-5 mr-2" />
                    {t('Contactar Ahora', 'Contact Now')}
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contacto/agendar-cita">
                    <Calendar className="w-5 h-5 mr-2" />
                    {t('Agendar Cita', 'Schedule Appointment')}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Features */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  {t('Características del Servicio', 'Service Features')}
                </h2>
                <div className="space-y-4">
                  {(service.featuresEs || []).map((featureEs, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        {t(featureEs, service.featuresEn?.[index] || featureEs)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specialties */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  {t('Especialidades', 'Specialties')}
                </h2>
                <div className="space-y-3">
                  {(service.specialtiesEs || []).map((specialtyEs, index) => (
                    <div key={index} className="p-4 bg-card rounded-lg border border-card-border">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                        <span className="font-medium text-card-foreground">
                          {t(specialtyEs, service.specialtiesEn?.[index] || specialtyEs)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-muted/30 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('Nuestro Proceso', 'Our Process')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('Metodología probada para garantizar la excelencia en cada servicio', 'Proven methodology to ensure excellence in every service')}
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t('Evaluación Inicial', 'Initial Evaluation')}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t('Evaluación completa de sus necesidades y objetivos específicos.', 'Complete evaluation of your specific needs and objectives.')}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t('Planificación', 'Planning')}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t('Desarrollo de un plan personalizado con cronogramas claros.', 'Development of a personalized plan with clear timelines.')}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t('Ejecución', 'Execution')}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t('Implementación del servicio con monitoreo continuo de calidad.', 'Service implementation with continuous quality monitoring.')}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t('Seguimiento', 'Follow-up')}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t('Seguimiento post-servicio para garantizar resultados óptimos.', 'Post-service follow-up to ensure optimal results.')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {t('¿Por qué elegir CODENTMED IPS?', 'Why choose CODENTMED IPS?')}
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {t('Experiencia Comprobada', 'Proven Experience')}
                      </h3>
                      <p className="text-muted-foreground">
                        {t('Años de experiencia en el sector médico, odontológico y de investigación clínica.', 'Years of experience in the medical, dental and clinical research sector.')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {t('Estándares de Excelencia', 'Standards of Excellence')}
                      </h3>
                      <p className="text-muted-foreground">
                        {t('Cumplimos con los más altos estándares de calidad en todos nuestros servicios.', 'We comply with the highest quality standards in all our services.')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {t('Equipo Especializado', 'Specialized Team')}
                      </h3>
                      <p className="text-muted-foreground">
                        {t('Profesionales altamente calificados y en constante actualización científica.', 'Highly qualified professionals in constant scientific updating.')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {t('Atención Personalizada', 'Personalized Care')}
                      </h3>
                      <p className="text-muted-foreground">
                        {t('Cada paciente y proyecto recibe atención individualizada y seguimiento continuo.', 'Each patient and project receives individualized attention and continuous follow-up.')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl border border-primary/20">
                <div className="text-center">
                  <IconComponent className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {t('Solicitar Información', 'Request Information')}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {t('¿Interesado en este servicio? Contáctenos para más información personalizada.', 'Interested in this service? Contact us for more personalized information.')}
                  </p>
                  <Button size="lg" className="w-full" asChild>
                    <Link href="/contacto">
                      {t('Contactar Especialista', 'Contact Specialist')}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="bg-muted/30 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {t('Servicios Relacionados', 'Related Services')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('Explore otros servicios que complementan su experiencia', 'Explore other services that complement your experience')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(serviceData)
                .filter(([key]) => key !== slug)
                .slice(0, 3)
                .map(([key, relatedService]) => {
                  const RelatedIcon = relatedService.icon
                  return (
                    <Link
                      key={key}
                      href={`/servicios/${key}`}
                      className="group p-6 bg-card rounded-xl border border-card-border hover:shadow-lg transition-all hover:-translate-y-1"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <RelatedIcon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                        {t(relatedService.titleEs, relatedService.titleEn)}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {t(relatedService.subtitleEs, relatedService.subtitleEn)}
                      </p>
                      <div className="text-primary font-medium inline-flex items-center">
                        {t('Ver más', 'Learn more')} →
                      </div>
                    </Link>
                  )
                })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('¿Listo para comenzar?', 'Ready to get started?')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t(
                'Contacte con nuestros especialistas para una consulta personalizada',
                'Contact our specialists for a personalized consultation'
              )}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contacto">
                  <Phone className="w-5 h-5 mr-2" />
                  {t('Contactar Especialista', 'Contact Specialist')}
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pacientes/informacion">
                  {t('Información para Pacientes', 'Patient Information')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = Object.keys(serviceData)
  const paths = slugs.map((slug) => ({
    params: { slug }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string

  if (!serviceData[slug as keyof typeof serviceData]) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      slug
    }
  }
}
