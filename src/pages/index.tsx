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
      icon: Heart,
      titleEs: 'Medicina General y Especializada',
      titleEn: 'General and Specialized Medicine',
      descEs: 'Atención médica integral en medicina general, medicina interna, reumatología y seguimiento interdisciplinario.',
      descEn: 'Comprehensive medical care in general medicine, internal medicine, rheumatology and interdisciplinary follow-up.',
      ctaEs: 'Conocer más',
      ctaEn: 'Learn more',
    },
    {
      icon: Activity,
      titleEs: 'Odontología General y Especializada',
      titleEn: 'General and Specialized Dentistry',
      descEs: 'Servicios odontológicos integrales incluyendo periodoncia, rehabilitación oral, ortodoncia y cirugía oral.',
      descEn: 'Comprehensive dental services including periodontics, oral rehabilitation, orthodontics and oral surgery.',
      ctaEs: 'Ver servicios',
      ctaEn: 'View services',
    },
    {
      icon: Microscope,
      titleEs: 'Investigación Clínica y Documental',
      titleEn: 'Clinical and Documentary Research',
      descEs: 'Investigación clínica en medicina y odontología, evaluación de materiales y estudios de evaluación económica.',
      descEn: 'Clinical research in medicine and dentistry, materials evaluation and economic evaluation studies.',
      ctaEs: 'Explorar investigación',
      ctaEn: 'Explore research',
    },
    {
      icon: Brain,
      titleEs: 'Educación Médica y Odontológica',
      titleEn: 'Medical and Dental Education',
      descEs: 'Cursos, talleres, formación en investigación y programas de actualización profesional.',
      descEn: 'Courses, workshops, research training and professional development programs.',
      ctaEs: 'Ver programas',
      ctaEn: 'View programs',
    },
    {
      icon: FileText,
      titleEs: 'Asesorías Institucionales',
      titleEn: 'Institutional Advisory',
      descEs: 'Asesoría especializada para instituciones públicas, privadas y profesionales independientes.',
      descEn: 'Specialized advisory for public, private institutions and independent professionals.',
      ctaEs: 'Solicitar asesoría',
      ctaEn: 'Request advisory',
    },
  ];

  const coreValues = [
    { icon: Heart, labelEs: 'Ética', labelEn: 'Ethics' },
    { icon: Activity, labelEs: 'Calidad', labelEn: 'Quality' },
    { icon: Users, labelEs: 'Humanismo', labelEn: 'Humanism' },
    { icon: FileText, labelEs: 'Responsabilidad', labelEn: 'Responsibility' },
    { icon: Brain, labelEs: 'Innovación', labelEn: 'Innovation' },
    { icon: Dna, labelEs: 'Confidencialidad', labelEn: 'Confidentiality' },
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
                'Cinco líneas de servicio integradas para atención médica, odontológica, investigación y educación de excelencia',
                'Five integrated service lines for medical, dental care, research and educational excellence'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
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
              {t('Nuestros Valores', 'Our Values')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t(
                'Valores corporativos que guían nuestro compromiso con la excelencia',
                'Corporate values that guide our commitment to excellence'
              )}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl text-center space-y-3 hover:-translate-y-1 transition-transform border border-card-border"
              >
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-xl flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-sm font-medium text-card-foreground">
                  {t(value.labelEs, value.labelEn)}
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