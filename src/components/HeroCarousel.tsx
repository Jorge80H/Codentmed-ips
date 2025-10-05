'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { useCustomTranslation } from '@/lib/i18n'
import { db } from '@/lib/instantdb'
import { Button } from './ui/Button'
import { motion, AnimatePresence } from 'framer-motion'

interface HeroSlide {
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
}

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slides, setSlides] = useState<HeroSlide[]>([])
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const { locale } = useCustomTranslation()

  // Query active slides from InstantDB
  const { data, isLoading, error } = db.useQuery({
    heroSlides: {
      $: {
        where: { isActive: true },
        order: { order: 'asc' as const }
      }
    }
  })

  useEffect(() => {
    if (data?.heroSlides) {
      setSlides(data.heroSlides)
    }
  }, [data])

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying || slides.length <= 1) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  if (isLoading) {
    return (
      <div className="relative h-[500px] md:h-[600px] bg-gray-100 animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-gray-400">Loading...</div>
        </div>
      </div>
    )
  }

  if (error || !slides || slides.length === 0) {
    // Fallback to default slide if no data
    return (
      <div className="relative h-[500px] md:h-[600px] bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              CODENTMED IPS
            </h1>
            <p className="text-xl md:text-2xl">
              {locale === 'es'
                ? 'Investigación Clínica de Excelencia'
                : 'Excellence in Clinical Research'}
            </p>
          </div>
        </div>
      </div>
    )
  }

  const currentSlideData = slides[currentSlide]
  const title = locale === 'es' ? currentSlideData.title_es : currentSlideData.title_en
  const description = locale === 'es' ? currentSlideData.description_es : currentSlideData.description_en
  const linkText = locale === 'es' ? currentSlideData.linkText_es : currentSlideData.linkText_en

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden bg-gray-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={currentSlideData.imageUrl}
              alt={title}
              fill
              className="object-cover"
              priority={currentSlide === 0}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container-max px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="max-w-3xl"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  {title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-100 mb-8">
                  {description}
                </p>
                {currentSlideData.linkUrl && linkText && (
                  <Button
                    href={currentSlideData.linkUrl}
                    variant="primary"
                    size="lg"
                  >
                    {linkText}
                  </Button>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transition-all z-10"
            aria-label="Previous slide"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transition-all z-10"
            aria-label="Next slide"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'w-8 bg-white'
                  : 'w-2 bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
