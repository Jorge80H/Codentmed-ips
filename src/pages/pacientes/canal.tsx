import Head from 'next/head'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import {
  FileText,
  Calendar,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Download,
  User,
  Shield,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Bell,
  MapPin,
  Video
} from 'lucide-react'

export default function CanalPacientesPage() {
  const { t } = useLanguage()

  const quickAccess = [
    {
      icon: Calendar,
      titleEs: 'Agendar Cita',
      titleEn: 'Schedule Appointment',
      descEs: 'Solicite su cita médica o para evaluación de estudio clínico',
      descEn: 'Request your medical appointment or clinical study evaluation',
      link: '/contacto/agendar-cita',
      color: 'blue'
    },
    {
      icon: FileText,
      titleEs: 'Estudios Disponibles',
      titleEn: 'Available Studies',
      descEs: 'Vea los estudios clínicos actualmente reclutando participantes',
      descEn: 'View clinical studies currently recruiting participants',
      link: '/pacientes/estudios-disponibles',
      color: 'green'
    },
    {
      icon: Phone,
      titleEs: 'Contactar Coordinador',
      titleEn: 'Contact Coordinator',
      descEs: 'Comuníquese directamente con nuestro equipo de coordinación',
      descEn: 'Contact our coordination team directly',
      link: '/contacto',
      color: 'purple'
    },
    {
      icon: Download,
      titleEs: 'Documentos',
      titleEn: 'Documents',
      descEs: 'Descargue formularios, consentimientos y documentos informativos',
      descEn: 'Download forms, consents and informative documents',
      link: '#documentos',
      color: 'orange'
    }
  ]

  const contactMethods = [
    {
      icon: Phone,
      titleEs: 'Llamada Telefónica',
      titleEn: 'Phone Call',
      descEs: 'Lunes a Viernes: 7:00 AM - 5:00 PM',
      descEn: 'Monday to Friday: 7:00 AM - 5:00 PM',
      contact: '+57 1-7397010 Ext. 2609',
      action: 'tel:+573233885341'
    },
    {
      icon: MessageCircle,
      titleEs: 'WhatsApp',
      titleEn: 'WhatsApp',
      descEs: 'Respuesta en horario de oficina',
      descEn: 'Response during office hours',
      contact: '+57-3233885341',
      action: 'https://wa.me/573233885341'
    },
    {
      icon: Mail,
      titleEs: 'Correo Electrónico',
      titleEn: 'Email',
      descEs: 'Respuesta en 24-48 horas',
      descEn: 'Response within 24-48 hours',
      contact: 'codentmed@gmail.com',
      action: 'mailto:codentmed@gmail.com'
    },
    {
      icon: MapPin,
      titleEs: 'Visita Presencial',
      titleEn: 'In-Person Visit',
      descEs: 'Cra 7 Bis # 124-56/64 Consultorio 609',
      descEn: 'Cra 7 Bis # 124-56/64 Office 609',
      contact: 'Vitale Centro Médico',
      action: '#ubicacion'
    }
  ]

  const faqs = [
    {
      questionEs: '¿Cómo sé si califico para un estudio clínico?',
      questionEn: 'How do I know if I qualify for a clinical study?',
      answerEs: 'Cada estudio tiene criterios específicos de inclusión y exclusión. Puede revisar los estudios disponibles en nuestra página o contactarnos directamente para una evaluación preliminar.',
      answerEn: 'Each study has specific inclusion and exclusion criteria. You can review available studies on our page or contact us directly for a preliminary evaluation.'
    },
    {
      questionEs: '¿Cuánto tiempo toma el proceso de evaluación?',
      questionEn: 'How long does the evaluation process take?',
      answerEs: 'La evaluación inicial generalmente toma 1-2 semanas. Esto incluye revisión de historia clínica, exámenes de laboratorio y confirmación de elegibilidad.',
      answerEn: 'Initial evaluation generally takes 1-2 weeks. This includes medical history review, laboratory tests, and eligibility confirmation.'
    },
    {
      questionEs: '¿Puedo retirarme del estudio en cualquier momento?',
      questionEn: 'Can I withdraw from the study at any time?',
      answerEs: 'Sí, la participación es completamente voluntaria. Puede retirarse en cualquier momento sin dar explicaciones y sin afectar su atención médica habitual.',
      answerEn: 'Yes, participation is completely voluntary. You can withdraw at any time without explanation and without affecting your regular medical care.'
    },
    {
      questionEs: '¿Los estudios tienen algún costo?',
      questionEn: 'Do studies have any cost?',
      answerEs: 'No. Los estudios clínicos son gratuitos para los participantes. Además, se cubren todos los exámenes, medicamentos del estudio y en algunos casos compensación por tiempo y transporte.',
      answerEn: 'No. Clinical studies are free for participants. Additionally, all tests, study medications are covered, and in some cases there is compensation for time and transportation.'
    },
    {
      questionEs: '¿Cómo protegen mi información personal?',
      questionEn: 'How do you protect my personal information?',
      answerEs: 'Su información es tratada con estricta confidencialidad. Cumplimos con la Ley 1581 de 2012 de Protección de Datos y estándares internacionales. Sus datos se identifican con códigos, no con su nombre.',
      answerEn: 'Your information is treated with strict confidentiality. We comply with Law 1581 of 2012 on Data Protection and international standards. Your data is identified with codes, not your name.'
    }
  ]

  const documents = [
    {
      titleEs: 'Formato de Consentimiento Informado',
      titleEn: 'Informed Consent Form',
      descEs: 'Documento modelo de consentimiento informado',
      descEn: 'Model informed consent document',
      size: '250 KB'
    },
    {
      titleEs: 'Guía del Participante',
      titleEn: 'Participant Guide',
      descEs: 'Información completa sobre investigación clínica',
      descEn: 'Complete information about clinical research',
      size: '1.2 MB'
    },
    {
      titleEs: 'Derechos del Participante',
      titleEn: 'Participant Rights',
      descEs: 'Sus derechos como participante en estudios',
      descEn: 'Your rights as a study participant',
      size: '180 KB'
    },
    {
      titleEs: 'Formulario de Contacto',
      titleEn: 'Contact Form',
      descEs: 'Formulario para solicitar información',
      descEn: 'Form to request information',
      size: '120 KB'
    }
  ]

  const importantInfo = [
    {
      icon: Shield,
      titleEs: 'Confidencialidad Garantizada',
      titleEn: 'Guaranteed Confidentiality',
      descEs: 'Su información médica y personal es tratada con estricta confidencialidad según normativa vigente.'
    },
    {
      icon: CheckCircle2,
      titleEs: 'Sin Compromisos',
      titleEn: 'No Commitments',
      descEs: 'Evaluamos su elegibilidad sin ningún compromiso de participación. La decisión final siempre es suya.'
    },
    {
      icon: Clock,
      titleEs: 'Respuesta Rápida',
      titleEn: 'Quick Response',
      descEs: 'Nuestro equipo responde consultas en menos de 24 horas hábiles.'
    },
    {
      icon: User,
      titleEs: 'Atención Personalizada',
      titleEn: 'Personalized Care',
      descEs: 'Un coordinador dedicado le acompañará durante todo el proceso de evaluación y participación.'
    }
  ]

  const getColorClass = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900/50',
      green: 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900/50',
      purple: 'bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-900/50',
      orange: 'bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-900/50'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const getIconColorClass = (color: string) => {
    const colors = {
      blue: 'text-blue-600 dark:text-blue-400',
      green: 'text-green-600 dark:text-green-400',
      purple: 'text-purple-600 dark:text-purple-400',
      orange: 'text-orange-600 dark:text-orange-400'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <>
      <Head>
        <title>{t('Canal para Pacientes', 'Patient Portal')} - CODENTMED IPS</title>
        <meta
          name="description"
          content={t(
            'Portal de atención para pacientes de CODENTMED IPS. Agende citas, consulte estudios disponibles y acceda a información importante.',
            'Patient care portal for CODENTMED IPS. Schedule appointments, check available studies and access important information.'
          )}
        />
      </Head>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="container-max">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <User className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">
                  {t('Portal de Atención', 'Care Portal')}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {t('Canal para Pacientes', 'Patient Portal')}
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                {t(
                  'Acceda a todos nuestros servicios de atención médica y participación en investigación clínica en un solo lugar',
                  'Access all our medical care services and clinical research participation in one place'
                )}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contacto/agendar-cita" size="lg" variant="default">
                  <Calendar className="w-5 h-5 mr-2" />
                  {t('Agendar Cita', 'Schedule Appointment')}
                </Button>
                <Button href="/pacientes/estudios-disponibles" size="lg" variant="secondary">
                  <FileText className="w-5 h-5 mr-2" />
                  {t('Ver Estudios', 'View Studies')}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Access */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {t('Acceso Rápido', 'Quick Access')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('Seleccione lo que necesita', 'Select what you need')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickAccess.map((item, index) => (
                <Link key={index} href={item.link}>
                  <Card className={`p-6 border-2 ${getColorClass(item.color)} hover:shadow-lg transition-all cursor-pointer h-full`}>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-background mb-4">
                        <item.icon className={`w-8 h-8 ${getIconColorClass(item.color)}`} />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {t(item.titleEs, item.titleEn)}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t(item.descEs, item.descEn)}
                      </p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="bg-muted/30 section-padding">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {t('Formas de Contacto', 'Contact Methods')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('Elija la forma más conveniente para comunicarse con nosotros', 'Choose the most convenient way to contact us')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <method.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {t(method.titleEs, method.titleEn)}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {t(method.descEs, method.descEn)}
                  </p>
                  <p className="font-medium text-foreground mb-4">
                    {method.contact}
                  </p>
                  <Button
                    href={method.action}
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    {t('Contactar', 'Contact')}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {t('Información Importante', 'Important Information')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {importantInfo.map((info, index) => (
                <Card key={index} className="p-6 text-center">
                  <info.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {t(info.titleEs, info.titleEn)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(info.descEs, info.descEn)}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Documents Section */}
        <section id="documentos" className="bg-muted/30 section-padding">
          <div className="container-max">
            <div className="text-center mb-12">
              <Download className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {t('Documentos Descargables', 'Downloadable Documents')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('Acceda a formularios y documentos informativos', 'Access forms and informative documents')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {documents.map((doc, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <FileText className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">
                        {t(doc.titleEs, doc.titleEn)}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {t(doc.descEs, doc.descEn)}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{doc.size}</span>
                        <Button variant="ghost" size="sm" className="text-primary">
                          <Download className="w-4 h-4 mr-1" />
                          {t('Descargar', 'Download')}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {t('Preguntas Frecuentes', 'Frequently Asked Questions')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('Respuestas a las dudas más comunes', 'Answers to the most common questions')}
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    {t(faq.questionEs, faq.questionEn)}
                  </h3>
                  <p className="text-muted-foreground pl-7">
                    {t(faq.answerEs, faq.answerEn)}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground section-padding">
          <div className="container-max text-center">
            <div className="max-w-2xl mx-auto">
              <Bell className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                {t('¿Listo para dar el siguiente paso?', 'Ready to take the next step?')}
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                {t(
                  'Nuestro equipo está disponible para responder sus preguntas y ayudarle en el proceso',
                  'Our team is available to answer your questions and help you through the process'
                )}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contacto/agendar-cita" size="lg" variant="secondary">
                  <Calendar className="w-5 h-5 mr-2" />
                  {t('Agendar Cita Ahora', 'Schedule Appointment Now')}
                </Button>
                <Button href="/contacto" size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t('Hacer una Consulta', 'Make an Inquiry')}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">
                  {t('Derechos y Deberes', 'Rights & Responsibilities')}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {t('Conozca sus derechos como participante', 'Know your rights as a participant')}
                </p>
                <Button href="/pacientes/derechos-deberes" variant="secondary" size="sm" className="w-full">
                  {t('Ver Más', 'Learn More')}
                </Button>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">
                  {t('Información al Usuario', 'User Information')}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {t('Todo sobre investigación clínica', 'Everything about clinical research')}
                </p>
                <Button href="/pacientes/informacion" variant="secondary" size="sm" className="w-full">
                  {t('Ver Más', 'Learn More')}
                </Button>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">
                  {t('Recomendaciones', 'Recommendations')}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {t('Consejos para sus citas', 'Tips for your appointments')}
                </p>
                <Button href="/pacientes/recomendaciones" variant="secondary" size="sm" className="w-full">
                  {t('Ver Más', 'Learn More')}
                </Button>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
