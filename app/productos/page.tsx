import { Package } from "lucide-react"
import { Button } from "@/components/ui/button" // Import the Button component

export default function ProductosPage() {
  return (
    <div className="min-h-screen">

      <div className="container px-4 py-16 md:px-6 md:py-24">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Nuestros Productos</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Descubre nuestra gama completa de productos diseñados para satisfacer todas tus necesidades
          </p>
        </div>

        {/* Sección Hogar y Muebles */}
        <section className="mb-16">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Hogar y Muebles</h2>
              <p className="text-muted-foreground text-lg">
                Descubre nuestra amplia gama de muebles y accesorios para el hogar. Desde muebles de sala y dormitorio
                hasta elementos decorativos que transformarán tu espacio en un lugar acogedor y funcional.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Muebles de sala y comedor</li>
                <li>• Dormitorios completos</li>
                <li>• Accesorios decorativos</li>
                <li>• Soluciones de almacenamiento</li>
              </ul>
              <Button variant="outline" className="mt-4 bg-transparent">
                Ver más
              </Button>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Hogar y Muebles"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Sección Construcción */}
        <section className="mb-16 bg-muted/30 rounded-lg p-8">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="aspect-video rounded-lg overflow-hidden md:order-1">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Construcción"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-4 md:order-2">
              <h2 className="text-3xl font-bold">Construcción</h2>
              <p className="text-muted-foreground text-lg">
                Materiales de construcción de alta calidad para tus proyectos. Contamos con todo lo necesario para
                construcción residencial, comercial e industrial, garantizando durabilidad y resistencia.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Materiales de construcción</li>
                <li>• Herramientas especializadas</li>
                <li>• Equipos de seguridad</li>
                <li>• Asesoramiento técnico</li>
              </ul>
              <Button variant="outline" className="mt-4 bg-transparent">
                Ver más
              </Button>
            </div>
          </div>
        </section>

        {/* Sección Souvenirs */}
        <section className="mb-16">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Souvenirs</h2>
              <p className="text-muted-foreground text-lg">
                Productos únicos y memorables que capturan la esencia de momentos especiales. Ideales para eventos
                corporativos, turismo y ocasiones especiales que requieren un detalle distintivo.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Artículos personalizados</li>
                <li>• Productos regionales</li>
                <li>• Regalos corporativos</li>
                <li>• Ediciones especiales</li>
              </ul>
              <Button variant="outline" className="mt-4 bg-transparent">
                Ver más
              </Button>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img src="/placeholder.svg?height=400&width=600" alt="Souvenirs" className="object-cover w-full h-full" />
            </div>
          </div>
        </section>

        {/* Sección Otros */}
        <section className="mb-16 bg-muted/30 rounded-lg p-8">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="aspect-video rounded-lg overflow-hidden md:order-1">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Otros Productos"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-4 md:order-2">
              <h2 className="text-3xl font-bold">Otros</h2>
              <p className="text-muted-foreground text-lg">
                Una variedad de productos y servicios adicionales que complementan nuestra oferta principal. Soluciones
                versátiles para necesidades específicas y proyectos especiales.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Productos especializados</li>
                <li>• Servicios personalizados</li>
                <li>• Soluciones a medida</li>
                <li>• Consultoría especializada</li>
              </ul>
              <Button variant="outline" className="mt-4 bg-transparent">
                Ver más
              </Button>
            </div>
          </div>
        </section>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-muted-foreground">
            <Package className="h-5 w-5" />
            <span>¿No encuentras lo que buscas? Contáctanos para soluciones personalizadas</span>
          </div>
        </div>
      </div>

    </div>
  )
}
