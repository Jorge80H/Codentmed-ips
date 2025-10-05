# Plan de Migración: CodentmedSite → CODENTMED IPS (Next.js)

## 🎯 Objetivo
Reconstruir el sitio CODENTMED IPS desde cero usando el diseño y componentes de CodentmedSite, adaptados a Next.js.

## 📊 Estructura del Sitio (Definitiva)

```
/                          - Inicio
/nosotros                  - Nosotros (Overview)
  /nosotros/quienes-somos  - Quiénes somos
  /nosotros/equipo         - Nuestro equipo
/servicios                 - Servicios Asistenciales (Overview)
  /servicios/reumatologia  - Consulta de Reumatología
  /servicios/medicina      - Consulta de Medicina Interna
/investigacion             - Investigación
/pacientes                 - Pacientes (Overview)
  /pacientes/canal         - Canal para pacientes
  /pacientes/derechos      - Derechos y deberes
  /pacientes/recomendaciones - Recomendaciones para tu cita
  /pacientes/informacion   - Información al usuario
/contacto                  - Contacto
/blog                      - Blog
/agendar                   - Agenda tu cita (CTA principal)
```

## 🔄 Fase 1: Setup Base (AHORA)

### 1.1. Limpiar proyecto actual
- [ ] Hacer backup del trabajo actual
- [ ] Eliminar páginas antiguas innecesarias
- [ ] Mantener solo: package.json, next.config.js, tailwind.config.js actualizado

### 1.2. Copiar sistema de diseño
- [x] globals.css con variables CSS (YA HECHO)
- [x] tailwind.config.js actualizado (YA HECHO)
- [ ] Copiar componentes UI de shadcn desde CodentmedSite

### 1.3. Crear contextos necesarios
- [ ] LanguageContext (ES/EN switching)
- [ ] ThemeContext (Light/Dark - opcional fase 2)

## 🎨 Fase 2: Componentes Core

### 2.1. Layout Components
- [ ] **Header.tsx** - Navegación principal con dropdowns
  - Logo CODENTMED
  - Menú desktop con dropdowns
  - Menú mobile responsive
  - Selector de idioma ES/EN
  - Botón "Agenda tu Cita"

- [ ] **Footer.tsx** - Footer profesional
  - Información de contacto
  - Enlaces rápidos
  - Redes sociales
  - Copyright

### 2.2. Shared Components
- [ ] **HeroSection.tsx** - Hero section para homepage
- [ ] **ServiceCard.tsx** - Tarjetas de servicios
- [ ] **StatsSection.tsx** - Sección de estadísticas
- [ ] **CTASection.tsx** - Call to action sections
- [ ] **Breadcrumbs.tsx** - Migas de pan para navegación
- [ ] **BlogCard.tsx** - Tarjetas para blog posts

### 2.3. UI Components (copiar de CodentmedSite)
- [ ] button.tsx
- [ ] card.tsx
- [ ] dropdown-menu.tsx
- [ ] badge.tsx
- [ ] alert.tsx
- [ ] form components (input, textarea, select)

## 📄 Fase 3: Crear Páginas

### 3.1. Homepage (/)
```tsx
- Hero con carousel o imagen principal
- Sección "Nuestros Servicios" (3 cards)
- Sección "¿Por qué CODENTMED?"
- Stats section (estudios, pacientes, años)
- CTA "Agenda tu Cita"
```

### 3.2. Nosotros
**Parent: /nosotros**
- Visión general de CODENTMED IPS
- Misión y Visión
- Enlaces a sub-páginas

**Sub-páginas:**
- `/nosotros/quienes-somos` - Historia, valores, equipo directivo
- `/nosotros/equipo` - Grid de profesionales con foto y especialidad

### 3.3. Servicios Asistenciales
**Parent: /servicios**
- Overview de servicios médicos

**Sub-páginas:**
- `/servicios/reumatologia` - Consulta de Reumatología (Dr. Wilson Bautista)
  - Descripción del servicio
  - Condiciones tratadas
  - Proceso de consulta
  - Formulario de agendamiento

- `/servicios/medicina` - Consulta de Medicina Interna
  - Descripción del servicio
  - Especialidades
  - Proceso de consulta

### 3.4. Investigación
**Single page: /investigacion**
- Áreas terapéuticas
- Proceso de investigación
- Para patrocinadores (link externo o sección)
- Estudios activos
- Publicaciones científicas

### 3.5. Pacientes
**Parent: /pacientes**
- Overview para pacientes

**Sub-páginas:**
- `/pacientes/canal` - Canal para pacientes (FAQ, recursos)
- `/pacientes/derechos` - Derechos y deberes de los pacientes
- `/pacientes/recomendaciones` - Recomendaciones para tu cita médica
- `/pacientes/informacion` - Información al usuario (consentimientos, políticas)

### 3.6. Otras Páginas
- `/contacto` - Formulario de contacto + mapa + info
- `/blog` - Listing de blog posts
- `/blog/[slug]` - Página individual de blog post
- `/agendar` - Formulario completo de agendamiento

## 📝 Fase 4: Contenido

### 4.1. Textos bilingües (ES/EN)
- [ ] Crear archivos JSON con todo el contenido
- [ ] Implementar sistema de traducciones
- [ ] Poblar todas las páginas con contenido real

### 4.2. Imágenes y Assets
- [ ] Logo CODENTMED profesional
- [ ] Fotos del equipo
- [ ] Imágenes para hero sections
- [ ] Iconos para servicios y áreas terapéuticas

### 4.3. Data dinámico
- [ ] Configurar InstantDB para:
  - Blog posts
  - Estudios activos
  - Equipo médico
  - Testimonios (opcional)

## 🚀 Fase 5: Features Avanzados

- [ ] Formulario de agendamiento funcional
- [ ] Integración con sistema de citas (Calendly o custom)
- [ ] Blog con CMS (InstantDB)
- [ ] SEO optimization (meta tags, sitemap, robots.txt)
- [ ] Analytics (Google Analytics 4)
- [ ] Performance optimization

## ✅ Checklist de Deploy

- [ ] Build sin errores
- [ ] Todas las páginas creadas y funcionando
- [ ] Contenido poblado (mínimo 80%)
- [ ] Responsive en mobile/tablet/desktop
- [ ] SEO meta tags en todas las páginas
- [ ] Formularios funcionando
- [ ] Enlaces internos correctos
- [ ] i18n ES/EN funcionando
- [ ] Deploy a Netlify exitoso

---

## 🎯 SIGUIENTE PASO INMEDIATO

**Empezar Fase 1.1**: Limpiar proyecto actual y preparar base limpia.
