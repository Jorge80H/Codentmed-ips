import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/Button';

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          {t(
            '¿Listo para comenzar tu proyecto de investigación?',
            'Ready to start your research project?'
          )}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t(
            'Contacta con nuestro equipo de expertos para discutir cómo podemos ayudarte a alcanzar tus objetivos de investigación clínica.',
            'Contact our team of experts to discuss how we can help you achieve your clinical research goals.'
          )}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="text-base" data-testid="button-cta-contact">
            {t('Contactar Ahora', 'Contact Now')}
          </Button>
          <Button size="lg" variant="outline" className="text-base" data-testid="button-cta-learn">
            {t('Más Información', 'Learn More')}
          </Button>
        </div>
      </div>
    </section>
  );
}
