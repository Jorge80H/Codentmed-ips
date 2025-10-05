# Configuración de InstantDB - CODENTMED IPS

## ✅ Credenciales Configuradas

Las credenciales de InstantDB ya están configuradas en el proyecto:

```env
NEXT_PUBLIC_INSTANT_APP_ID=2935a123-9c03-4e77-8072-d370920ae7fc
INSTANT_SECRET_TOKEN=b1d7ae0d-0c31-470e-a458-0cab9809fa6c
```

## 📊 Schema de Base de Datos

El proyecto utiliza las siguientes tablas en InstantDB:

### 1. heroSlides
**Propósito:** Gestión del carrusel dinámico en la página de inicio

**Campos:**
- `id` (string): ID único
- `title_es` (string): Título en español
- `title_en` (string): Título en inglés
- `description_es` (string): Descripción en español
- `description_en` (string): Descripción en inglés
- `imageUrl` (string): URL de la imagen
- `linkUrl` (string, opcional): Enlace del botón CTA
- `linkText_es` (string, opcional): Texto del botón en español
- `linkText_en` (string, opcional): Texto del botón en inglés
- `order` (number): Orden de visualización
- `isActive` (boolean): Activo/Inactivo
- `createdAt` (number): Timestamp de creación
- `updatedAt` (number): Timestamp de actualización

### 2. blogPosts
**Propósito:** Artículos del blog

**Campos:**
- `id` (string): ID único
- `title_es` (string): Título en español
- `title_en` (string): Título en inglés
- `slug_es` (string): URL slug en español
- `slug_en` (string): URL slug en inglés
- `content_es` (string): Contenido HTML en español
- `content_en` (string): Contenido HTML en inglés
- `excerpt_es` (string): Extracto en español
- `excerpt_en` (string): Extracto en inglés
- `featuredImage` (string): URL imagen destacada
- `authorId` (string): ID del autor
- `categoryId` (string): ID de la categoría
- `tags` (string[]): Etiquetas JSON
- `status` ('draft' | 'published' | 'scheduled'): Estado
- `publishedAt` (number, opcional): Timestamp de publicación
- `scheduledFor` (number, opcional): Timestamp programado
- `createdAt` (number): Timestamp de creación
- `updatedAt` (number): Timestamp de actualización

### 3. blogCategories
**Propósito:** Categorías de blog

**Campos:**
- `id` (string): ID único
- `name_es` (string): Nombre en español
- `name_en` (string): Nombre en inglés
- `slug_es` (string): URL slug en español
- `slug_en` (string): URL slug en inglés
- `description_es` (string, opcional): Descripción en español
- `description_en` (string, opcional): Descripción en inglés

### 4. blogAuthors
**Propósito:** Autores del blog

**Campos:**
- `id` (string): ID único
- `name` (string): Nombre completo
- `email` (string): Email
- `bio_es` (string, opcional): Biografía en español
- `bio_en` (string, opcional): Biografía en inglés
- `avatar` (string, opcional): URL del avatar
- `title_es` (string, opcional): Título profesional en español
- `title_en` (string, opcional): Título profesional en inglés

### 5. clinicalStudies
**Propósito:** Estudios clínicos activos

**Campos:**
- `id` (string): ID único
- `title_es` (string): Título en español
- `title_en` (string): Título en inglés
- `description_es` (string): Descripción en español
- `description_en` (string): Descripción en inglés
- `phase` (string): Fase del estudio (Phase I, II, III, IV)
- `therapeuticArea_es` (string): Área terapéutica en español
- `therapeuticArea_en` (string): Área terapéutica en inglés
- `inclusions_es` (string[]): Criterios de inclusión en español (JSON)
- `inclusions_en` (string[]): Criterios de inclusión en inglés (JSON)
- `exclusions_es` (string[]): Criterios de exclusión en español (JSON)
- `exclusions_en` (string[]): Criterios de exclusión en inglés (JSON)
- `status` ('recruiting' | 'active' | 'completed'): Estado del estudio
- `startDate` (number): Timestamp de inicio
- `estimatedCompletion` (number, opcional): Timestamp estimado de finalización
- `createdAt` (number): Timestamp de creación
- `updatedAt` (number): Timestamp de actualización

### 6. contactSubmissions
**Propósito:** Formularios de contacto y solicitudes de citas

**Campos:**
- `id` (string): ID único
- `name` (string): Nombre completo
- `email` (string): Email
- `phone` (string, opcional): Teléfono
- `subject` (string): Asunto
- `message` (string): Mensaje
- `type` ('general' | 'sponsor' | 'patient' | 'appointment'): Tipo de consulta
- `language` ('es' | 'en'): Idioma del formulario
- `createdAt` (number): Timestamp de envío
- `status` ('new' | 'read' | 'replied'): Estado

## 🔧 Crear Schema en InstantDB

1. **Acceder al Dashboard de InstantDB:**
   - Ve a https://instantdb.com
   - Inicia sesión con tu cuenta
   - Selecciona la aplicación con App ID: `2935a123-9c03-4e77-8072-d370920ae7fc`

2. **Crear las Tablas:**
   - Ve a la sección "Schema" en el dashboard
   - Crea cada una de las 6 tablas mencionadas arriba
   - Define los campos según las especificaciones

3. **Configurar Permisos:**
   - Las tablas `heroSlides`, `blogPosts`, `blogCategories`, `blogAuthors`, `clinicalStudies` deben ser de solo lectura para el público
   - La tabla `contactSubmissions` debe permitir escritura pública pero solo lectura para admins

## 📝 Datos de Ejemplo

### Hero Slide Ejemplo:
```json
{
  "id": "slide-1",
  "title_es": "Investigación Clínica de Clase Mundial",
  "title_en": "World-Class Clinical Research",
  "description_es": "Liderando estudios clínicos en reumatología y medicina interna en Colombia",
  "description_en": "Leading clinical studies in rheumatology and internal medicine in Colombia",
  "imageUrl": "https://example.com/hero-image.jpg",
  "linkUrl": "/investigacion/estudios-activos",
  "linkText_es": "Ver Estudios Activos",
  "linkText_en": "View Active Studies",
  "order": 1,
  "isActive": true,
  "createdAt": 1704067200000,
  "updatedAt": 1704067200000
}
```

### Blog Post Ejemplo:
```json
{
  "id": "post-1",
  "title_es": "Avances en el Tratamiento de Artritis Reumatoide",
  "title_en": "Advances in Rheumatoid Arthritis Treatment",
  "slug_es": "avances-artritis-reumatoide",
  "slug_en": "rheumatoid-arthritis-advances",
  "content_es": "<p>Los nuevos tratamientos biológicos...</p>",
  "content_en": "<p>New biological treatments...</p>",
  "excerpt_es": "Descubra los últimos avances en terapias biológicas",
  "excerpt_en": "Discover the latest advances in biological therapies",
  "featuredImage": "https://example.com/arthritis.jpg",
  "authorId": "author-1",
  "categoryId": "cat-research",
  "tags": ["Reumatología", "Investigación", "Biológicos"],
  "status": "published",
  "publishedAt": 1704067200000,
  "createdAt": 1704067200000,
  "updatedAt": 1704067200000
}
```

### Clinical Study Ejemplo:
```json
{
  "id": "study-1",
  "title_es": "Estudio de Fase III en Artritis Reumatoide",
  "title_en": "Phase III Study in Rheumatoid Arthritis",
  "description_es": "Evaluación de un nuevo inhibidor de JAK en pacientes con AR activa",
  "description_en": "Evaluation of a new JAK inhibitor in patients with active RA",
  "phase": "Phase III",
  "therapeuticArea_es": "Reumatología",
  "therapeuticArea_en": "Rheumatology",
  "inclusions_es": [
    "Diagnóstico confirmado de artritis reumatoide",
    "Mayor de 18 años",
    "DAS28 > 3.2"
  ],
  "inclusions_en": [
    "Confirmed diagnosis of rheumatoid arthritis",
    "Over 18 years old",
    "DAS28 > 3.2"
  ],
  "exclusions_es": [
    "Embarazo o lactancia",
    "Infección activa",
    "Insuficiencia hepática"
  ],
  "exclusions_en": [
    "Pregnancy or breastfeeding",
    "Active infection",
    "Hepatic insufficiency"
  ],
  "status": "recruiting",
  "startDate": 1704067200000,
  "estimatedCompletion": 1735689600000,
  "createdAt": 1704067200000,
  "updatedAt": 1704067200000
}
```

## 🚀 Uso en la Aplicación

### Leer Hero Slides Activos:
```tsx
import { db } from '@/lib/instantdb'

const { data, isLoading } = db.useQuery({
  heroSlides: {
    $: {
      where: { isActive: true },
      order: { order: 'asc' }
    }
  }
})
```

### Leer Posts Publicados:
```tsx
const { data, isLoading } = db.useQuery({
  blogPosts: {
    $: {
      where: { status: 'published' },
      order: { publishedAt: 'desc' }
    }
  }
})
```

### Enviar Formulario de Contacto:
```tsx
await db.transact([
  db.tx.contactSubmissions[crypto.randomUUID()]().update({
    name: 'Juan Pérez',
    email: 'juan@example.com',
    phone: '+57 310 123 4567',
    subject: 'Consulta sobre estudio',
    message: 'Me gustaría participar...',
    type: 'patient',
    language: 'es',
    createdAt: Date.now(),
    status: 'new'
  })
])
```

## 📱 Acceso al Dashboard

Para gestionar el contenido:
1. Inicia sesión en https://instantdb.com
2. Selecciona la app CODENTMED IPS
3. Ve a "Explorer" para ver/editar datos
4. Usa "Permissions" para ajustar permisos

## 🔒 Seguridad

- ✅ El `INSTANT_SECRET_TOKEN` solo se usa en operaciones del servidor
- ✅ El `NEXT_PUBLIC_INSTANT_APP_ID` es público y seguro
- ✅ Configura permisos apropiados en InstantDB Dashboard
- ✅ No expongas el Secret Token en el cliente

## 📞 Soporte

Si necesitas ayuda con InstantDB:
- Documentación: https://docs.instantdb.com
- Soporte: support@instantdb.com
- Discord: https://discord.gg/instantdb
