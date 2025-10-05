import type { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Link from 'next/link'
import { 
  NewspaperIcon,
  ClockIcon,
  UserIcon,
  TagIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline'
import { useCustomTranslation } from '@/lib/i18n'
import Navigation from '@/components/Navigation'

// Sample blog posts data - In production, this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: 'Avances en Investigación Clínica: Nuevos Tratamientos para Artritis Reumatoide',
    excerpt: 'Descubra los últimos avances en el tratamiento de la artritis reumatoide a través de estudios clínicos internacionales.',
    content: 'Los recientes estudios clínicos han demostrado la eficacia de nuevos biológicos...',
    author: 'Dr. Wilson Bautista',
    date: '2025-01-15',
    category: 'Investigación Clínica',
    tags: ['Reumatología', 'Investigación', 'Artritis'],
    readTime: '5 min',
    featured: true,
    image: '/images/blog/arthritis-research.jpg'
  },
  {
    id: 2,
    title: 'Integración Médico-Odontológica: Enfoque Holístico en Salud',
    excerpt: 'La importancia del seguimiento interdisciplinario entre medicina y odontología para una atención integral.',
    content: 'La colaboración entre especialistas médicos y odontólogos permite...',
    author: 'Dra. Sonia Unriza',
    date: '2025-01-10',
    category: 'Atención Médica',
    tags: ['Odontología', 'Medicina Integral', 'Salud Oral'],
    readTime: '4 min',
    featured: false,
    image: '/images/blog/integrated-care.jpg'
  },
  {
    id: 3,
    title: 'Colombia como Hub de Investigación Clínica en Latinoamérica',
    excerpt: 'Las ventajas competitivas que posicionan a Colombia como destino preferido para estudios clínicos.',
    content: 'Colombia se ha consolidado como uno de los países más atractivos...',
    author: 'Equipo CODENTMED',
    date: '2025-01-05',
    category: 'Industria',
    tags: ['Colombia', 'Investigación', 'Latinoamérica'],
    readTime: '6 min',
    featured: true,
    image: '/images/blog/colombia-research.jpg'
  },
  {
    id: 4,
    title: 'Participación en Estudios Clínicos: Beneficios y Consideraciones',
    excerpt: 'Todo lo que necesita saber sobre la participación en estudios clínicos y sus beneficios.',
    content: 'Participar en un estudio clínico puede ofrecer acceso a tratamientos innovadores...',
    author: 'Dr. Wilson Bautista',
    date: '2024-12-28',
    category: 'Educación Pacientes',
    tags: ['Pacientes', 'Estudios Clínicos', 'Educación'],
    readTime: '7 min',
    featured: false,
    image: '/images/blog/clinical-trials-patients.jpg'
  },
  {
    id: 5,
    title: 'Innovaciones en Odontología Digital: El Futuro de la Salud Oral',
    excerpt: 'Exploramos las últimas tecnologías digitales que están revolucionando la odontología.',
    content: 'La digitalización en odontología ha transformado completamente...',
    author: 'Dra. Sonia Unriza',
    date: '2024-12-20',
    category: 'Tecnología',
    tags: ['Odontología Digital', 'Tecnología', 'Innovación'],
    readTime: '5 min',
    featured: false,
    image: '/images/blog/digital-dentistry.jpg'
  },
  {
    id: 6,
    title: 'Telemedicina en la Era Post-Pandemia: Oportunidades y Desafíos',
    excerpt: 'Cómo la telemedicina ha evolucionado y cuáles son las perspectivas futuras.',
    content: 'La pandemia aceleró la adopción de tecnologías de telemedicina...',
    author: 'Equipo CODENTMED',
    date: '2024-12-15',
    category: 'Telemedicina',
    tags: ['Telemedicina', 'Tecnología', 'Salud Digital'],
    readTime: '8 min',
    featured: false,
    image: '/images/blog/telemedicine.jpg'
  }
]

const categories = ['Todos', 'Investigación Clínica', 'Atención Médica', 'Industria', 'Educación Pacientes', 'Tecnología', 'Telemedicina']

export default function BlogPage() {
  const { t, locale } = useCustomTranslation()

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <>
      <Head>
        <title>{t('navigation.blog')} - {t('site.title')}</title>
        <meta name="description" content="Blog de CODENTMED IPS con artículos sobre investigación clínica, medicina, odontología y avances científicos." />
        <meta property="og:title" content={`${t('navigation.blog')} - ${t('site.title')}`} />
        <meta property="og:description" content="Blog de CODENTMED IPS con artículos sobre investigación clínica, medicina, odontología y avances científicos." />
        <meta property="og:locale" content={locale === 'es' ? 'es_CO' : 'en_US'} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${t('navigation.blog')} - ${t('site.title')}`} />
        <meta name="twitter:description" content="Blog de CODENTMED IPS con artículos sobre investigación clínica, medicina, odontología y avances científicos." />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navigation />

        {/* Hero Section */}
        <header className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative container-max section-padding">
            <div className="max-w-4xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <NewspaperIcon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    Blog Médico
                  </h1>
                  <p className="text-xl text-white text-opacity-90">
                    Conocimiento científico y actualidad médica
                  </p>
                </div>
              </div>
              <p className="text-lg text-white text-opacity-80 mb-8 max-w-2xl">
                Artículos especializados sobre investigación clínica, medicina, odontología y los últimos avances científicos.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
        </header>

        {/* Search and Filter Bar */}
        <section className="border-b bg-white sticky top-0 z-10 shadow-sm">
          <div className="container-max py-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      category === 'Todos'
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="section-padding">
          <div className="container-max">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Artículos Destacados</h2>
              <p className="text-gray-600">Los artículos más importantes de nuestro blog</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {featuredPosts.map((post) => (
                <article key={post.id} className="card group hover:shadow-lg transition-shadow">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-t-lg overflow-hidden">
                    <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-blue-100 flex items-center justify-center">
                      <NewspaperIcon className="h-12 w-12 text-primary-600" />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center">
                        <CalendarDaysIcon className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString('es-ES')}
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded-full mb-3">
                      {post.category}
                    </span>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      <Link href={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <UserIcon className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                      >
                        {t('buttons.read_more')}
                        <ArrowRightIcon className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Regular Posts Grid */}
        <section className="bg-gray-50 section-padding">
          <div className="container-max">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Todos los Artículos</h2>
              <p className="text-gray-600">Explore todo nuestro contenido médico y científico</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article key={post.id} className="card group hover:shadow-lg transition-shadow">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-t-lg overflow-hidden">
                    <div className="w-full h-40 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <NewspaperIcon className="h-8 w-8 text-gray-500" />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <div className="flex items-center">
                        <CalendarDaysIcon className="h-3 w-3 mr-1" />
                        {new Date(post.date).toLocaleDateString('es-ES')}
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full mb-3">
                      {post.category}
                    </span>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                      <Link href={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-gray-500">
                        <UserIcon className="h-3 w-3 mr-1" />
                        {post.author}
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center"
                      >
                        Leer más
                        <ArrowRightIcon className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mt-3 pt-3 border-t border-gray-100">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded"
                        >
                          <TagIcon className="h-3 w-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="btn-secondary inline-flex items-center justify-center">
                Cargar Más Artículos
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="bg-primary-600 text-white section-padding">
          <div className="container-max text-center">
            <div className="max-w-2xl mx-auto">
              <NewspaperIcon className="h-12 w-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                Suscríbase a Nuestro Newsletter
              </h2>
              <p className="text-xl text-primary-100 mb-8">
                Reciba las últimas actualizaciones médicas y científicas directamente en su correo
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Su correo electrónico"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                />
                <button className="btn-primary bg-white text-primary-600 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium">
                  Suscribirse
                </button>
              </div>
              <p className="text-sm text-primary-200 mt-4">
                * No compartiremos su información personal
              </p>
            </div>
          </div>
        </section>

        {/* Topics Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Temas Populares
              </h2>
              <p className="text-xl text-gray-600">
                Explore contenido por categorías de interés
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/blog?category=investigacion" className="card group hover:shadow-lg transition-all">
                <div className="card-body text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <NewspaperIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    Investigación Clínica
                  </h3>
                  <p className="text-sm text-gray-600">
                    8 artículos
                  </p>
                </div>
              </Link>

              <Link href="/blog?category=medicina" className="card group hover:shadow-lg transition-all">
                <div className="card-body text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <UserIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    Medicina General
                  </h3>
                  <p className="text-sm text-gray-600">
                    6 artículos
                  </p>
                </div>
              </Link>

              <Link href="/blog?category=odontologia" className="card group hover:shadow-lg transition-all">
                <div className="card-body text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <UserIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    Odontología
                  </h3>
                  <p className="text-sm text-gray-600">
                    4 artículos
                  </p>
                </div>
              </Link>

              <Link href="/blog?category=tecnologia" className="card group hover:shadow-lg transition-all">
                <div className="card-body text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <TagIcon className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    Tecnología Médica
                  </h3>
                  <p className="text-sm text-gray-600">
                    5 artículos
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white section-padding">
          <div className="container-max">
            <div className="text-center">
              <div className="mb-8">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">LOGO</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{t('site.title')}</h3>
                <p className="text-gray-400">
                  {t('site.footer_tagline')}
                </p>
              </div>
              
              <div className="border-t border-gray-800 pt-8">
                <p className="text-gray-400">
                  © 2025 {t('site.title')}. {locale === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
                </p>
              </div>
            </div>
          </div>
        </footer>
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