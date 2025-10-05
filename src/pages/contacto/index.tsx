'use client'

import { useState } from 'react'
import PageLayout from '@/components/PageLayout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { db } from '@/lib/instantdb'
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

export default function ContactoPage() {
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

  return (
    <PageLayout
      title="Contacto"
      description="Contáctese con CODENTMED IPS. Estamos disponibles para responder sus consultas."
      breadcrumbs={[
        { label: 'Contacto' }
      ]}
      hero={{
        title: 'Contáctenos',
        subtitle: 'Estamos aquí para ayudarle'
      }}
    >
      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              Nuestro equipo está disponible para responder sus preguntas sobre estudios clínicos,
              consulta médica privada, servicios de investigación y cualquier otra inquietud.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Información de Contacto
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPinIcon className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Ubicación</h4>
                      <p className="text-gray-600 text-sm">
                        Carrera 13 # 88-65<br />
                        Bogotá, Colombia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <PhoneIcon className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Teléfono</h4>
                      <p className="text-gray-600 text-sm">
                        +57 (1) 623-0701<br />
                        +57 310 123-4567 (WhatsApp)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <EnvelopeIcon className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600 text-sm">
                        info@codentmedips.com<br />
                        estudios@codentmedips.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <ClockIcon className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Horario</h4>
                      <p className="text-gray-600 text-sm">
                        Lunes a Viernes: 7:00 AM - 5:00 PM<br />
                        Sábados: 8:00 AM - 12:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <GlobeAltIcon className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Redes Sociales</h4>
                      <div className="space-y-1">
                        <a href="#" className="text-primary-600 hover:text-primary-700 text-sm block">
                          LinkedIn
                        </a>
                        <a href="#" className="text-primary-600 hover:text-primary-700 text-sm block">
                          Instagram
                        </a>
                        <a href="#" className="text-primary-600 hover:text-primary-700 text-sm block">
                          Facebook
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-primary-50 border-primary-200">
                <h3 className="font-semibold text-gray-900 mb-3">
                  ¿Necesita Agendar una Cita?
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Si desea agendar una cita médica o una cita para evaluación de estudio clínico,
                  use nuestro sistema de agendamiento.
                </p>
                <Button href="/contacto/agendar-cita" variant="primary" size="sm" className="w-full">
                  Agendar Cita
                </Button>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Envíenos un Mensaje
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Reason */}
                  <div>
                    <label htmlFor="contactReason" className="block text-sm font-medium text-gray-700 mb-2">
                      Motivo de Contacto
                    </label>
                    <select
                      id="contactReason"
                      name="contactReason"
                      value={formData.contactReason}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    >
                      <option value="general">Consulta General</option>
                      <option value="clinical_study">Información sobre Estudios Clínicos</option>
                      <option value="private_consultation">Consulta Médica Privada</option>
                      <option value="sponsor">Servicios para Patrocinadores</option>
                      <option value="collaboration">Colaboración Académica</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Juan Pérez"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Correo Electrónico *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="juan.perez@email.com"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
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
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Asunto *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Ej: Información sobre estudios de reumatología"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describa su consulta o solicitud..."
                      rows={6}
                      required
                    />
                  </div>

                  {/* Submit Status */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-green-800">
                        ¡Mensaje enviado exitosamente! Nos pondremos en contacto con usted pronto.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-red-800">
                        Hubo un error al enviar su mensaje. Por favor, inténtelo nuevamente o contáctenos
                        directamente por teléfono.
                      </p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div>
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                    </Button>
                  </div>

                  <p className="text-sm text-gray-500 text-center">
                    * Campos obligatorios
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Cómo Llegar
            </h2>

            <Card className="p-0 overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.6088524891436!2d-74.05473128561748!3d4.674855743029156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b0d0d0d0d0d%3A0x0!2zNMKwNDAnMjkuNSJOIDc0wrAwMycwOS4wIlc!5e0!3m2!1ses!2sco!4v1234567890123"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación CODENTMED IPS"
                />
              </div>
            </Card>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Transporte Público</h3>
                <p className="text-gray-600 text-sm mb-2">
                  <strong>TransMilenio:</strong> Estación Calle 85
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>Rutas SITP:</strong> A08, T12, T13
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Parqueadero</h3>
                <p className="text-gray-600 text-sm">
                  Parqueadero disponible para pacientes en el edificio.
                  Informe en recepción que asiste a cita en CODENTMED IPS para validación.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding bg-gray-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Enlaces Rápidos
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Estudios Activos
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Vea los estudios clínicos actualmente reclutando
                </p>
                <Button href="/investigacion/estudios-activos" variant="secondary" size="sm" className="w-full">
                  Ver Estudios
                </Button>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Consulta Privada
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Agende consulta con el Dr. Wilson Bautista
                </p>
                <Button href="/servicios/consulta-privada" variant="secondary" size="sm" className="w-full">
                  Más Información
                </Button>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Para Patrocinadores
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Servicios de investigación clínica
                </p>
                <Button href="/servicios/para-patrocinadores" variant="secondary" size="sm" className="w-full">
                  Conocer Servicios
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
