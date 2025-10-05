import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

export const useCustomTranslation = () => {
  const { t } = useTranslation('common')
  const router = useRouter()
  
  return {
    t,
    locale: router.locale || 'es',
    locales: router.locales || ['es', 'en'],
    isSpanish: router.locale === 'es',
    isEnglish: router.locale === 'en',
  }
}

export const getLocalizedPath = (path: string, locale?: string) => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  if (!locale || locale === 'es') return cleanPath
  return `/${locale}${cleanPath}`
}

export const getAlternateLanguageUrl = (currentPath: string, currentLocale: string) => {
  const targetLocale = currentLocale === 'es' ? 'en' : 'es'
  return getLocalizedPath(currentPath, targetLocale)
}

export const formatPhoneNumber = (phone: string, locale: string = 'es') => {
  // Format phone numbers based on locale
  if (locale === 'en') {
    // Format for international display
    return phone.replace(/(\+\d{1,3})(\d{3})(\d{3})(\d{4})/, '$1 ($2) $3-$4')
  }
  // Default Spanish format
  return phone.replace(/(\+\d{1,3})(\d{3})(\d{3})(\d{4})/, '$1 $2 $3 $4')
}

export const getCountryName = (countryCode: string, locale: string = 'es') => {
  const countries = {
    es: {
      'CO': 'Colombia',
      'US': 'Estados Unidos',
      'MX': 'México',
      'AR': 'Argentina',
      'PE': 'Perú',
      'EC': 'Ecuador',
      'VE': 'Venezuela',
      'CL': 'Chile',
      'BR': 'Brasil'
    },
    en: {
      'CO': 'Colombia',
      'US': 'United States',
      'MX': 'Mexico',
      'AR': 'Argentina',
      'PE': 'Peru',
      'EC': 'Ecuador',
      'VE': 'Venezuela',
      'CL': 'Chile',
      'BR': 'Brazil'
    }
  }
  
  return countries[locale as keyof typeof countries]?.[countryCode as keyof typeof countries.es] || countryCode
}

export const getFormattedDate = (date: string | Date, locale: string = 'es') => {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  
  return dateObj.toLocaleDateString(locale === 'es' ? 'es-CO' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Utility for SEO hreflang generation
export const generateHreflangLinks = (currentPath: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://codentmed-ips.netlify.app'
  
  return [
    {
      rel: 'alternate',
      hrefLang: 'es',
      href: `${baseUrl}/es${currentPath}`
    },
    {
      rel: 'alternate', 
      hrefLang: 'en',
      href: `${baseUrl}/en${currentPath}`
    },
    {
      rel: 'alternate',
      hrefLang: 'x-default',
      href: `${baseUrl}/es${currentPath}`
    }
  ]
}

// Language detection utilities
export const detectLanguageFromBrowser = (): 'es' | 'en' => {
  if (typeof window === 'undefined') return 'es'
  
  const browserLang = navigator.language || navigator.languages?.[0] || 'es'
  
  if (browserLang.startsWith('en')) return 'en'
  return 'es'
}

export const detectLanguageFromLocation = (): 'es' | 'en' => {
  if (typeof window === 'undefined') return 'es'
  
  // Simple geolocation-based language detection
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  
  // English-speaking countries/regions
  if (timezone.includes('America/New_York') || 
      timezone.includes('America/Los_Angeles') ||
      timezone.includes('Europe/London') ||
      timezone.includes('Australia/') ||
      timezone.includes('America/Toronto')) {
    return 'en'
  }
  
  return 'es' // Default to Spanish for Latin America
}