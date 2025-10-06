import Head from 'next/head'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import {
  Shield,
  FileText,
  Lock,
  HandHeart,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

export default function DerechosDeberesPage() {
  const { t } = useLanguage()

  const participantRights = [
    {
      textEs: 'Recibir información completa y comprensible sobre el estudio antes de participar',
      textEn: 'Receive complete and understandable information about the study before participating'
    },
    {
      textEs: 'Tener tiempo suficiente para tomar la decisión de participar, sin presión alguna',
      textEn: 'Have sufficient time to make the decision to participate, without any pressure'
    },
    {
      textEs: 'Hacer todas las preguntas necesarias y recibir respuestas claras',
      textEn: 'Ask all necessary questions and receive clear answers'
    },
    {
      textEs: 'Decidir voluntariamente si desea o no participar en el estudio',
      textEn: 'Decide voluntarily whether or not to participate in the study'
    },
    {
      textEs: 'Retirarse del estudio en cualquier momento sin dar explicaciones y sin afectar su atención médica',
      textEn: 'Withdraw from the study at any time without explanation and without affecting your medical care'
    },
    {
      textEs: 'Recibir atención médica apropiada si experimenta algún evento adverso relacionado al estudio',
      textEn: 'Receive appropriate medical care if you experience any adverse event related to the study'
    },
    {
      textEs: 'Que su información personal y médica sea manejada con estricta confidencialidad',
      textEn: 'Have your personal and medical information handled with strict confidentiality'
    },
    {
      textEs: 'Conocer los resultados del estudio una vez finalizado (si así lo solicita)',
      textEn: 'Know the study results once completed (if requested)'
    },
    {
      textEs: 'Ser tratado con respeto y dignidad en todo momento',
      textEn: 'Be treated with respect and dignity at all times'
    },
    {
      textEs: 'Tener acceso a una segunda opinión médica si tiene dudas sobre su participación',
      textEn: 'Have access to a second medical opinion if you have doubts about your participation'
    }
  ]

  const participantResponsibilities = [
    {
      textEs: 'Proporcionar información médica veraz y completa sobre su historia clínica',
      textEn: 'Provide truthful and complete medical information about your medical history'
    },
    {
      textEs: 'Informar sobre todos los medicamentos que está tomando, incluyendo suplementos y hierbas',
      textEn: 'Report all medications you are taking, including supplements and herbs'
    },
    {
      textEs: 'Asistir a todas las visitas programadas del estudio en las fechas acordadas',
      textEn: 'Attend all scheduled study visits on agreed dates'
    },
    {
      textEs: 'Seguir las instrucciones del protocolo, incluyendo toma de medicación y restricciones',
      textEn: 'Follow protocol instructions, including medication intake and restrictions'
    },
    {
      textEs: 'Reportar inmediatamente cualquier síntoma o efecto secundario que experimente',
      textEn: 'Immediately report any symptoms or side effects you experience'
    },
    {
      textEs: 'No participar en otros estudios clínicos simultáneamente (salvo autorización explícita)',
      textEn: 'Not participate in other clinical studies simultaneously (unless explicitly authorized)'
    },
    {
      textEs: 'Informar al equipo si decide retirarse del estudio',
      textEn: 'Inform the team if you decide to withdraw from the study'
    },
    {
      textEs: 'Mantener la confidencialidad sobre aspectos específicos del estudio si así se solicita',
      textEn: 'Maintain confidentiality about specific aspects of the study if requested'
    },
    {
      textEs: 'Cumplir con ayunos, restricciones de alcohol/tabaco u otras indicaciones del protocolo',
      textEn: 'Comply with fasting, alcohol/tobacco restrictions, or other protocol requirements'
    },
    {
      textEs: 'Hacer preguntas cuando tenga dudas sobre cualquier aspecto del estudio',
      textEn: 'Ask questions when you have doubts about any aspect of the study'
    }
  ]

  const informedConsentComponents = [
    {
      titleEs: 'Propósito del Estudio',
      titleEn: 'Study Purpose',
      descriptionEs: 'Explicación clara de qué se está investigando y por qué',
      descriptionEn: 'Clear explanation of what is being researched and why'
    },
    {
      titleEs: 'Procedimientos',
      titleEn: 'Procedures',
      descriptionEs: 'Descripción detallada de qué sucederá durante el estudio, número de visitas, exámenes',
      descriptionEn: 'Detailed description of what will happen during the study, number of visits, tests'
    },
    {
      titleEs: 'Riesgos y Beneficios',
      titleEn: 'Risks and Benefits',
      descriptionEs: 'Información completa sobre posibles efectos secundarios y beneficios esperados',
      descriptionEn: 'Complete information about possible side effects and expected benefits'
    },
    {
      titleEs: 'Alternativas',
      titleEn: 'Alternatives',
      descriptionEs: 'Otras opciones de tratamiento disponibles fuera del estudio',
      descriptionEn: 'Other treatment options available outside the study'
    },
    {
      titleEs: 'Confidencialidad',
      titleEn: 'Confidentiality',
      descriptionEs: 'Cómo se protegerá su información personal y médica',
      descriptionEn: 'How your personal and medical information will be protected'
    },
    {
      titleEs: 'Compensación',
      titleEn: 'Compensation',
      descriptionEs: 'Información sobre reembolsos de gastos o compensación por tiempo',
      descriptionEn: 'Information about expense reimbursements or time compensation'
    },
    {
      titleEs: 'Contactos',
      titleEn: 'Contacts',
      descriptionEs: 'Números telefónicos para emergencias y dudas sobre el estudio',
      descriptionEn: 'Phone numbers for emergencies and questions about the study'
    },
    {
      titleEs: 'Voluntariedad',
      titleEn: 'Voluntariness',
      descriptionEs: 'Confirmación de que su participación es completamente voluntaria',
      descriptionEn: 'Confirmation that your participation is completely voluntary'
    }
  ]

  const consentProcess = [
    {
      textEs: 'Recibe el documento de consentimiento para leer con tiempo',
      textEn: 'Receive the consent document to read at your leisure'
    },
    {
      textEs: 'El médico revisa el documento con usted en detalle',
      textEn: 'The physician reviews the document with you in detail'
    },
    {
      textEs: 'Tiene oportunidad de hacer todas las preguntas necesarias',
      textEn: 'Have the opportunity to ask all necessary questions'
    },
    {
      textEs: 'Puede consultar con familiares antes de decidir',
      textEn: 'Can consult with family members before deciding'
    },
    {
      textEs: 'Solo firma cuando esté completamente seguro de su decisión',
      textEn: 'Only sign when completely sure of your decision'
    },
    {
      textEs: 'Recibe una copia del consentimiento firmado para sus archivos',
      textEn: 'Receive a signed copy of the consent for your records'
    }
  ]

  const privacyPoints = [
    {
      titleEs: 'Codificación',
      titleEn: 'Coding',
      descEs: 'Su información médica se identifica con un código numérico, no con su nombre. Solo el equipo de investigación local conoce la relación entre el código y su identidad.',
      descEn: 'Your medical information is identified with a numeric code, not your name. Only the local research team knows the relationship between the code and your identity.'
    },
    {
      titleEs: 'Acceso Limitado',
      titleEn: 'Limited Access',
      descEs: 'Solo personal autorizado del estudio tiene acceso a sus datos. Los patrocinadores y autoridades regulatorias pueden revisar datos para verificar calidad, pero siempre respetando confidencialidad.',
      descEn: 'Only authorized study personnel have access to your data. Sponsors and regulatory authorities can review data to verify quality, but always respecting confidentiality.'
    },
    {
      titleEs: 'Almacenamiento Seguro',
      titleEn: 'Secure Storage',
      descEs: 'Los documentos del estudio se guardan en archivos seguros con acceso restringido. Los datos electrónicos están protegidos con contraseñas y encriptación.',
      descEn: 'Study documents are kept in secure files with restricted access. Electronic data is protected with passwords and encryption.'
    },
    {
      titleEs: 'Cumplimiento Normativo',
      titleEn: 'Regulatory Compliance',
      descEs: 'Seguimos la Ley 1581 de 2012 de Protección de Datos Personales de Colombia y estándares internacionales como GDPR cuando aplique.',
      descEn: 'We follow Colombia\'s Law 1581 of 2012 on Personal Data Protection and international standards like GDPR when applicable.'
    },
    {
      titleEs: 'Publicaciones Científicas',
      titleEn: 'Scientific Publications',
      descEs: 'Si los resultados del estudio se publican, su identidad nunca será revelada. Los datos se presentan de forma agregada y anónima.',
      descEn: 'If study results are published, your identity will never be revealed. Data is presented in aggregate and anonymous form.'
    }
  ]

  return (
    <>
      <Head>
        <title>{t('Derechos y Deberes', 'Rights and Responsibilities')} - CODENTMED IPS</title>
        <meta
          name="description"
          content={t(
            'Sus derechos y responsabilidades como participante en investigación clínica.',
            'Your rights and responsibilities as a clinical research participant.'
          )}
        />
      </Head>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {t('Derechos y Deberes del Participante', 'Participant Rights and Responsibilities')}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                {t('Conozca sus derechos y responsabilidades en investigación clínica', 'Know your rights and responsibilities in clinical research')}
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl">
                {t(
                  'Como participante en un estudio clínico, usted tiene derechos fundamentales que garantizan su seguridad, dignidad y autonomía. Al mismo tiempo, asume ciertas responsabilidades que contribuyen al éxito del estudio y a la generación de conocimiento científico confiable.',
                  'As a participant in a clinical study, you have fundamental rights that guarantee your safety, dignity, and autonomy. At the same time, you assume certain responsibilities that contribute to the study\'s success and the generation of reliable scientific knowledge.'
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Participant Rights */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {t('Sus Derechos como Participante', 'Your Rights as a Participant')}
                </h2>
                <p className="text-xl text-muted-foreground">
                  {t(
                    'Estos derechos están protegidos por normativa nacional e internacional',
                    'These rights are protected by national and international regulations'
                  )}
                </p>
              </div>

              <Card className="p-8 border-card-border">
                <ul className="space-y-4">
                  {participantRights.map((right, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold mr-3 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground">{t(right.textEs, right.textEn)}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6 mt-6 border-card-border bg-blue-50 dark:bg-blue-950/20">
                <p className="text-muted-foreground">
                  <strong>{t('Importante:', 'Important:')}</strong>{' '}
                  {t(
                    'Si en algún momento siente que sus derechos no están siendo respetados, puede comunicarse con el investigador principal, el Comité de Ética, o las autoridades regulatorias (INVIMA).',
                    'If at any time you feel your rights are not being respected, you can contact the principal investigator, the Ethics Committee, or regulatory authorities (INVIMA).'
                  )}
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Participant Responsibilities */}
        <section className="bg-muted/30 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <HandHeart className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {t('Sus Responsabilidades como Participante', 'Your Responsibilities as a Participant')}
                </h2>
                <p className="text-xl text-muted-foreground">
                  {t(
                    'Contribuya al éxito del estudio y a su propia seguridad',
                    'Contribute to the study\'s success and your own safety'
                  )}
                </p>
              </div>

              <Card className="p-8 border-card-border">
                <ul className="space-y-4">
                  {participantResponsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{t(responsibility.textEs, responsibility.textEn)}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6 mt-6 border-card-border bg-yellow-50 dark:bg-yellow-950/20">
                <p className="text-muted-foreground">
                  <strong>{t('Recuerde:', 'Remember:')}</strong>{' '}
                  {t(
                    'El cumplimiento de estas responsabilidades es fundamental para su seguridad y para la calidad de los datos del estudio. Si tiene dificultades para cumplir con alguna, comuníqueselo al equipo de investigación.',
                    'Compliance with these responsibilities is essential for your safety and the quality of study data. If you have difficulty complying with any, communicate this to the research team.'
                  )}
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Informed Consent */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <FileText className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {t('Consentimiento Informado', 'Informed Consent')}
                </h2>
                <p className="text-xl text-muted-foreground">
                  {t('El pilar fundamental de la investigación ética', 'The fundamental pillar of ethical research')}
                </p>
              </div>

              <Card className="p-8 mb-8 border-card-border">
                <p className="text-muted-foreground mb-6">
                  {t(
                    'El consentimiento informado es un documento que le proporciona toda la información necesaria para tomar una decisión educada sobre su participación. No es un contrato que le obliga a permanecer en el estudio, sino una herramienta para asegurar que comprende completamente qué implica participar.',
                    'Informed consent is a document that provides you with all the information necessary to make an educated decision about your participation. It is not a contract that obligates you to remain in the study, but a tool to ensure you fully understand what participation entails.'
                  )}
                </p>

                <h3 className="font-semibold text-card-foreground mb-4">
                  {t('El consentimiento informado incluye:', 'Informed consent includes:')}
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  {informedConsentComponents.map((component, index) => (
                    <div key={index} className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-card-foreground mb-2">
                        {t(component.titleEs, component.titleEn)}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {t(component.descriptionEs, component.descriptionEn)}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 border-card-border bg-green-50 dark:bg-green-950/20">
                <h3 className="font-semibold text-card-foreground mb-3">
                  {t('Proceso de Consentimiento en CODENTMED IPS:', 'Consent Process at CODENTMED IPS:')}
                </h3>
                <ol className="space-y-2 text-muted-foreground">
                  {consentProcess.map((step, index) => (
                    <li key={index}>
                      {index + 1}. {t(step.textEs, step.textEn)}
                    </li>
                  ))}
                </ol>
              </Card>
            </div>
          </div>
        </section>

        {/* Privacy and Confidentiality */}
        <section className="bg-muted/30 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Lock className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {t('Privacidad y Confidencialidad', 'Privacy and Confidentiality')}
                </h2>
                <p className="text-xl text-muted-foreground">
                  {t('Protección absoluta de su información', 'Absolute protection of your information')}
                </p>
              </div>

              <Card className="p-8 border-card-border">
                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                  {t('Protección de sus Datos Personales', 'Protection of Your Personal Data')}
                </h3>

                <div className="space-y-4">
                  {privacyPoints.map((point, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-card-foreground mb-2">
                        {t(point.titleEs, point.titleEn)}:
                      </h4>
                      <p className="text-muted-foreground">
                        {t(point.descEs, point.descEn)}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('¿Tiene preguntas sobre sus derechos?', 'Questions about your rights?')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t(
                'Estamos disponibles para resolver todas sus dudas sobre participación en estudios',
                'We are available to answer all your questions about study participation'
              )}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contacto">
                  {t('Contactar Equipo', 'Contact Team')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pacientes/informacion">
                  {t('Más Información para Pacientes', 'More Patient Information')}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
