import PageLayout from '@/components/PageLayout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { QuestionMarkCircleIcon, ShieldCheckIcon, ClipboardDocumentListIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: '¿Qué es un estudio clínico?',
    answer: 'Un estudio clínico es una investigación científica que evalúa la seguridad y eficacia de medicamentos, dispositivos médicos o intervenciones terapéuticas en seres humanos. Se realiza siguiendo protocolos rigurosos y con supervisión ética constante.'
  },
  {
    question: '¿Cuáles son las fases de un estudio clínico?',
    answer: 'Los estudios clínicos se dividen en Fase I (seguridad inicial), Fase II (eficacia preliminar), Fase III (confirmación de eficacia en poblaciones amplias) y Fase IV (seguimiento post-comercialización).'
  },
  {
    question: '¿Cuánto tiempo dura un estudio?',
    answer: 'La duración varía según el tipo de estudio. Puede ir desde semanas (estudios de bioequivalencia) hasta varios años (estudios de enfermedades crónicas). Cada estudio especifica claramente su duración esperada.'
  },
  {
    question: '¿Puedo retirarme del estudio en cualquier momento?',
    answer: 'Sí, absolutamente. La participación en estudios clínicos es completamente voluntaria y puede retirar su consentimiento en cualquier momento sin ninguna consecuencia para su atención médica habitual.'
  },
  {
    question: '¿Qué pasa con mis datos personales?',
    answer: 'Sus datos son protegidos con estricta confidencialidad conforme a leyes de protección de datos. Los investigadores solo acceden a información necesaria para el estudio, y sus datos se manejan de forma codificada.'
  },
  {
    question: '¿Tendré acceso al medicamento después del estudio?',
    answer: 'En muchos casos, los patrocinadores ofrecen programas de uso expandido o compasivo para proporcionar el medicamento investigado después de finalizar el estudio, especialmente si demostró beneficio. Esto se especifica en el consentimiento informado.'
  }
]

const participationProcess = [
  {
    step: 1,
    title: 'Información y Evaluación',
    description: 'Reciba información detallada sobre el estudio y evalúe si cumple criterios de elegibilidad'
  },
  {
    step: 2,
    title: 'Consentimiento Informado',
    description: 'Revise y firme el consentimiento después de resolver todas sus dudas'
  },
  {
    step: 3,
    title: 'Exámenes de Tamizaje',
    description: 'Realice exámenes médicos para confirmar que puede participar de forma segura'
  },
  {
    step: 4,
    title: 'Inicio del Tratamiento',
    description: 'Comience el tratamiento según el protocolo, con seguimiento cercano'
  },
  {
    step: 5,
    title: 'Visitas de Seguimiento',
    description: 'Asista a visitas programadas para evaluación médica y exámenes'
  },
  {
    step: 6,
    title: 'Finalización',
    description: 'Complete el estudio y reciba evaluación final'
  }
]

export default function InformacionPacientesPage() {
  return (
    <PageLayout
      title="Información para Pacientes"
      description="Todo lo que necesitas saber sobre participación en estudios clínicos en CODENTMED IPS."
      breadcrumbs={[
        { label: 'Pacientes', href: '/pacientes/informacion' },
        { label: 'Información' }
      ]}
      hero={{
        title: 'Información para Pacientes',
        subtitle: 'Entendiendo la investigación clínica y su rol como participante'
      }}
    >
      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              Participar en un estudio clínico es una decisión importante que puede beneficiar tanto su salud
              como el avance de la medicina. Aquí encontrará información clara y completa para tomar una
              decisión informada.
            </p>
          </div>
        </div>
      </section>

      {/* What is a Clinical Study */}
      <section className="section-padding bg-gray-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <QuestionMarkCircleIcon className="w-16 h-16 text-primary-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ¿Qué es un Estudio Clínico?
              </h2>
            </div>

            <Card className="p-8 mb-8">
              <p className="text-gray-700 mb-4">
                Un <strong>estudio clínico</strong> (también llamado ensayo clínico o investigación clínica) es un tipo
                de investigación científica que evalúa medicamentos, dispositivos médicos, procedimientos o intervenciones
                terapéuticas en personas voluntarias.
              </p>
              <p className="text-gray-700 mb-4">
                Estos estudios son esenciales para descubrir nuevos tratamientos y mejorar las opciones disponibles
                para diversas enfermedades. Cada medicamento que existe en el mercado pasó por estudios clínicos antes
                de ser aprobado.
              </p>
              <p className="text-gray-700">
                En CODENTMED IPS, conducimos estudios principalmente en áreas de <strong>reumatología</strong>,
                <strong> medicina interna</strong>, y <strong>odontología</strong>, con enfoque en enfermedades
                autoinmunes y crónicas.
              </p>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Seguridad</h3>
                <p className="text-gray-600 text-sm">
                  Supervisión médica constante y protocolos de seguridad rigurosos
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClipboardDocumentListIcon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Ética</h3>
                <p className="text-gray-600 text-sm">
                  Aprobación por Comité de Ética y cumplimiento normativo total
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserGroupIcon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Voluntario</h3>
                <p className="text-gray-600 text-sm">
                  Participación completamente voluntaria, sin ninguna presión
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits and Risks */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Beneficios y Riesgos de Participar
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Benefits */}
              <div>
                <Card className="p-6 h-full bg-green-50 border-green-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    Beneficios Potenciales
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">•</span>
                      <span><strong>Acceso a nuevos tratamientos:</strong> Medicamentos innovadores no disponibles comercialmente</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">•</span>
                      <span><strong>Atención médica especializada:</strong> Seguimiento cercano por médicos expertos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">•</span>
                      <span><strong>Exámenes sin costo:</strong> Laboratorios y estudios relacionados al protocolo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">•</span>
                      <span><strong>Medicamento sin costo:</strong> Tratamiento investigado proporcionado gratuitamente</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">•</span>
                      <span><strong>Contribución a la ciencia:</strong> Ayudar a futuras generaciones de pacientes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">•</span>
                      <span><strong>Compensación por tiempo:</strong> Reembolso de gastos de transporte en algunos estudios</span>
                    </li>
                  </ul>
                </Card>
              </div>

              {/* Risks */}
              <div>
                <Card className="p-6 h-full bg-yellow-50 border-yellow-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-yellow-600 mr-2">⚠</span>
                    Riesgos a Considerar
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2 mt-1">•</span>
                      <span><strong>Efectos secundarios:</strong> Posibilidad de reacciones adversas al tratamiento</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2 mt-1">•</span>
                      <span><strong>Incertidumbre:</strong> El tratamiento puede no ser efectivo para usted</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2 mt-1">•</span>
                      <span><strong>Compromiso de tiempo:</strong> Visitas frecuentes al centro de investigación</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2 mt-1">•</span>
                      <span><strong>Placebo:</strong> En algunos estudios, puede recibir placebo (no tratamiento activo)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2 mt-1">•</span>
                      <span><strong>Procedimientos adicionales:</strong> Exámenes o muestras que no serían necesarios en atención regular</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2 mt-1">•</span>
                      <span><strong>Restricciones:</strong> Posibles limitaciones en medicamentos o actividades durante el estudio</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>

            <Card className="p-6 mt-8 bg-blue-50 border-blue-200">
              <p className="text-gray-700">
                <strong>Importante:</strong> Antes de participar, recibirá información detallada sobre todos los
                beneficios y riesgos específicos del estudio en cuestión. El equipo médico responderá todas sus
                preguntas y se asegurará de que comprenda completamente qué implica su participación.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Participation Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Proceso de Participación
            </h2>

            <div className="space-y-6">
              {participationProcess.map((item) => (
                <Card key={item.step} className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Preguntas Frecuentes
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-start">
                    <QuestionMarkCircleIcon className="w-6 h-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 ml-8">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-50">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Listo para participar en un estudio?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore nuestros estudios activos o contáctenos para más información
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/investigacion/estudios-activos" variant="primary" size="lg">
              Ver Estudios Disponibles
            </Button>
            <Button href="/contacto" variant="secondary" size="lg">
              Contactar Coordinador
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
