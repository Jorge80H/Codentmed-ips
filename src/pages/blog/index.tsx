import type { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import {
  Newspaper,
  Clock,
  User,
  Tag,
  ArrowRight,
  Search,
  Calendar,
  Sparkles,
  Heart
} from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

// Sample blog posts data - In production, this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    slug: 'avances-investigacion-artritis-reumatoide',
    titleEs: 'Avances en Investigación Clínica: Nuevos Tratamientos para Artritis Reumatoide',
    titleEn: 'Advances in Clinical Research: New Treatments for Rheumatoid Arthritis',
    excerptEs: 'Descubra los últimos avances en el tratamiento de la artritis reumatoide a través de estudios clínicos internacionales.',
    excerptEn: 'Discover the latest advances in rheumatoid arthritis treatment through international clinical studies.',
    author: 'Dr. Wilson Bautista',
    date: '2025-01-15',
    categoryEs: 'Investigación Clínica',
    categoryEn: 'Clinical Research',
    tagsEs: ['Reumatología', 'Investigación', 'Artritis'],
    tagsEn: ['Rheumatology', 'Research', 'Arthritis'],
    readTime: '5',
    featured: true
  },
  {
    id: 2,
    slug: 'integracion-medico-odontologica',
    titleEs: 'Integración Médico-Odontológica: Enfoque Holístico en Salud',
    titleEn: 'Medical-Dental Integration: Holistic Health Approach',
    excerptEs: 'La importancia del seguimiento interdisciplinario entre medicina y odontología para una atención integral.',
    excerptEn: 'The importance of interdisciplinary follow-up between medicine and dentistry for comprehensive care.',
    author: 'Dra. Sonia Unriza',
    date: '2025-01-10',
    categoryEs: 'Atención Médica',
    categoryEn: 'Medical Care',
    tagsEs: ['Odontología', 'Medicina Integral', 'Salud Oral'],
    tagsEn: ['Dentistry', 'Integral Medicine', 'Oral Health'],
    readTime: '4',
    featured: false
  },
  {
    id: 3,
    slug: 'colombia-hub-investigacion-latinoamerica',
    titleEs: 'Colombia como Hub de Investigación Clínica en Latinoamérica',
    titleEn: 'Colombia as a Clinical Research Hub in Latin America',
    excerptEs: 'Las ventajas competitivas que posicionan a Colombia como destino preferido para estudios clínicos.',
    excerptEn: 'The competitive advantages that position Colombia as a preferred destination for clinical studies.',
    author: 'Equipo CODENTMED',
    date: '2025-01-05',
    categoryEs: 'Industria',
    categoryEn: 'Industry',
    tagsEs: ['Colombia', 'Investigación', 'Latinoamérica'],
    tagsEn: ['Colombia', 'Research', 'Latin America'],
    readTime: '6',
    featured: true
  },
  {
    id: 4,
    slug: 'participacion-estudios-clinicos-beneficios',
    titleEs: 'Participación en Estudios Clínicos: Beneficios y Consideraciones',
    titleEn: 'Clinical Trial Participation: Benefits and Considerations',
    excerptEs: 'Todo lo que necesita saber sobre la participación en estudios clínicos y sus beneficios.',
    excerptEn: 'Everything you need to know about clinical trial participation and its benefits.',
    author: 'Dr. Wilson Bautista',
    date: '2024-12-28',
    categoryEs: 'Educación Pacientes',
    categoryEn: 'Patient Education',
    tagsEs: ['Pacientes', 'Estudios Clínicos', 'Educación'],
    tagsEn: ['Patients', 'Clinical Trials', 'Education'],
    readTime: '7',
    featured: false
  },
  {
    id: 5,
    slug: 'innovaciones-odontologia-digital',
    titleEs: 'Innovaciones en Odontología Digital: El Futuro de la Salud Oral',
    titleEn: 'Digital Dentistry Innovations: The Future of Oral Health',
    excerptEs: 'Exploramos las últimas tecnologías digitales que están revolucionando la odontología.',
    excerptEn: 'We explore the latest digital technologies revolutionizing dentistry.',
    author: 'Dra. Sonia Unriza',
    date: '2024-12-20',
    categoryEs: 'Tecnología',
    categoryEn: 'Technology',
    tagsEs: ['Odontología Digital', 'Tecnología', 'Innovación'],
    tagsEn: ['Digital Dentistry', 'Technology', 'Innovation'],
    readTime: '5',
    featured: false
  },
  {
    id: 6,
    slug: 'telemedicina-era-post-pandemia',
    titleEs: 'Telemedicina en la Era Post-Pandemia: Oportunidades y Desafíos',
    titleEn: 'Telemedicine in the Post-Pandemic Era: Opportunities and Challenges',
    excerptEs: 'Cómo la telemedicina ha evolucionado y cuáles son las perspectivas futuras.',
    excerptEn: 'How telemedicine has evolved and what the future perspectives are.',
    author: 'Equipo CODENTMED',
    date: '2024-12-15',
    categoryEs: 'Telemedicina',
    categoryEn: 'Telemedicine',
    tagsEs: ['Telemedicina', 'Tecnología', 'Salud Digital'],
    tagsEn: ['Telemedicine', 'Technology', 'Digital Health'],
    readTime: '8',
    featured: false
  }
]

export default function BlogPage() {
  const { t, language } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'all', es: 'Todos', en: 'All' },
    { id: 'research', es: 'Investigación Clínica', en: 'Clinical Research' },
    { id: 'care', es: 'Atención Médica', en: 'Medical Care' },
    { id: 'industry', es: 'Industria', en: 'Industry' },
    { id: 'education', es: 'Educación Pacientes', en: 'Patient Education' },
    { id: 'technology', es: 'Tecnología', en: 'Technology' }
  ]

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <>
      <Head>
        <title>{t('Blog Médico', 'Medical Blog')} - CODENTMED IPS</title>
        <meta name="description" content={t(
          'Blog de CODENTMED IPS con artículos sobre investigación clínica, medicina, odontología y avances científicos.',
          'CODENTMED IPS blog with articles about clinical research, medicine, dentistry and scientific advances.'
        )} />
      </Head>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20 md:py-32">
          <div className="container-max">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Newspaper className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">
                  {t('Conocimiento Científico', 'Scientific Knowledge')}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {t('Blog Médico y Científico', 'Medical & Scientific Blog')}
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                {t(
                  'Artículos especializados sobre investigación clínica, medicina, odontología y los últimos avances científicos.',
                  'Specialized articles on clinical research, medicine, dentistry and the latest scientific advances.'
                )}
              </p>

              {/* Search Bar */}
              <div className="relative max-w-md">
                <input
                  type="text"
                  placeholder={t('Buscar artículos...', 'Search articles...')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                />
                <Search className="w-5 h-5 text-muted-foreground absolute left-4 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-10 shadow-sm">
          <div className="container-max py-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {t(category.es, category.en)}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="section-padding">
          <div className="container-max">
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">
                  {t('Artículos Destacados', 'Featured Articles')}
                </h2>
              </div>
              <p className="text-muted-foreground">
                {t('Los artículos más importantes de nuestro blog', 'The most important articles from our blog')}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {featuredPosts.map((post) => {
                const title = language === 'es' ? post.titleEs : post.titleEn
                const excerpt = language === 'es' ? post.excerptEs : post.excerptEn
                const category = language === 'es' ? post.categoryEs : post.categoryEn

                return (
                  <Card key={post.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="w-full h-56 bg-gradient-to-br from-primary/20 via-primary/10 to-background flex items-center justify-center border-b border-card-border">
                      <Newspaper className="w-16 h-16 text-primary/40" />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US')}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime} min
                        </div>
                      </div>

                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                        {category}
                      </span>

                      <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {title}
                        </Link>
                      </h3>

                      <p className="text-muted-foreground mb-4">
                        {excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                        >
                          {t('Leer más', 'Read more')}
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Regular Posts Grid */}
        <section className="bg-muted/30 section-padding">
          <div className="container-max">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                {t('Todos los Artículos', 'All Articles')}
              </h2>
              <p className="text-muted-foreground">
                {t('Explore todo nuestro contenido médico y científico', 'Explore all our medical and scientific content')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => {
                const title = language === 'es' ? post.titleEs : post.titleEn
                const excerpt = language === 'es' ? post.excerptEs : post.excerptEn
                const category = language === 'es' ? post.categoryEs : post.categoryEn
                const tags = language === 'es' ? post.tagsEs : post.tagsEn

                return (
                  <Card key={post.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="w-full h-48 bg-gradient-to-br from-muted to-background flex items-center justify-center border-b border-card-border">
                      <Newspaper className="w-12 h-12 text-muted-foreground/40" />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(post.date).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US')}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime} min
                        </div>
                      </div>

                      <span className="inline-block px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full mb-3">
                        {category}
                      </span>

                      <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        <Link href={`/blog/${post.slug}`}>
                          {title}
                        </Link>
                      </h3>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {excerpt}
                      </p>

                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <User className="w-3 h-3 mr-1" />
                          {post.author}
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-primary hover:text-primary/80 font-medium text-sm inline-flex items-center"
                        >
                          {t('Leer más', 'Read more')}
                          <ArrowRight className="ml-1 w-3 h-3" />
                        </Link>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 pt-3 border-t border-border">
                        {tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2 py-1 text-xs text-muted-foreground bg-muted/50 rounded"
                          >
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <Button variant="secondary" size="lg" className="inline-flex items-center">
                {t('Cargar Más Artículos', 'Load More Articles')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="bg-primary text-primary-foreground section-padding">
          <div className="container-max text-center">
            <div className="max-w-2xl mx-auto">
              <Heart className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                {t('Suscríbase a Nuestro Newsletter', 'Subscribe to Our Newsletter')}
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                {t(
                  'Reciba las últimas actualizaciones médicas y científicas directamente en su correo',
                  'Receive the latest medical and scientific updates directly in your email'
                )}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={t('Su correo electrónico', 'Your email address')}
                  className="flex-1 px-4 py-3 rounded-lg text-foreground bg-background border border-input focus:ring-2 focus:ring-primary-foreground focus:outline-none"
                />
                <Button variant="secondary" size="lg" className="px-6">
                  {t('Suscribirse', 'Subscribe')}
                </Button>
              </div>
              <p className="text-sm text-primary-foreground/80 mt-4">
                {t('* No compartiremos su información personal', '* We will not share your personal information')}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-max">
            <Card className="p-12 text-center bg-gradient-to-br from-primary/5 to-background">
              <Newspaper className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {t('¿Interesado en Participar en Investigación?', 'Interested in Participating in Research?')}
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t(
                  'Descubra cómo puede contribuir al avance de la ciencia médica y acceder a tratamientos innovadores',
                  'Discover how you can contribute to medical science advancement and access innovative treatments'
                )}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/pacientes/estudios-disponibles" variant="default" size="lg">
                  {t('Ver Estudios Disponibles', 'View Available Studies')}
                </Button>
                <Button href="/contacto" variant="secondary" size="lg">
                  {t('Contactar', 'Contact Us')}
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'es', ['common'])),
    },
  }
}
