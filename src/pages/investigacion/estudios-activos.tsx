'use client'

import { useState } from 'react'
import PageLayout from '@/components/PageLayout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { db } from '@/lib/instantdb'
import { useCustomTranslation } from '@/lib/i18n'

export default function EstudiosActivosPage() {
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null)
  const [selectedArea, setSelectedArea] = useState<string | null>(null)
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

  // Filter studies
  const filteredStudies = studies.filter(study => {
    const phaseMatch = !selectedPhase || study.phase === selectedPhase
    const areaField = locale === 'es' ? study.therapeuticArea_es : study.therapeuticArea_en
    const areaMatch = !selectedArea || areaField === selectedArea
    return phaseMatch && areaMatch
  })

  // Get unique phases and areas
  const phases = Array.from(new Set(studies.map(s => s.phase)))
  const areas = Array.from(new Set(studies.map(s =>
    locale === 'es' ? s.therapeuticArea_es : s.therapeuticArea_en
  )))

  return (
    <PageLayout
      title="Estudios Clínicos Activos"
      description="Estudios clínicos actualmente reclutando participantes en CODENTMED IPS."
      breadcrumbs={[
        { label: 'Investigación', href: '/investigacion/estudios-activos' },
        { label: 'Estudios Activos' }
      ]}
      hero={{
        title: 'Estudios Clínicos Activos',
        subtitle: 'Oportunidades para participar en investigación de vanguardia'
      }}
    >
      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              Actualmente estamos reclutando participantes para los siguientes estudios clínicos.
              Todos nuestros estudios están aprobados por el Comité de Ética y cumplen con estándares
              internacionales de seguridad y ética.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="section-padding bg-gray-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          {!isLoading && studies.length > 0 && (
            <div className="mb-8 space-y-4">
              {/* Phase Filter */}
              {phases.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">Filtrar por Fase:</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant={!selectedPhase ? 'primary' : 'secondary'}
                      className="cursor-pointer"
                      onClick={() => setSelectedPhase(null)}
                    >
                      Todas
                    </Badge>
                    {phases.map((phase) => (
                      <Badge
                        key={phase}
                        variant={selectedPhase === phase ? 'primary' : 'secondary'}
                        className="cursor-pointer"
                        onClick={() => setSelectedPhase(phase)}
                      >
                        {phase}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Therapeutic Area Filter */}
              {areas.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">Filtrar por Área Terapéutica:</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant={!selectedArea ? 'primary' : 'secondary'}
                      className="cursor-pointer"
                      onClick={() => setSelectedArea(null)}
                    >
                      Todas
                    </Badge>
                    {areas.map((area) => (
                      <Badge
                        key={area}
                        variant={selectedArea === area ? 'primary' : 'secondary'}
                        className="cursor-pointer"
                        onClick={() => setSelectedArea(area)}
                      >
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

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

          {/* Studies List */}
          {!isLoading && filteredStudies.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                {studies.length === 0
                  ? 'No hay estudios activos en este momento. Por favor vuelva más tarde.'
                  : 'No se encontraron estudios con los filtros seleccionados.'}
              </p>
            </div>
          )}

          {!isLoading && filteredStudies.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredStudies.map((study) => {
                const title = locale === 'es' ? study.title_es : study.title_en
                const description = locale === 'es' ? study.description_es : study.description_en
                const therapeuticArea = locale === 'es' ? study.therapeuticArea_es : study.therapeuticArea_en
                const inclusions = locale === 'es' ? study.inclusions_es : study.inclusions_en
                const exclusions = locale === 'es' ? study.exclusions_es : study.exclusions_en

                return (
                  <Card key={study.id} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant="primary">{study.phase}</Badge>
                      <Badge variant="secondary">{therapeuticArea}</Badge>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                    <p className="text-gray-600 mb-4">{description}</p>

                    {/* Inclusion Criteria */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                        Criterios de Inclusión:
                      </h4>
                      <ul className="space-y-1">
                        {inclusions.slice(0, 3).map((criterion, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="text-primary-600 mr-2">✓</span>
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

                    {/* Exclusion Criteria */}
                    {exclusions && exclusions.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                          Criterios de Exclusión:
                        </h4>
                        <ul className="space-y-1">
                          {exclusions.slice(0, 2).map((criterion, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                              <span className="text-red-500 mr-2">✗</span>
                              <span>{criterion}</span>
                            </li>
                          ))}
                          {exclusions.length > 2 && (
                            <li className="text-sm text-gray-500 ml-4">
                              + {exclusions.length - 2} criterios más...
                            </li>
                          )}
                        </ul>
                      </div>
                    )}

                    <Button href="/contacto" variant="primary" className="w-full mt-4">
                      Aplicar a este Estudio
                    </Button>
                  </Card>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Beneficios de Participar
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Atención Médica Especializada</h3>
                <p className="text-gray-600 text-sm">
                  Seguimiento cercano por médicos especialistas
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💊</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Acceso a Nuevos Tratamientos</h3>
                <p className="text-gray-600 text-sm">
                  Medicamentos en investigación sin costo
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Exámenes sin Costo</h3>
                <p className="text-gray-600 text-sm">
                  Laboratorios y estudios relacionados al estudio
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-50">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Tiene preguntas sobre algún estudio?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Nuestro equipo de coordinadores está disponible para responder sus dudas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contacto" variant="primary" size="lg">
              Contactar Coordinador
            </Button>
            <Button href="/pacientes/informacion" variant="secondary" size="lg">
              Información para Pacientes
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
