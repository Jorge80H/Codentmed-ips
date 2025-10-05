'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useCustomTranslation } from '@/lib/i18n'
import { db } from '@/lib/instantdb'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'

interface BlogPost {
  id: string
  title_es: string
  title_en: string
  slug_es: string
  slug_en: string
  excerpt_es: string
  excerpt_en: string
  featuredImage: string
  authorId: string
  categoryId: string
  tags: string[]
  status: 'draft' | 'published' | 'scheduled'
  publishedAt?: number
  createdAt: number
}

interface BlogListProps {
  limit?: number
  categoryId?: string
  showFilters?: boolean
}

export default function BlogList({ limit, categoryId, showFilters = true }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryId || null)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const { locale } = useCustomTranslation()

  // Query published blog posts
  const { data, isLoading } = db.useQuery({
    blogPosts: {
      $: {
        where: {
          status: 'published',
          ...(selectedCategory && { categoryId: selectedCategory })
        },
        order: { publishedAt: 'desc' as const },
        ...(limit && { limit })
      }
    },
    blogCategories: {},
    blogAuthors: {}
  })

  const posts = data?.blogPosts || []
  const categories = data?.blogCategories || []
  const authors = data?.blogAuthors || []

  // Get unique tags from all posts
  const allTags = Array.from(
    new Set(posts.flatMap((post) => post.tags))
  )

  // Filter posts by tag
  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts

  const getAuthor = (authorId: string) => {
    return authors.find((author) => author.id === authorId)
  }

  const getCategory = (categoryId: string) => {
    return categories.find((cat) => cat.id === categoryId)
  }

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="animate-pulse">
            <div className="aspect-video bg-gray-200 rounded-t-lg" />
            <div className="p-6 space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4" />
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
            </div>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div>
      {/* Filters */}
      {showFilters && (
        <div className="mb-8 space-y-4">
          {/* Category Filters */}
          {categories.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">
                {locale === 'es' ? 'Categorías' : 'Categories'}
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant={!selectedCategory ? 'primary' : 'secondary'}
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory(null)}
                >
                  {locale === 'es' ? 'Todas' : 'All'}
                </Badge>
                {categories.map((category) => (
                  <Badge
                    key={category.id}
                    variant={selectedCategory === category.id ? 'primary' : 'secondary'}
                    className="cursor-pointer"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {locale === 'es' ? category.name_es : category.name_en}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Tag Filters */}
          {allTags.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">
                {locale === 'es' ? 'Etiquetas' : 'Tags'}
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant={!selectedTag ? 'primary' : 'secondary'}
                  className="cursor-pointer"
                  onClick={() => setSelectedTag(null)}
                >
                  {locale === 'es' ? 'Todas' : 'All'}
                </Badge>
                {allTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTag === tag ? 'primary' : 'secondary'}
                    className="cursor-pointer"
                    onClick={() => setSelectedTag(tag)}
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Blog Posts Grid */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">
            {locale === 'es'
              ? 'No se encontraron artículos'
              : 'No articles found'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => {
            const title = locale === 'es' ? post.title_es : post.title_en
            const excerpt = locale === 'es' ? post.excerpt_es : post.excerpt_en
            const slug = locale === 'es' ? post.slug_es : post.slug_en
            const author = getAuthor(post.authorId)
            const category = getCategory(post.categoryId)

            return (
              <Link key={post.id} href={`/blog/${slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  {/* Featured Image */}
                  <div className="relative aspect-video">
                    <Image
                      src={post.featuredImage}
                      alt={title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    {/* Category */}
                    {category && (
                      <Badge variant="primary" size="sm">
                        {locale === 'es' ? category.name_es : category.name_en}
                      </Badge>
                    )}

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
                      {title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 line-clamp-3">{excerpt}</p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t">
                      <span>{author?.name || 'Unknown'}</span>
                      {post.publishedAt && (
                        <span>{formatDate(post.publishedAt)}</span>
                      )}
                    </div>

                    {/* Tags */}
                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 pt-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
