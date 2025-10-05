'use client'

import Link from 'next/link'
import { ArrowRightIcon, BeakerIcon, UserGroupIcon, AcademicCapIcon, HeartIcon } from '@heroicons/react/24/outline'
import HeroCarousel from '@/components/HeroCarousel'
import BlogList from '@/components/blog/BlogList'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Services Overview Section */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ofrecemos servicios integrales en investigación clínica, medicina y consulta especializada
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1: Para Patrocinadores */}
            <Link href="/servicios/para-patrocinadores">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="p-6">
                  <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                    <BeakerIcon className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Para Patrocinadores
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Socios estratégicos en investigación clínica con estándares GCP internacionales
                  </p>
                  <span className="text-primary-600 hover:text-primary-700 font-medium">
                    Ver más →
                  </span>
                </div>
              </Card>
            </Link>

            {/* Service 2: Investigación Clínica */}
            <Link href="/servicios/investigacion-clinica">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="p-6">
                  <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                    <AcademicCapIcon className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Investigación Clínica
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Estudios clínicos Fases I-IV con rigor científico y cumplimiento regulatorio
                  </p>
                  <span className="text-primary-600 hover:text-primary-700 font-medium">
                    Ver más →
                  </span>
                </div>
              </Card>
            </Link>

            {/* Service 3: Consulta Privada */}
            <Link href="/servicios/consulta-privada">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="p-6">
                  <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                    <HeartIcon className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Consulta Médica Privada
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Consulta especializada con el Dr. Wilson Bautista, autoridad en reumatología
                  </p>
                  <span className="text-primary-600 hover:text-primary-700 font-medium">
                    Ver más →
                  </span>
                </div>
              </Card>
            </Link>

            {/* Service 4: Para Pacientes */}
            <Link href="/pacientes/informacion">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="p-6">
                  <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                    <UserGroupIcon className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Para Pacientes
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Participa en estudios clínicos y accede a tratamientos innovadores
                  </p>
                  <span className="text-primary-600 hover:text-primary-700 font-medium">
                    Ver más →
                  </span>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿Por qué elegir CODENTMED IPS?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Más de 20 años de experiencia</h3>
                    <p className="text-gray-600">En investigación clínica y atención médica especializada</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Estándares internacionales</h3>
                    <p className="text-gray-600">Certificaciones GCP, INVIMA, y cumplimiento regulatorio FDA/EMA</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Equipo multidisciplinario</h3>
                    <p className="text-gray-600">Médicos especialistas, investigadores y personal altamente calificado</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Alcance internacional</h3>
                    <p className="text-gray-600">Atención y colaboración con instituciones a nivel global</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button href="/nosotros/quienes-somos" variant="primary" size="lg">
                  Conocer más sobre nosotros
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <p className="text-gray-500 text-lg">Imagen: Equipo CODENTMED</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Últimas Publicaciones
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mantente informado con nuestras últimas noticias, investigaciones y artículos científicos
            </p>
          </div>

          <BlogList limit={3} showFilters={false} />

          <div className="text-center mt-12">
            <Button href="/blog" variant="secondary" size="lg">
              Ver todos los artículos
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white section-padding">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para comenzar?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contáctanos para conocer más sobre nuestros servicios y cómo podemos ayudarte
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contacto"
              variant="primary"
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              Contactar Ahora
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
            <Button
              href="/contacto/agendar-cita"
              variant="secondary"
              size="lg"
              className="border-white text-white hover:bg-primary-700"
            >
              Agendar Cita
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
