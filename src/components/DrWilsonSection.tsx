import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/Button';
import { ExternalLink } from 'lucide-react';

export default function DrWilsonSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
              {t('Consulta Médica Privada', 'Private Medical Consultation')}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Dr. Wilson Bautista
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                {t(
                  'Especialista en medicina interna con más de 15 años de experiencia en investigación clínica y atención médica de excelencia.',
                  'Specialist in internal medicine with over 15 years of experience in clinical research and excellence in medical care.'
                )}
              </p>
              <p className="leading-relaxed">
                {t(
                  'Ofrece consultas médicas privadas tanto presenciales como virtuales para pacientes nacionales e internacionales, brindando atención personalizada basada en evidencia científica.',
                  'Offers private medical consultations both in-person and virtual for national and international patients, providing personalized care based on scientific evidence.'
                )}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" data-testid="button-schedule-dr-wilson">
                {t('Agenda tu Consulta', 'Schedule Consultation')}
              </Button>
              <Button size="lg" variant="outline" data-testid="button-dr-wilson-site">
                {t('Visitar Sitio Personal', 'Visit Personal Site')}
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-primary/5">
              {/* Placeholder for Dr. Wilson photo */}
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-5xl font-bold text-primary">WB</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border border-card-border max-w-xs">
              <div className="text-sm text-muted-foreground mb-1">
                {t('Especialidades', 'Specialties')}
              </div>
              <div className="font-semibold text-card-foreground">
                {t('Medicina Interna • Investigación Clínica', 'Internal Medicine • Clinical Research')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
