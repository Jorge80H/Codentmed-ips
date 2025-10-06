import Head from 'next/head'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import {
  HelpCircle,
  Shield,
  FileText,
  Users,
  CheckCircle,
  XCircle,
  ArrowRight
} from 'lucide-react'

export default function InformacionPacientesPage() {
  const { t } = useLanguage()

  const faqs = [
    {
      questionEs: '¿Qué es un estudio clínico?',
      questionEn: 'What is a clinical study?',
      answerEs: 'Un estudio clínico es una investigación científica que evalúa la seguridad y eficacia de medicamentos, dispositivos médicos o intervenciones terapéuticas en seres humanos. Se realiza siguiendo protocolos rigurosos y con supervisión ética constante.',
      answerEn: 'A clinical study is scientific research that evaluates the safety and efficacy of medications, medical devices, or therapeutic interventions in humans. It is conducted following rigorous protocols with constant ethical supervision.'
    },
    {
      questionEs: '¿Cuáles son las fases de un estudio clínico?',
      questionEn: 'What are the phases of a clinical study?',
      answerEs: 'Los estudios clínicos se dividen en Fase I (seguridad inicial), Fase II (eficacia preliminar), Fase III (confirmación de eficacia en poblaciones amplias) y Fase IV (seguimiento post-comercialización).',
      answerEn: 'Clinical studies are divided into Phase I (initial safety), Phase II (preliminary efficacy), Phase III (efficacy confirmation in large populations), and Phase IV (post-marketing surveillance).'
    },
    {
      questionEs: '¿Cuánto tiempo dura un estudio?',
      questionEn: 'How long does a study last?',
      answerEs: 'La duración varía según el tipo de estudio. Puede ir desde semanas (estudios de bioequivalencia) hasta varios años (estudios de enfermedades crónicas). Cada estudio especifica claramente su duración esperada.',
      answerEn: 'Duration varies by study type. It can range from weeks (bioequivalence studies) to several years (chronic disease studies). Each study clearly specifies its expected duration.'
    },
    {
      questionEs: '¿Puedo retirarme del estudio en cualquier momento?',
      questionEn: 'Can I withdraw from the study at any time?',
      answerEs: 'Sí, absolutamente. La participación en estudios clínicos es completamente voluntaria y puede retirar su consentimiento en cualquier momento sin ninguna consecuencia para su atención médica habitual.',
      answerEn: 'Yes, absolutely. Participation in clinical studies is completely voluntary and you can withdraw your consent at any time without any consequences for your regular medical care.'
    },
    {
      questionEs: '¿Qué pasa con mis datos personales?',
      questionEn: 'What happens to my personal data?',
      answerEs: 'Sus datos son protegidos con estricta confidencialidad conforme a leyes de protección de datos. Los investigadores solo acceden a información necesaria para el estudio, y sus datos se manejan de forma codificada.',
      answerEn: 'Your data is protected with strict confidentiality in compliance with data protection laws. Researchers only access information necessary for the study, and your data is handled in coded form.'
    },
    {
      questionEs: '¿Tendré acceso al medicamento después del estudio?',
      questionEn: 'Will I have access to the medication after the study?',
      answerEs: 'En muchos casos, los patrocinadores ofrecen programas de uso expandido o compasivo para proporcionar el medicamento investigado después de finalizar el estudio, especialmente si demostró beneficio. Esto se especifica en el consentimiento informado.',
      answerEn: 'In many cases, sponsors offer expanded or compassionate use programs to provide the investigational drug after study completion, especially if it demonstrated benefit. This is specified in the informed consent.'
    }
  ]

  const participationProcess = [
    {
      step: 1,
      titleEs: 'Información y Evaluación',
      titleEn: 'Information and Evaluation',
      descriptionEs: 'Reciba información detallada sobre el estudio y evalúe si cumple criterios de elegibilidad',
      descriptionEn: 'Receive detailed information about the study and evaluate if you meet eligibility criteria'
    },
    {
      step: 2,
      titleEs: 'Consentimiento Informado',
      titleEn: 'Informed Consent',
      descriptionEs: 'Revise y firme el consentimiento después de resolver todas sus dudas',
      descriptionEn: 'Review and sign consent after resolving all your questions'
    },
    {
      step: 3,
      titleEs: 'Exámenes de Tamizaje',
      titleEn: 'Screening Tests',
      descriptionEs: 'Realice exámenes médicos para confirmar que puede participar de forma segura',
      descriptionEn: 'Undergo medical tests to confirm you can participate safely'
    },
    {
      step: 4,
      titleEs: 'Inicio del Tratamiento',
      titleEn: 'Treatment Start',
      descriptionEs: 'Comience el tratamiento según el protocolo, con seguimiento cercano',
      descriptionEn: 'Begin treatment according to protocol with close monitoring'
    },
    {
      step: 5,
      titleEs: 'Visitas de Seguimiento',
      titleEn: 'Follow-up Visits',
      descriptionEs: 'Asista a visitas programadas para evaluación médica y exámenes',
      descriptionEn: 'Attend scheduled visits for medical evaluation and tests'
    },
    {
      step: 6,
      titleEs: 'Finalización',
      titleEn: 'Completion',
      descriptionEs: 'Complete el estudio y reciba evaluación final',
      descriptionEn: 'Complete the study and receive final evaluation'
    }
  ]

  const benefits = [
    {
      textEs: 'Acceso a nuevos tratamientos: Medicamentos innovadores no disponibles comercialmente',
      textEn: 'Access to new treatments: Innovative medications not commercially available'
    },
    {
      textEs: 'Atención médica especializada: Seguimiento cercano por médicos expertos',
      textEn: 'Specialized medical care: Close monitoring by expert physicians'
    },
    {
      textEs: 'Exámenes sin costo: Laboratorios y estudios relacionados al protocolo',
      textEn: 'Free tests: Laboratory and studies related to the protocol'
    },
    {
      textEs: 'Medicamento sin costo: Tratamiento investigado proporcionado gratuitamente',
      textEn: 'Free medication: Investigational treatment provided at no cost'
    },
    {
      textEs: 'Contribución a la ciencia: Ayudar a futuras generaciones de pacientes',
      textEn: 'Contribution to science: Helping future generations of patients'
    },
    {
      textEs: 'Compensación por tiempo: Reembolso de gastos de transporte en algunos estudios',
      textEn: 'Time compensation: Reimbursement of transportation costs in some studies'
    }
  ]

  const risks = [
    {
      textEs: 'Efectos secundarios: Posibilidad de reacciones adversas al tratamiento',
      textEn: 'Side effects: Possibility of adverse reactions to treatment'
    },
    {
      textEs: 'Incertidumbre: El tratamiento puede no ser efectivo para usted',
      textEn: 'Uncertainty: The treatment may not be effective for you'
    },
    {
      textEs: 'Compromiso de tiempo: Visitas frecuentes al centro de investigación',
      textEn: 'Time commitment: Frequent visits to the research center'
    },
    {
      textEs: 'Placebo: En algunos estudios, puede recibir placebo (no tratamiento activo)',
      textEn: 'Placebo: In some studies, you may receive placebo (no active treatment)'
    },
    {
      textEs: 'Procedimientos adicionales: Exámenes o muestras que no serían necesarios en atención regular',
      textEn: 'Additional procedures: Tests or samples not necessary in regular care'
    },
    {
      textEs: 'Restricciones: Posibles limitaciones en medicamentos o actividades durante el estudio',
      textEn: 'Restrictions: Possible limitations on medications or activities during the study'
    }
  ]

  const keyPoints = [
    {
      icon: Shield,
      titleEs: 'Seguridad',
      titleEn: 'Safety',
      descEs: 'Supervisión médica constante y protocolos de seguridad rigurosos',
      descEn: 'Constant medical supervision and rigorous safety protocols'
    },
    {
      icon: FileText,
      titleEs: 'Ética',
      titleEn: 'Ethics',
      descEs: 'Aprobación por Comité de Ética y cumplimiento normativo total',
      descEn: 'Ethics Committee approval and full regulatory compliance'
    },
    {
      icon: Users,
      titleEs: 'Voluntario',
      titleEn: 'Voluntary',
      descEs: 'Participación completamente voluntaria, sin ninguna presión',
      descEn: 'Completely voluntary participation, without any pressure'
    }
  ]

  return (
    <>
      <Head>
        <title>{t('Información para Pacientes', 'Patient Information')} - CODENTMED IPS</title>
        <meta
          name="description"
          content={t(
            'Todo lo que necesitas saber sobre participación en estudios clínicos en CODENTMED IPS.',
            'Everything you need to know about participating in clinical studies at CODENTMED IPS.'
          )}
        />
      </Head>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {t('Información para Pacientes', 'Patient Information')}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                {t('Entendiendo la investigación clínica y su rol como participante', 'Understanding clinical research and your role as a participant')}
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl">
                {t(
                  'Participar en un estudio clínico es una decisión importante que puede beneficiar tanto su salud como el avance de la medicina. Aquí encontrará información clara y completa para tomar una decisión informada.',
                  'Participating in a clinical study is an important decision that can benefit both your health and the advancement of medicine. Here you will find clear and complete information to make an informed decision.'
                )}
              </p>
            </div>
          </div>
        </section>

        {/* What is a Clinical Study */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <HelpCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {t('¿Qué es un Estudio Clínico?', 'What is a Clinical Study?')}
                </h2>
              </div>

              <Card className="p-8 mb-8 border-card-border">
                <p className="text-muted-foreground mb-4">
                  {t(
                    'Un estudio clínico (también llamado ensayo clínico o investigación clínica) es un tipo de investigación científica que evalúa medicamentos, dispositivos médicos, procedimientos o intervenciones terapéuticas en personas voluntarias.',
                    'A clinical study (also called clinical trial or clinical research) is a type of scientific research that evaluates medications, medical devices, procedures, or therapeutic interventions in volunteer participants.'
                  )}
                </p>
                <p className="text-muted-foreground mb-4">
                  {t(
                    'Estos estudios son esenciales para descubrir nuevos tratamientos y mejorar las opciones disponibles para diversas enfermedades. Cada medicamento que existe en el mercado pasó por estudios clínicos antes de ser aprobado.',
                    'These studies are essential to discover new treatments and improve available options for various diseases. Every medication on the market went through clinical studies before being approved.'
                  )}
                </p>
                <p className="text-muted-foreground">
                  {t(
                    'En CODENTMED IPS, conducimos estudios principalmente en áreas de reumatología, medicina interna, y odontología, con enfoque en enfermedades autoinmunes y crónicas.',
                    'At CODENTMED IPS, we conduct studies primarily in areas of rheumatology, internal medicine, and dentistry, with a focus on autoimmune and chronic diseases.'
                  )}
                </p>
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                {keyPoints.map((point, index) => {
                  const IconComponent = point.icon
                  return (
                    <Card key={index} className="p-6 text-center border-card-border">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-card-foreground mb-2">
                        {t(point.titleEs, point.titleEn)}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {t(point.descEs, point.descEn)}
                      </p>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits and Risks */}
        <section className="bg-muted/30 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                {t('Beneficios y Riesgos de Participar', 'Benefits and Risks of Participating')}
              </h2>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Benefits */}
                <Card className="p-6 border-card-border bg-green-50 dark:bg-green-950/20">
                  <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                    {t('Beneficios Potenciales', 'Potential Benefits')}
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-600 mr-2 mt-1">•</span>
                        <span>{t(benefit.textEs, benefit.textEn)}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                {/* Risks */}
                <Card className="p-6 border-card-border bg-yellow-50 dark:bg-yellow-950/20">
                  <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                    <XCircle className="w-6 h-6 text-yellow-600 mr-2" />
                    {t('Riesgos a Considerar', 'Risks to Consider')}
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    {risks.map((risk, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-yellow-600 mr-2 mt-1">•</span>
                        <span>{t(risk.textEs, risk.textEn)}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              <Card className="p-6 mt-8 border-card-border bg-blue-50 dark:bg-blue-950/20">
                <p className="text-muted-foreground">
                  <strong>{t('Importante:', 'Important:')}</strong>{' '}
                  {t(
                    'Antes de participar, recibirá información detallada sobre todos los beneficios y riesgos específicos del estudio en cuestión. El equipo médico responderá todas sus preguntas y se asegurará de que comprenda completamente qué implica su participación.',
                    'Before participating, you will receive detailed information about all specific benefits and risks of the study in question. The medical team will answer all your questions and ensure you fully understand what your participation entails.'
                  )}
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Participation Process */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                {t('Proceso de Participación', 'Participation Process')}
              </h2>

              <div className="space-y-6">
                {participationProcess.map((item) => (
                  <Card key={item.step} className="p-6 border-card-border">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mr-4">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-card-foreground mb-2">
                          {t(item.titleEs, item.titleEn)}
                        </h3>
                        <p className="text-muted-foreground">
                          {t(item.descriptionEs, item.descriptionEn)}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-muted/30 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                {t('Preguntas Frecuentes', 'Frequently Asked Questions')}
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="p-6 border-card-border">
                    <h3 className="text-lg font-semibold text-card-foreground mb-2 flex items-start">
                      <HelpCircle className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      {t(faq.questionEs, faq.questionEn)}
                    </h3>
                    <p className="text-muted-foreground ml-8">
                      {t(faq.answerEs, faq.answerEn)}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('¿Listo para participar en un estudio?', 'Ready to participate in a study?')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t(
                'Explore nuestros estudios activos o contáctenos para más información',
                'Explore our active studies or contact us for more information'
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
