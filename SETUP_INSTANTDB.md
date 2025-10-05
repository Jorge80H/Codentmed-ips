# Configuración de InstantDB para CODENTMED IPS

## 1. Crear cuenta en InstantDB

1. Visita https://instantdb.com
2. Crea una cuenta (Sign up)
3. Crea un nuevo proyecto llamado "codentmed-ips"

## 2. Configurar el esquema de base de datos

En el panel de InstantDB, configura las siguientes tablas:

### Tabla: heroSlides
```javascript
{
  id: uuid,
  title_es: string,
  title_en: string,
  description_es: string,
  description_en: string,
  imageUrl: string,
  linkUrl: string (optional),
  linkText_es: string (optional),
  linkText_en: string (optional),
  order: number,
  isActive: boolean
}
```

### Tabla: blogPosts
```javascript
{
  id: uuid,
  title_es: string,
  title_en: string,
  slug_es: string,
  slug_en: string,
  content_es: string,
  content_en: string,
  excerpt_es: string,
  excerpt_en: string,
  featuredImage: string,
  authorId: uuid (ref -> blogAuthors),
  categoryId: uuid (ref -> blogCategories),
  tags: array<string>,
  status: 'draft' | 'published' | 'scheduled',
  publishedAt: number (optional),
  scheduledFor: number (optional)
}
```

### Tabla: blogCategories
```javascript
{
  id: uuid,
  name_es: string,
  name_en: string,
  slug_es: string,
  slug_en: string,
  description_es: string (optional),
  description_en: string (optional)
}
```

### Tabla: blogAuthors
```javascript
{
  id: uuid,
  name: string,
  email: string,
  bio_es: string (optional),
  bio_en: string (optional),
  avatar: string (optional),
  title_es: string (optional),
  title_en: string (optional)
}
```

### Tabla: clinicalStudies
```javascript
{
  id: uuid,
  title_es: string,
  title_en: string,
  description_es: string,
  description_en: string,
  phase: string,
  therapeuticArea_es: string,
  therapeuticArea_en: string,
  inclusions_es: array<string>,
  inclusions_en: array<string>,
  exclusions_es: array<string>,
  exclusions_en: array<string>,
  status: 'recruiting' | 'active' | 'completed',
  startDate: number,
  estimatedCompletion: number (optional)
}
```

### Tabla: contactSubmissions
```javascript
{
  id: uuid,
  name: string,
  email: string,
  phone: string (optional),
  subject: string,
  message: string,
  type: 'general' | 'sponsor' | 'patient' | 'appointment',
  language: 'es' | 'en',
  status: 'new' | 'read' | 'replied'
}
```

## 3. Copiar App ID

1. En el dashboard de InstantDB, busca tu **App ID**
2. Copia el App ID

## 4. Configurar variables de entorno

1. Crea un archivo `.env.local` en la raíz del proyecto
2. Agrega tu App ID:

```bash
NEXT_PUBLIC_INSTANTDB_APP_ID=your_app_id_here
```

## 5. Instalar dependencias

```bash
npm install
```

## 6. Ejecutar el proyecto

```bash
npm run dev
```

## 7. Datos de prueba para Hero Carousel

Puedes agregar datos de prueba desde el panel de InstantDB:

### Ejemplo de Slide 1:
```json
{
  "title_es": "Investigación Clínica de Excelencia",
  "title_en": "Excellence in Clinical Research",
  "description_es": "Líderes en estudios clínicos con estándares internacionales GCP",
  "description_en": "Leaders in clinical studies with international GCP standards",
  "imageUrl": "/images/hero/research.jpg",
  "linkUrl": "/servicios/investigacion-clinica",
  "linkText_es": "Conocer más",
  "linkText_en": "Learn more",
  "order": 1,
  "isActive": true
}
```

### Ejemplo de Slide 2:
```json
{
  "title_es": "Consulta con el Dr. Wilson Bautista",
  "title_en": "Consultation with Dr. Wilson Bautista",
  "description_es": "Autoridad en reumatología con experiencia internacional",
  "description_en": "Authority in rheumatology with international experience",
  "imageUrl": "/images/hero/consultation.jpg",
  "linkUrl": "/servicios/consulta-privada",
  "linkText_es": "Agendar consulta",
  "linkText_en": "Schedule consultation",
  "order": 2,
  "isActive": true
}
```

## 8. Crear panel de administración (próximos pasos)

El panel de administración se creará en `/admin` con autenticación para:
- Gestionar slides del carrusel
- Crear y editar posts del blog
- Administrar estudios clínicos
- Ver mensajes de contacto

## Recursos

- Documentación de InstantDB: https://docs.instantdb.com
- API Reference: https://docs.instantdb.com/docs/modeling-data
