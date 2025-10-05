'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { ChevronDownIcon, LanguageIcon } from '@heroicons/react/24/outline'
import { useCustomTranslation } from '@/lib/i18n'

interface LanguageOption {
  code: 'es' | 'en'
  name: string
  flag: string
  nativeName: string
}

const languages: LanguageOption[] = [
  {
    code: 'es',
    name: 'Español',
    flag: '🇪🇸',
    nativeName: 'Español'
  },
  {
    code: 'en',
    name: 'English',
    flag: '🇺🇸',
    nativeName: 'English'
  }
]

interface LanguageSelectorProps {
  variant?: 'default' | 'minimal' | 'mobile'
  showLabel?: boolean
  className?: string
}

export default function LanguageSelector({ 
  variant = 'default', 
  showLabel = true, 
  className = '' 
}: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const { locale } = useCustomTranslation()

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageChange = (langCode: string) => {
    const { pathname, asPath, query } = router
    
    // Change language while maintaining current page
    router.push({ pathname, query }, asPath, { locale: langCode })
    setIsOpen(false)
  }

  if (variant === 'minimal') {
    return (
      <div className={`relative ${className}`} ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-1 text-gray-600 hover:text-primary-600 transition-colors p-2 rounded-lg hover:bg-gray-50"
          aria-label="Select language"
        >
          <LanguageIcon className="h-5 w-5" />
          <span className="text-sm font-medium">{currentLanguage.code.toUpperCase()}</span>
          <ChevronDownIcon className="h-4 w-4" />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 py-2 w-32 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-50">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center space-x-2 ${
                  language.code === locale ? 'text-primary-600 bg-primary-50' : 'text-gray-700'
                }`}
              >
                <span>{language.flag}</span>
                <span>{language.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    )
  }

  if (variant === 'mobile') {
    return (
      <div className={`${className}`}>
        <div className="space-y-1">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full text-left px-4 py-3 rounded-lg flex items-center space-x-3 transition-colors ${
                language.code === locale 
                  ? 'text-primary-600 bg-primary-50 border border-primary-200' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="text-lg">{language.flag}</span>
              <div>
                <div className="font-medium">{language.name}</div>
                <div className="text-sm text-gray-500">{language.nativeName}</div>
              </div>
              {language.code === locale && (
                <div className="ml-auto">
                  <div className="h-2 w-2 bg-primary-600 rounded-full"></div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
      >
        <span className="text-base">{currentLanguage.flag}</span>
        {showLabel && (
          <span>{currentLanguage.name}</span>
        )}
        <ChevronDownIcon className="h-4 w-4 text-gray-400" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-50">
          <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Select Language
          </div>
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center space-x-3 transition-colors ${
                language.code === locale ? 'text-primary-600 bg-primary-50' : 'text-gray-700'
              }`}
            >
              <span className="text-base">{language.flag}</span>
              <div className="flex-1">
                <div className="font-medium">{language.name}</div>
                <div className="text-sm text-gray-500">{language.nativeName}</div>
              </div>
              {language.code === locale && (
                <div className="h-2 w-2 bg-primary-600 rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// Utility component for language switching links (for SEO)
export function LanguageLinks({ currentPath }: { currentPath: string }) {
  return (
    <div className="flex items-center space-x-4">
      {languages.map((language) => (
        <Link
          key={language.code}
          href={currentPath}
          locale={language.code}
          className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
        >
          <span className="mr-1">{language.flag}</span>
          {language.name}
        </Link>
      ))}
    </div>
  )
}