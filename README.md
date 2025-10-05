# CODENTMED IPS - Website Oficial

![Next.js](https://img.shields.io/badge/Next.js-14.0.4-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.0-38bdf8?style=flat-square&logo=tailwind-css)
![InstantDB](https://img.shields.io/badge/InstantDB-0.14.6-ff6b6b?style=flat-square)

Sitio web oficial de CODENTMED IPS - Centro de Investigación Clínica en Bogotá, Colombia. Especializado en estudios clínicos de reumatología, medicina interna y odontología.

## 🌐 Sitio en Vivo

- **Desarrollo Local:** http://localhost:3001
- **Producción:** [Por definir]

## ✨ Características

### Funcionalidad Principal
- ✅ **Sitio Bilingüe Completo** (Español/Inglés) con next-i18next
- ✅ **30+ Páginas** incluyendo Inicio, Nosotros, Servicios, Investigación, Pacientes, Blog, Contacto
- ✅ **Integración InstantDB** para contenido dinámico (carrusel hero, blog, estudios clínicos)
- ✅ **Diseño Responsivo** con Tailwind CSS
- ✅ **Sistema de Navegación Completo** inspirado en estructura CIREEM
- ✅ **Componentes UI Reutilizables** (Card, Button, Badge, Input, etc.)
- ✅ **SEO Optimizado** con componente PageLayout
- ✅ **Validación de Formularios** y manejo de envíos

### Secciones del Sitio

#### 🏠 Inicio
- Carrusel Hero dinámico con InstantDB
- Vista general de servicios
- Últimos posts del blog
- Múltiples CTAs

#### 👥 Nosotros
- **Quiénes Somos:** Misión, visión, valores
- **Nuestro Equipo:** Perfiles de liderazgo y departamentos
- **Certificaciones:** INVIMA, GCP, ISO, acreditaciones

#### 🔬 Servicios
- **Para Patrocinadores:** Ventajas competitivas, áreas terapéuticas
- **Investigación Clínica:** Capacidades por fase, metodología
- **Consulta Privada:** Perfil Dr. Wilson Bautista, integración con drwilsonbautista.com
- **Asuntos Regulatorios:** Procedimientos INVIMA, documentación, cumplimiento

#### 🧪 Investigación
- **Estudios Activos:** Listado dinámico con filtros (InstantDB)
- **Áreas Terapéuticas:** Reumatología, Medicina Interna, Odontología
- **Publicaciones:** Artículos científicos, congresos, colaboraciones académicas

#### 🩺 Pacientes
- **Información:** Qué es un estudio clínico, beneficios/riesgos, FAQs
- **Estudios Disponibles:** Listado simple de estudios activos
- **Derechos y Deberes:** Consentimiento informado, privacidad
- **Recomendaciones:** Preparación para citas, documentos requeridos

#### 📝 Blog
- Listado de artículos con filtros
- Páginas dinámicas de posts individuales ([slug].tsx)
- Integración completa con InstantDB

#### 📞 Contacto
- Formulario de contacto general con InstantDB
- Sistema de agendamiento de citas con formulario completo médico
- Mapa de ubicación
- Información de contacto y horarios

## 🚀 Comenzar

### Requisitos Previos

- Node.js >= 18.0.0
- npm o yarn

### Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/Jorge80H/Codentmed-ips.git
cd Codentmed-ips
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Configurar variables de entorno**

Crea un archivo `.env.local` basado en `.env.example`:

```bash
cp .env.example .env.local
```

Configura las siguientes variables:

```env
# InstantDB
NEXT_PUBLIC_INSTANT_APP_ID=your_instant_app_id

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. **Iniciar servidor de desarrollo**

```bash
npm run dev
```

El sitio estará disponible en http://localhost:3000

### Scripts Disponibles

```bash
npm run dev          # Inicia servidor de desarrollo
npm run build        # Construye para producción
npm start            # Inicia servidor de producción
npm run lint         # Ejecuta ESLint
npm run type-check   # Verifica tipos de TypeScript
```

## 🛠️ Stack Tecnológico

### Frontend
- **Framework:** Next.js 14.0.4 (App Router + Pages Router híbrido)
- **Lenguaje:** TypeScript 5.3.3
- **Estilos:** Tailwind CSS 3.4.0
- **UI Components:** @headlessui/react, @heroicons/react
- **Animaciones:** Framer Motion 10.16.16

### Internacionalización
- **i18n:** next-i18next 15.2.0
- **Idiomas:** Español (es) e Inglés (en)

### Base de Datos
- **Database:** InstantDB 0.14.6 (real-time)
- **Backup/Legacy:** Supabase (configurado pero opcional)

### Herramientas de Desarrollo
- **Linter:** ESLint con eslint-config-next
- **Type Checking:** TypeScript compiler
- **CSS:** PostCSS con Autoprefixer
- **Plugins Tailwind:** Forms, Typography, Aspect Ratio

## 📁 Estructura del Proyecto

```
codentmed-ips/
├── public/
│   └── locales/          # Archivos de traducción i18n
│       ├── es/
│       │   └── common.json
│       └── en/
│           └── common.json
├── src/
│   ├── app/              # App Router (Next.js 14)
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── blog/
│   │   │   └── BlogList.tsx
│   │   ├── ui/           # Componentes UI reutilizables
│   │   │   ├── Alert.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Loading.tsx
│   │   │   └── Textarea.tsx
│   │   ├── HeroCarousel.tsx
│   │   ├── Navigation.tsx
│   │   └── PageLayout.tsx
│   ├── lib/
│   │   ├── i18n.ts        # Configuración i18n
│   │   ├── instantdb.ts   # Cliente InstantDB
│   │   └── utils.ts       # Utilidades
│   └── pages/             # Pages Router (rutas)
│       ├── _app.tsx
│       ├── index.tsx
│       ├── nosotros/
│       ├── servicios/
│       ├── investigacion/
│       ├── pacientes/
│       ├── blog/
│       └── contacto/
├── next.config.js
├── next-i18next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## 🗄️ Esquema de InstantDB

El proyecto utiliza InstantDB para contenido dinámico con las siguientes tablas:

### heroSlides
Gestión del carrusel en la página de inicio
- `title_es`, `title_en`: Títulos bilingües
- `subtitle_es`, `subtitle_en`: Subtítulos bilingües
- `imageUrl`: URL de la imagen
- `ctaText_es`, `ctaText_en`: Texto del botón CTA
- `ctaLink`: Enlace del CTA
- `order`: Orden de visualización
- `isActive`: Activo/inactivo

### blogPosts
Artículos del blog
- `title_es`, `title_en`: Títulos bilingües
- `slug`: URL slug único
- `content_es`, `content_en`: Contenido completo
- `excerpt_es`, `excerpt_en`: Extractos
- `featuredImage`: Imagen destacada
- `categoryId`, `authorId`: Referencias
- `publishedAt`: Fecha de publicación
- `readTime`: Tiempo estimado de lectura
- `tags`: Etiquetas JSON

### clinicalStudies
Estudios clínicos activos
- `title_es`, `title_en`: Títulos bilingües
- `description_es`, `description_en`: Descripciones
- `phase`: Fase del estudio
- `therapeuticArea_es`, `therapeuticArea_en`: Área terapéutica
- `status`: Estado (recruiting, active, completed)
- `inclusions_es`, `inclusions_en`: Criterios de inclusión JSON
- `exclusions_es`, `exclusions_en`: Criterios de exclusión JSON
- `estimatedDuration`: Duración estimada

### contactSubmissions
Formularios de contacto y citas
- `name`, `email`, `phone`: Datos de contacto
- `subject`, `message`: Contenido del mensaje
- `contactReason`: Motivo del contacto
- `submittedAt`: Fecha de envío
- `status`: Estado (new, contacted, resolved)

Ver [SETUP_INSTANTDB.md](./SETUP_INSTANTDB.md) para detalles completos del esquema.

## 🌍 Internacionalización

El sitio soporta español (es) e inglés (en) usando next-i18next.

### Agregar nuevas traducciones

1. Edita `public/locales/es/common.json` y `public/locales/en/common.json`
2. Usa el hook `useCustomTranslation` en componentes:

```tsx
import { useCustomTranslation } from '@/lib/i18n'

export default function MyComponent() {
  const { t } = useCustomTranslation()
  return <h1>{t('my.translation.key')}</h1>
}
```

## 🚢 Despliegue

### Netlify (Recomendado)

El proyecto incluye configuración para Netlify (`netlify.toml`):

```bash
npm run build
```

Conecta tu repositorio de GitHub con Netlify para despliegue automático.

### Vercel

```bash
npm install -g vercel
vercel --prod
```

### Variables de Entorno de Producción

Asegúrate de configurar:
- `NEXT_PUBLIC_INSTANT_APP_ID`
- `NEXT_PUBLIC_SITE_URL`

## 📝 Documentación Adicional

- [SETUP_INSTANTDB.md](./SETUP_INSTANTDB.md) - Guía de configuración de InstantDB
- [IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md) - Resumen técnico de implementación
- [PAGES_STATUS.md](./PAGES_STATUS.md) - Estado de todas las páginas
- [REQUERIMIENTOS_SITIO_CODENTMED_IPS.md](./REQUERIMIENTOS_SITIO_CODENTMED_IPS.md) - Requerimientos originales

## 🤝 Contribuir

Este es un proyecto privado de CODENTMED IPS desarrollado por Empleados Digitales.

## 📄 Licencia

© 2025 CODENTMED IPS. Todos los derechos reservados.

## 👥 Equipo

**Desarrollado por:** Empleados Digitales
- Jorge Henao (Co-founder)
- Luisa Mora (Co-founder)

**Cliente:** CODENTMED IPS
- Dr. Wilson Bautista (Director Médico)
- Dra. Sonia Unriza (Directora Odontología)

---

🤖 Generado con [Claude Code](https://claude.com/claude-code)
