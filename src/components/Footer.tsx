import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function Footer() {
  const { t, language, setLanguage } = useLanguage();

  const quickLinks = [
    { label: t('Inicio', 'Home'), href: '/' },
    { label: t('Nosotros', 'About'), href: '/nosotros' },
    { label: t('Servicios', 'Services'), href: '/servicios' },
    { label: 'Blog', href: '/blog' },
  ];

  const patientLinks = [
    { label: t('Información para Pacientes', 'Patient Information'), href: '/pacientes/informacion' },
    { label: t('Estudios Activos', 'Active Studies'), href: '/investigacion/estudios-activos' },
    { label: t('Derechos y Deberes', 'Rights & Duties'), href: '/pacientes/derechos' },
    { label: t('Contacto', 'Contact'), href: '/contacto' },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">C</span>
              </div>
              <div>
                <div className="font-bold text-lg text-foreground">CODENTMED IPS</div>
                <div className="text-xs text-muted-foreground">
                  {t('Investigación Clínica', 'Clinical Research')}
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t(
                'Líderes en investigación clínica con estándares internacionales GCP.',
                'Leaders in clinical research with international GCP standards.'
              )}
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" data-testid="button-social-facebook">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="button-social-instagram">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="button-social-linkedin">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="button-social-twitter">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">
              {t('Enlaces Rápidos', 'Quick Links')}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">
              {t('Para Pacientes', 'For Patients')}
            </h3>
            <ul className="space-y-3">
              {patientLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">
              {t('Contacto', 'Contact')}
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 flex-shrink-0 text-primary" />
                <span>Bogotá, Colombia</span>
              </li>
              <li className="flex gap-3 text-sm text-muted-foreground">
                <Phone className="w-5 h-5 flex-shrink-0 text-primary" />
                <span>+57 (1) 234 5678</span>
              </li>
              <li className="flex gap-3 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 flex-shrink-0 text-primary" />
                <span>info@codentmed.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 CODENTMED IPS. {t('Todos los derechos reservados.', 'All rights reserved.')}
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacidad" className="text-sm text-muted-foreground hover:text-primary">
                {t('Política de Privacidad', 'Privacy Policy')}
              </Link>
              <Link href="/terminos" className="text-sm text-muted-foreground hover:text-primary">
                {t('Términos de Uso', 'Terms of Use')}
              </Link>
              <div className="flex gap-2">
                <button
                  onClick={() => setLanguage('es')}
                  className={`text-sm ${language === 'es' ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-primary'}`}
                  data-testid="footer-button-lang-es"
                >
                  ES
                </button>
                <span className="text-muted-foreground">/</span>
                <button
                  onClick={() => setLanguage('en')}
                  className={`text-sm ${language === 'en' ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-primary'}`}
                  data-testid="footer-button-lang-en"
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
