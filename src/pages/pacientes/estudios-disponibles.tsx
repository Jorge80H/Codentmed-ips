'use client'

import Head from 'next/head'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { db } from '@/lib/instantdb'
import {
  FlaskConical,
  CheckCircle2,
  Clock,
  Users,
  FileText,
  ArrowRight,
  AlertCircle
} from 'lucide-react'

export default function EstudiosDisponiblesPage() {
  const { t, language } = useLanguage()

  // Query active clinical studies from InstantDB
  const { data, isLoading } = db.useQuery({
    clinicalStudies: {
      $: {
        where: { status: 'recruiting' },
        order: { createdAt: 'desc' as const }
      }
    }
  })

  const studies = data?.clinicalStudies || []

  const beforeApplying = [
    {
      textEs: 'Lea la información básica del estudio',
      textEn: 'Read the basic study information'
    },
    {
      textEs: 'Verifique si cumple los criterios principales',
      textEn: 'Check if you meet the main criteria'
    },
    {
      textEs: 'Prepare sus preguntas para el coordinador',
      textEn: 'Prepare your questions for the coordinator'
    },
    {
      textEs: 'Tenga a mano información médica relevante',
      textEn: 'Have relevant medical information at hand'
    }
  ]

  const nextSteps = [
    {
      step: 1,
      titleEs: 'Contacto Inicial',
      titleEn: 'Initial Contact',
      descEs: 'Un coordinador de investigación se comunicará con usted en las próximas 24-48 horas para responder preguntas iniciales y verificar criterios básicos.',
      descEn: 'A research coordinator will contact you within 24-48 hours to answer initial questions and verify basic criteria.'
    },
    {
      step: 2,
      titleEs: 'Visita de Tamizaje',
      titleEn: 'Screening Visit',
      descEs: 'Si es elegible preliminarmente, agende una visita para evaluación médica completa, revisión del consentimiento informado y exámenes de laboratorio (sin costo).',
      descEn: 'If preliminarily eligible, schedule a visit for complete medical evaluation, informed consent review, and laboratory tests (at no cost).'
    },
    {
      step: 3,
      titleEs: 'Decisión y Enrolamiento',
      titleEn: 'Decision and Enrollment',
      descEs: 'Si cumple todos los criterios y decide participar voluntariamente, firmará el consentimiento informado e iniciará el tratamiento del estudio.',
      descEn: 'If you meet all criteria and decide to participate voluntarily, you will sign informed consent and begin study treatment.'
    }
  ]

  return (
    <>
      <Head>
        <title>{t('Estudios Disponibles', 'Available Studies')} - CODENTMED IPS</title>
        <meta
          name="description"
          content={t(
            'Estudios clínicos activos en CODENTMED IPS donde puede participar.',
            'Active clinical studies at CODENTMED IPS where you can participate.'
          )}
        />
      </Head>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <FlaskConical className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">
                  {t('Participe en Investigación', 'Participate in Research')}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {t('Estudios Clínicos Disponibles', 'Available Clinical Studies')}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                {t(
                  'Encuentre oportunidades para participar en investigación clínica de vanguardia',
                  'Find opportunities to participate in cutting-edge clinical research'
                )}
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl">
                {t(
                  'Estos son los estudios clínicos actualmente reclutando participantes. Revise los criterios básicos y contáctenos si está interesado en participar.',
                  'These are the clinical studies currently recruiting participants. Review the basic criteria and contact us if you are interested in participating.'
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Before Applying */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="p-6 border-card-border bg-blue-50 dark:bg-blue-950/20">
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <h3 className="font-semibold text-card-foreground">
                    {t('Antes de aplicar:', 'Before applying:')}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {beforeApplying.map((item, index) => (
                    <li key={index} className="flex items-start text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{t(item.textEs, item.textEn)}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Studies List */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('Estudios Activos', 'Active Studies')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {isLoading
                  ? t('Cargando estudios...', 'Loading studies...')
                  : `${studies.length} ${t('estudios disponibles', 'available studies')}`
                }
              </p>
            </div>

            {/* Loading State */}
            {isLoading && (
              <div className="grid md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i} className="p-6 animate-pulse border-card-border">
                    <div className="h-6 bg-muted rounded w-3/4 mb-4" />
                    <div className="h-4 bg-muted rounded w-full mb-2" />
                    <div className="h-4 bg-muted rounded w-5/6" />
                  </Card>
                ))}
              </div>
            )}

            {/* No Studies */}
            {!isLoading && studies.length === 0 && (
              <Card className="p-12 text-center border-card-border">
                <FlaskConical className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
                <p className="text-muted-foreground text-lg mb-6">
                  {t(
                    'No hay estudios activos reclutando en este momento.',
                    'There are no active studies recruiting at this time.'
                  )}
                </p>
                <p className="text-muted-foreground mb-8">
                  {t(
                    'Regrese pronto o déjenos sus datos de contacto para notificarle cuando haya nuevos estudios.',
                    'Check back soon or leave your contact information to be notified when new studies are available.'
                  )}
                </p>
                <Button asChild>
                  <Link href="/contacto">
                    {t('Dejar Mis Datos', 'Leave My Information')}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </Card>
            )}

            {/* Studies Grid */}
            {!isLoading && studies.length > 0 && (
              <div className="grid md:grid-cols-2 gap-6">
                {studies.map((study) => {
                  const title = language === 'es' ? study.title_es : study.title_en
                  const description = language === 'es' ? study.description_es : study.description_en
                  const therapeuticArea = language === 'es' ? study.therapeuticArea_es : study.therapeuticArea_en
                  const inclusions = language === 'es' ? study.inclusions_es : study.inclusions_en

                  return (
                    <Card key={study.id} className="p-6 border-card-border hover:shadow-lg transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <Badge variant="default">{study.phase}</Badge>
                        <Badge variant="outline">{therapeuticArea}</Badge>
                      </div>

                      <h3 className="text-xl font-bold text-card-foreground mb-3">{title}</h3>
                      <p className="text-muted-foreground mb-4">{description}</p>

                      {/* Key Criteria Preview */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-card-foreground mb-2 text-sm">
                          {t('¿Puede participar si tiene:', 'Can participate if you have:')}
                        </h4>
                        <ul className="space-y-1">
                          {inclusions.slice(0, 3).map((criterion, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start">
                              <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{criterion}</span>
                            </li>
                          ))}
                          {inclusions.length > 3 && (
                            <li className="text-sm text-muted-foreground ml-6">
                              + {inclusions.length - 3} {t('criterios más...', 'more criteria...')}
                            </li>
                          )}
                        </ul>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          asChild
                        >
                          <Link href={`/investigacion/estudios-activos#${study.id}`}>
                            {t('Ver Detalles', 'View Details')}
                          </Link>
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1"
                          asChild
                        >
                          <Link href="/contacto">
                            {t('Aplicar Ahora', 'Apply Now')}
                          </Link>
                        </Button>
                      </div>
                    </Card>
                  )
                })}
              </div>
            )}
          </div>
        </section>

        {/* What Happens Next */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                {t('¿Qué sucede después de aplicar?', 'What happens after applying?')}
              </h2>

              <div className="space-y-6">
                {nextSteps.map((step) => (
                  <Card key={step.step} className="p-6 border-card-border">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-4">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground mb-2">
                          {t(step.titleEs, step.titleEn)}
                        </h3>
                        <p className="text-muted-foreground">
                          {t(step.descEs, step.descEn)}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('¿Tiene preguntas sobre algún estudio?', 'Questions about any study?')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t(
                'Nuestro equipo está disponible para responder todas sus dudas',
                'Our team is available to answer all your questions'
              )}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contacto">
                  {t('Contactar Coordinador', 'Contact Coordinator')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pacientes/informacion">
                  {t('Más Información sobre Estudios', 'More Study Information')}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
