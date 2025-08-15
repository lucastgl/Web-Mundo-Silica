import { Link, Package } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProductosPage() {
  return (
    <div className="min-h-screen">

      <div className="container px-4 py-16 md:px-6 md:py-24">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Nuestros Productos</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Descubre nuestra gama completa de productos especializados en vidrios, mamparas y soluciones para el hogar
          </p>
        </div>

        {/* Categoría 1: Baño */}
        <section className="mb-16">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Baño</h2>
              <p className="text-muted-foreground text-lg">
                Soluciones completas para transformar tu baño en un espacio funcional y elegante. Desde mamparas de
                seguridad hasta espejos y accesorios que combinan estética y practicidad.
              </p>


              {/* Otras subcategorías de Baño */}
              <ul className="space-y-2 text-muted-foreground">
                <li>• Estantes de vidrio</li>
                <li>• Espejos para baño</li>
                <li>• Accesorios y complementos</li>
              </ul>

              <Button variant="outline" className="mt-4 bg-transparent">
                <Link href="https://listado.mercadolibre.com.ar/pagina/mundosilicaok/listado/construccion/banos-sanitarios/_PrCategId_AD#client=SEARCH&component_id=menu_corridors&label=Ba%C3%B1os+y+Sanitarios&tracking_id=">Ver más</Link>
              </Button>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src="/Productos/EspejoYMampara.jpg"
                alt="Productos para Baño"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Sección Especial: Mamparas con Galería */}
        <section className="mb-16 bg-muted/30 rounded-lg p-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Mamparas</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Explora nuestra variedad de mamparas diseñadas para cada necesidad. Fabricadas con vidrios de seguridad y
              herrajes de primera calidad para garantizar durabilidad y elegancia en tu baño.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center space-y-3">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="/Productos/MamparaFija.jpg"
                  alt="Mampara Fija"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="font-semibold">Mampara Fija</h3>
              <p className="text-sm text-muted-foreground">
                Solución elegante y minimalista para duchas. Vidrio templado de seguridad con acabados premium.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="/Productos/MamparaSimpleOscura.jpg"
                  alt="Mampara Rebatible"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="font-semibold">Rebatibles</h3>
              <p className="text-sm text-muted-foreground">
                Máxima funcionalidad con apertura hacia adentro o afuera. Ideal para espacios que requieren
                versatilidad.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="/Productos/MamparaSimple.jpg"
                  alt="Mampara Corrediza"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="font-semibold">Corredizas</h3>
              <p className="text-sm text-muted-foreground">
                Perfectas para espacios reducidos. Sistema de deslizamiento suave y silencioso con guías de calidad.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="/Productos/Box.jpg"
                  alt="Box de Ducha"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="font-semibold">Box</h3>
              <p className="text-sm text-muted-foreground">
                Cerramiento completo para ducha. Solución integral que combina funcionalidad y diseño moderno.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="bg-transparent">
              <Link href="https://listado.mercadolibre.com.ar/pagina/mundosilicaok/listado/construccion/banos-sanitarios/_PrCategId_AD#client=SEARCH&component_id=menu_corridors&label=Ba%C3%B1os+y+Sanitarios&tracking_id=">Ver todas las mamparas</Link>
            </Button>
          </div>
        </section>

        {/* Categoría 2: Cerramientos */}
        <section className="mb-16">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600&text=Cerramientos"
                alt="Cerramientos"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Cerramientos</h2>
              <p className="text-muted-foreground text-lg">
                Soluciones arquitectónicas que optimizan espacios y aportan luminosidad natural. Ideales para crear
                ambientes diferenciados manteniendo la sensación de amplitud.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Lucarnas</li>
                <li>• Divisores de Ambiente</li>
                <li>• Cerramientos personalizados</li>
                <li>• Instalación profesional</li>
              </ul>
              <Button variant="outline" className="mt-4 bg-transparent">
                Ver más
              </Button>
            </div>
          </div>
        </section>

        {/* Categoría 3: Vidrios Especiales */}
        <section className="mb-16 bg-muted/30 rounded-lg p-8">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Vidrios Especiales</h2>
              <p className="text-muted-foreground text-lg">
                Vidrios técnicos de alta calidad para aplicaciones específicas. Cada tipo está diseñado para cumplir con
                requisitos particulares de resistencia, estética y funcionalidad.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Templado - Mayor resistencia y seguridad</li>
                <li>• Vitrocerámico - Resistente al calor</li>
                <li>• Off White - Acabado elegante y moderno</li>
                <li>• Asesoramiento técnico especializado</li>
              </ul>
              <Button variant="outline" className="mt-4 bg-transparent">
                Ver más
              </Button>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600&text=Vidrios+Especiales"
                alt="Vidrios Especiales"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Categoría 4: Decoración del Hogar */}
        <section className="mb-16">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600&text=Decoración+del+Hogar"
                alt="Decoración del Hogar"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Decoración del Hogar</h2>
              <p className="text-muted-foreground text-lg">
                Elementos decorativos que aportan estilo y personalidad a cada ambiente. Espejos diseñados para realzar
                la belleza de tu hogar con toques únicos y funcionales.
              </p>

              <ul className="space-y-2 text-muted-foreground">
                <li>• Diseños personalizados</li>
                <li>• Instalación incluida</li>
                <li>• Asesoramiento en decoración</li>
              </ul>

              <Button variant="outline" className="mt-4 bg-transparent">
                Ver más
              </Button>
            </div>
          </div>
        </section>

        {/* Sección Especial: Espejos Decorativos con Galería */}
        <section className="mb-16 bg-muted/30 rounded-lg p-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Espejos Decorativos</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Transforma cualquier espacio con nuestros espejos decorativos. Desde soluciones funcionales hasta
              elementos de diseño que aportan luz y amplitud a tus ambientes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center space-y-3">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="/Productos/EspejoRedondo.jpg"
                  alt="Espejo para Puerta de Placard"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="font-semibold">Espejos para Puerta de Placard</h3>
              <p className="text-sm text-muted-foreground">
                Maximiza el espacio y la funcionalidad. Espejos de cuerpo entero perfectos para dormitorios y
                vestidores.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="/Productos/EspejoConLed.jpg"
                  alt="Espejo con Led"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="font-semibold">Espejos con Led</h3>
              <p className="text-sm text-muted-foreground">
                Iluminación integrada para un toque moderno. Ideales para baños principales y tocadores elegantes.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="/Productos/EspejoConForma.jpg"
                  alt="Espejo con Formas"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="font-semibold">Espejos con Formas</h3>
              <p className="text-sm text-muted-foreground">
                Diseños únicos y personalizados. Redondos, ovalados o formas especiales para destacar en cualquier
                ambiente.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="bg-transparent">
              Ver todos los espejos
            </Button>
          </div>
        </section>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-muted-foreground">
            <Package className="h-5 w-5" />
            <span>¿Necesitas un producto específico? Contáctanos para soluciones personalizadas</span>
          </div>
        </div>
      </div>

    </div>
  )
}
