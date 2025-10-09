import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import {
  Microscope,
  Heart,
  FileText,
  Pill,
  TestTube,
  CheckCircle,
  Users,
  GraduationCap,
  Globe,
  Award,
  Activity,
  Stethoscope
} from 'lucide-react'

export default function EquipoPage() {
  const { t } = useLanguage()

  const teamMembers = [
    {
      name: 'Dr. Wilson Bautista',
      roleEs: 'Director Médico y Científico',
      roleEn: 'Medical and Scientific Director',
      specialtyEs: 'Medicina Interna y Reumatología',
      specialtyEn: 'Internal Medicine and Rheumatology',
      descriptionEs: 'Médico internista y reumatólogo con más de 15 años de experiencia en atención médica especializada e investigación clínica. Experto en el manejo de enfermedades reumáticas y autoinmunes, con formación en investigación clínica y experiencia en terapias biológicas avanzadas.',
      descriptionEn: 'Internal medicine physician and rheumatologist with over 15 years of experience in specialized medical care and clinical research. Expert in managing rheumatic and autoimmune diseases, with training in clinical research and experience with advanced biological therapies.',
      website: 'https://drwilsonbautista.com',
      image: '/images/team/DrWilsonBautistafotoperfil.jpg'
    },
    {
      name: 'Dra. Sonia Unriza',
      roleEs: 'Directora General',
      roleEn: 'General Director',
      specialtyEs: 'Odontología y Gestión Clínica',
      specialtyEn: 'Dentistry and Clinical Management',
      descriptionEs: 'Odontóloga especializada en gestión de proyectos de salud con amplia experiencia en coordinación de servicios médicos y odontológicos. Lidera la estrategia institucional y el desarrollo de programas de atención integral.',
      descriptionEn: 'Dentist specialized in health project management with extensive experience in coordinating medical and dental services. Leads institutional strategy and development of comprehensive care programs.',
      image: '/images/team/DraSoniaUnrizaConferencia1.jpg'
    }
  ]

  const departments = [
    {
      icon: Microscope,
      titleEs: 'Investigación Clínica',
      titleEn: 'Clinical Research',
      descEs: 'Investigadores principales, coordinadores de estudios y monitores certificados en GCP',
      descEn: 'Principal investigators, study coordinators and GCP-certified monitors'
    },
    {
      icon: Stethoscope,
      titleEs: 'Departamento Médico',
      titleEn: 'Medical Department',
      descEs: 'Médicos especialistas en medicina interna, reumatología y otras áreas',
      descEn: 'Specialist physicians in internal medicine, rheumatology and other areas'
    },
    {
      icon: Activity,
      titleEs: 'Departamento Odontológico',
      titleEn: 'Dental Department',
      descEs: 'Odontólogos generales y especialistas en todas las áreas odontológicas',
      descEn: 'General dentists and specialists in all dental areas'
    },
    {
      icon: FileText,
      titleEs: 'Asuntos Regulatorios',
      titleEn: 'Regulatory Affairs',
      descEs: 'Expertos en normativa colombiana e internacional para garantizar cumplimiento',
      descEn: 'Experts in Colombian and international regulations to ensure compliance'
    },
    {
      icon: Pill,
      titleEs: 'Farmacia Clínica',
      titleEn: 'Clinical Pharmacy',
      descEs: 'Farmacéuticos especializados en manejo de medicamentos',
      descEn: 'Pharmacists specialized in medication management'
    },
    {
      icon: TestTube,
      titleEs: 'Laboratorio Clínico',
      titleEn: 'Clinical Laboratory',
      descEs: 'Equipo técnico especializado en procesamiento de muestras',
      descEn: 'Technical team specialized in sample processing'
    }
  ]

  const qualifications = [
    {
      icon: Award,
      titleEs: 'Certificaciones en Good Clinical Practice (GCP)',
      titleEn: 'Good Clinical Practice (GCP) Certifications',
      descEs: 'Todo nuestro personal de investigación cuenta con certificación vigente en GCP de acuerdo a las guías ICH-E6(R2), asegurando el cumplimiento de estándares éticos e internacionales.',
      descEn: 'All our research staff holds current GCP certification according to ICH-E6(R2) guidelines, ensuring compliance with ethical and international standards.'
    },
    {
      icon: GraduationCap,
      titleEs: 'Formación Especializada',
      titleEn: 'Specialized Training',
      descEs: 'Médicos con subespecialidades, odontólogos especialistas, investigadores con maestrías y doctorados en ciencias de la salud, y personal técnico con formación avanzada.',
      descEn: 'Physicians with subspecialties, specialist dentists, researchers with masters and doctorates in health sciences, and technical staff with advanced training.'
    },
    {
      icon: Globe,
      titleEs: 'Experiencia Internacional',
      titleEn: 'International Experience',
      descEs: 'Participación en estudios multicéntricos globales, colaboraciones con instituciones de Norteamérica, Europa y Latinoamérica, y presentaciones en congresos internacionales.',
      descEn: 'Participation in global multicenter studies, collaborations with institutions in North America, Europe and Latin America, and presentations at international conferences.'
    },
    {
      icon: CheckCircle,
      titleEs: 'Actualización Continua',
      titleEn: 'Continuous Update',
      descEs: 'Programa permanente de capacitación en nuevas metodologías, regulaciones actualizadas, y avances científicos relevantes a la investigación clínica y la práctica médica.',
      descEn: 'Permanent training program in new methodologies, updated regulations, and scientific advances relevant to clinical research and medical practice.'
    }
  ]

  return (
    <>
      <Head>
        <title>{t('Nuestro Equipo', 'Our Team')} - CODENTMED IPS</title>
        <meta
          name="description"
          content={t(
            'Conoce al equipo multidisciplinario de CODENTMED IPS, profesionales altamente calificados en medicina, odontología e investigación clínica.',
            'Meet the multidisciplinary team of CODENTMED IPS, highly qualified professionals in medicine, dentistry and clinical research.'
          )}
        />
      </Head>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {t('Nuestro Equipo', 'Our Team')}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                {t('Profesionales altamente calificados comprometidos con la excelencia', 'Highly qualified professionals committed to excellence')}
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl">
                {t(
                  'Un equipo multidisciplinario de profesionales de la salud con formación especializada y experiencia en atención médica, odontológica e investigación clínica.',
                  'A multidisciplinary team of healthcare professionals with specialized training and experience in medical care, dentistry and clinical research.'
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('Dirección', 'Leadership')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('Liderazgo con experiencia nacional e internacional', 'Leadership with national and international experience')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden border-card-border hover:shadow-lg transition-shadow">
                  <div className="relative aspect-square bg-gradient-to-br from-primary/5 to-primary/10">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center">
                          <span className="text-5xl font-bold text-primary">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-card-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-1">
                      {t(member.roleEs, member.roleEn)}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {t(member.specialtyEs, member.specialtyEn)}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {t(member.descriptionEs, member.descriptionEn)}
                    </p>
                    {member.website && (
                      <Button asChild variant="outline" size="sm">
                        <Link href={member.website} target="_blank" rel="noopener noreferrer">
                          {t('Ver perfil completo', 'View full profile')} →
                        </Link>
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Departments Section */}
        <section className="bg-muted/30 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('Nuestros Departamentos', 'Our Departments')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('Equipos especializados trabajando en conjunto', 'Specialized teams working together')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, index) => {
                const IconComponent = dept.icon
                return (
                  <Card key={index} className="p-6 border-card-border hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">
                      {t(dept.titleEs, dept.titleEn)}
                    </h3>
                    <p className="text-muted-foreground">
                      {t(dept.descEs, dept.descEn)}
                    </p>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Qualifications Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('Calificaciones y Experiencia', 'Qualifications and Experience')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('Formación continua y certificaciones internacionales', 'Continuous training and international certifications')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {qualifications.map((qual, index) => {
                const IconComponent = qual.icon
                return (
                  <Card key={index} className="p-6 border-card-border">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-card-foreground mb-2">
                          {t(qual.titleEs, qual.titleEn)}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {t(qual.descEs, qual.descEn)}
                        </p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('¿Interesado en colaborar con nosotros?', 'Interested in collaborating with us?')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t(
                'Contacta a nuestro equipo para conocer cómo podemos apoyar tu proyecto o atender tus necesidades de salud',
                'Contact our team to learn how we can support your project or address your health needs'
              )}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contacto">
                  {t('Contactar', 'Contact')}
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/servicios/medicina">
                  {t('Ver Servicios', 'View Services')}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
