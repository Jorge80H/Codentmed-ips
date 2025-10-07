import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import {
  Microscope,
  BookOpen,
  Award,
  Users,
  TrendingUp,
  Building2,
  FileCheck,
  Globe,
  Target,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Shield
} from 'lucide-react'

export default function InvestigacionPage() {
  const { t } = useLanguage()

  const keyStats = [
    {
      icon: Award,
      numberEs: '25+',
      numberEn: '25+',
      labelEs: 'Años de Experiencia',
      labelEn: 'Years of Experience'
    },
    {
      icon: FileCheck,
      numberEs: '50+',
      numberEn: '50+',
      labelEs: 'Estudios Completados',
      labelEn: 'Completed Studies'
    },
    {
      icon: Users,
      numberEs: '2,000+',
      numberEn: '2,000+',
      labelEs: 'Pacientes Participantes',
      labelEn: 'Participating Patients'
    },
    {
      icon: BookOpen,
      numberEs: '30+',
      numberEn: '30+',
      labelEs: 'Publicaciones Científicas',
      labelEn: 'Scientific Publications'
    }
  ]

  const researchAreas = [
    {
      icon: Microscope,
      titleEs: 'Reumatología',
      titleEn: 'Rheumatology',
      descEs: 'Centro de referencia nacional en investigación de artritis reumatoide, lupus, espondiloartritis y enfermedades autoinmunes.',
      descEn: 'National reference center for research in rheumatoid arthritis, lupus, spondyloarthritis, and autoimmune diseases.',
      conditions: [
        { es: 'Artritis Reumatoide', en: 'Rheumatoid Arthritis' },
        { es: 'Lupus Eritematoso', en: 'Systemic Lupus' },
        { es: 'Espondiloartritis', en: 'Spondyloarthritis' },
        { es: 'Artritis Psoriásica', en: 'Psoriatic Arthritis' }
      ]
    },
    {
      icon: Building2,
      titleEs: 'Medicina Interna',
      titleEn: 'Internal Medicine',
      descEs: 'Manejo integral de enfermedades sistémicas crónicas, estudios de hipertensión, diabetes y comorbilidades complejas.',
      descEn: 'Comprehensive management of chronic systemic diseases, hypertension, diabetes, and complex comorbidities studies.',
      conditions: [
        { es: 'Hipertensión Arterial', en: 'Arterial Hypertension' },
        { es: 'Diabetes Mellitus', en: 'Diabetes Mellitus' },
        { es: 'Enfermedades Cardiovasculares', en: 'Cardiovascular Diseases' },
        { es: 'Síndrome Metabólico', en: 'Metabolic Syndrome' }
      ]
    },
    {
      icon: Sparkles,
      titleEs: 'Odontología Investigativa',
      titleEn: 'Research Dentistry',
      descEs: 'Pioneros en Colombia estudiando la conexión entre enfermedad periodontal y condiciones sistémicas, especialmente artritis.',
      descEn: 'Pioneers in Colombia studying the connection between periodontal disease and systemic conditions, especially arthritis.',
      conditions: [
        { es: 'Enfermedad Periodontal', en: 'Periodontal Disease' },
        { es: 'Conexión Periodoncia-AR', en: 'Periodontitis-RA Connection' },
        { es: 'Biomarcadores Orales', en: 'Oral Biomarkers' },
        { es: 'Salud Oral Sistémica', en: 'Systemic Oral Health' }
      ]
    },
    {
      icon: TrendingUp,
      titleEs: 'Terapias Biológicas',
      titleEn: 'Biological Therapies',
      descEs: 'Investigación avanzada en medicamentos biológicos, inhibidores de JAK, anti-TNF y terapias dirigidas de última generación.',
      descEn: 'Advanced research in biological medications, JAK inhibitors, anti-TNF, and latest generation targeted therapies.',
      conditions: [
        { es: 'Anti-TNF', en: 'Anti-TNF' },
        { es: 'Inhibidores JAK', en: 'JAK Inhibitors' },
        { es: 'Anti-IL-6', en: 'Anti-IL-6' },
        { es: 'Terapias Celulares', en: 'Cell Therapies' }
      ]
    }
  ]

  const whyChooseUs = [
    {
      icon: Award,
      titleEs: 'Liderazgo Científico Reconocido',
      titleEn: 'Recognized Scientific Leadership',
      descEs: 'Dirigido por el Dr. Wilson Bautista, internista-reumatólogo con más de 25 años de experiencia en investigación clínica y docencia universitaria.',
      descEn: 'Led by Dr. Wilson Bautista, internist-rheumatologist with over 25 years of experience in clinical research and university teaching.'
    },
    {
      icon: Shield,
      titleEs: 'Certificaciones Internacionales',
      titleEn: 'International Certifications',
      descEs: 'Equipo certificado en Buenas Prácticas Clínicas (GCP) por INVIMA y entrenamiento en estándares ICH-GCP internacionales.',
      descEn: 'Team certified in Good Clinical Practice (GCP) by INVIMA and training in international ICH-GCP standards.'
    },
    {
      icon: Building2,
      titleEs: 'Infraestructura Especializada',
      titleEn: 'Specialized Infrastructure',
      descEs: 'Instalaciones modernas con consultorios especializados, área de procedimientos, laboratorio y tecnología diagnóstica avanzada.',
      descEn: 'Modern facilities with specialized consultation rooms, procedure area, laboratory, and advanced diagnostic technology.'
    },
    {
      icon: Users,
      titleEs: 'Base de Pacientes Cualificada',
      titleEn: 'Qualified Patient Base',
      descEs: 'Acceso a población amplia de pacientes con diagnósticos confirmados en reumatología, medicina interna y odontología.',
      descEn: 'Access to a broad population of patients with confirmed diagnoses in rheumatology, internal medicine, and dentistry.'
    },
    {
      icon: BarChart3,
      titleEs: 'Track Record Comprobado',
      titleEn: 'Proven Track Record',
      descEs: 'Más de 50 estudios completados exitosamente en fases II, III y IV con patrocinadores internacionales de primera línea.',
      descEn: 'Over 50 studies successfully completed in phases II, III, and IV with top-tier international sponsors.'
    },
    {
      icon: Globe,
      titleEs: 'Alcance Internacional',
      titleEn: 'International Reach',
      descEs: 'Colaboraciones con instituciones académicas y CROs globales. Publicaciones en revistas indexadas de alto impacto.',
      descEn: 'Collaborations with academic institutions and global CROs. Publications in high-impact indexed journals.'
    }
  ]

  const researchServices = [
    {
      titleEs: 'Para Patrocinadores',
      titleEn: 'For Sponsors',
      icon: Target,
      items: [
        { es: 'Site Selection y Feasibility Studies', en: 'Site Selection and Feasibility Studies' },
        { es: 'Gestión Completa de Estudios Clínicos', en: 'Complete Clinical Trial Management' },
        { es: 'Reclutamiento Acelerado de Pacientes', en: 'Accelerated Patient Recruitment' },
        { es: 'Retención >85% en Estudios de Largo Plazo', en: 'Retention >85% in Long-term Studies' },
        { es: 'Cumplimiento Normativo Total', en: 'Full Regulatory Compliance' },
        { es: 'Manejo de Datos EDC/eCRF', en: 'EDC/eCRF Data Management' }
      ],
      ctaEs: 'Iniciar Colaboración',
      ctaEn: 'Start Collaboration',
      link: '/servicios/para-patrocinadores'
    },
    {
      titleEs: 'Para Pacientes',
      titleEn: 'For Patients',
      icon: Users,
      items: [
        { es: 'Acceso a Tratamientos Innovadores', en: 'Access to Innovative Treatments' },
        { es: 'Atención Médica Especializada Sin Costo', en: 'Specialized Medical Care at No Cost' },
        { es: 'Seguimiento Cercano por Expertos', en: 'Close Follow-up by Experts' },
        { es: 'Exámenes y Medicamentos Gratuitos', en: 'Free Tests and Medications' },
        { es: 'Contribución al Avance Científico', en: 'Contribution to Scientific Advancement' },
        { es: 'Participación Completamente Voluntaria', en: 'Completely Voluntary Participation' }
      ],
      ctaEs: 'Ver Estudios Disponibles',
      ctaEn: 'View Available Studies',
      link: '/pacientes/estudios-disponibles'
    }
  ]

  const publications = [
    {
      titleEs: 'Conexión entre Enfermedad Periodontal y Artritis Reumatoide',
      titleEn: 'Connection between Periodontal Disease and Rheumatoid Arthritis',
      journalEs: 'Revista Colombiana de Reumatología',
      journalEn: 'Colombian Journal of Rheumatology',
      year: '2023',
      authors: 'Bautista W, Unriza S, et al.'
    },
    {
      titleEs: 'Eficacia de Terapias Biológicas en Artritis Reumatoide Refractaria',
      titleEn: 'Efficacy of Biological Therapies in Refractory Rheumatoid Arthritis',
      journalEs: 'Revista de la Asociación Colombiana de Medicina Interna',
      journalEn: 'Colombian Association of Internal Medicine Journal',
      year: '2022',
      authors: 'Bautista W, et al.'
    },
    {
      titleEs: 'Biomarcadores Orales como Predictores de Actividad en Enfermedades Autoinmunes',
      titleEn: 'Oral Biomarkers as Predictors of Activity in Autoimmune Diseases',
      journalEs: 'Journal of Clinical Rheumatology',
      journalEn: 'Journal of Clinical Rheumatology',
      year: '2021',
      authors: 'Unriza S, Bautista W, et al.'
    }
  ]

  const researchProcess = [
    {
      step: 1,
      titleEs: 'Evaluación de Viabilidad',
      titleEn: 'Feasibility Assessment',
      descEs: 'Análisis detallado de criterios del estudio, población objetivo y capacidad de reclutamiento.',
      descEn: 'Detailed analysis of study criteria, target population, and recruitment capacity.'
    },
    {
      step: 2,
      titleEs: 'Aprobación Ética y Regulatoria',
      titleEn: 'Ethical and Regulatory Approval',
      descEs: 'Sometimiento a Comité de Ética Institucional e INVIMA con documentación completa.',
      descEn: 'Submission to Institutional Ethics Committee and INVIMA with complete documentation.'
    },
    {
      step: 3,
      titleEs: 'Reclutamiento y Tamizaje',
      titleEn: 'Recruitment and Screening',
      descEs: 'Identificación, contacto y evaluación de candidatos según criterios de inclusión/exclusión.',
      descEn: 'Identification, contact, and evaluation of candidates according to inclusion/exclusion criteria.'
    },
    {
      step: 4,
      titleEs: 'Ejecución del Estudio',
      titleEn: 'Study Execution',
      descEs: 'Seguimiento protocolizado de pacientes con monitoreo continuo de seguridad y eficacia.',
      descEn: 'Protocol-based patient follow-up with continuous safety and efficacy monitoring.'
    },
    {
      step: 5,
      titleEs: 'Gestión de Datos',
      titleEn: 'Data Management',
      descEs: 'Captura electrónica de datos (EDC), control de calidad y resolución de queries.',
      descEn: 'Electronic data capture (EDC), quality control, and query resolution.'
    },
    {
      step: 6,
      titleEs: 'Cierre y Análisis',
      titleEn: 'Closure and Analysis',
      descEs: 'Finalización del estudio, análisis de resultados y contribución a publicaciones científicas.',
      descEn: 'Study completion, results analysis, and contribution to scientific publications.'
    }
  ]

  return (
    <>
      <Head>
        <title>{t('Investigación Clínica', 'Clinical Research')} - CODENTMED IPS</title>
        <meta
          name="description"
          content={t(
            'Centro de investigación clínica especializado en reumatología, medicina interna y odontología. Más de 25 años de experiencia y 50+ estudios completados.',
            'Clinical research center specialized in rheumatology, internal medicine, and dentistry. Over 25 years of experience and 50+ completed studies.'
          )}
        />
      </Head>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Microscope className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">
                  {t('Centro de Excelencia en Investigación', 'Research Excellence Center')}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {t('Investigación Clínica de Vanguardia', 'Cutting-Edge Clinical Research')}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                {t(
                  'Generando evidencia científica de alto impacto en reumatología, medicina interna y odontología',
                  'Generating high-impact scientific evidence in rheumatology, internal medicine, and dentistry'
                )}
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                {t(
                  'Con más de 25 años de experiencia, CODENTMED IPS es un centro de referencia nacional en investigación clínica, combinando rigor científico, infraestructura moderna y expertise médico de clase mundial.',
                  'With over 25 years of experience, CODENTMED IPS is a national reference center in clinical research, combining scientific rigor, modern infrastructure, and world-class medical expertise.'
                )}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/servicios/para-patrocinadores">
                    {t('Para Patrocinadores', 'For Sponsors')}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/pacientes/estudios-disponibles">
                    {t('Participar en Estudios', 'Participate in Studies')}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Stats */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyStats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <Card key={index} className="p-6 text-center border-card-border">
                    <IconComponent className="w-12 h-12 text-primary mx-auto mb-4" />
                    <div className="text-4xl font-bold text-foreground mb-2">
                      {t(stat.numberEs, stat.numberEn)}
                    </div>
                    <div className="text-muted-foreground">
                      {t(stat.labelEs, stat.labelEn)}
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('Áreas de Investigación', 'Research Areas')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t(
                  'Expertise especializado en múltiples áreas terapéuticas con enfoque interdisciplinario',
                  'Specialized expertise in multiple therapeutic areas with interdisciplinary approach'
                )}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {researchAreas.map((area, index) => {
                const IconComponent = area.icon
                return (
                  <Card key={index} className="p-6 border-card-border">
                    <IconComponent className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold text-card-foreground mb-3">
                      {t(area.titleEs, area.titleEn)}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {t(area.descEs, area.descEn)}
                    </p>
                    <div className="space-y-2">
                      {area.conditions.map((condition, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{t(condition.es, condition.en)}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('¿Por Qué Elegirnos?', 'Why Choose Us?')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t(
                  'Somos el socio estratégico ideal para investigación clínica de alta calidad',
                  'We are the ideal strategic partner for high-quality clinical research'
                )}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((reason, index) => {
                const IconComponent = reason.icon
                return (
                  <Card key={index} className="p-6 border-card-border">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      {t(reason.titleEs, reason.titleEn)}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t(reason.descEs, reason.descEn)}
                    </p>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Research Services */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('Nuestros Servicios', 'Our Services')}
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {researchServices.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <Card key={index} className="p-8 border-card-border">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-card-foreground">
                        {t(service.titleEs, service.titleEn)}
                      </h3>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{t(item.es, item.en)}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full">
                      <Link href={service.link}>
                        {t(service.ctaEs, service.ctaEn)}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Research Process */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('Nuestro Proceso de Investigación', 'Our Research Process')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t(
                  'Metodología probada para ejecución exitosa de estudios clínicos',
                  'Proven methodology for successful clinical trial execution'
                )}
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {researchProcess.map((phase) => (
                  <Card key={phase.step} className="p-6 border-card-border">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold">
                        {phase.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-card-foreground mb-2">
                          {t(phase.titleEs, phase.titleEn)}
                        </h3>
                        <p className="text-muted-foreground">
                          {t(phase.descEs, phase.descEn)}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <BookOpen className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('Publicaciones Científicas Destacadas', 'Featured Scientific Publications')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t(
                  'Contribuciones al conocimiento científico en revistas indexadas',
                  'Contributions to scientific knowledge in indexed journals'
                )}
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {publications.map((pub, index) => (
                <Card key={index} className="p-6 border-card-border">
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {t(pub.titleEs, pub.titleEn)}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    {pub.authors} ({pub.year})
                  </p>
                  <p className="text-primary text-sm font-medium">
                    {t(pub.journalEs, pub.journalEn)}
                  </p>
                </Card>
              ))}
              <div className="text-center mt-6">
                <Button variant="outline" asChild>
                  <Link href="/investigacion/publicaciones">
                    {t('Ver Todas las Publicaciones', 'View All Publications')}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('Inicie su Proyecto de Investigación', 'Start Your Research Project')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t(
                'Contáctenos para explorar cómo podemos colaborar en su próximo estudio clínico',
                'Contact us to explore how we can collaborate on your next clinical study'
              )}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contacto">
                  {t('Contactar Equipo Científico', 'Contact Scientific Team')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/investigacion/areas-terapeuticas">
                  {t('Explorar Áreas Terapéuticas', 'Explore Therapeutic Areas')}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
