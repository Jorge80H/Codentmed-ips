import { useLanguage } from '@/contexts/LanguageContext';
import HeroCarousel from '@/components/HeroCarousel';
import ServiceCard from '@/components/ServiceCard';
import StatsSection from '@/components/StatsSection';
import DrWilsonSection from '@/components/DrWilsonSection';
import BlogCard from '@/components/BlogCard';
import CTASection from '@/components/CTASection';
import { Microscope, Users, FileText, Heart, Activity, Brain, Wind, Dna, Bone } from 'lucide-react';

export default function Home() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Microscope,
      titleEs: 'Para Patrocinadores',
      titleEn: 'For Sponsors',
      descEs: 'Soluciones integrales para investigación clínica con cumplimiento de estándares GCP internacionales.',
      descEn: 'Comprehensive solutions for clinical research with compliance to international GCP standards.',
      ctaEs: 'Explorar servicios',
      ctaEn: 'Explore services',
    },
    {
      icon: Users,
      titleEs: 'Investigación Clínica',
      titleEn: 'Clinical Research',
      descEs: 'Estudios clínicos Fase I-IV con la más alta calidad científica y rigor metodológico.',
      descEn: 'Phase I-IV clinical studies with the highest scientific quality and methodological rigor.',
      ctaEs: 'Ver estudios',
      ctaEn: 'View studies',
    },
    {
      icon: FileText,
      titleEs: 'Asuntos Regulatorios',
      titleEn: 'Regulatory Affairs',
      descEs: 'Apoyo experto en trámites regulatorios ante INVIMA, FDA y agencias internacionales.',
      descEn: 'Expert support in regulatory procedures with INVIMA, FDA and international agencies.',
      ctaEs: 'Conocer más',
      ctaEn: 'Learn more',
    },
  ];

  const therapeuticAreas = [
    { icon: Heart, labelEs: 'Cardiología', labelEn: 'Cardiology' },
    { icon: Brain, labelEs: 'Neurología', labelEn: 'Neurology' },
    { icon: Wind, labelEs: 'Oncología', labelEn: 'Oncology' },
    { icon: Activity, labelEs: 'Diabetes', labelEn: 'Diabetes' },
    { icon: Bone, labelEs: 'Reumatología', labelEn: 'Rheumatology' },
    { icon: Dna, labelEs: 'Genética', labelEn: 'Genetics' },
  ];

  const blogPosts = [
    {
      image: '/images/blog-research.jpg',
      categoryEs: 'Investigación',
      categoryEn: 'Research',
      titleEs: 'Colombia: Hub Estratégico para Investigación Clínica',
      titleEn: 'Colombia: Strategic Hub for Clinical Research',
      excerptEs: 'Descubre las ventajas competitivas que posicionan a Colombia como destino ideal para estudios clínicos internacionales.',
      excerptEn: 'Discover the competitive advantages that position Colombia as an ideal destination for international clinical studies.',
      author: 'Dr. Wilson Bautista',
      dateEs: '15 Ene 2025',
      dateEn: 'Jan 15, 2025',
      readTimeEs: '5 min',
      readTimeEn: '5 min',
    },
    {
      image: '/images/blog-team.jpg',
      categoryEs: 'Equipo',
      categoryEn: 'Team',
      titleEs: 'Nuestro Compromiso con la Excelencia Científica',
      titleEn: 'Our Commitment to Scientific Excellence',
      excerptEs: 'Conoce cómo nuestro equipo multidisciplinario garantiza los más altos estándares de calidad en cada estudio.',
      excerptEn: 'Learn how our multidisciplinary team ensures the highest quality standards in every study.',
      author: 'Equipo CODENTMED',
      dateEs: '10 Ene 2025',
      dateEn: 'Jan 10, 2025',
      readTimeEs: '4 min',
      readTimeEn: '4 min',
    },
    {
      image: '/images/blog-patients.jpg',
      categoryEs: 'Pacientes',
      categoryEn: 'Patients',
      titleEs: 'Beneficios de Participar en Estudios Clínicos',
      titleEn: 'Benefits of Participating in Clinical Studies',
      excerptEs: 'Información esencial sobre cómo los estudios clínicos pueden beneficiar tu salud y contribuir al avance médico.',
      excerptEn: 'Essential information on how clinical studies can benefit your health and contribute to medical advancement.',
      author: 'Dra. María García',
      dateEs: '5 Ene 2025',
      dateEn: 'Jan 5, 2025',
      readTimeEs: '6 min',
      readTimeEn: '6 min',
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroCarousel />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {t('Nuestros Servicios', 'Our Services')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t(
                'Ofrecemos soluciones integrales en investigación clínica con los más altos estándares internacionales',
                'We offer comprehensive clinical research solutions with the highest international standards'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={t(service.titleEs, service.titleEn)}
                description={t(service.descEs, service.descEn)}
                cta={t(service.ctaEs, service.ctaEn)}
              />
            ))}
          </div>
        </div>
      </section>

      <StatsSection />

      <DrWilsonSection />

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {t('Áreas Terapéuticas', 'Therapeutic Areas')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t(
                'Experiencia en múltiples especialidades médicas',
                'Experience in multiple medical specialties'
              )}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {therapeuticAreas.map((area, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl text-center space-y-3 hover:-translate-y-1 transition-transform border border-card-border"
              >
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-xl flex items-center justify-center">
                  <area.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-sm font-medium text-card-foreground">
                  {t(area.labelEs, area.labelEn)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {t('Últimas Publicaciones', 'Latest Posts')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t(
                'Mantente informado sobre las últimas novedades en investigación clínica',
                'Stay informed about the latest news in clinical research'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={index}
                image={post.image}
                category={t(post.categoryEs, post.categoryEn)}
                title={t(post.titleEs, post.titleEn)}
                excerpt={t(post.excerptEs, post.excerptEn)}
                author={post.author}
                date={t(post.dateEs, post.dateEn)}
                readTime={t(post.readTimeEs, post.readTimeEn)}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}