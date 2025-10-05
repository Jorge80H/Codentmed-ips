module.exports = {
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    localeDetection: false,
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  saveMissing: false,
  strictMode: true,
  serializeConfig: false,
  react: {
    useSuspense: false,
  },
  fallbackLng: {
    'en-US': ['en'],
    'es-CO': ['es'],
    default: ['es'],
  },
  nonExplicitSupportedLngs: true,
}