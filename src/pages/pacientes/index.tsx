import Head from 'next/head'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import {
  Heart,
  Shield,
  Users,
  FileText,
  Info,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Clock,
  Award,
  Stethoscope
} from 'lucide-react'

export default function PacientesPage() {
  const { t } = useLanguage()

  const benefits = [
    {
      icon: Stethoscope,
      titleEs: 'Acceso a Tratamientos Innovadores',
      titleEn: 'Access to Innovative Treatments',
      descEs: 'Reciba medicamentos de última generación que aún no están disponibles comercialmente.',
      descEn: 'Receive latest generation medications not yet commercially available.'
    },
    {
      icon: Award,
      titleEs: 'Atención Médica Especializada',
      titleEn: 'Specialized Medical Care',
      descEs: 'Seguimiento cercano por médicos expertos en reumatología y medicina interna.',
      descEn: 'Close monitoring by expert physicians in rheumatology and internal medicine.'
    },
    {
      icon: Shield,
      titleEs: 'Sin Costo Alguno',
      titleEn: 'At No Cost',
      descEs: 'Medicamentos, exámenes de laboratorio y consultas médicas completamente gratuitos.',
      descEn: 'Medications, laboratory tests, and medical consultations completely free.'
    },
    {
      icon: Users,
      titleEs: 'Contribuya a la Ciencia',
      titleEn: 'Contribute to Science',
      descEs: 'Ayude a desarrollar nuevos tratamientos que beneficiarán a futuras generaciones.',
      descEn: 'Help develop new treatments that will benefit future generations.'
    },
    {
      icon: Clock,
      titleEs: 'Compensación por Tiempo',
      titleEn: 'Time Compensation',
      descEs: 'Reembolso de gastos de transporte y compensación por tiempo invertido en algunos estudios.',
      descEn: 'Reimbursement of transportation expenses and time compensation in some studies.'
    },
    {
      icon: Heart,
      titleEs: 'Participación Voluntaria',
      titleEn: 'Voluntary Participation',
      descEs: 'Puede retirarse en cualquier momento sin afectar su atención médica regular.',
      descEn: 'You can withdraw at any time without affecting your regular medical care.'
    }
  ]

  const patientResources = [
    {
      icon: Info,
      titleEs: 'Información para Pacientes',
      titleEn: 'Patient Information',
      descEs: 'Todo lo que necesita saber sobre investigación clínica y cómo funciona.',
      descEn: 'Everything you need to know about clinical research and how it works.',
      link: '/pacientes/informacion'
    },
    {
      icon: Shield,
      titleEs: 'Derechos y Deberes',
      titleEn: 'Rights and Responsibilities',
      descEs: 'Conozca sus derechos como participante y sus responsabilidades.',
      descEn: 'Know your rights as a participant and your responsibilities.',
      link: '/pacientes/derechos-deberes'
    },
    {
      icon: Calendar,
      titleEs: 'Recomendaciones para su Cita',
      titleEn: 'Appointment Recommendations',
      descEs: 'Cómo prepararse para su visita al centro de investigación.',
      descEn: 'How to prepare for your visit to the research center.',
      link: '/pacientes/recomendaciones'
    },
    {
      icon: FileText,
      titleEs: 'Estudios Disponibles',
      titleEn: 'Available Studies',
      descEs: 'Vea los estudios clínicos actualmente reclutando participantes.',
      descEn: 'See clinical studies currently recruiting participants.',
      link: '/pacientes/estudios-disponibles'
    }
  ]

  const participationSteps = [
    {
      step: 1,
      titleEs: 'Consulte Estudios Disponibles',
      titleEn: 'Check Available Studies',
      descEs: 'Revise nuestros estudios activos y vea si cumple criterios básicos de elegibilidad.',
      descEn: 'Review our active studies and see if you meet basic eligibility criteria.'
    },
    {
      step: 2,
      titleEs: 'Contacte al Coordinador',
      titleEn: 'Contact Coordinator',
      descEs: 'Comuníquese con nuestro equipo para hacer preguntas y expresar su interés.',
      descEn: 'Contact our team to ask questions and express your interest.'
    },
    {
      step: 3,
      titleEs: 'Evaluación Inicial',
      titleEn: 'Initial Evaluation',
      descEs: 'Asista a una visita de tamizaje para evaluación médica completa y revisión de consentimiento.',
      descEn: 'Attend a screening visit for complete medical evaluation and consent review.'
    },
    {
      step: 4,
      titleEs: 'Tome su Decisión',
      titleEn: 'Make Your Decision',
      descEs: 'Decida voluntariamente si desea participar después de conocer todos los detalles.',
      descEn: 'Voluntarily decide if you want to participate after knowing all the details.'
    },
    {
      step: 5,
      titleEs: 'Inicie el Estudio',
      titleEn: 'Begin the Study',
      descEs: 'Firme el consentimiento informado e inicie el tratamiento con seguimiento cercano.',
      descEn: 'Sign informed consent and begin treatment with close monitoring.'
    }
  ]

  const testimonials = [
    {
      textEs: 'Participar en el estudio de artritis reumatoide me dio acceso a un tratamiento que cambió mi calidad de vida. El equipo médico fue excepcional.',
      textEn: 'Participating in the rheumatoid arthritis study gave me access to a treatment that changed my quality of life. The medical team was exceptional.',
      author: 'María G.',
      condition: t('Artritis Reumatoide', 'Rheumatoid Arthritis')
    },
    {
      textEs: 'Nunca imaginé que ayudar a la ciencia también me ayudaría a mí. Recibí atención de primera clase y medicamento sin costo.',
      textEn: 'I never imagined that helping science would also help me. I received first-class care and medication at no cost.',
      author: 'Carlos R.',
      condition: t('Lupus Eritematoso', 'Systemic Lupus')
    },
    {
      textEs: 'El equipo siempre respondió mis preguntas con paciencia. Me sentí segura y bien cuidada durante todo el proceso.',
      textEn: 'The team always answered my questions patiently. I felt safe and well cared for throughout the process.',
      author: 'Ana M.',
      condition: t('Espondiloartritis', 'Spondyloarthritis')
    }
  ]

  const faqs = [
    {
      questionEs: '¿Es seguro participar en un estudio clínico?',
      questionEn: 'Is it safe to participate in a clinical study?',
      answerEs: 'Sí. Los estudios clínicos tienen múltiples capas de supervisión: aprobación por Comité de Ética, regulación por INVIMA, seguimiento constante por médicos expertos, y protocolos estrictos de seguridad. Cualquier efecto adverso es monitoreado inmediatamente.',
      answerEn: 'Yes. Clinical studies have multiple layers of oversight: Ethics Committee approval, INVIMA regulation, constant monitoring by expert physicians, and strict safety protocols. Any adverse effects are immediately monitored.'
    },
    {
      questionEs: '¿Cuánto tiempo requiere mi participación?',
      questionEn: 'How much time does participation require?',
      answerEs: 'Depende del estudio. Algunos requieren visitas semanales durante meses, otros visitas mensuales durante años. La información específica se proporciona antes de que decida participar.',
      answerEn: 'It depends on the study. Some require weekly visits for months, others monthly visits for years. Specific information is provided before you decide to participate.'
    },
    {
      questionEs: '¿Puedo retirarme si cambio de opinión?',
      questionEn: 'Can I withdraw if I change my mind?',
      answerEs: 'Absolutamente. La participación es completamente voluntaria y puede retirarse en cualquier momento sin dar explicaciones y sin que esto afecte su atención médica regular.',
      answerEn: 'Absolutely. Participation is completely voluntary and you can withdraw at any time without explanation and without affecting your regular medical care.'
    },
    {
      questionEs: '¿Recibiré placebo?',
      questionEn: 'Will I receive placebo?',
      answerEs: 'Algunos estudios utilizan placebo. Esto se explica claramente en el consentimiento informado. Incluso con placebo, recibirá monitoreo médico cercano y atención especializada sin costo.',
      answerEn: 'Some studies use placebo. This is clearly explained in informed consent. Even with placebo, you will receive close medical monitoring and specialized care at no cost.'
    }
  ]

  return (
    <>
      <Head>
        <title>{t('Información para Pacientes', 'Patient Information')} - CODENTMED IPS</title>
        <meta
          name="description"
          content={t(
            'Participe en estudios clínicos de vanguardia. Acceso a tratamientos innovadores, atención especializada sin costo.',
            'Participate in cutting-edge clinical studies. Access to innovative treatments, specialized care at no cost.'
          )}
        />
      </Head>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Heart className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">
                  {t('Ayudando a Pacientes y a la Ciencia', 'Helping Patients and Science')}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {t('Participe en Investigación Clínica', 'Participate in Clinical Research')}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                {t(
                  'Acceda a tratamientos innovadores mientras contribuye al avance de la medicina',
                  'Access innovative treatments while contributing to the advancement of medicine'
                )}
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                {t(
                  'En CODENTMED IPS, más de 2,000 pacientes han participado en estudios clínicos que les brindaron acceso a medicamentos de vanguardia y atención médica especializada de primer nivel, completamente sin costo.',
                  'At CODENTMED IPS, over 2,000 patients have participated in clinical studies that gave them access to cutting-edge medications and first-class specialized medical care, completely free of charge.'
                )}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/pacientes/estudios-disponibles">
                    {t('Ver Estudios Disponibles', 'View Available Studies')}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/pacientes/informacion">
                    {t('Más Información', 'More Information')}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('Beneficios de Participar', 'Benefits of Participating')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t(
                  'Participar en investigación clínica ofrece múltiples beneficios para su salud y bienestar',
                  'Participating in clinical research offers multiple benefits for your health and well-being'
                )}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <Card key={index} className="p-6 border-card-border">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      {t(benefit.titleEs, benefit.titleEn)}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t(benefit.descEs, benefit.descEn)}
                    </p>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Patient Resources */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('Recursos para Pacientes', 'Patient Resources')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t(
                  'Información completa para tomar una decisión informada',
                  'Complete information to make an informed decision'
                )}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {patientResources.map((resource, index) => {
                const IconComponent = resource.icon
                return (
                  <Card key={index} className="p-6 border-card-border hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-card-foreground mb-2">
                          {t(resource.titleEs, resource.titleEn)}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {t(resource.descEs, resource.descEn)}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" asChild className="w-full">
                      <Link href={resource.link}>
                        {t('Leer Más', 'Read More')}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Participation Steps */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('Cómo Participar', 'How to Participate')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t(
                  'Proceso simple y transparente en 5 pasos',
                  'Simple and transparent 5-step process'
                )}
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {participationSteps.map((step) => (
                <Card key={step.step} className="p-6 border-card-border">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-card-foreground mb-2">
                        {t(step.titleEs, step.titleEn)}
                      </h3>
                      <p className="text-muted-foreground">
                        {t(step.descEs, step.descEn)}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <Sparkles className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('Testimonios de Pacientes', 'Patient Testimonials')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t(
                  'Experiencias reales de quienes han participado en nuestros estudios',
                  'Real experiences from those who have participated in our studies'
                )}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 border-card-border">
                  <div className="mb-4">
                    <p className="text-muted-foreground italic">
                      "{t(testimonial.textEs, testimonial.textEn)}"
                    </p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-card-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.condition}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('Preguntas Frecuentes', 'Frequently Asked Questions')}
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6 border-card-border">
                  <h3 className="text-lg font-semibold text-card-foreground mb-3">
                    {t(faq.questionEs, faq.questionEn)}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(faq.answerEs, faq.answerEn)}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('¿Listo para Dar el Primer Paso?', 'Ready to Take the First Step?')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t(
                'Explore nuestros estudios disponibles o contáctenos para más información',
                'Explore our available studies or contact us for more information'
              )}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/pacientes/estudios-disponibles">
                  {t('Ver Estudios Disponibles', 'View Available Studies')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contacto">
                  {t('Contactar Coordinador', 'Contact Coordinator')}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
