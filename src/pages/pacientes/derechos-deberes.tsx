import PageLayout from '@/components/PageLayout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ShieldCheckIcon, DocumentTextIcon, LockClosedIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

const participantRights = [
  'Recibir información completa y comprensible sobre el estudio antes de participar',
  'Tener tiempo suficiente para tomar la decisión de participar, sin presión alguna',
  'Hacer todas las preguntas necesarias y recibir respuestas claras',
  'Decidir voluntariamente si desea o no participar en el estudio',
  'Retirarse del estudio en cualquier momento sin dar explicaciones y sin afectar su atención médica',
  'Recibir atención médica apropiada si experimenta algún evento adverso relacionado al estudio',
  'Que su información personal y médica sea manejada con estricta confidencialidad',
  'Conocer los resultados del estudio una vez finalizado (si así lo solicita)',
  'Ser tratado con respeto y dignidad en todo momento',
  'Tener acceso a una segunda opinión médica si tiene dudas sobre su participación'
]

const participantResponsibilities = [
  'Proporcionar información médica veraz y completa sobre su historia clínica',
  'Informar sobre todos los medicamentos que está tomando, incluyendo suplementos y hierbas',
  'Asistir a todas las visitas programadas del estudio en las fechas acordadas',
  'Seguir las instrucciones del protocolo, incluyendo toma de medicación y restricciones',
  'Reportar inmediatamente cualquier síntoma o efecto secundario que experimente',
  'No participar en otros estudios clínicos simultáneamente (salvo autorización explícita)',
  'Informar al equipo si decide retirarse del estudio',
  'Mantener la confidencialidad sobre aspectos específicos del estudio si así se solicita',
  'Cumplir con ayunos, restricciones de alcohol/tabaco u otras indicaciones del protocolo',
  'Hacer preguntas cuando tenga dudas sobre cualquier aspecto del estudio'
]

const informedConsentComponents = [
  {
    title: 'Propósito del Estudio',
    description: 'Explicación clara de qué se está investigando y por qué'
  },
  {
    title: 'Procedimientos',
    description: 'Descripción detallada de qué sucederá durante el estudio, número de visitas, exámenes'
  },
  {
    title: 'Riesgos y Beneficios',
    description: 'Información completa sobre posibles efectos secundarios y beneficios esperados'
  },
  {
    title: 'Alternativas',
    description: 'Otras opciones de tratamiento disponibles fuera del estudio'
  },
  {
    title: 'Confidencialidad',
    description: 'Cómo se protegerá su información personal y médica'
  },
  {
    title: 'Compensación',
    description: 'Información sobre reembolsos de gastos o compensación por tiempo'
  },
  {
    title: 'Contactos',
    description: 'Números telefónicos para emergencias y dudas sobre el estudio'
  },
  {
    title: 'Voluntariedad',
    description: 'Confirmación de que su participación es completamente voluntaria'
  }
]

export default function DerechosDeberesPage() {
  return (
    <PageLayout
      title="Derechos y Deberes"
      description="Sus derechos y responsabilidades como participante en investigación clínica."
      breadcrumbs={[
        { label: 'Pacientes', href: '/pacientes/informacion' },
        { label: 'Derechos y Deberes' }
      ]}
      hero={{
        title: 'Derechos y Deberes del Participante',
        subtitle: 'Conozca sus derechos y responsabilidades en investigación clínica'
      }}
    >
      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              Como participante en un estudio clínico, usted tiene derechos fundamentales que garantizan su
              seguridad, dignidad y autonomía. Al mismo tiempo, asume ciertas responsabilidades que contribuyen
              al éxito del estudio y a la generación de conocimiento científico confiable.
            </p>
          </div>
        </div>
      </section>

      {/* Participant Rights */}
      <section className="section-padding bg-gray-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <ShieldCheckIcon className="w-16 h-16 text-primary-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sus Derechos como Participante
              </h2>
              <p className="text-xl text-gray-600">
                Estos derechos están protegidos por normativa nacional e internacional
              </p>
            </div>

            <Card className="p-8">
              <ul className="space-y-4">
                {participantRights.map((right, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{right}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 mt-6 bg-blue-50 border-blue-200">
              <p className="text-gray-700">
                <strong>Importante:</strong> Si en algún momento siente que sus derechos no están siendo
                respetados, puede comunicarse con el investigador principal, el Comité de Ética, o las
                autoridades regulatorias (INVIMA).
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Participant Responsibilities */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <HandRaisedIcon className="w-16 h-16 text-primary-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sus Responsabilidades como Participante
              </h2>
              <p className="text-xl text-gray-600">
                Contribuya al éxito del estudio y a su propia seguridad
              </p>
            </div>

            <Card className="p-8">
              <ul className="space-y-4">
                {participantResponsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary-600 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 mt-6 bg-yellow-50 border-yellow-200">
              <p className="text-gray-700">
                <strong>Recuerde:</strong> El cumplimiento de estas responsabilidades es fundamental para su
                seguridad y para la calidad de los datos del estudio. Si tiene dificultades para cumplir
                con alguna, comuníqueselo al equipo de investigación.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Informed Consent */}
      <section className="section-padding bg-gray-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <DocumentTextIcon className="w-16 h-16 text-primary-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Consentimiento Informado
              </h2>
              <p className="text-xl text-gray-600">
                El pilar fundamental de la investigación ética
              </p>
            </div>

            <Card className="p-8 mb-8">
              <p className="text-gray-700 mb-6">
                El <strong>consentimiento informado</strong> es un documento que le proporciona toda la
                información necesaria para tomar una decisión educada sobre su participación. No es un
                contrato que le obliga a permanecer en el estudio, sino una herramienta para asegurar que
                comprende completamente qué implica participar.
              </p>

              <h3 className="font-semibold text-gray-900 mb-4">El consentimiento informado incluye:</h3>

              <div className="grid md:grid-cols-2 gap-4">
                {informedConsentComponents.map((component, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">{component.title}</h4>
                    <p className="text-gray-600 text-sm">{component.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-green-50 border-green-200">
              <h3 className="font-semibold text-gray-900 mb-3">Proceso de Consentimiento en CODENTMED IPS:</h3>
              <ol className="space-y-2 text-gray-700">
                <li>1. Recibe el documento de consentimiento para leer con tiempo</li>
                <li>2. El médico revisa el documento con usted en detalle</li>
                <li>3. Tiene oportunidad de hacer todas las preguntas necesarias</li>
                <li>4. Puede consultar con familiares antes de decidir</li>
                <li>5. Solo firma cuando esté completamente seguro de su decisión</li>
                <li>6. Recibe una copia del consentimiento firmado para sus archivos</li>
              </ol>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy and Confidentiality */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <LockClosedIcon className="w-16 h-16 text-primary-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Privacidad y Confidencialidad
              </h2>
            </div>

            <Card className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Protección de sus Datos Personales
              </h3>

              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Codificación:</strong> Su información médica se identifica con un código numérico,
                  no con su nombre. Solo el equipo de investigación local conoce la relación entre el código
                  y su identidad.
                </p>

                <p>
                  <strong>Acceso Limitado:</strong> Solo personal autorizado del estudio tiene acceso a sus
                  datos. Los patrocinadores y autoridades regulatorias pueden revisar datos para verificar
                  calidad, pero siempre respetando confidencialidad.
                </p>

                <p>
                  <strong>Almacenamiento Seguro:</strong> Los documentos del estudio se guardan en archivos
                  seguros con acceso restringido. Los datos electrónicos están protegidos con contraseñas
                  y encriptación.
                </p>

                <p>
                  <strong>Cumplimiento Normativo:</strong> Seguimos la Ley 1581 de 2012 de Protección de
                  Datos Personales de Colombia y estándares internacionales como GDPR cuando aplique.
                </p>

                <p>
                  <strong>Publicaciones Científicas:</strong> Si los resultados del estudio se publican,
                  su identidad nunca será revelada. Los datos se presentan de forma agregada y anónima.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-50">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Tiene preguntas sobre sus derechos?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Estamos disponibles para resolver todas sus dudas sobre participación en estudios
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contacto" variant="primary" size="lg">
              Contactar Equipo
            </Button>
            <Button href="/pacientes/informacion" variant="secondary" size="lg">
              Más Información para Pacientes
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
