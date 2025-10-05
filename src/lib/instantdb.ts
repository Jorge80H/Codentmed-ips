import { init } from '@instantdb/react'

// Schema for InstantDB
interface Schema {
  heroSlides: {
    id: string
    title_es: string
    title_en: string
    description_es: string
    description_en: string
    imageUrl: string
    linkUrl?: string
    linkText_es?: string
    linkText_en?: string
    order: number
    isActive: boolean
    createdAt: number
    updatedAt: number
  }
  blogPosts: {
    id: string
    title_es: string
    title_en: string
    slug_es: string
    slug_en: string
    content_es: string
    content_en: string
    excerpt_es: string
    excerpt_en: string
    featuredImage: string
    authorId: string
    categoryId: string
    tags: string[]
    status: 'draft' | 'published' | 'scheduled'
    publishedAt?: number
    scheduledFor?: number
    createdAt: number
    updatedAt: number
  }
  blogCategories: {
    id: string
    name_es: string
    name_en: string
    slug_es: string
    slug_en: string
    description_es?: string
    description_en?: string
  }
  blogAuthors: {
    id: string
    name: string
    email: string
    bio_es?: string
    bio_en?: string
    avatar?: string
    title_es?: string
    title_en?: string
  }
  clinicalStudies: {
    id: string
    title_es: string
    title_en: string
    description_es: string
    description_en: string
    phase: string
    therapeuticArea_es: string
    therapeuticArea_en: string
    inclusions_es: string[]
    inclusions_en: string[]
    exclusions_es: string[]
    exclusions_en: string[]
    status: 'recruiting' | 'active' | 'completed'
    startDate: number
    estimatedCompletion?: number
    createdAt: number
    updatedAt: number
  }
  contactSubmissions: {
    id: string
    name: string
    email: string
    phone?: string
    subject: string
    message: string
    type: 'general' | 'sponsor' | 'patient' | 'appointment'
    language: 'es' | 'en'
    createdAt: number
    status: 'new' | 'read' | 'replied'
  }
}

// Initialize InstantDB
const APP_ID = process.env.NEXT_PUBLIC_INSTANT_APP_ID || '2935a123-9c03-4e77-8072-d370920ae7fc'

export const db = init<Schema>({ appId: APP_ID })

// Helper functions for common queries
export const queries = {
  // Hero Slides
  getActiveSlides: () =>
    db.query({
      heroSlides: {
        $: {
          where: { isActive: true },
          order: { serverCreatedAt: 'asc' as const }
        }
      }
    }),

  // Blog Posts
  getPublishedPosts: () =>
    db.query({
      blogPosts: {
        $: {
          where: { status: 'published' },
          order: { publishedAt: 'desc' as const }
        }
      }
    }),

  getPostBySlug: (slug: string, locale: 'es' | 'en') =>
    db.query({
      blogPosts: {
        $: {
          where: locale === 'es' ? { slug_es: slug } : { slug_en: slug }
        }
      }
    }),

  // Clinical Studies
  getActiveStudies: () =>
    db.query({
      clinicalStudies: {
        $: {
          where: { status: 'recruiting' },
          order: { createdAt: 'desc' as const }
        }
      }
    }),

  // Blog Categories
  getAllCategories: () =>
    db.query({
      blogCategories: {}
    }),

  // Authors
  getAllAuthors: () =>
    db.query({
      blogAuthors: {}
    })
}

export type { Schema }
