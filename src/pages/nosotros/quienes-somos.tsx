import Head from 'next/head'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import {
  Microscope,
  Heart,
  Globe,
  GraduationCap,
  CheckCircle,
  ArrowRight,
  Users,
  Award
} from 'lucide-react'

export default function QuienesSomosPage() {
  const { t } = useLanguage()

  const values = [
    {
      icon: Microscope,
      titleEs: 'Ética',
      titleEn: 'Ethics',
      descEs: 'Actuamos con honestidad, transparencia y respeto en todas nuestras acciones.',
      descEn: 'We act with honesty, transparency and respect in all our actions.'
    },
    {
      icon: CheckCircle,
      titleEs: 'Calidad',
      titleEn: 'Quality',
      descEs: 'Compromiso con la excelencia en cada servicio y procedimiento que realizamos.',
      descEn: 'Commitment to excellence in every service and procedure we perform.'
    },
    {
      icon: Heart,
      titleEs: 'Humanismo',
      titleEn: 'Humanism',
      descEs: 'Atención centrada en el paciente con empatía y calidez humana.',
      descEn: 'Patient-centered care with empathy and human warmth.'
    },
    {
      icon: Users,
      titleEs: 'Responsabilidad',
      titleEn: 'Responsibility',
      descEs: 'Cumplimiento riguroso de nuestros compromisos con pacientes y colaboradores.',
      descEn: 'Rigorous fulfillment of our commitments to patients and collaborators.'
    },
    {
      icon: GraduationCap,
      titleEs: 'Innovación',
      titleEn: 'Innovation',
      descEs: 'Mejora continua e integración de nuevas tecnologías y metodologías.',
      descEn: 'Continuous improvement and integration of new technologies and methodologies.'
    },
    {
      icon: Award,
      titleEs: 'Confidencialidad',
      titleEn: 'Confidentiality',
      descEs: 'Protección absoluta de la información de nuestros pacientes y estudios.',
      descEn: 'Absolute protection of our patients and studies information.'
    }
  ]

  const advantages = [
    {
      titleEs: 'Marco Regulatorio Robusto',
      titleEn: 'Robust Regulatory Framework',
      descEs: 'Cumplimiento de estándares internacionales y regulaciones colombianas.',
      descEn: 'Compliance with international standards and Colombian regulations.'
    },
    {
      titleEs: 'Costos Competitivos',
      titleEn: 'Competitive Costs',
      descEs: 'Excelente relación costo-beneficio sin comprometer la calidad.',
      descEn: 'Excellent cost-benefit ratio without compromising quality.'
    },
    {
      titleEs: 'Talento Médico Especializado',
      titleEn: 'Specialized Medical Talent',
      descEs: 'Profesionales altamente calificados con formación internacional.',
      descEn: 'Highly qualified professionals with international training.'
    },
    {
      titleEs: 'Ubicación Estratégica',
      titleEn: 'Strategic Location',
      descEs: 'Posición privilegiada en Latinoamérica para colaboración regional.',
      descEn: 'Privileged position in Latin America for regional collaboration.'
    },
    {
      titleEs: 'Población Diversa',
      titleEn: 'Diverse Population',
      descEs: 'Diversidad étnica y genética ideal para estudios multicéntricos.',
      descEn: 'Ideal ethnic and genetic diversity for multicenter studies.'
    },
    {
      titleEs: 'Infraestructura de Salud',
      titleEn: 'Healthcare Infrastructure',
      descEs: 'Instalaciones modernas y equipamiento de última generación.',
      descEn: 'Modern facilities and state-of-the-art equipment.'
    }
  ]

  return (
    <>
      <Head>
        <title>{t('Quiénes Somos', 'About Us')} - CODENTMED IPS</title>
        <meta
          name="description"
          content={t(
            'CODENTMED IPS es un Centro Integrado de Medicina, Odontología e Investigación Clínica con más de 20 años de experiencia.',
            'CODENTMED IPS is an Integrated Center for Medicine, Dentistry and Clinical Research with over 20 years of experience.'
          )}
        />
      </Head>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {t('Quiénes Somos', 'About Us')}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                {t('Atención integral con visión científica', 'Comprehensive care with scientific vision')}
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl">
                {t(
                  'CODENTMED IPS es un Centro Integrado de Medicina, Odontología e Investigación Clínica ubicado en Bogotá, Colombia, comprometido con la excelencia en la atención médica y la investigación científica.',
                  'CODENTMED IPS is an Integrated Center for Medicine, Dentistry and Clinical Research located in Bogotá, Colombia, committed to excellence in medical care and scientific research.'
                )}
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  {t(
                    'Somos un centro especializado que integra servicios de medicina general y especializada, odontología, investigación clínica y documental, educación médica y odontológica, y asesorías institucionales.',
                    'We are a specialized center that integrates general and specialized medicine services, dentistry, clinical and documentary research, medical and dental education, and institutional advisory services.'
                  )}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t(
                    'Nuestro compromiso es brindar atención médica y odontológica integral basada en evidencia científica, con un enfoque interdisciplinario que garantiza la mejor atención para nuestros pacientes.',
                    'Our commitment is to provide comprehensive medical and dental care based on scientific evidence, with an interdisciplinary approach that guarantees the best care for our patients.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-muted/30 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-card-border">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {t('Nuestra Misión', 'Our Mission')}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t(
                    'Brindar atención médica y odontológica integral de alta calidad, basada en evidencia científica y en un enfoque interdisciplinario, que contribuya al bienestar y la salud de nuestros pacientes, al tiempo que desarrollamos investigación clínica y documental que aporte al conocimiento científico nacional e internacional.',
                    'Provide high-quality comprehensive medical and dental care, based on scientific evidence and an interdisciplinary approach, that contributes to the well-being and health of our patients, while developing clinical and documentary research that contributes to national and international scientific knowledge.'
                  )}
                </p>
              </Card>

              <Card className="p-8 border-card-border">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {t('Nuestra Visión 2030', 'Our Vision 2030')}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t(
                    'Ser reconocidos a nivel nacional como una IPS de referencia por nuestra excelencia clínica, liderazgo en investigación en medicina y odontología, y por nuestro compromiso con la formación de profesionales de la salud de alta calidad.',
                    'Be recognized nationally as a reference healthcare institution for our clinical excellence, leadership in medicine and dentistry research, and our commitment to training high-quality healthcare professionals.'
                  )}
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('Nuestros Valores Corporativos', 'Our Corporate Values')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t(
                  'Principios que guían nuestro compromiso con la excelencia',
                  'Principles that guide our commitment to excellence'
                )}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <Card key={index} className="p-6 border-card-border hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      {t(value.titleEs, value.titleEn)}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t(value.descEs, value.descEn)}
                    </p>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Colombia / Advantages */}
        <section className="bg-muted/30 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('¿Por qué elegir CODENTMED IPS?', 'Why choose CODENTMED IPS?')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t(
                  'Ventajas competitivas que nos posicionan como centro de referencia',
                  'Competitive advantages that position us as a reference center'
                )}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((advantage, index) => (
                <Card key={index} className="p-6 border-card-border bg-card">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2">
                        {t(advantage.titleEs, advantage.titleEn)}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {t(advantage.descEs, advantage.descEn)}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team & Certifications CTA */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-card-border bg-gradient-to-br from-primary/5 to-primary/10">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {t('Conoce Nuestro Equipo', 'Meet Our Team')}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {t(
                    'Profesionales altamente calificados comprometidos con tu salud y bienestar.',
                    'Highly qualified professionals committed to your health and well-being.'
                  )}
                </p>
                <Button asChild>
                  <Link href="/nosotros/equipo">
                    {t('Ver Equipo', 'View Team')}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </Card>

              <Card className="p-8 border-card-border bg-gradient-to-br from-primary/5 to-primary/10">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {t('Certificaciones', 'Certifications')}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {t(
                    'Reconocimientos y certificaciones que avalan nuestra calidad y compromiso.',
                    'Recognitions and certifications that endorse our quality and commitment.'
                  )}
                </p>
                <Button asChild variant="outline">
                  <Link href="/nosotros/certificaciones">
                    {t('Ver Certificaciones', 'View Certifications')}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('¿Necesitas más información?', 'Need more information?')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t(
                'Estamos aquí para atenderte y resolver todas tus dudas',
                "We're here to assist you and answer all your questions"
              )}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contacto">
                  {t('Contactar', 'Contact')}
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/servicios/medicina">
                  {t('Ver Servicios', 'View Services')}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
