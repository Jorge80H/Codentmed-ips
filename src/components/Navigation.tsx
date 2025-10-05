'use client'

import { useState, Fragment } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { Menu, Transition } from '@headlessui/react'
import { useCustomTranslation } from '@/lib/i18n'
import LanguageSelector from './LanguageSelector'
import { Button } from './ui/Button'

interface SubMenuItem {
  key: string
  href: string
}

interface NavItem {
  key: string
  href?: string
  subItems?: SubMenuItem[]
  external?: boolean
}

// Navigation structure based on CIREEM
const navigationItems: NavItem[] = [
  { key: 'home', href: '/' },
  {
    key: 'about',
    subItems: [
      { key: 'who_we_are', href: '/nosotros/quienes-somos' },
      { key: 'our_team', href: '/nosotros/equipo' },
      { key: 'certifications', href: '/nosotros/certificaciones' }
    ]
  },
  {
    key: 'services',
    subItems: [
      { key: 'for_sponsors', href: '/servicios/para-patrocinadores' },
      { key: 'clinical_research', href: '/servicios/investigacion-clinica' },
      { key: 'private_consultation', href: '/servicios/consulta-privada' },
      { key: 'regulatory_affairs', href: '/servicios/asuntos-regulatorios' }
    ]
  },
  {
    key: 'research',
    subItems: [
      { key: 'active_studies', href: '/investigacion/estudios-activos' },
      { key: 'therapeutic_areas', href: '/investigacion/areas-terapeuticas' },
      { key: 'publications', href: '/investigacion/publicaciones' }
    ]
  },
  {
    key: 'patients',
    subItems: [
      { key: 'patient_info', href: '/pacientes/informacion' },
      { key: 'available_studies', href: '/pacientes/estudios-disponibles' },
      { key: 'rights_duties', href: '/pacientes/derechos-deberes' },
      { key: 'appointment_recommendations', href: '/pacientes/recomendaciones' }
    ]
  },
  { key: 'blog', href: '/blog' },
  { key: 'contact', href: '/contacto' }
]

interface NavigationProps {
  className?: string
}

export default function Navigation({ className = '' }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null)
  const { t, locale } = useCustomTranslation()
  const router = useRouter()

  const isActivePath = (href: string) => {
    if (href === '/') {
      return router.pathname === '/'
    }
    return router.pathname.startsWith(href)
  }

  const isActiveSection = (item: NavItem) => {
    if (item.href) {
      return isActivePath(item.href)
    }
    if (item.subItems) {
      return item.subItems.some(subItem => isActivePath(subItem.href))
    }
    return false
  }

  return (
    <nav className={`bg-white shadow-sm sticky top-0 z-50 ${className}`}>
      <div className="container-max">
        <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <div>
              <div className="font-bold text-gray-900">CODENTMED IPS</div>
              <div className="text-xs text-gray-500 hidden sm:block">{t('site.tagline')}</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              item.subItems ? (
                // Dropdown menu
                <Menu as="div" key={item.key} className="relative">
                  {({ open }) => (
                    <>
                      <Menu.Button className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary-600 ${
                        isActiveSection(item) ? 'text-primary-600' : 'text-gray-700'
                      }`}>
                        <span>{t(`navigation.${item.key}`)}</span>
                        <ChevronDownIcon className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
                      </Menu.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-left rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            {item.subItems.map((subItem) => (
                              <Menu.Item key={subItem.key}>
                                {({ active }) => (
                                  <Link
                                    href={subItem.href}
                                    className={`block px-4 py-2 text-sm ${
                                      active ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
                                    } ${isActivePath(subItem.href) ? 'text-primary-600 font-medium' : ''}`}
                                  >
                                    {t(`navigation.${subItem.key}`)}
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              ) : (
                // Regular link
                <Link
                  key={item.key}
                  href={item.href!}
                  className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                    isActivePath(item.href!) ? 'text-primary-600' : 'text-gray-700'
                  }`}
                >
                  {t(`navigation.${item.key}`)}
                </Link>
              )
            ))}

            {/* CTA Button */}
            <Button
              href="/contacto/agendar-cita"
              variant="primary"
              size="sm"
              className="ml-4"
            >
              {t('cta.schedule_appointment')}
            </Button>

            {/* Language Selector */}
            <LanguageSelector variant="minimal" showLabel={false} />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <LanguageSelector variant="minimal" showLabel={false} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-3 space-y-1">
              {navigationItems.map((item) => (
                <div key={item.key}>
                  {item.subItems ? (
                    // Mobile submenu
                    <>
                      <button
                        onClick={() => setOpenMobileSubmenu(
                          openMobileSubmenu === item.key ? null : item.key
                        )}
                        className={`w-full flex items-center justify-between px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                          isActiveSection(item)
                            ? 'text-primary-600 bg-primary-50'
                            : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                        }`}
                      >
                        <span>{t(`navigation.${item.key}`)}</span>
                        <ChevronDownIcon
                          className={`h-5 w-5 transition-transform ${
                            openMobileSubmenu === item.key ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openMobileSubmenu === item.key && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.key}
                              href={subItem.href}
                              className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                                isActivePath(subItem.href)
                                  ? 'text-primary-600 bg-primary-50 font-medium'
                                  : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                              }`}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {t(`navigation.${subItem.key}`)}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    // Mobile regular link
                    <Link
                      href={item.href!}
                      className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                        isActivePath(item.href!)
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t(`navigation.${item.key}`)}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile CTA Button */}
              <div className="pt-4 mt-4 border-t border-gray-200">
                <Button
                  href="/contacto/agendar-cita"
                  variant="primary"
                  className="w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('cta.schedule_appointment')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// Breadcrumb component for internal pages
interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  const { t } = useCustomTranslation()

  return (
    <nav className={`flex ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="text-gray-500 hover:text-primary-600 text-sm">
            {t('navigation.home')}
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span className="text-gray-300">/</span>
            {item.href ? (
              <Link href={item.href} className="text-gray-500 hover:text-primary-600 text-sm">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 text-sm font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
