'use client'

import { useState } from 'react'
import Head from 'next/head'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { db } from '@/lib/instantdb'
import { useLanguage } from '@/contexts/LanguageContext'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  Send,
  CheckCircle2,
  AlertCircle
} from 'lucide-react'

export default function ContactoPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactReason: 'general'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Submit to InstantDB
      await db.transact([
        db.tx.contactSubmissions[crypto.randomUUID()]().update({
          ...formData,
          submittedAt: new Date().toISOString(),
          status: 'new'
        })
      ])

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        contactReason: 'general'
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactReasons = [
    { value: 'general', es: 'Consulta General', en: 'General Inquiry' },
    { value: 'clinical_study', es: 'Información sobre Estudios Clínicos', en: 'Clinical Studies Information' },
    { value: 'private_consultation', es: 'Consulta Médica Privada', en: 'Private Medical Consultation' },
    { value: 'sponsor', es: 'Servicios para Patrocinadores', en: 'Services for Sponsors' },
    { value: 'collaboration', es: 'Colaboración Académica', en: 'Academic Collaboration' },
    { value: 'other', es: 'Otro', en: 'Other' }
  ]

  return (
    <>
      <Head>
        <title>{t('Contacto', 'Contact')} - CODENTMED IPS</title>
        <meta name="description" content={t(
          'Contáctese con CODENTMED IPS. Estamos disponibles para responder sus consultas.',
          'Contact CODENTMED IPS. We are available to answer your questions.'
        )} />
      </Head>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="container-max">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">
                  {t('Estamos Aquí Para Ayudar', 'We Are Here to Help')}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {t('Contáctenos', 'Contact Us')}
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground">
                {t(
                  'Nuestro equipo está disponible para responder sus preguntas sobre estudios clínicos, consulta médica privada, servicios de investigación y cualquier otra inquietud.',
                  'Our team is available to answer your questions about clinical studies, private medical consultations, research services and any other concerns.'
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-6">
                    {t('Información de Contacto', 'Contact Information')}
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {t('Ubicación', 'Location')}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          Cra 7 Bis # 124-56/64 Consultorio 609<br />
                          Vitale Centro Médico<br />
                          Bogotá, Colombia
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {t('Teléfono', 'Phone')}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          +57 1-7397010 Ext. 2609<br />
                          +57-3233885341
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Email</h4>
                        <p className="text-muted-foreground text-sm">
                          codentmed@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {t('Horario', 'Hours')}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {t('Lunes a Viernes:', 'Monday to Friday:')} 7:00 AM - 5:00 PM<br />
                          {t('Sábados:', 'Saturdays:')} 8:00 AM - 12:00 PM
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Globe className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {t('Redes Sociales', 'Social Media')}
                        </h4>
                        <div className="space-y-1">
                          <a href="#" className="text-primary hover:text-primary/80 text-sm block">
                            LinkedIn
                          </a>
                          <a href="#" className="text-primary hover:text-primary/80 text-sm block">
                            Instagram
                          </a>
                          <a href="#" className="text-primary hover:text-primary/80 text-sm block">
                            Facebook
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-primary/5 border-primary/20">
                  <h3 className="font-semibold text-foreground mb-3">
                    {t('¿Necesita Agendar una Cita?', 'Need to Schedule an Appointment?')}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {t(
                      'Si desea agendar una cita médica o una cita para evaluación de estudio clínico, use nuestro sistema de agendamiento.',
                      'If you wish to schedule a medical appointment or an appointment for clinical study evaluation, use our scheduling system.'
                    )}
                  </p>
                  <Button href="/contacto/agendar-cita" variant="default" size="sm" className="w-full">
                    {t('Agendar Cita', 'Schedule Appointment')}
                  </Button>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    {t('Envíenos un Mensaje', 'Send Us a Message')}
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Contact Reason */}
                    <div>
                      <label htmlFor="contactReason" className="block text-sm font-medium text-foreground mb-2">
                        {t('Motivo de Contacto', 'Contact Reason')}
                      </label>
                      <select
                        id="contactReason"
                        name="contactReason"
                        value={formData.contactReason}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                        required
                      >
                        {contactReasons.map(reason => (
                          <option key={reason.value} value={reason.value}>
                            {t(reason.es, reason.en)}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        {t('Nombre Completo', 'Full Name')} *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t('Juan Pérez', 'John Doe')}
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        {t('Correo Electrónico', 'Email')} *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t('juan.perez@email.com', 'john.doe@email.com')}
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        {t('Teléfono', 'Phone')} *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+57 310 123 4567"
                        required
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        {t('Asunto', 'Subject')} *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder={t('Ej: Información sobre estudios de reumatología', 'E.g.: Information about rheumatology studies')}
                        required
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        {t('Mensaje', 'Message')} *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t('Describa su consulta o solicitud...', 'Describe your inquiry or request...')}
                        rows={6}
                        required
                      />
                    </div>

                    {/* Submit Status */}
                    {submitStatus === 'success' && (
                      <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900/50 rounded-lg p-4">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                          <p className="text-green-800 dark:text-green-200">
                            {t(
                              '¡Mensaje enviado exitosamente! Nos pondremos en contacto con usted pronto.',
                              'Message sent successfully! We will contact you soon.'
                            )}
                          </p>
                        </div>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 rounded-lg p-4">
                        <div className="flex items-center gap-2">
                          <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                          <p className="text-red-800 dark:text-red-200">
                            {t(
                              'Hubo un error al enviar su mensaje. Por favor, inténtelo nuevamente o contáctenos directamente por teléfono.',
                              'There was an error sending your message. Please try again or contact us directly by phone.'
                            )}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Submit Button */}
                    <div>
                      <Button
                        type="submit"
                        variant="default"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        <Send className="w-5 h-5 mr-2" />
                        {isSubmitting ? t('Enviando...', 'Sending...') : t('Enviar Mensaje', 'Send Message')}
                      </Button>
                    </div>

                    <p className="text-sm text-muted-foreground text-center">
                      * {t('Campos obligatorios', 'Required fields')}
                    </p>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="section-padding bg-muted/30">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                {t('Cómo Llegar', 'How to Get Here')}
              </h2>

              <Card className="p-0 overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.6088524891436!2d-74.05473128561748!3d4.674855743029156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b0d0d0d0d0d%3A0x0!2zNMKwNDAnMjkuNSJOIDc0wrAwMycwOS4wIlc!5e0!3m2!1ses!2sco!4v1234567890123"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={t('Ubicación CODENTMED IPS', 'CODENTMED IPS Location')}
                  />
                </div>
              </Card>

              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">
                    {t('Transporte Público', 'Public Transportation')}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    <strong>TransMilenio:</strong> {t('Estación Calle 85', 'Calle 85 Station')}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    <strong>{t('Rutas', 'Routes')} SITP:</strong> A08, T12, T13
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">
                    {t('Parqueadero', 'Parking')}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t(
                      'Parqueadero disponible para pacientes en el edificio. Informe en recepción que asiste a cita en CODENTMED IPS para validación.',
                      'Parking available for patients in the building. Inform at reception that you are attending an appointment at CODENTMED IPS for validation.'
                    )}
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="section-padding">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                {t('Enlaces Rápidos', 'Quick Links')}
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-foreground mb-2">
                    {t('Estudios Activos', 'Active Studies')}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {t('Vea los estudios clínicos actualmente reclutando', 'View clinical studies currently recruiting')}
                  </p>
                  <Button href="/investigacion/estudios-activos" variant="secondary" size="sm" className="w-full">
                    {t('Ver Estudios', 'View Studies')}
                  </Button>
                </Card>

                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-foreground mb-2">
                    {t('Consulta Privada', 'Private Consultation')}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {t('Agende consulta con el Dr. Wilson Bautista', 'Schedule consultation with Dr. Wilson Bautista')}
                  </p>
                  <Button href="/servicios/consulta-privada" variant="secondary" size="sm" className="w-full">
                    {t('Más Información', 'More Information')}
                  </Button>
                </Card>

                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-foreground mb-2">
                    {t('Para Patrocinadores', 'For Sponsors')}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {t('Servicios de investigación clínica', 'Clinical research services')}
                  </p>
                  <Button href="/servicios/para-patrocinadores" variant="secondary" size="sm" className="w-full">
                    {t('Conocer Servicios', 'Learn About Services')}
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
