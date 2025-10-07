'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTheme } from '@/contexts/ThemeContext'
import { Button } from '@/components/ui/Button'
import { Globe, Menu, X, ChevronDown, Moon, Sun } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function Header() {
  const router = useRouter()
  const { language, setLanguage, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const menuItems = [
    { 
      label: t('Inicio', 'Home'), 
      href: '/',
      children: []
    },
    {
      label: t('Nosotros', 'About Us'),
      href: '/nosotros',
      children: [
        { label: t('Quiénes Somos', 'Who We Are'), href: '/nosotros/quienes-somos' },
        { label: t('Nuestro Equipo', 'Our Team'), href: '/nosotros/equipo' },
      ]
    },
    {
      label: t('Servicios', 'Services'),
      href: '/servicios',
      children: [
        { label: t('Reumatología', 'Rheumatology'), href: '/servicios/reumatologia' },
        { label: t('Medicina Interna', 'Internal Medicine'), href: '/servicios/medicina' },
      ]
    },
    {
      label: t('Investigación', 'Research'),
      href: '/investigacion',
      children: []
    },
    {
      label: t('Pacientes', 'Patients'),
      href: '/pacientes',
      children: [
        { label: t('Canal para Pacientes', 'Patient Portal'), href: '/pacientes/canal' },
        { label: t('Derechos y Deberes', 'Rights & Duties'), href: '/pacientes/derechos-deberes' },
        { label: t('Recomendaciones', 'Recommendations'), href: '/pacientes/recomendaciones' },
        { label: t('Información al Usuario', 'User Information'), href: '/pacientes/informacion' },
      ]
    },
    {
      label: 'Blog',
      href: '/blog',
      children: []
    },
    {
      label: t('Contacto', 'Contact'),
      href: '/contacto',
      children: []
    },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border h-20">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover-elevate rounded-md px-3 py-2">
          <div className="w-12 h-12 bg-primary rounded-md flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">C</span>
          </div>
          <div className="hidden md:block">
            <div className="font-bold text-lg text-foreground">CODENTMED IPS</div>
            <div className="text-xs text-muted-foreground">{t('Investigación Clínica', 'Clinical Research')}</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {menuItems.map((item) => (
            item.children.length > 0 ? (
              <DropdownMenu key={item.href} open={openDropdown === item.href} onOpenChange={(open) => setOpenDropdown(open ? item.href : null)}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="gap-1">
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  {item.children.map((child) => (
                    <DropdownMenuItem 
                      key={child.href}
                      onClick={() => router.push(child.href)}
                    >
                      {child.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button 
                key={item.href}
                variant={router.pathname === item.href ? 'secondary' : 'ghost'}
                onClick={() => router.push(item.href)}
              >
                {item.label}
              </Button>
            )
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme} title={t('Cambiar tema', 'Toggle theme')}>
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage('es')}>
                <span className={language === 'es' ? 'font-semibold' : ''}>Español</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('en')}>
                <span className={language === 'en' ? 'font-semibold' : ''}>English</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button className="hidden md:flex" onClick={() => router.push('/agendar')}>
            {t('Agenda tu Cita', 'Schedule Appointment')}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-background border-b border-border shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="p-6 space-y-4">
            {menuItems.map((item) => (
              <div key={item.href}>
                <Link href={item.href}>
                  <a 
                    className="block font-medium text-foreground hover:text-primary py-2"
                    onClick={() => item.children.length === 0 && setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </Link>
                {item.children.length > 0 && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href}>
                        <a 
                          className="block text-sm text-muted-foreground hover:text-primary py-1"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.label}
                        </a>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button className="w-full" onClick={() => { router.push('/agendar'); setMobileMenuOpen(false); }}>
              {t('Agenda tu Cita', 'Schedule Appointment')}
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
