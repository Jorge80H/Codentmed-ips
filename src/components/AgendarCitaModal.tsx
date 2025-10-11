'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import {
  X,
  Calendar,
  User,
  Mail,
  Phone,
  FileText,
  CheckCircle2,
  AlertCircle,
  Clock,
  Loader2
} from 'lucide-react'

interface AgendarCitaModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AgendarCitaModal({ isOpen, onClose }: AgendarCitaModalProps) {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    tipoConsulta: 'general',
    fechaPreferida: '',
    horaPreferida: '',
    mensaje: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Webhook de n8n - Reemplazar con tu URL real
      const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || 'https://tu-instancia-n8n.com/webhook/agendar-cita'

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          fuente: 'sitio-web-codentmed',
          idioma: typeof window !== 'undefined' ? navigator.language : 'es'
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            nombre: '',
            apellido: '',
            email: '',
            telefono: '',
            tipoConsulta: 'general',
            fechaPreferida: '',
            horaPreferida: '',
            mensaje: ''
          })
          setSubmitStatus('idle')
          onClose()
        }, 3000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-background border border-border rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-background border-b border-border px-6 py-4 flex items-center justify-between z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">
                  {t('Agendar Cita', 'Schedule Appointment')}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {t('Complete el formulario y nos contactaremos pronto', 'Fill out the form and we will contact you soon')}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={t('Cerrar', 'Close')}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="mx-6 mt-6 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900/50 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-1">
                    {t('¡Solicitud Enviada!', 'Request Sent!')}
                  </h3>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    {t(
                      'Hemos recibido su solicitud de cita. Nuestro equipo se pondrá en contacto con usted en las próximas 24 horas para confirmar la fecha y hora.',
                      'We have received your appointment request. Our team will contact you within the next 24 hours to confirm the date and time.'
                    )}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="mx-6 mt-6 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-red-800 dark:text-red-200 mb-1">
                    {t('Error al Enviar', 'Error Sending')}
                  </h3>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    {t(
                      'Hubo un problema al enviar su solicitud. Por favor, inténtelo nuevamente o contáctenos directamente por teléfono.',
                      'There was a problem sending your request. Please try again or contact us directly by phone.'
                    )}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-6 py-6 space-y-6">
            {/* Personal Info */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                {t('Información Personal', 'Personal Information')}
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
                    {t('Nombre', 'First Name')} *
                  </label>
                  <Input
                    id="nombre"
                    name="nombre"
                    type="text"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder={t('Juan', 'John')}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="apellido" className="block text-sm font-medium text-foreground mb-2">
                    {t('Apellido', 'Last Name')} *
                  </label>
                  <Input
                    id="apellido"
                    name="apellido"
                    type="text"
                    value={formData.apellido}
                    onChange={handleChange}
                    placeholder={t('Pérez', 'Doe')}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                {t('Información de Contacto', 'Contact Information')}
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
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
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-2">
                    {t('Teléfono / WhatsApp', 'Phone / WhatsApp')} *
                  </label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+57 310 123 4567"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </div>

            {/* Appointment Details */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                {t('Detalles de la Cita', 'Appointment Details')}
              </h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="tipoConsulta" className="block text-sm font-medium text-foreground mb-2">
                    {t('Tipo de Consulta', 'Type of Consultation')} *
                  </label>
                  <select
                    id="tipoConsulta"
                    name="tipoConsulta"
                    value={formData.tipoConsulta}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                    required
                    disabled={isSubmitting}
                  >
                    <option value="general">{t('Consulta General', 'General Consultation')}</option>
                    <option value="medicina-interna">{t('Medicina Interna', 'Internal Medicine')}</option>
                    <option value="reumatologia">{t('Reumatología', 'Rheumatology')}</option>
                    <option value="odontologia">{t('Odontología', 'Dentistry')}</option>
                    <option value="estudio-clinico">{t('Estudio Clínico', 'Clinical Study')}</option>
                    <option value="seguimiento">{t('Seguimiento', 'Follow-up')}</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fechaPreferida" className="block text-sm font-medium text-foreground mb-2">
                      {t('Fecha Preferida', 'Preferred Date')} *
                    </label>
                    <Input
                      id="fechaPreferida"
                      name="fechaPreferida"
                      type="date"
                      value={formData.fechaPreferida}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="horaPreferida" className="block text-sm font-medium text-foreground mb-2">
                      {t('Hora Preferida', 'Preferred Time')} *
                    </label>
                    <select
                      id="horaPreferida"
                      name="horaPreferida"
                      value={formData.horaPreferida}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                      required
                      disabled={isSubmitting}
                    >
                      <option value="">{t('Seleccione hora', 'Select time')}</option>
                      <option value="07:00-09:00">07:00 - 09:00 AM</option>
                      <option value="09:00-11:00">09:00 - 11:00 AM</option>
                      <option value="11:00-13:00">11:00 AM - 01:00 PM</option>
                      <option value="14:00-16:00">02:00 - 04:00 PM</option>
                      <option value="16:00-17:00">04:00 - 05:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-2">
                    {t('Mensaje / Motivo de Consulta', 'Message / Reason for Consultation')}
                  </label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder={t(
                      'Describa brevemente el motivo de su consulta o cualquier información relevante...',
                      'Briefly describe the reason for your consultation or any relevant information...'
                    )}
                    rows={4}
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </div>

            {/* Info Note */}
            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/50 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-blue-800 dark:text-blue-200 font-medium mb-1">
                    {t('Confirmación de Cita', 'Appointment Confirmation')}
                  </p>
                  <p className="text-blue-700 dark:text-blue-300">
                    {t(
                      'Una vez enviada su solicitud, nuestro equipo se pondrá en contacto con usted dentro de las próximas 24 horas hábiles para confirmar disponibilidad y finalizar los detalles de su cita.',
                      'Once your request is submitted, our team will contact you within the next 24 business hours to confirm availability and finalize your appointment details.'
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
                disabled={isSubmitting}
              >
                {t('Cancelar', 'Cancel')}
              </Button>
              <Button
                type="submit"
                variant="default"
                className="flex-1"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    {t('Enviando...', 'Sending...')}
                  </>
                ) : (
                  <>
                    <Calendar className="w-5 h-5 mr-2" />
                    {t('Solicitar Cita', 'Request Appointment')}
                  </>
                )}
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              * {t('Campos obligatorios', 'Required fields')}
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
