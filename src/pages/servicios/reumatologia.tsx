import Head from 'next/head'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '@/components/ui/Button'
import {
  Heart,
  CheckCircle,
  ArrowRight,
  Phone,
  Calendar,
  Activity,
  Stethoscope,
  ClipboardList,
  Users,
  Shield
} from 'lucide-react'

export default function ReumatologiaPage() {
  const { t } = useLanguage()

  const conditions = [
    {
      nameEs: 'Artritis Reumatoide',
      nameEn: 'Rheumatoid Arthritis',
      descEs: 'Enfermedad autoinmune que causa inflamación crónica de las articulaciones.',
      descEn: 'Autoimmune disease causing chronic joint inflammation.'
    },
    {
      nameEs: 'Lupus Eritematoso Sistémico',
      nameEn: 'Systemic Lupus Erythematosus',
      descEs: 'Enfermedad autoinmune que afecta múltiples órganos y sistemas.',
      descEn: 'Autoimmune disease affecting multiple organs and systems.'
    },
    {
      nameEs: 'Espondilitis Anquilosante',
      nameEn: 'Ankylosing Spondylitis',
      descEs: 'Inflamación crónica de la columna vertebral y articulaciones sacroilíacas.',
      descEn: 'Chronic inflammation of the spine and sacroiliac joints.'
    },
    {
      nameEs: 'Osteoartritis',
      nameEn: 'Osteoarthritis',
      descEs: 'Degeneración del cartílago articular que causa dolor y rigidez.',
      descEn: 'Cartilage degeneration causing pain and stiffness.'
    },
    {
      nameEs: 'Gota',
      nameEn: 'Gout',
      descEs: 'Artritis inflamatoria causada por acumulación de cristales de ácido úrico.',
      descEn: 'Inflammatory arthritis caused by uric acid crystal accumulation.'
    },
    {
      nameEs: 'Fibromialgia',
      nameEn: 'Fibromyalgia',
      descEs: 'Síndrome de dolor musculoesquelético crónico generalizado.',
      descEn: 'Chronic widespread musculoskeletal pain syndrome.'
    },
    {
      nameEs: 'Síndrome de Sjögren',
      nameEn: "Sjögren's Syndrome",
      descEs: 'Enfermedad autoinmune que afecta glándulas productoras de humedad.',
      descEn: 'Autoimmune disease affecting moisture-producing glands.'
    },
    {
      nameEs: 'Osteoporosis',
      nameEn: 'Osteoporosis',
      descEs: 'Disminución de la densidad ósea que aumenta el riesgo de fracturas.',
      descEn: 'Decreased bone density increasing fracture risk.'
    }
  ]

  const services = [
    {
      icon: Stethoscope,
      titleEs: 'Consulta Especializada',
      titleEn: 'Specialized Consultation',
      descEs: 'Evaluación clínica completa y diagnóstico preciso de enfermedades reumáticas.',
      descEn: 'Complete clinical evaluation and accurate diagnosis of rheumatic diseases.'
    },
    {
      icon: ClipboardList,
      titleEs: 'Planes de Tratamiento',
      titleEn: 'Treatment Plans',
      descEs: 'Diseño de estrategias terapéuticas personalizadas con medicamentos de última generación.',
      descEn: 'Design of personalized therapeutic strategies with latest-generation medications.'
    },
    {
      icon: Activity,
      titleEs: 'Seguimiento Continuo',
      titleEn: 'Continuous Monitoring',
      descEs: 'Monitoreo periódico de la evolución clínica y ajuste de tratamientos.',
      descEn: 'Periodic monitoring of clinical progress and treatment adjustments.'
    },
    {
      icon: Heart,
      titleEs: 'Terapia Biológica',
      titleEn: 'Biological Therapy',
      descEs: 'Administración de medicamentos biológicos para enfermedades autoinmunes.',
      descEn: 'Administration of biological medications for autoimmune diseases.'
    },
    {
      icon: Users,
      titleEs: 'Atención Interdisciplinaria',
      titleEn: 'Interdisciplinary Care',
      descEs: 'Coordinación con medicina interna, fisioterapia y otras especialidades.',
      descEn: 'Coordination with internal medicine, physiotherapy and other specialties.'
    },
    {
      icon: Shield,
      titleEs: 'Prevención de Complicaciones',
      titleEn: 'Complication Prevention',
      descEs: 'Estrategias para prevenir daño articular y complicaciones sistémicas.',
      descEn: 'Strategies to prevent joint damage and systemic complications.'
    }
  ]

  const features = [
    {
      titleEs: 'Diagnóstico Temprano',
      titleEn: 'Early Diagnosis',
      descEs: 'Identificación oportuna de enfermedades reumáticas para iniciar tratamiento a tiempo.',
      descEn: 'Timely identification of rheumatic diseases to start treatment on time.'
    },
    {
      titleEs: 'Tratamientos Avanzados',
      titleEn: 'Advanced Treatments',
      descEs: 'Acceso a terapias biológicas y medicamentos de última generación.',
      descEn: 'Access to biological therapies and latest-generation medications.'
    },
    {
      titleEs: 'Atención Humanizada',
      titleEn: 'Humanized Care',
      descEs: 'Acompañamiento cercano al paciente y su familia durante todo el proceso.',
      descEn: 'Close support to patient and family throughout the process.'
    },
    {
      titleEs: 'Seguimiento Médico-Odontológico',
      titleEn: 'Medical-Dental Follow-up',
      descEs: 'Integración con servicios odontológicos para manejo integral del paciente.',
      descEn: 'Integration with dental services for comprehensive patient management.'
    },
    {
      titleEs: 'Experiencia Clínica',
      titleEn: 'Clinical Experience',
      descEs: 'Años de experiencia en el manejo de pacientes con enfermedades reumáticas.',
      descEn: 'Years of experience managing patients with rheumatic diseases.'
    },
    {
      titleEs: 'Investigación Clínica',
      titleEn: 'Clinical Research',
      descEs: 'Participación en estudios clínicos para acceder a tratamientos innovadores.',
      descEn: 'Participation in clinical studies to access innovative treatments.'
    }
  ]

  return (
    <>
      <Head>
        <title>{t('Consulta de Reumatología', 'Rheumatology Consultation')} - CODENTMED IPS</title>
        <meta
          name="description"
          content={t(
            'Consulta especializada en reumatología para diagnóstico y tratamiento de enfermedades del aparato locomotor y tejido conectivo.',
            'Specialized rheumatology consultation for diagnosis and treatment of musculoskeletal system and connective tissue diseases.'
          )}
        />
      </Head>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                    {t('Consulta de Reumatología', 'Rheumatology Consultation')}
                  </h1>
                  <p className="text-xl text-muted-foreground mt-2">
                    {t('Atención especializada para enfermedades reumáticas', 'Specialized care for rheumatic diseases')}
                  </p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                {t(
                  'Las enfermedades reumáticas afectan el aparato locomotor o sistema músculo-esquelético, incluyendo huesos, músculos, tendones y articulaciones, así como patologías autoinmunes del tejido conectivo. Ofrecemos atención humanizada y segura con amplia experiencia en el manejo de pacientes con enfermedades reumáticas.',
                  'Rheumatic diseases affect the musculoskeletal system, including bones, muscles, tendons and joints, as well as autoimmune pathologies of connective tissue. We offer humanized and safe care with extensive experience in managing patients with rheumatic diseases.'
                )}
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
                    {t('Agendar Consulta', 'Schedule Consultation')}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('Servicios de Reumatología', 'Rheumatology Services')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t(
                  'Atención integral para el diagnóstico y tratamiento de enfermedades reumáticas',
                  'Comprehensive care for diagnosis and treatment of rheumatic diseases'
                )}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <div key={index} className="p-6 bg-card rounded-xl border border-card-border hover:shadow-lg transition-all hover:-translate-y-1">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      {t(service.titleEs, service.titleEn)}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t(service.descEs, service.descEn)}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Conditions Section */}
        <section className="bg-muted/30 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('Enfermedades que Tratamos', 'Conditions We Treat')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t(
                  'Experiencia en el manejo de diversas patologías reumáticas y autoinmunes',
                  'Experience in managing various rheumatic and autoimmune pathologies'
                )}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {conditions.map((condition, index) => (
                <div key={index} className="p-4 bg-card rounded-lg border border-card-border">
                  <h3 className="font-semibold text-card-foreground mb-2">
                    {t(condition.nameEs, condition.nameEn)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(condition.descEs, condition.descEn)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('¿Por qué elegir nuestro servicio?', 'Why choose our service?')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {t(feature.titleEs, feature.titleEn)}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t(feature.descEs, feature.descEn)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Dr. Wilson Bautista */}
        <section className="bg-muted/30 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Dr. Wilson Bautista
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    {t(
                      'Médico internista y reumatólogo con más de 15 años de experiencia en el diagnóstico y tratamiento de enfermedades reumáticas y autoinmunes.',
                      'Internal medicine physician and rheumatologist with over 15 years of experience in diagnosing and treating rheumatic and autoimmune diseases.'
                    )}
                  </p>
                  <p className="leading-relaxed">
                    {t(
                      'Especialista en el manejo de artritis reumatoide, lupus eritematoso sistémico, espondilitis anquilosante y otras enfermedades del tejido conectivo. Formación en investigación clínica y experiencia en terapias biológicas avanzadas.',
                      'Specialist in managing rheumatoid arthritis, systemic lupus erythematosus, ankylosing spondylitis and other connective tissue diseases. Training in clinical research and experience with advanced biological therapies.'
                    )}
                  </p>
                  <div className="flex flex-wrap gap-3 pt-4">
                    <div className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium">
                      {t('Medicina Interna', 'Internal Medicine')}
                    </div>
                    <div className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium">
                      {t('Reumatología', 'Rheumatology')}
                    </div>
                    <div className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium">
                      {t('Investigación Clínica', 'Clinical Research')}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl border border-primary/20">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary">WB</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {t('Consultas Privadas', 'Private Consultations')}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {t(
                      'Atención médica personalizada presencial y virtual para pacientes nacionales e internacionales.',
                      'Personalized in-person and virtual medical care for national and international patients.'
                    )}
                  </p>
                  <div className="space-y-3">
                    <Button size="lg" className="w-full" asChild>
                      <Link href="/contacto/agendar-cita">
                        <Calendar className="w-5 h-5 mr-2" />
                        {t('Agendar Consulta', 'Schedule Consultation')}
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="w-full" asChild>
                      <Link href="/servicios/medicina">
                        {t('Más sobre Medicina Interna', 'More about Internal Medicine')}
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('Nuestro Proceso de Atención', 'Our Care Process')}
              </h2>
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
                  {t('Historia clínica completa y examen físico detallado del aparato locomotor.', 'Complete medical history and detailed physical examination of musculoskeletal system.')}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t('Diagnóstico', 'Diagnosis')}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t('Análisis de laboratorio, estudios de imagen y evaluación inmunológica según sea necesario.', 'Laboratory analysis, imaging studies and immunological evaluation as needed.')}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t('Tratamiento', 'Treatment')}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t('Plan terapéutico personalizado con medicamentos convencionales o biológicos.', 'Personalized therapeutic plan with conventional or biological medications.')}
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
                  {t('Monitoreo continuo de la respuesta al tratamiento y ajustes según evolución clínica.', 'Continuous monitoring of treatment response and adjustments according to clinical progress.')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('¿Necesitas atención en reumatología?', 'Need rheumatology care?')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t(
                'Agenda tu consulta con nuestro especialista en reumatología para recibir diagnóstico y tratamiento personalizado',
                'Schedule your consultation with our rheumatology specialist for personalized diagnosis and treatment'
              )}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contacto/agendar-cita">
                  <Calendar className="w-5 h-5 mr-2" />
                  {t('Agendar Consulta', 'Schedule Consultation')}
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contacto">
                  <Phone className="w-5 h-5 mr-2" />
                  {t('Contactar', 'Contact')}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
