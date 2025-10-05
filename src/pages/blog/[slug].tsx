'use client'

import { useRouter } from 'next/router'
import PageLayout from '@/components/PageLayout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { db } from '@/lib/instantdb'
import { useCustomTranslation } from '@/lib/i18n'
import { ClockIcon, CalendarIcon, UserIcon, TagIcon, ShareIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function BlogPostPage() {
  const router = useRouter()
  const { slug } = router.query
  const { locale } = useCustomTranslation()

  // Query the specific blog post from InstantDB
  const { data, isLoading } = db.useQuery({
    blogPosts: {
      $: {
        where: { slug: slug as string }
      }
    },
    blogAuthors: {},
    blogCategories: {}
  })

  const post = data?.blogPosts?.[0]
  const author = data?.blogAuthors?.find(a => a.id === post?.authorId)
  const category = data?.blogCategories?.find(c => c.id === post?.categoryId)

  // Get related posts
  const { data: relatedData } = db.useQuery({
    blogPosts: {
      $: {
        where: {
          status: 'published',
          categoryId: post?.categoryId || ''
        },
        limit: 3
      }
    }
  })

  const relatedPosts = relatedData?.blogPosts?.filter(p => p.id !== post?.id) || []

  if (isLoading) {
    return (
      <PageLayout
        title="Cargando..."
        description="Cargando artículo del blog"
        breadcrumbs={[
          { label: 'Blog', href: '/blog' },
          { label: 'Cargando...' }
        ]}
      >
        <section className="section-padding bg-white">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-3/4 mb-4" />
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-8" />
                <div className="h-64 bg-gray-200 rounded mb-8" />
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded" />
                  <div className="h-4 bg-gray-200 rounded" />
                  <div className="h-4 bg-gray-200 rounded w-5/6" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    )
  }

  if (!post) {
    return (
      <PageLayout
        title="Artículo No Encontrado"
        description="El artículo que busca no existe"
        breadcrumbs={[
          { label: 'Blog', href: '/blog' },
          { label: 'No Encontrado' }
        ]}
      >
        <section className="section-padding bg-white">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Artículo No Encontrado
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                El artículo que busca no existe o ha sido eliminado.
              </p>
              <Button href="/blog" variant="primary">
                <ArrowLeftIcon className="w-5 h-5 mr-2" />
                Volver al Blog
              </Button>
            </div>
          </div>
        </section>
      </PageLayout>
    )
  }

  const title = locale === 'es' ? post.title_es : post.title_en
  const content = locale === 'es' ? post.content_es : post.content_en
  const excerpt = locale === 'es' ? post.excerpt_es : post.excerpt_en
  const categoryName = locale === 'es' ? category?.name_es : category?.name_en

  return (
    <PageLayout
      title={title}
      description={excerpt}
      breadcrumbs={[
        { label: 'Blog', href: '/blog' },
        { label: categoryName || 'Artículo' }
      ]}
    >
      {/* Back to Blog */}
      <section className="bg-gray-50 py-4">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <Button href="/blog" variant="secondary" size="sm">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Volver al Blog
          </Button>
        </div>
      </section>

      {/* Article Header */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <article className="max-w-4xl mx-auto">
            {/* Category Badge */}
            {category && (
              <Badge variant="primary" className="mb-4">
                {categoryName}
              </Badge>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
              {author && (
                <div className="flex items-center">
                  <UserIcon className="w-5 h-5 mr-2" />
                  <span>{author.name}</span>
                </div>
              )}
              <div className="flex items-center">
                <CalendarIcon className="w-5 h-5 mr-2" />
                <span>{new Date(post.publishedAt).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="w-5 h-5 mr-2" />
                <span>{post.readTime} min lectura</span>
              </div>
              <button className="flex items-center text-primary-600 hover:text-primary-700 ml-auto">
                <ShareIcon className="w-5 h-5 mr-2" />
                <span>Compartir</span>
              </button>
            </div>

            {/* Featured Image */}
            {post.featuredImage && (
              <div className="mb-12">
                <img
                  src={post.featuredImage}
                  alt={title}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            )}

            {/* Excerpt */}
            <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mb-12">
              <p className="text-xl text-gray-700 leading-relaxed">
                {excerpt}
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-gray-200">
                <TagIcon className="w-5 h-5 text-gray-400 mr-2" />
                {post.tags.map((tag: string, idx: number) => (
                  <Badge key={idx} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Author Bio */}
            {author && (
              <Card className="p-8 bg-gray-50">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Sobre el Autor
                </h3>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <UserIcon className="w-8 h-8 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{author.name}</h4>
                    <p className="text-gray-600 mb-3">{author.title}</p>
                    <p className="text-gray-700">{author.bio}</p>
                  </div>
                </div>
              </Card>
            )}
          </article>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Artículos Relacionados
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => {
                  const relatedTitle = locale === 'es' ? relatedPost.title_es : relatedPost.title_en
                  const relatedExcerpt = locale === 'es' ? relatedPost.excerpt_es : relatedPost.excerpt_en

                  return (
                    <Card key={relatedPost.id} className="p-6 hover:shadow-lg transition-shadow">
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                        {relatedTitle}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {relatedExcerpt}
                      </p>
                      <Button
                        href={`/blog/${relatedPost.slug}`}
                        variant="secondary"
                        size="sm"
                        className="w-full"
                      >
                        Leer Más
                      </Button>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Le gustó este artículo?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Suscríbase a nuestro newsletter para recibir más contenido científico
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/blog" variant="secondary" size="lg">
                Ver Más Artículos
              </Button>
              <Button href="/contacto" variant="primary" size="lg">
                Contactar
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
