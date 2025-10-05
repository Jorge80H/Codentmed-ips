'use client'

import PageLayout from '@/components/PageLayout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { db } from '@/lib/instantdb'
import { useCustomTranslation } from '@/lib/i18n'

export default function EstudiosDisponiblesPage() {
  const { locale } = useCustomTranslation()

  // Query active clinical studies from InstantDB
  const { data, isLoading } = db.useQuery({
    clinicalStudies: {
      $: {
        where: { status: 'recruiting' },
        order: { createdAt: 'desc' as const }
      }
    }
  })

  const studies = data?.clinicalStudies || []

  return (
    <PageLayout
      title="Estudios Disponibles"
      description="Estudios clínicos activos en CODENTMED IPS donde puede participar."
      breadcrumbs={[
        { label: 'Pacientes', href: '/pacientes/informacion' },
        { label: 'Estudios Disponibles' }
      ]}
      hero={{
        title: 'Estudios Disponibles',
        subtitle: 'Encuentre oportunidades para participar en investigación clínica'
      }}
    >
      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Estos son los estudios clínicos actualmente reclutando participantes. Revise los criterios
              básicos y contáctenos si está interesado en participar.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-left">
              <h3 className="font-semibold text-gray-900 mb-2">Antes de aplicar:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Lea la información básica del estudio</li>
                <li>✓ Verifique si cumple los criterios principales</li>
                <li>✓ Prepare sus preguntas para el coordinador</li>
                <li>✓ Tenga a mano información médica relevante</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Studies List */}
      <section className="section-padding bg-gray-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Estudios Activos
            </h2>
            <p className="text-xl text-gray-600">
              {isLoading ? 'Cargando estudios...' : `${studies.length} estudios disponibles`}
            </p>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="p-6 animate-pulse">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4" />
                  <div className="h-4 bg-gray-200 rounded w-full mb-2" />
                  <div className="h-4 bg-gray-200 rounded w-5/6" />
                </Card>
              ))}
            </div>
          )}

          {/* No Studies */}
          {!isLoading && studies.length === 0 && (
            <Card className="p-12 text-center">
              <p className="text-gray-500 text-lg mb-6">
                No hay estudios activos reclutando en este momento.
              </p>
              <p className="text-gray-600 mb-8">
                Regrese pronto o déjenos sus datos de contacto para notificarle cuando haya nuevos estudios.
              </p>
              <Button href="/contacto" variant="primary">
                Dejar Mis Datos
              </Button>
            </Card>
          )}

          {/* Studies Grid */}
          {!isLoading && studies.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6">
              {studies.map((study) => {
                const title = locale === 'es' ? study.title_es : study.title_en
                const description = locale === 'es' ? study.description_es : study.description_en
                const therapeuticArea = locale === 'es' ? study.therapeuticArea_es : study.therapeuticArea_en
                const inclusions = locale === 'es' ? study.inclusions_es : study.inclusions_en

                return (
                  <Card key={study.id} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant="primary">{study.phase}</Badge>
                      <Badge variant="secondary">{therapeuticArea}</Badge>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                    <p className="text-gray-600 mb-4">{description}</p>

                    {/* Key Criteria Preview */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                        ¿Puede participar si tiene:
                      </h4>
                      <ul className="space-y-1">
                        {inclusions.slice(0, 3).map((criterion, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="text-green-600 mr-2">✓</span>
                            <span>{criterion}</span>
                          </li>
                        ))}
                        {inclusions.length > 3 && (
                          <li className="text-sm text-gray-500 ml-4">
                            + {inclusions.length - 3} criterios más...
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        href={`/investigacion/estudios-activos#${study.id}`}
                        variant="secondary"
                        size="sm"
                        className="flex-1"
                      >
                        Ver Detalles Completos
                      </Button>
                      <Button
                        href="/contacto"
                        variant="primary"
                        size="sm"
                        className="flex-1"
                      >
                        Aplicar Ahora
                      </Button>
                    </div>
                  </Card>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* What Happens Next */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              ¿Qué sucede después de aplicar?
            </h2>

            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Contacto Inicial</h3>
                    <p className="text-gray-600">
                      Un coordinador de investigación se comunicará con usted en las próximas 24-48 horas para
                      responder preguntas iniciales y verificar criterios básicos.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Visita de Tamizaje</h3>
                    <p className="text-gray-600">
                      Si es elegible preliminarmente, agende una visita para evaluación médica completa,
                      revisión del consentimiento informado y exámenes de laboratorio (sin costo).
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Decisión y Enrolamiento</h3>
                    <p className="text-gray-600">
                      Si cumple todos los criterios y decide participar voluntariamente, firmará el
                      consentimiento informado e iniciará el tratamiento del estudio.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-primary-50">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Tiene preguntas sobre algún estudio?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Nuestro equipo está disponible para responder todas sus dudas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contacto" variant="primary" size="lg">
              Contactar Coordinador
            </Button>
            <Button href="/pacientes/informacion" variant="secondary" size="lg">
              Más Información sobre Estudios
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
