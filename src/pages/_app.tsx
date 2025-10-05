import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import { generateHreflangLinks } from '@/lib/i18n'
import nextI18NextConfig from '../../next-i18next.config'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const hreflangLinks = generateHreflangLinks(router.asPath)

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Hreflang tags for SEO */}
        {hreflangLinks.map((link, index) => (
          <link
            key={index}
            rel={link.rel}
            hrefLang={link.hrefLang}
            href={link.href}
          />
        ))}

        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          as="style"
        />
      </Head>

      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default appWithTranslation(App, nextI18NextConfig)