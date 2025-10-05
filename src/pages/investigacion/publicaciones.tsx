'use client'

import { useState } from 'react'
import PageLayout from '@/components/PageLayout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { AcademicCapIcon, DocumentTextIcon, PresentationChartBarIcon } from '@heroicons/react/24/outline'

type PublicationType = 'article' | 'congress' | 'poster' | 'collaboration' | null

const publications = [
  {
    type: 'article' as const,
    title: 'Relación entre enfermedad periodontal y artritis reumatoide: revisión sistemática',
    authors: 'Bautista W., Unriza S., et al.',
    journal: 'Revista Colombiana de Reumatología',
    year: 2023,
    citation: 'Rev Colomb Reumatol. 2023;30(2):145-156',
    abstract: 'Estudio sobre la conexión bidireccional entre enfermedad periodontal y artritis reumatoide, analizando marcadores inflamatorios compartidos.',
    keywords: ['Artritis Reumatoide', 'Enfermedad Periodontal', 'Biomarcadores'],
    link: '#'
  },
  {
    type: 'article' as const,
    title: 'Efectividad de terapias biológicas en población colombiana con artritis reumatoide',
    authors: 'Bautista W., Martínez J., López M.',
    journal: 'Journal of Clinical Rheumatology',
    year: 2023,
    citation: 'J Clin Rheumatol. 2023;29(4):201-209',
    abstract: 'Análisis de efectividad y seguridad de terapias biológicas anti-TNF en pacientes colombianos con artritis reumatoide.',
    keywords: ['Terapias Biológicas', 'Anti-TNF', 'Artritis Reumatoide'],
    link: '#'
  },
  {
    type: 'congress' as const,
    title: 'Experiencia en estudios clínicos fase III en reumatología en Colombia',
    authors: 'Bautista W.',
    event: 'Congreso Panamericano de Reumatología',
    year: 2022,
    location: 'Buenos Aires, Argentina',
    abstract: 'Presentación de la experiencia de CODENTMED IPS en la conducción de estudios clínicos fase III en reumatología.',
    keywords: ['Investigación Clínica', 'Fase III', 'Reumatología'],
    link: '#'
  },
  {
    type: 'poster' as const,
    title: 'Biomarcadores salivales en pacientes con lupus eritematoso sistémico',
    authors: 'Unriza S., Bautista W., Rodríguez A.',
    event: 'Congreso Colombiano de Reumatología',
    year: 2022,
    location: 'Cartagena, Colombia',
    abstract: 'Evaluación de biomarcadores salivales como indicadores de actividad de enfermedad en LES.',
    keywords: ['Lupus', 'Biomarcadores', 'Saliva'],
    link: '#'
  },
  {
    type: 'collaboration' as const,
    title: 'Red Latinoamericana de Investigación en Enfermedades Autoinmunes',
    institution: 'Universidades de Colombia, México, Argentina y Chile',
    year: 2021,
    description: 'Colaboración multicéntrica para estudios epidemiológicos y genéticos en enfermedades autoinmunes en población latina.',
    role: 'Centro coordinador para Colombia',
    link: '#'
  },
  {
    type: 'article' as const,
    title: 'Actualización en el manejo de espondiloartritis: guías colombianas 2021',
    authors: 'Bautista W., et al. (Grupo Colombiano de Estudio de Espondiloartritis)',
    journal: 'Revista Colombiana de Reumatología',
    year: 2021,
    citation: 'Rev Colomb Reumatol. 2021;28(3):198-220',
    abstract: 'Guías de práctica clínica colombianas para el diagnóstico y tratamiento de espondiloartritis.',
    keywords: ['Espondiloartritis', 'Guías Clínicas', 'Colombia'],
    link: '#'
  }
]

const publicationTypes = [
  { value: 'article', label: 'Artículos Científicos', icon: DocumentTextIcon },
  { value: 'congress', label: 'Congresos', icon: PresentationChartBarIcon },
  { value: 'poster', label: 'Posters', icon: PresentationChartBarIcon },
  { value: 'collaboration', label: 'Colaboraciones', icon: AcademicCapIcon }
]

export default function PublicacionesPage() {
  const [selectedType, setSelectedType] = useState<PublicationType>(null)
  const [selectedYear, setSelectedYear] = useState<number | null>(null)

  // Get unique years
  const years = Array.from(new Set(publications.map(p => p.year))).sort((a, b) => b - a)

  // Filter publications
  const filteredPublications = publications.filter(pub => {
    const typeMatch = !selectedType || pub.type === selectedType
    const yearMatch = !selectedYear || pub.year === selectedYear
    return typeMatch && yearMatch
  })

  return (
    <PageLayout
      title="Publicaciones Científicas"
      description="Investigaciones, publicaciones y contribuciones científicas de CODENTMED IPS al conocimiento médico."
      breadcrumbs={[
        { label: 'Investigación', href: '/investigacion/estudios-activos' },
        { label: 'Publicaciones' }
      ]}
      hero={{
        title: 'Publicaciones Científicas',
        subtitle: 'Compromiso con el avance del conocimiento médico y la investigación clínica'
      }}
    >
      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              CODENTMED IPS contribuye activamente a la comunidad científica mediante publicaciones en revistas
              indexadas, presentaciones en congresos nacionales e internacionales, y colaboraciones académicas
              con instituciones de prestigio.
            </p>
          </div>
        </div>
      </section>

      {/* Publication Types */}
      <section className="section-padding bg-gray-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestras Contribuciones
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Más de 50 publicaciones científicas y presentaciones en los últimos 5 años
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {publicationTypes.map((type) => (
              <Card
                key={type.value}
                className={`p-6 text-center cursor-pointer transition-all ${
                  selectedType === type.value
                    ? 'ring-2 ring-primary-600 shadow-lg'
                    : 'hover:shadow-md'
                }`}
                onClick={() => setSelectedType(selectedType === type.value ? null : type.value as PublicationType)}
              >
                <type.icon className="w-10 h-10 text-primary-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">{type.label}</h3>
              </Card>
            ))}
          </div>

          {/* Year Filter */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-700 mb-3 text-center">Filtrar por Año:</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge
                variant={!selectedYear ? 'primary' : 'secondary'}
                className="cursor-pointer"
                onClick={() => setSelectedYear(null)}
              >
                Todos
              </Badge>
              {years.map((year) => (
                <Badge
                  key={year}
                  variant={selectedYear === year ? 'primary' : 'secondary'}
                  className="cursor-pointer"
                  onClick={() => setSelectedYear(year)}
                >
                  {year}
                </Badge>
              ))}
            </div>
          </div>

          {/* Publications List */}
          <div className="space-y-6">
            {filteredPublications.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No se encontraron publicaciones con los filtros seleccionados.
                </p>
              </div>
            )}

            {filteredPublications.map((pub, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="primary">
                      {pub.type === 'article' && 'Artículo'}
                      {pub.type === 'congress' && 'Congreso'}
                      {pub.type === 'poster' && 'Poster'}
                      {pub.type === 'collaboration' && 'Colaboración'}
                    </Badge>
                    <Badge variant="secondary">{pub.year}</Badge>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{pub.title}</h3>

                <p className="text-gray-700 mb-2">
                  <strong>Autores:</strong> {pub.authors}
                </p>

                {pub.type === 'article' && (
                  <>
                    <p className="text-gray-700 mb-2">
                      <strong>Revista:</strong> {pub.journal}
                    </p>
                    <p className="text-gray-600 text-sm mb-3 italic">{pub.citation}</p>
                  </>
                )}

                {(pub.type === 'congress' || pub.type === 'poster') && (
                  <>
                    <p className="text-gray-700 mb-2">
                      <strong>Evento:</strong> {pub.event}
                    </p>
                    <p className="text-gray-600 mb-3">
                      <strong>Lugar:</strong> {pub.location}
                    </p>
                  </>
                )}

                {pub.type === 'collaboration' && (
                  <>
                    <p className="text-gray-700 mb-2">
                      <strong>Institución:</strong> {pub.institution}
                    </p>
                    <p className="text-gray-600 mb-3">
                      <strong>Rol:</strong> {pub.role}
                    </p>
                  </>
                )}

                <p className="text-gray-600 mb-4">
                  {pub.type === 'collaboration' ? pub.description : pub.abstract}
                </p>

                {pub.keywords && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.keywords.map((keyword, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                )}

                <Button href={pub.link} variant="secondary" size="sm">
                  Ver Publicación
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Áreas de Investigación Prioritarias
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Reumatología e Inmunología
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Artritis reumatoide y espondiloartritis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Terapias biológicas y biosimilares</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Biomarcadores de actividad de enfermedad</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Salud Oral y Sistémica
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Interacción periodoncia-enfermedades sistémicas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Biomarcadores salivales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Materiales dentales y biocompatibilidad</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Farmacología Clínica
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Farmacocinética y farmacodinamia</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Estudios de bioequivalencia</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Farmacovigilancia y seguridad</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Salud Pública
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Epidemiología de enfermedades crónicas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Acceso a medicamentos innovadores</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Farmacoeconomía</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Partnerships */}
      <section className="section-padding bg-primary-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Colaboraciones Académicas
            </h2>

            <Card className="p-8">
              <p className="text-gray-700 mb-6">
                CODENTMED IPS mantiene colaboraciones activas con instituciones académicas nacionales e
                internacionales para el desarrollo de investigación de alto impacto:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Nacionales:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Universidad Nacional de Colombia</li>
                    <li>• Universidad de Antioquia</li>
                    <li>• Universidad del Rosario</li>
                    <li>• Asociación Colombiana de Reumatología</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Internacionales:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• PANLAR (Liga Panamericana de Reumatología)</li>
                    <li>• ACR (American College of Rheumatology)</li>
                    <li>• EULAR (European League Against Rheumatism)</li>
                    <li>• Universidades de Argentina, México y Chile</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Interesado en colaborar en investigación?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Explore oportunidades de colaboración académica y científica con nuestro equipo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contacto"
              variant="primary"
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              Contactar Equipo Científico
            </Button>
            <Button
              href="/investigacion/areas-terapeuticas"
              variant="secondary"
              size="lg"
              className="border-white text-white hover:bg-primary-700"
            >
              Ver Áreas Terapéuticas
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
