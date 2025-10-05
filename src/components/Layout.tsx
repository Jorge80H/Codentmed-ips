import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCustomTranslation, generateHreflangLinks } from '@/lib/i18n'
import Navigation from './Navigation'

interface LayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
  noIndex?: boolean
  className?: string
}

export default function Layout({ 
  children, 
  title, 
  description, 
  noIndex = false,
  className = '' 
}: LayoutProps) {
  const { t, locale } = useCustomTranslation()
  const router = useRouter()
  const hreflangLinks = generateHreflangLinks(router.asPath)
  
  const pageTitle = title 
    ? `${title} | ${t('site.title')}`
    : t('meta.home_title')
  
  const pageDescription = description || t('meta.home_description')

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        
        {/* OpenGraph tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:locale" content={locale === 'es' ? 'es_CO' : 'en_US'} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={t('site.title')} />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* SEO and indexing */}
        {noIndex && <meta name="robots" content="noindex, nofollow" />}
        <meta name="author" content={t('site.title')} />
        
        {/* Hreflang tags for i18n SEO */}
        {hreflangLinks.map((link, index) => (
          <link
            key={index}
            rel={link.rel}
            hrefLang={link.hrefLang}
            href={link.href}
          />
        ))}
        
        {/* Schema.org JSON-LD for organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalOrganization',
              name: t('site.title'),
              description: t('site.description'),
              url: process.env.NEXT_PUBLIC_SITE_URL,
              logo: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+57-1-7397010',
                contactType: 'customer service',
                availableLanguage: ['Spanish', 'English']
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Cra 7 Bis # 124 - 56/64 Consultorio 609',
                addressLocality: 'Bogotá',
                addressCountry: 'CO'
              },
              medicalSpecialty: [
                'Internal Medicine',
                'Rheumatology', 
                'Dentistry',
                'Clinical Research'
              ]
            })
          }}
        />
      </Head>

      <div className={`min-h-screen bg-gray-50 ${className}`}>
        <Navigation />
        
        <main className="flex-1">
          {children}
        </main>
        
        <Footer />
      </div>
    </>
  )
}

function Footer() {
  const { t, locale } = useCustomTranslation()
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <div>
                <h3 className="font-bold text-white">{t('site.title')}</h3>
                <p className="text-sm text-gray-400">{t('site.tagline')}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              {t('site.footer_tagline')}
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📍 Cra 7 Bis # 124 - 56/64 Consultorio 609</p>
              <p>📞 +57 1-7397010 Ext. 2609</p>
              <p>📱 +57 323-885-341</p>
              <p>✉️ codentmed@gmail.com</p>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t('navigation.services')}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/servicios/medicina" className="hover:text-white transition-colors">{t('services.medicine.title')}</a></li>
              <li><a href="/servicios/odontologia" className="hover:text-white transition-colors">{t('services.dentistry.title')}</a></li>
              <li><a href="/servicios/investigacion" className="hover:text-white transition-colors">{t('services.research.title')}</a></li>
              <li><a href="/servicios/educacion" className="hover:text-white transition-colors">{t('services.education.title')}</a></li>
            </ul>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              {locale === 'es' ? 'Enlaces Rápidos' : 'Quick Links'}
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/para-patrocinadores" className="hover:text-white transition-colors">{t('navigation.for_sponsors')}</a></li>
              <li><a href="/para-pacientes" className="hover:text-white transition-colors">{t('navigation.for_patients')}</a></li>
              <li><a href="/nosotros" className="hover:text-white transition-colors">{t('navigation.about')}</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">{t('navigation.blog')}</a></li>
              <li><a href="/contacto" className="hover:text-white transition-colors">{t('navigation.contact')}</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 {t('site.title')}. {locale === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="/politica-privacidad" className="text-gray-400 hover:text-white text-sm transition-colors">
                {locale === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
              </a>
              <a href="/terminos" className="text-gray-400 hover:text-white text-sm transition-colors">
                {locale === 'es' ? 'Términos y Condiciones' : 'Terms & Conditions'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}