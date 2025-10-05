import PageLayout from '@/components/PageLayout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ClipboardDocumentListIcon, ClockIcon, DocumentTextIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

const beforeVisit = [
  {
    title: 'Prepare su Historia Clínica',
    items: [
      'Lista de todos los medicamentos que toma actualmente (incluyendo dosis)',
      'Suplementos vitamínicos, hierbas o productos naturales',
      'Alergias a medicamentos o alimentos',
      'Enfermedades previas y cirugías',
      'Historia familiar de enfermedades relevantes'
    ]
  },
  {
    title: 'Documentos a Traer',
    items: [
      'Documento de identidad vigente (cédula o pasaporte)',
      'Carné de afiliación a EPS (si aplica)',
      'Resultados de exámenes médicos recientes',
      'Fórmulas médicas actuales',
      'Reportes de hospitalizaciones o procedimientos recientes'
    ]
  },
  {
    title: 'Preparación Personal',
    items: [
      'Desayune ligero (salvo indicación de ayuno)',
      'Tome sus medicamentos habituales como siempre',
      'Vista ropa cómoda y de fácil acceso para examen físico',
      'Traiga acompañante si lo desea (especialmente para la primera visita)',
      'Prepare lista de preguntas que quiera hacer al médico'
    ]
  }
]

const requiredDocuments = [
  {
    document: 'Documento de Identidad',
    description: 'Cédula de ciudadanía o pasaporte vigente',
    required: true
  },
  {
    document: 'Afiliación a Sistema de Salud',
    description: 'Carné de EPS o certificado de afiliación',
    required: false
  },
  {
    document: 'Exámenes de Laboratorio',
    description: 'Resultados recientes (si los tiene)',
    required: false
  },
  {
    document: 'Historia Clínica Previa',
    description: 'Reportes médicos, imágenes diagnósticas',
    required: false
  },
  {
    document: 'Lista de Medicamentos',
    description: 'Todos los medicamentos actuales con dosis',
    required: true
  }
]

const duringVisit = [
  'Sea honesto y completo al responder las preguntas del médico',
  'No oculte información médica relevante, aunque le parezca insignificante',
  'Haga todas las preguntas que tenga sobre el estudio',
  'Pida aclaraciones si algo no le queda claro en el consentimiento informado',
  'No se sienta presionado a tomar una decisión inmediata',
  'Informe sobre cualquier síntoma o malestar que esté experimentando',
  'Tome notas si le ayuda a recordar información importante',
  'Solicite que le expliquen los procedimientos que se realizarán',
  'Confirme las fechas de próximas visitas y anótelas',
  'Pregunte cómo contactar al equipo en caso de dudas o emergencias'
]

const timeCommitment = [
  {
    phase: 'Visita de Tamizaje',
    duration: '2-3 horas',
    activities: 'Entrevista médica, examen físico, consentimiento informado, exámenes de laboratorio'
  },
  {
    phase: 'Visitas Regulares',
    duration: '1-2 horas',
    activities: 'Evaluación médica, toma de signos vitales, cuestionarios, dispensación de medicamento'
  },
  {
    phase: 'Visitas con Procedimientos',
    duration: '2-4 horas',
    activities: 'Visitas que incluyen exámenes adicionales, biopsias, o múltiples evaluaciones'
  },
  {
    phase: 'Visita Final',
    duration: '2-3 horas',
    activities: 'Evaluación completa, exámenes finales, cierre de estudio'
  }
]

export default function RecomendacionesPage() {
  return (
    <PageLayout
      title="Recomendaciones para su Cita"
      description="Guía completa para prepararse para su visita de estudio clínico en CODENTMED IPS."
      breadcrumbs={[
        { label: 'Pacientes', href: '/pacientes/informacion' },
        { label: 'Recomendaciones' }
      ]}
      hero={{
        title: 'Recomendaciones para su Cita',
        subtitle: 'Prepárese adecuadamente para su visita de estudio clínico'
      }}
    >
      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              Una buena preparación para su cita asegura que aproveche al máximo el tiempo con el equipo
              médico y que todos los procedimientos del estudio se realicen de manera eficiente y segura.
            </p>
          </div>
        </div>
      </section>

      {/* Before the Visit */}
      <section className="section-padding bg-gray-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <ClipboardDocumentListIcon className="w-16 h-16 text-primary-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Antes de la Visita
              </h2>
              <p className="text-xl text-gray-600">
                Qué preparar antes de su cita
              </p>
            </div>

            <div className="space-y-6">
              {beforeVisit.map((section, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className="text-primary-600 mr-2">✓</span>
                        <span>{item}</span>
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
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <DocumentTextIcon className="w-16 h-16 text-primary-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Documentos Requeridos
              </h2>
            </div>

            <Card className="p-8">
              <div className="space-y-4">
                {requiredDocuments.map((doc, index) => (
                  <div key={index} className="flex items-start justify-between border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900">{doc.document}</h3>
                        {doc.required && (
                          <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">
                            Obligatorio
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm">{doc.description}</p>
                    </div>
                    <CheckCircleIcon className={`w-6 h-6 flex-shrink-0 ml-4 ${doc.required ? 'text-red-500' : 'text-gray-400'}`} />
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 mt-6 bg-blue-50 border-blue-200">
              <p className="text-gray-700">
                <strong>Importante:</strong> Si no tiene algún documento opcional, no se preocupe. El equipo
                le indicará si es necesario conseguirlo para visitas posteriores.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* During the Visit */}
      <section className="section-padding bg-gray-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <CheckCircleIcon className="w-16 h-16 text-primary-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Durante la Visita
              </h2>
              <p className="text-xl text-gray-600">
                Consejos para aprovechar al máximo su cita
              </p>
            </div>

            <Card className="p-8">
              <ul className="space-y-3">
                {duringVisit.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Time Commitment */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <ClockIcon className="w-16 h-16 text-primary-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ¿Cuánto Tiempo Toma una Visita?
              </h2>
              <p className="text-xl text-gray-600">
                Duración estimada según tipo de visita
              </p>
            </div>

            <div className="space-y-4">
              {timeCommitment.map((visit, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{visit.phase}</h3>
                    <span className="text-primary-600 font-bold text-lg">{visit.duration}</span>
                  </div>
                  <p className="text-gray-600">{visit.activities}</p>
                </Card>
              ))}
            </div>

            <Card className="p-6 mt-6 bg-yellow-50 border-yellow-200">
              <p className="text-gray-700">
                <strong>Planificación:</strong> Reserve tiempo adicional para su primera visita. Es importante
                que no se sienta apurado y pueda hacer todas las preguntas necesarias. Para visitas regulares,
                generalmente puede planear regresar a sus actividades el mismo día.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding bg-gray-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Qué Esperar en su Primera Visita
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Bienvenida y Registro</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Será recibido por el personal administrativo quien verificará sus datos y le indicará
                  dónde esperar.
                </p>
                <span className="text-primary-600 text-sm font-medium">~10 minutos</span>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Entrevista con Coordinador</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Un coordinador de investigación le explicará el estudio, revisará criterios de
                  elegibilidad y responderá preguntas iniciales.
                </p>
                <span className="text-primary-600 text-sm font-medium">~30 minutos</span>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Revisión de Consentimiento</h3>
                <p className="text-gray-600 text-sm mb-3">
                  El médico investigador revisará el consentimiento informado en detalle con usted,
                  asegurando que comprenda todos los aspectos.
                </p>
                <span className="text-primary-600 text-sm font-medium">~45 minutos</span>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Evaluación Médica</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Examen físico completo, revisión de historia clínica, signos vitales y evaluación
                  de condiciones específicas del estudio.
                </p>
                <span className="text-primary-600 text-sm font-medium">~45 minutos</span>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Exámenes de Laboratorio</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Toma de muestras de sangre, orina u otros exámenes requeridos por el protocolo
                  del estudio.
                </p>
                <span className="text-primary-600 text-sm font-medium">~30 minutos</span>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Programación de Seguimiento</h3>
                <p className="text-gray-600 text-sm mb-3">
                  El coordinador agendará sus próximas visitas y le entregará material informativo
                  del estudio.
                </p>
                <span className="text-primary-600 text-sm font-medium">~15 minutos</span>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location and Parking */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Ubicación y Parqueadero
            </h2>

            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Cómo Llegar</h3>
                  <p className="text-gray-600 mb-4">
                    Nuestras instalaciones están ubicadas en Bogotá, con fácil acceso desde
                    TransMilenio y principales vías de la ciudad.
                  </p>
                  <Button href="/contacto" variant="secondary" size="sm">
                    Ver Mapa y Direcciones
                  </Button>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Parqueadero</h3>
                  <p className="text-gray-600 mb-2">
                    Contamos con parqueadero disponible para pacientes. Informe al llegar
                    que asiste a cita de estudio clínico para validación.
                  </p>
                  <p className="text-sm text-gray-500">
                    * Sujeto a disponibilidad
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-50">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Listo para su Cita?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Si tiene alguna duda sobre cómo prepararse, no dude en contactarnos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contacto" variant="primary" size="lg">
              Contactar Coordinador
            </Button>
            <Button href="/pacientes/estudios-disponibles" variant="secondary" size="lg">
              Ver Estudios Disponibles
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
