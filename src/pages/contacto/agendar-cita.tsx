'use client'

import { useState } from 'react'
import PageLayout from '@/components/PageLayout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { db } from '@/lib/instantdb'
import { CalendarIcon, ClockIcon, UserIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function AgendarCitaPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    idNumber: '',
    birthDate: '',
    appointmentType: 'clinical_study',
    specialty: '',
    preferredDate: '',
    preferredTime: '',
    reasonForVisit: '',
    medicalHistory: '',
    currentMedications: '',
    allergies: '',
    previousStudies: 'no',
    referredBy: '',
    additionalNotes: ''
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
          contactReason: 'appointment',
          subject: `Solicitud de Cita - ${formData.appointmentType}`,
          message: `
            Tipo: ${formData.appointmentType}
            Fecha preferida: ${formData.preferredDate}
            Hora preferida: ${formData.preferredTime}
            Motivo: ${formData.reasonForVisit}
          `,
          submittedAt: new Date().toISOString(),
          status: 'new'
        })
      ])

      setSubmitStatus('success')
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        idNumber: '',
        birthDate: '',
        appointmentType: 'clinical_study',
        specialty: '',
        preferredDate: '',
        preferredTime: '',
        reasonForVisit: '',
        medicalHistory: '',
        currentMedications: '',
        allergies: '',
        previousStudies: 'no',
        referredBy: '',
        additionalNotes: ''
      })
    } catch (error) {
      console.error('Error submitting appointment:', error)
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
      title="Agendar Cita"
      description="Agende su cita médica o evaluación para estudio clínico en CODENTMED IPS."
      breadcrumbs={[
        { label: 'Contacto', href: '/contacto' },
        { label: 'Agendar Cita' }
      ]}
      hero={{
        title: 'Agendar Cita',
        subtitle: 'Solicite su cita médica o evaluación para estudio clínico'
      }}
    >
      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              Complete el siguiente formulario para solicitar una cita. Nuestro equipo se comunicará con usted
              en las próximas 24 horas para confirmar disponibilidad y coordinar los detalles.
            </p>
          </div>
        </div>
      </section>

      {/* Information Cards */}
      <section className="section-padding bg-gray-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <CalendarIcon className="w-10 h-10 text-primary-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Horarios Flexibles</h3>
                <p className="text-gray-600 text-sm">
                  De lunes a sábado con citas disponibles en mañana y tarde
                </p>
              </Card>

              <Card className="p-6 text-center">
                <ClockIcon className="w-10 h-10 text-primary-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Confirmación Rápida</h3>
                <p className="text-gray-600 text-sm">
                  Respuesta en menos de 24 horas hábiles
                </p>
              </Card>

              <Card className="p-6 text-center">
                <UserIcon className="w-10 h-10 text-primary-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Atención Especializada</h3>
                <p className="text-gray-600 text-sm">
                  Equipo médico experto en reumatología y medicina interna
                </p>
              </Card>
            </div>
          </div>

          {/* Appointment Form */}
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Section 1: Tipo de Cita */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b">
                    1. Tipo de Cita
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="appointmentType" className="block text-sm font-medium text-gray-700 mb-2">
                        Seleccione el Tipo de Cita *
                      </label>
                      <select
                        id="appointmentType"
                        name="appointmentType"
                        value={formData.appointmentType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      >
                        <option value="clinical_study">Evaluación para Estudio Clínico</option>
                        <option value="private_consultation">Consulta Médica Privada</option>
                        <option value="follow_up">Seguimiento / Control</option>
                        <option value="second_opinion">Segunda Opinión</option>
                      </select>
                    </div>

                    {formData.appointmentType === 'private_consultation' && (
                      <div>
                        <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-2">
                          Especialidad *
                        </label>
                        <select
                          id="specialty"
                          name="specialty"
                          value={formData.specialty}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          required
                        >
                          <option value="">Seleccione una especialidad</option>
                          <option value="rheumatology">Reumatología</option>
                          <option value="internal_medicine">Medicina Interna</option>
                          <option value="odontology">Odontología</option>
                        </select>
                      </div>
                    )}
                  </div>
                </div>

                {/* Section 2: Información Personal */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b">
                    2. Información Personal
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre Completo *
                      </label>
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Juan Pérez García"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="idNumber" className="block text-sm font-medium text-gray-700 mb-2">
                        Número de Identificación *
                      </label>
                      <Input
                        id="idNumber"
                        name="idNumber"
                        type="text"
                        value={formData.idNumber}
                        onChange={handleChange}
                        placeholder="123456789"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Fecha de Nacimiento *
                      </label>
                      <Input
                        id="birthDate"
                        name="birthDate"
                        type="date"
                        value={formData.birthDate}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono / WhatsApp *
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

                    <div className="md:col-span-2">
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
                  </div>
                </div>

                {/* Section 3: Fecha y Hora Preferida */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b">
                    3. Fecha y Hora Preferida
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Fecha Preferida *
                      </label>
                      <Input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Esta es una fecha preferida, confirmaremos disponibilidad
                      </p>
                    </div>

                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                        Horario Preferido *
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      >
                        <option value="">Seleccione horario</option>
                        <option value="morning_early">Mañana (7:00 AM - 9:00 AM)</option>
                        <option value="morning_mid">Media Mañana (9:00 AM - 11:00 AM)</option>
                        <option value="morning_late">Final de Mañana (11:00 AM - 1:00 PM)</option>
                        <option value="afternoon_early">Tarde Temprano (1:00 PM - 3:00 PM)</option>
                        <option value="afternoon_late">Tarde (3:00 PM - 5:00 PM)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section 4: Información Médica */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b">
                    4. Información Médica
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <label htmlFor="reasonForVisit" className="block text-sm font-medium text-gray-700 mb-2">
                        Motivo de la Consulta *
                      </label>
                      <Textarea
                        id="reasonForVisit"
                        name="reasonForVisit"
                        value={formData.reasonForVisit}
                        onChange={handleChange}
                        placeholder="Describa brevemente el motivo de su consulta..."
                        rows={3}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="medicalHistory" className="block text-sm font-medium text-gray-700 mb-2">
                        Antecedentes Médicos
                      </label>
                      <Textarea
                        id="medicalHistory"
                        name="medicalHistory"
                        value={formData.medicalHistory}
                        onChange={handleChange}
                        placeholder="Enfermedades previas, cirugías, hospitalizaciones..."
                        rows={3}
                      />
                    </div>

                    <div>
                      <label htmlFor="currentMedications" className="block text-sm font-medium text-gray-700 mb-2">
                        Medicamentos Actuales
                      </label>
                      <Textarea
                        id="currentMedications"
                        name="currentMedications"
                        value={formData.currentMedications}
                        onChange={handleChange}
                        placeholder="Liste todos los medicamentos que está tomando actualmente (incluyendo suplementos)..."
                        rows={3}
                      />
                    </div>

                    <div>
                      <label htmlFor="allergies" className="block text-sm font-medium text-gray-700 mb-2">
                        Alergias
                      </label>
                      <Input
                        id="allergies"
                        name="allergies"
                        type="text"
                        value={formData.allergies}
                        onChange={handleChange}
                        placeholder="Alergias a medicamentos, alimentos, etc."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ¿Ha participado en estudios clínicos previamente?
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="previousStudies"
                            value="yes"
                            checked={formData.previousStudies === 'yes'}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          Sí
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="previousStudies"
                            value="no"
                            checked={formData.previousStudies === 'no'}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          No
                        </label>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="referredBy" className="block text-sm font-medium text-gray-700 mb-2">
                        ¿Cómo nos conoció?
                      </label>
                      <select
                        id="referredBy"
                        name="referredBy"
                        value={formData.referredBy}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Seleccione una opción</option>
                        <option value="internet">Búsqueda en Internet</option>
                        <option value="social_media">Redes Sociales</option>
                        <option value="doctor_referral">Referido por Médico</option>
                        <option value="patient_referral">Referido por Paciente</option>
                        <option value="insurance">Mi EPS / Seguro</option>
                        <option value="other">Otro</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-2">
                        Notas Adicionales
                      </label>
                      <Textarea
                        id="additionalNotes"
                        name="additionalNotes"
                        value={formData.additionalNotes}
                        onChange={handleChange}
                        placeholder="Cualquier información adicional que considere relevante..."
                        rows={3}
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Status */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="font-semibold text-green-800 mb-2">
                      ¡Solicitud Enviada Exitosamente!
                    </h3>
                    <p className="text-green-700">
                      Hemos recibido su solicitud de cita. Nuestro equipo se comunicará con usted en las
                      próximas 24 horas para confirmar la disponibilidad y coordinar los detalles de su cita.
                    </p>
                    <p className="text-green-700 mt-2">
                      <strong>Importante:</strong> Revise su correo electrónico (incluyendo spam) y
                      mantenga su teléfono disponible.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="font-semibold text-red-800 mb-2">
                      Error al Enviar Solicitud
                    </h3>
                    <p className="text-red-700">
                      Hubo un error al procesar su solicitud. Por favor, inténtelo nuevamente o
                      contáctenos directamente al +57 (1) 623-0701 o vía WhatsApp al +57 310 123-4567.
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-6 border-t">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando Solicitud...' : 'Solicitar Cita'}
                  </Button>

                  <p className="text-sm text-gray-500 text-center mt-4">
                    * Campos obligatorios. Al enviar este formulario, acepta nuestro uso de sus datos
                    personales conforme a nuestra política de privacidad.
                  </p>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Información Importante
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Antes de su Cita</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✓ Traiga documento de identidad vigente</li>
                  <li>✓ Liste todos sus medicamentos actuales</li>
                  <li>✓ Traiga resultados de exámenes recientes (si los tiene)</li>
                  <li>✓ Prepare sus preguntas para el médico</li>
                  <li>✓ Llegue 15 minutos antes de su cita</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Política de Cancelación</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Si necesita cancelar o reagendar su cita, por favor notifíquenos con al menos
                  24 horas de anticipación.
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>Contacto:</strong><br />
                  Teléfono: +57 (1) 623-0701<br />
                  WhatsApp: +57 310 123-4567
                </p>
              </Card>
            </div>

            <Card className="p-6 mt-6 bg-blue-50 border-blue-200">
              <h3 className="font-semibold text-gray-900 mb-3">¿Necesita Ayuda?</h3>
              <p className="text-gray-700 mb-4">
                Si tiene preguntas sobre el proceso de agendamiento o necesita asistencia para
                completar el formulario, nuestro equipo está disponible para ayudarle.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contacto" variant="secondary" size="sm">
                  Contactar
                </Button>
                <Button href="/pacientes/recomendaciones" variant="secondary" size="sm">
                  Ver Recomendaciones
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
