import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { db } from '@/lib/instantdb'
import { useLanguage } from '@/contexts/LanguageContext'
import { Clock, Calendar, User, Tag, Share, ArrowLeft, Newspaper } from 'lucide-react'

export default function BlogPostPage() {
  const router = useRouter()
  const { slug } = router.query
  const { t, language } = useLanguage()

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
      <>
        <Head>
          <title>{t('Cargando...', 'Loading...')} - CODENTMED IPS</title>
        </Head>

        <div className="min-h-screen bg-background">
          <section className="section-padding">
            <div className="container-max">
              <div className="max-w-4xl mx-auto">
                <div className="animate-pulse">
                  <div className="h-8 bg-muted rounded w-3/4 mb-4" />
                  <div className="h-4 bg-muted rounded w-1/2 mb-8" />
                  <div className="h-64 bg-muted rounded mb-8" />
                  <div className="space-y-3">
                    <div className="h-4 bg-muted rounded" />
                    <div className="h-4 bg-muted rounded" />
                    <div className="h-4 bg-muted rounded w-5/6" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    )
  }

  if (!post) {
    return (
      <>
        <Head>
          <title>{t('Artículo No Encontrado', 'Article Not Found')} - CODENTMED IPS</title>
        </Head>

        <div className="min-h-screen bg-background">
          <section className="section-padding">
            <div className="container-max">
              <div className="max-w-4xl mx-auto text-center">
                <Newspaper className="w-16 h-16 mx-auto mb-6 text-muted-foreground" />
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  {t('Artículo No Encontrado', 'Article Not Found')}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {t(
                    'El artículo que busca no existe o ha sido eliminado.',
                    'The article you are looking for does not exist or has been removed.'
                  )}
                </p>
                <Button href="/blog" variant="default" size="lg">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  {t('Volver al Blog', 'Back to Blog')}
                </Button>
              </div>
            </div>
          </section>
        </div>
      </>
    )
  }

  const title = language === 'es' ? post.title_es : post.title_en
  const content = language === 'es' ? post.content_es : post.content_en
  const excerpt = language === 'es' ? post.excerpt_es : post.excerpt_en
  const categoryName = language === 'es' ? category?.name_es : category?.name_en

  return (
    <>
      <Head>
        <title>{title} - CODENTMED IPS</title>
        <meta name="description" content={excerpt} />
      </Head>

      <div className="min-h-screen bg-background">
        {/* Back to Blog */}
        <section className="bg-muted/30 py-4 border-b border-border">
          <div className="container-max">
            <Button href="/blog" variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('Volver al Blog', 'Back to Blog')}
            </Button>
          </div>
        </section>

        {/* Article Header */}
        <section className="section-padding">
          <div className="container-max">
            <article className="max-w-4xl mx-auto">
              {/* Category Badge */}
              {category && (
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {categoryName}
                  </span>
                </div>
              )}

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 pb-8 border-b border-border">
                {author && (
                  <div className="flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    <span>{author.name}</span>
                  </div>
                )}
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{new Date(post.publishedAt).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{post.readTime} {t('min lectura', 'min read')}</span>
                </div>
                <button className="flex items-center text-primary hover:text-primary/80 ml-auto">
                  <Share className="w-5 h-5 mr-2" />
                  <span>{t('Compartir', 'Share')}</span>
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
              <div className="bg-primary/5 border-l-4 border-primary p-6 mb-12 rounded-r-lg">
                <p className="text-xl text-foreground leading-relaxed">
                  {excerpt}
                </p>
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none mb-12 dark:prose-invert">
                <div
                  dangerouslySetInnerHTML={{ __html: content }}
                  className="text-foreground"
                />
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-border">
                  <Tag className="w-5 h-5 text-muted-foreground mr-2" />
                  {post.tags.map((tag: string, idx: number) => (
                    <span
                      key={idx}
                      className="inline-block px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Author Bio */}
              {author && (
                <Card className="p-8 bg-muted/30">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {t('Sobre el Autor', 'About the Author')}
                  </h3>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{author.name}</h4>
                      <p className="text-muted-foreground mb-3">{author.title}</p>
                      <p className="text-foreground">{author.bio}</p>
                    </div>
                  </div>
                </Card>
              )}
            </article>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="section-padding bg-muted/30">
            <div className="container-max">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  {t('Artículos Relacionados', 'Related Articles')}
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => {
                    const relatedTitle = language === 'es' ? relatedPost.title_es : relatedPost.title_en
                    const relatedExcerpt = language === 'es' ? relatedPost.excerpt_es : relatedPost.excerpt_en

                    return (
                      <Card key={relatedPost.id} className="p-6 hover:shadow-lg transition-shadow">
                        <h3 className="font-semibold text-card-foreground mb-2 line-clamp-2">
                          {relatedTitle}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                          {relatedExcerpt}
                        </p>
                        <Button
                          href={`/blog/${relatedPost.slug}`}
                          variant="secondary"
                          size="sm"
                          className="w-full"
                        >
                          {t('Leer Más', 'Read More')}
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
        <section className="section-padding">
          <div className="container-max text-center">
            <div className="max-w-2xl mx-auto">
              <Newspaper className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {t('¿Le gustó este artículo?', 'Did you like this article?')}
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                {t(
                  'Suscríbase a nuestro newsletter para recibir más contenido científico',
                  'Subscribe to our newsletter to receive more scientific content'
                )}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/blog" variant="secondary" size="lg">
                  {t('Ver Más Artículos', 'View More Articles')}
                </Button>
                <Button href="/contacto" variant="default" size="lg">
                  {t('Contactar', 'Contact Us')}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
