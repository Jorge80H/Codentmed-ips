import Head from 'next/head'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import {
  ClipboardList,
  Clock,
  FileText,
  CheckCircle,
  ArrowRight,
  AlertCircle
} from 'lucide-react'

export default function RecomendacionesPage() {
  const { t } = useLanguage()

  const beforeVisit = [
    {
      titleEs: 'Prepare su Historia Clínica',
      titleEn: 'Prepare Your Medical History',
      items: [
        {
          textEs: 'Lista de todos los medicamentos que toma actualmente (incluyendo dosis)',
          textEn: 'List of all medications you currently take (including doses)'
        },
        {
          textEs: 'Suplementos vitamínicos, hierbas o productos naturales',
          textEn: 'Vitamin supplements, herbs, or natural products'
        },
        {
          textEs: 'Alergias a medicamentos o alimentos',
          textEn: 'Medication or food allergies'
        },
        {
          textEs: 'Enfermedades previas y cirugías',
          textEn: 'Previous illnesses and surgeries'
        },
        {
          textEs: 'Historia familiar de enfermedades relevantes',
          textEn: 'Family history of relevant diseases'
        }
      ]
    },
    {
      titleEs: 'Documentos a Traer',
      titleEn: 'Documents to Bring',
      items: [
        {
          textEs: 'Documento de identidad vigente (cédula o pasaporte)',
          textEn: 'Valid identification document (ID card or passport)'
        },
        {
          textEs: 'Carné de afiliación a EPS (si aplica)',
          textEn: 'Health insurance card (if applicable)'
        },
        {
          textEs: 'Resultados de exámenes médicos recientes',
          textEn: 'Recent medical test results'
        },
        {
          textEs: 'Fórmulas médicas actuales',
          textEn: 'Current medical prescriptions'
        },
        {
          textEs: 'Reportes de hospitalizaciones o procedimientos recientes',
          textEn: 'Reports of recent hospitalizations or procedures'
        }
      ]
    },
    {
      titleEs: 'Preparación Personal',
      titleEn: 'Personal Preparation',
      items: [
        {
          textEs: 'Desayune ligero (salvo indicación de ayuno)',
          textEn: 'Have a light breakfast (unless fasting is indicated)'
        },
        {
          textEs: 'Tome sus medicamentos habituales como siempre',
          textEn: 'Take your usual medications as always'
        },
        {
          textEs: 'Vista ropa cómoda y de fácil acceso para examen físico',
          textEn: 'Wear comfortable, easily accessible clothing for physical examination'
        },
        {
          textEs: 'Traiga acompañante si lo desea (especialmente para la primera visita)',
          textEn: 'Bring a companion if desired (especially for first visit)'
        },
        {
          textEs: 'Prepare lista de preguntas que quiera hacer al médico',
          textEn: 'Prepare a list of questions for the physician'
        }
      ]
    }
  ]

  const requiredDocuments = [
    {
      documentEs: 'Documento de Identidad',
      documentEn: 'Identification Document',
      descriptionEs: 'Cédula de ciudadanía o pasaporte vigente',
      descriptionEn: 'Valid ID card or passport',
      required: true
    },
    {
      documentEs: 'Afiliación a Sistema de Salud',
      documentEn: 'Health Insurance Affiliation',
      descriptionEs: 'Carné de EPS o certificado de afiliación',
      descriptionEn: 'Health insurance card or affiliation certificate',
      required: false
    },
    {
      documentEs: 'Exámenes de Laboratorio',
      documentEn: 'Laboratory Tests',
      descriptionEs: 'Resultados recientes (si los tiene)',
      descriptionEn: 'Recent results (if available)',
      required: false
    },
    {
      documentEs: 'Historia Clínica Previa',
      documentEn: 'Previous Medical History',
      descriptionEs: 'Reportes médicos, imágenes diagnósticas',
      descriptionEn: 'Medical reports, diagnostic images',
      required: false
    },
    {
      documentEs: 'Lista de Medicamentos',
      documentEn: 'Medication List',
      descriptionEs: 'Todos los medicamentos actuales con dosis',
      descriptionEn: 'All current medications with doses',
      required: true
    }
  ]

  const duringVisit = [
    {
      textEs: 'Sea honesto y completo al responder las preguntas del médico',
      textEn: 'Be honest and complete when answering physician questions'
    },
    {
      textEs: 'No oculte información médica relevante, aunque le parezca insignificante',
      textEn: 'Do not hide relevant medical information, even if it seems insignificant'
    },
    {
      textEs: 'Haga todas las preguntas que tenga sobre el estudio',
      textEn: 'Ask all questions you have about the study'
    },
    {
      textEs: 'Pida aclaraciones si algo no le queda claro en el consentimiento informado',
      textEn: 'Ask for clarification if anything in the informed consent is unclear'
    },
    {
      textEs: 'No se sienta presionado a tomar una decisión inmediata',
      textEn: 'Do not feel pressured to make an immediate decision'
    },
    {
      textEs: 'Informe sobre cualquier síntoma o malestar que esté experimentando',
      textEn: 'Report any symptoms or discomfort you are experiencing'
    },
    {
      textEs: 'Tome notas si le ayuda a recordar información importante',
      textEn: 'Take notes if it helps you remember important information'
    },
    {
      textEs: 'Solicite que le expliquen los procedimientos que se realizarán',
      textEn: 'Request explanations of procedures to be performed'
    },
    {
      textEs: 'Confirme las fechas de próximas visitas y anótelas',
      textEn: 'Confirm dates of upcoming visits and write them down'
    },
    {
      textEs: 'Pregunte cómo contactar al equipo en caso de dudas o emergencias',
      textEn: 'Ask how to contact the team in case of questions or emergencies'
    }
  ]

  const timeCommitment = [
    {
      phaseEs: 'Visita de Tamizaje',
      phaseEn: 'Screening Visit',
      durationEs: '2-3 horas',
      durationEn: '2-3 hours',
      activitiesEs: 'Entrevista médica, examen físico, consentimiento informado, exámenes de laboratorio',
      activitiesEn: 'Medical interview, physical examination, informed consent, laboratory tests'
    },
    {
      phaseEs: 'Visitas Regulares',
      phaseEn: 'Regular Visits',
      durationEs: '1-2 horas',
      durationEn: '1-2 hours',
      activitiesEs: 'Evaluación médica, toma de signos vitales, cuestionarios, dispensación de medicamento',
      activitiesEn: 'Medical evaluation, vital signs, questionnaires, medication dispensation'
    },
    {
      phaseEs: 'Visitas con Procedimientos',
      phaseEn: 'Visits with Procedures',
      durationEs: '2-4 horas',
      durationEn: '2-4 hours',
      activitiesEs: 'Visitas que incluyen exámenes adicionales, biopsias, o múltiples evaluaciones',
      activitiesEn: 'Visits including additional tests, biopsies, or multiple evaluations'
    },
    {
      phaseEs: 'Visita Final',
      phaseEn: 'Final Visit',
      durationEs: '2-3 horas',
      durationEn: '2-3 hours',
      activitiesEs: 'Evaluación completa, exámenes finales, cierre de estudio',
      activitiesEn: 'Complete evaluation, final tests, study closure'
    }
  ]

  const firstVisitSteps = [
    {
      titleEs: 'Bienvenida y Registro',
      titleEn: 'Welcome and Registration',
      descEs: 'Será recibido por el personal administrativo quien verificará sus datos y le indicará dónde esperar.',
      descEn: 'You will be welcomed by administrative staff who will verify your information and direct you where to wait.',
      timeEs: '~10 minutos',
      timeEn: '~10 minutes'
    },
    {
      titleEs: 'Entrevista con Coordinador',
      titleEn: 'Coordinator Interview',
      descEs: 'Un coordinador de investigación le explicará el estudio, revisará criterios de elegibilidad y responderá preguntas iniciales.',
      descEn: 'A research coordinator will explain the study, review eligibility criteria, and answer initial questions.',
      timeEs: '~30 minutos',
      timeEn: '~30 minutes'
    },
    {
      titleEs: 'Revisión de Consentimiento',
      titleEn: 'Consent Review',
      descEs: 'El médico investigador revisará el consentimiento informado en detalle con usted, asegurando que comprenda todos los aspectos.',
      descEn: 'The investigator will review informed consent in detail with you, ensuring you understand all aspects.',
      timeEs: '~45 minutos',
      timeEn: '~45 minutes'
    },
    {
      titleEs: 'Evaluación Médica',
      titleEn: 'Medical Evaluation',
      descEs: 'Examen físico completo, revisión de historia clínica, signos vitales y evaluación de condiciones específicas del estudio.',
      descEn: 'Complete physical examination, medical history review, vital signs, and study-specific condition evaluation.',
      timeEs: '~45 minutos',
      timeEn: '~45 minutes'
    },
    {
      titleEs: 'Exámenes de Laboratorio',
      titleEn: 'Laboratory Tests',
      descEs: 'Toma de muestras de sangre, orina u otros exámenes requeridos por el protocolo del estudio.',
      descEn: 'Blood, urine, or other sample collection required by study protocol.',
      timeEs: '~30 minutos',
      timeEn: '~30 minutes'
    },
    {
      titleEs: 'Programación de Seguimiento',
      titleEn: 'Follow-up Scheduling',
      descEs: 'El coordinador agendará sus próximas visitas y le entregará material informativo del estudio.',
      descEn: 'The coordinator will schedule your next visits and provide study information materials.',
      timeEs: '~15 minutos',
      timeEn: '~15 minutes'
    }
  ]

  return (
    <>
      <Head>
        <title>{t('Recomendaciones para su Cita', 'Appointment Recommendations')} - CODENTMED IPS</title>
        <meta
          name="description"
          content={t(
            'Guía completa para prepararse para su visita de estudio clínico en CODENTMED IPS.',
            'Complete guide to prepare for your clinical study visit at CODENTMED IPS.'
          )}
        />
      </Head>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {t('Recomendaciones para su Cita', 'Appointment Recommendations')}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                {t('Prepárese adecuadamente para su visita de estudio clínico', 'Prepare adequately for your clinical study visit')}
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl">
                {t(
                  'Una buena preparación para su cita asegura que aproveche al máximo el tiempo con el equipo médico y que todos los procedimientos del estudio se realicen de manera eficiente y segura.',
                  'Good preparation for your appointment ensures you make the most of your time with the medical team and that all study procedures are conducted efficiently and safely.'
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Before the Visit */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <ClipboardList className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {t('Antes de la Visita', 'Before the Visit')}
                </h2>
                <p className="text-xl text-muted-foreground">
                  {t('Qué preparar antes de su cita', 'What to prepare before your appointment')}
                </p>
              </div>

              <div className="space-y-6">
                {beforeVisit.map((section, index) => (
                  <Card key={index} className="p-6 border-card-border">
                    <h3 className="text-xl font-semibold text-card-foreground mb-4">
                      {t(section.titleEs, section.titleEn)}
                    </h3>
                    <ul className="space-y-2">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-muted-foreground">
                          <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>{t(item.textEs, item.textEn)}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Required Documents */}
        <section className="bg-muted/30 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <FileText className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {t('Documentos Requeridos', 'Required Documents')}
                </h2>
              </div>

              <Card className="p-8 border-card-border">
                <div className="space-y-4">
                  {requiredDocuments.map((doc, index) => (
                    <div key={index} className="flex items-start justify-between border-b border-border pb-4 last:border-0 last:pb-0">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-card-foreground">
                            {t(doc.documentEs, doc.documentEn)}
                          </h3>
                          {doc.required && (
                            <span className="text-xs bg-red-100 dark:bg-red-950/30 text-red-700 dark:text-red-400 px-2 py-0.5 rounded">
                              {t('Obligatorio', 'Required')}
                            </span>
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {t(doc.descriptionEs, doc.descriptionEn)}
                        </p>
                      </div>
                      <CheckCircle className={`w-6 h-6 flex-shrink-0 ml-4 ${doc.required ? 'text-red-500' : 'text-muted-foreground'}`} />
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 mt-6 border-card-border bg-blue-50 dark:bg-blue-950/20">
                <p className="text-muted-foreground">
                  <strong>{t('Importante:', 'Important:')}</strong>{' '}
                  {t(
                    'Si no tiene algún documento opcional, no se preocupe. El equipo le indicará si es necesario conseguirlo para visitas posteriores.',
                    'If you don\'t have any optional document, don\'t worry. The team will let you know if you need to obtain it for future visits.'
                  )}
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* During the Visit */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <AlertCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {t('Durante la Visita', 'During the Visit')}
                </h2>
                <p className="text-xl text-muted-foreground">
                  {t('Consejos para aprovechar al máximo su cita', 'Tips to make the most of your appointment')}
                </p>
              </div>

              <Card className="p-8 border-card-border">
                <ul className="space-y-3">
                  {duringVisit.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold mr-3 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground">{t(tip.textEs, tip.textEn)}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Time Commitment */}
        <section className="bg-muted/30 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Clock className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {t('¿Cuánto Tiempo Toma una Visita?', 'How Long Does a Visit Take?')}
                </h2>
                <p className="text-xl text-muted-foreground">
                  {t('Duración estimada según tipo de visita', 'Estimated duration by visit type')}
                </p>
              </div>

              <div className="space-y-4">
                {timeCommitment.map((visit, index) => (
                  <Card key={index} className="p-6 border-card-border">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-card-foreground">
                        {t(visit.phaseEs, visit.phaseEn)}
                      </h3>
                      <span className="text-primary font-bold text-lg">
                        {t(visit.durationEs, visit.durationEn)}
                      </span>
                    </div>
                    <p className="text-muted-foreground">
                      {t(visit.activitiesEs, visit.activitiesEn)}
                    </p>
                  </Card>
                ))}
              </div>

              <Card className="p-6 mt-6 border-card-border bg-yellow-50 dark:bg-yellow-950/20">
                <p className="text-muted-foreground">
                  <strong>{t('Planificación:', 'Planning:')}</strong>{' '}
                  {t(
                    'Reserve tiempo adicional para su primera visita. Es importante que no se sienta apurado y pueda hacer todas las preguntas necesarias. Para visitas regulares, generalmente puede planear regresar a sus actividades el mismo día.',
                    'Reserve extra time for your first visit. It\'s important not to feel rushed and to be able to ask all necessary questions. For regular visits, you can generally plan to return to your activities the same day.'
                  )}
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                {t('Qué Esperar en su Primera Visita', 'What to Expect on Your First Visit')}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {firstVisitSteps.map((step, index) => (
                  <Card key={index} className="p-6 border-card-border">
                    <h3 className="text-lg font-semibold text-card-foreground mb-3">
                      {t(step.titleEs, step.titleEn)}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {t(step.descEs, step.descEn)}
                    </p>
                    <span className="text-primary text-sm font-medium">
                      {t(step.timeEs, step.timeEn)}
                    </span>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Location and Parking */}
        <section className="bg-muted/30 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                {t('Ubicación y Parqueadero', 'Location and Parking')}
              </h2>

              <Card className="p-8 border-card-border">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-3">
                      {t('Cómo Llegar', 'How to Get Here')}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {t(
                        'Nuestras instalaciones están ubicadas en Bogotá, con fácil acceso desde TransMilenio y principales vías de la ciudad.',
                        'Our facilities are located in Bogotá, with easy access from TransMilenio and main city roads.'
                      )}
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/contacto">
                        {t('Ver Mapa y Direcciones', 'View Map and Directions')}
                      </Link>
                    </Button>
                  </div>

                  <div>
                    <h3 className="font-semibold text-card-foreground mb-3">
                      {t('Parqueadero', 'Parking')}
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      {t(
                        'Contamos con parqueadero disponible para pacientes. Informe al llegar que asiste a cita de estudio clínico para validación.',
                        'We have parking available for patients. Upon arrival, inform that you are attending a clinical study appointment for validation.'
                      )}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      * {t('Sujeto a disponibilidad', 'Subject to availability')}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('¿Listo para su Cita?', 'Ready for Your Appointment?')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t(
                'Si tiene alguna duda sobre cómo prepararse, no dude en contactarnos',
                'If you have any questions about how to prepare, don\'t hesitate to contact us'
              )}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contacto">
                  {t('Contactar Coordinador', 'Contact Coordinator')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pacientes/estudios-disponibles">
                  {t('Ver Estudios Disponibles', 'View Available Studies')}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
