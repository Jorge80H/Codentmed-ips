import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselSlide {
  id: number;
  titleEs: string;
  titleEn: string;
  subtitleEs: string;
  subtitleEn: string;
  ctaTextEs: string;
  ctaTextEn: string;
  image: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    titleEs: 'Líderes en Investigación Clínica',
    titleEn: 'Leaders in Clinical Research',
    subtitleEs: 'Más de 15 años de experiencia en estudios clínicos con estándares internacionales GCP',
    subtitleEn: 'Over 15 years of experience in clinical studies with international GCP standards',
    ctaTextEs: 'Conocer Más',
    ctaTextEn: 'Learn More',
    image: '/images/hero-research.jpg',
  },
  {
    id: 2,
    titleEs: 'Atención Médica de Excelencia',
    titleEn: 'Excellence in Medical Care',
    subtitleEs: 'Consultas especializadas en reumatología y medicina interna',
    subtitleEn: 'Specialized consultations in rheumatology and internal medicine',
    ctaTextEs: 'Agendar Cita',
    ctaTextEn: 'Schedule Appointment',
    image: '/images/hero-medical.jpg',
  },
  {
    id: 3,
    titleEs: 'Compromiso con la Ciencia',
    titleEn: 'Commitment to Science',
    subtitleEs: 'Contribuyendo al avance de la medicina a través de investigación rigurosa',
    subtitleEn: 'Contributing to the advancement of medicine through rigorous research',
    ctaTextEs: 'Ver Estudios',
    ctaTextEn: 'View Studies',
    image: '/images/hero-science.jpg',
  },
];

export default function HeroCarousel() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] md:h-[700px] lg:h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-600 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />

          <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
            <div className="max-w-3xl space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                {t(slide.titleEs, slide.titleEn)}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                {t(slide.subtitleEs, slide.subtitleEn)}
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="text-base"
                  data-testid={`button-hero-cta-${index}`}
                >
                  {t(slide.ctaTextEs, slide.ctaTextEn)}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base"
                  data-testid={`button-hero-learn-${index}`}
                >
                  {t('Más Información', 'Learn More')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-background/20 backdrop-blur-md hover:bg-background/40 text-foreground"
        onClick={prevSlide}
        data-testid="button-carousel-prev"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-background/20 backdrop-blur-md hover:bg-background/40 text-foreground"
        onClick={nextSlide}
        data-testid="button-carousel-next"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-primary w-8'
                : 'bg-background/40 hover:bg-background/60'
            }`}
            data-testid={`button-carousel-dot-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
