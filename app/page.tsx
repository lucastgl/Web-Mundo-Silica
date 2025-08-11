import Link from "next/link"
import { ArrowRight, CheckCircle, Users, Award, Zap, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">

      {/* Sección 1: Hero */}
      <section className="relative py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Innovación que <span className="text-primary">Transforma</span> tu Negocio
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Ofrecemos soluciones integrales y productos de alta calidad para impulsar el crecimiento y éxito de tu
                empresa en el mercado actual.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/productos">
                  Ver Productos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contacto">Contactar</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 2: Características/Servicios */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">¿Por qué Elegirnos?</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Nos destacamos por nuestra experiencia, calidad y compromiso con la excelencia. Además, ofrecemos un asesoramiento personalizado, asegurándonos de entender las necesidades específicas de cada cliente para brindarle la solución perfecta, más allá de simplemente vender un producto.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Experiencia Comprobada</CardTitle>
                <CardDescription>
                  Más de 10 años brindando soluciones exitosas a empresas de diversos sectores
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Equipo especializado
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Metodologías probadas
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Calidad Garantizada</CardTitle>
                <CardDescription>
                  Productos y servicios que cumplen con los más altos estándares de calidad
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Certificaciones ISO
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Control de calidad riguroso
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Innovación Constante</CardTitle>
                <CardDescription>
                  Siempre a la vanguardia con las últimas tecnologías y tendencias del mercado
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    I+D+i continuo
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Tecnología de punta
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Lo que Dicen Nuestros Clientes
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Conoce las experiencias de quienes ya confiaron en nosotros
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "Excelente calidad en las mamparas. El equipo vino a medir, instaló todo perfecto y sin
                    filtraciones. Muy recomendable, cumplieron con los tiempos prometidos."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-medium">MR</span>
                    </div>
                    <div>
                      <p className="font-medium">María Rodríguez</p>
                      <p className="text-sm text-muted-foreground">Cliente - CABA</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "Hicimos espejos para nuestro gimnasio. Tomaron las medidas sin cargo, nos asesoraron muy bien y el
                    resultado superó nuestras expectativas. Muy profesionales."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-medium">CG</span>
                    </div>
                    <div>
                      <p className="font-medium">Carlos González</p>
                      <p className="text-sm text-muted-foreground">Gimnasio FitZone - Morón</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "Compramos una mampara corrediza y la enviaron al interior. Llegó perfecta en su embalaje de madera.
                    El instructivo de instalación muy claro. Excelente servicio."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-medium">LM</span>
                    </div>
                    <div>
                      <p className="font-medium">Laura Martínez</p>
                      <p className="text-sm text-muted-foreground">Cliente - Córdoba</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sección 3: Call to Action */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">¿Listo para Comenzar?</h2>
              <p className="text-muted-foreground md:text-xl">
                Descubre cómo podemos ayudarte a alcanzar tus objetivos empresariales. Contáctanos hoy mismo para una
                consulta personalizada.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle>Consulta Gratuita</CardTitle>
                  <CardDescription>Agenda una reunión sin compromiso para conocer tus necesidades</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button asChild className="w-full">
                    <Link href="/contacto">Agendar Consulta</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <CardTitle>Ver Proyectos</CardTitle>
                  <CardDescription>Explora nuestro portafolio de proyectos exitosos</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" asChild className="w-full bg-transparent">
                    <Link href="/proyectos">Ver Portafolio</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
