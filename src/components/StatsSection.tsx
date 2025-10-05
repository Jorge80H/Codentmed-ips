import { useLanguage } from '@/contexts/LanguageContext';

const stats = [
  { valueEs: '500+', valueEn: '500+', labelEs: 'Estudios Completados', labelEn: 'Completed Studies' },
  { valueEs: '15+', valueEn: '15+', labelEs: 'Años de Experiencia', labelEn: 'Years of Experience' },
  { valueEs: '50+', valueEn: '50+', labelEs: 'Patrocinadores Internacionales', labelEn: 'International Sponsors' },
  { valueEs: '10,000+', valueEn: '10,000+', labelEs: 'Pacientes Atendidos', labelEn: 'Patients Served' },
];

export default function StatsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold font-display text-primary" data-testid={`stat-value-${index}`}>
                {t(stat.valueEs, stat.valueEn)}
              </div>
              <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wide" data-testid={`stat-label-${index}`}>
                {t(stat.labelEs, stat.labelEn)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
