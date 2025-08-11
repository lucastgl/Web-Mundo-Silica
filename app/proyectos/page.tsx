import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProyectosPage() {
  return (
    <div className="min-h-screen">

      <div className="container px-4 py-16 md:px-6 md:py-24">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Nuestros Proyectos</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Explora algunos de nuestros proyectos más destacados y los resultados que hemos logrado
          </p>
        </div>

        {/* Proyecto 1: Transformación Digital Empresa A */}
        <section className="mb-16">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Transformación Digital Empresa A</h2>
              <p className="text-muted-foreground text-lg">
                Implementamos una solución integral de transformación digital para optimizar todos los procesos
                operativos de la empresa. El proyecto incluyó la migración de sistemas legacy, implementación de nuevas
                tecnologías y capacitación del personal.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Migración completa de sistemas legacy</li>
                <li>• Implementación de ERP personalizado</li>
                <li>• Automatización de procesos clave</li>
                <li>• Capacitación integral del equipo</li>
                <li>• Reducción del 40% en tiempos operativos</li>
              </ul>
              <div className="flex items-center space-x-4 text-sm">
                <span className="font-medium">Cliente:</span>
                <span className="text-muted-foreground">Empresa A - Sector Industrial</span>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <span className="font-medium">Duración:</span>
                <span className="text-muted-foreground">8 meses (2024)</span>
              </div>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600&text=Transformación+Digital"
                alt="Transformación Digital Empresa A"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Proyecto 2: Sistema de Gestión Integral */}
        <section className="mb-16 bg-muted/30 rounded-lg p-8">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="aspect-video rounded-lg overflow-hidden md:order-1">
              <img
                src="/placeholder.svg?height=400&width=600&text=Sistema+de+Gestión"
                alt="Sistema de Gestión Integral"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-4 md:order-2">
              <h2 className="text-3xl font-bold">Sistema de Gestión Integral</h2>
              <p className="text-muted-foreground text-lg">
                Desarrollamos una plataforma web completa para la gestión de recursos empresariales, integrando módulos
                de ventas, inventario, contabilidad y recursos humanos en una solución unificada y escalable.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Plataforma web responsive y moderna</li>
                <li>• Módulo de gestión de ventas y CRM</li>
                <li>• Control de inventario en tiempo real</li>
                <li>• Integración contable automatizada</li>
                <li>• Dashboard ejecutivo con métricas clave</li>
              </ul>
              <div className="flex items-center space-x-4 text-sm">
                <span className="font-medium">Cliente:</span>
                <span className="text-muted-foreground">Empresa B - Sector Comercial</span>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <span className="font-medium">Duración:</span>
                <span className="text-muted-foreground">6 meses (2023)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Proyecto 3: Consultoría Estratégica */}
        <section className="mb-16">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Consultoría Estratégica</h2>
              <p className="text-muted-foreground text-lg">
                Brindamos asesoramiento integral en estrategias de crecimiento y expansión de mercado. El proyecto
                incluyó análisis de mercado, definición de estrategias competitivas y plan de implementación a 3 años.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Análisis exhaustivo del mercado objetivo</li>
                <li>• Definición de propuesta de valor única</li>
                <li>• Estrategia de expansión geográfica</li>
                <li>• Plan de marketing digital integral</li>
                <li>• Proyección financiera y ROI esperado</li>
              </ul>
              <div className="flex items-center space-x-4 text-sm">
                <span className="font-medium">Cliente:</span>
                <span className="text-muted-foreground">Empresa C - Sector Servicios</span>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <span className="font-medium">Estado:</span>
                <span className="text-muted-foreground">En progreso (2024)</span>
              </div>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600&text=Consultoría+Estratégica"
                alt="Consultoría Estratégica"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Proyecto 4: Automatización de Procesos */}
        <section className="mb-16 bg-muted/30 rounded-lg p-8">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="aspect-video rounded-lg overflow-hidden md:order-1">
              <img
                src="/placeholder.svg?height=400&width=600&text=Automatización+Procesos"
                alt="Automatización de Procesos"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-4 md:order-2">
              <h2 className="text-3xl font-bold">Automatización de Procesos</h2>
              <p className="text-muted-foreground text-lg">
                Implementamos soluciones de automatización para optimizar los procesos de manufactura y logística,
                reduciendo significativamente los tiempos de producción y mejorando la calidad del producto final.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Automatización de línea de producción</li>
                <li>• Sistema de control de calidad automatizado</li>
                <li>• Optimización de cadena de suministro</li>
                <li>• Monitoreo en tiempo real con IoT</li>
                <li>• Reducción del 35% en costos operativos</li>
              </ul>
              <div className="flex items-center space-x-4 text-sm">
                <span className="font-medium">Cliente:</span>
                <span className="text-muted-foreground">Empresa D - Sector Manufacturero</span>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <span className="font-medium">Duración:</span>
                <span className="text-muted-foreground">10 meses (2023-2024)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Proyecto 5: E-commerce y Marketing Digital */}
        <section className="mb-16">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">E-commerce y Marketing Digital</h2>
              <p className="text-muted-foreground text-lg">
                Desarrollamos una plataforma de e-commerce completa con integración de sistemas de pago, gestión de
                inventario y estrategias de marketing digital para maximizar las ventas online.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Tienda online responsive y optimizada</li>
                <li>• Integración con múltiples medios de pago</li>
                <li>• Sistema de gestión de pedidos automatizado</li>
                <li>• Estrategia SEO y marketing de contenidos</li>
                <li>• Incremento del 200% en ventas online</li>
              </ul>
              <div className="flex items-center space-x-4 text-sm">
                <span className="font-medium">Cliente:</span>
                <span className="text-muted-foreground">Empresa E - Sector Retail</span>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <span className="font-medium">Duración:</span>
                <span className="text-muted-foreground">4 meses (2024)</span>
              </div>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600&text=E-commerce+Digital"
                alt="E-commerce y Marketing Digital"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            ¿Tienes un proyecto en mente? Nos encantaría ayudarte a hacerlo realidad.
          </p>
          <Button size="lg" asChild>
            <Link href="/contacto">Contactar</Link>
          </Button>
        </div>
      </div>

    </div>
  )
}
