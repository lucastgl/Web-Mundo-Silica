import Link from "next/link";
import { ArrowRight, CheckCircle, Users, Award, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import clientes from "@/mocks/clientes.json";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full flex-col justify-center items-center">

      {/* Sección 1: Hero */}
      <section className="relative py-20 md:py-32 w-full flex justify-center items-center bg-gradient-to-r from-white via-white to-[#01959e]">
        <div className="container px-4 md:px-6 ">
          <div className="flex flex-col items-start text-start space-y-8 max-w-4xl">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-8xl">
                Mundo Silica
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Hacemos de tu imaginación realidad en cristal.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/tienda">
                  Ver Productos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/tienda">Contactar</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 2: Características/Servicios */}
      <section className="py-20 md:py-32 flex justify-center items-center bg-gradient-to-r from-white via-white to-[#01959e]">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              ¿Por qué Elegirnos?
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Nos destacamos por nuestra experiencia, calidad y compromiso con
              la excelencia. Además, ofrecemos un asesoramiento personalizado,
              asegurándonos de entender las necesidades específicas de cada
              cliente para brindarle la solución perfecta, más allá de
              simplemente vender un producto.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#01959e]">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Experiencia Comprobada</CardTitle>
                <CardDescription>
                  Más de 10 años brindando soluciones exitosas a clientes y empresas de
                  diversos sectores
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-[#01959e]" />
                    MercadoLíder Platinum con +1000 ventas
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-[#01959e]" />
                    +30 Proyectos completos
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#01959e]">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Calidad Garantizada</CardTitle>
                <CardDescription>
                  Productos y servicios que cumplen con los más altos estándares
                  de calidad
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-[#01959e]" />
                    Certificaciones ISO
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-[#01959e]" />
                    Control de calidad riguroso
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#01959e]">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Innovación Constante</CardTitle>
                <CardDescription>
                  Siempre a la vanguardia con las últimas tecnologías y
                  tendencias del mercado
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-[#01959e]" />
                    I+D+i continuo
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-[#01959e]" />
                    Tecnología de punta
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section className="py-20 md:py-32 bg-white flex justify-center items-center">
        <div className="container px-4 md:px-6 w-full">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Lo que Dicen Nuestros Clientes
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Conoce las experiencias de quienes ya confiaron en nosotros
            </p>
          </div>
          <Carousel>
            <CarouselContent>
              {clientes.map((cliente, index) => {
                const nombre: string = cliente.Nombre ?? "";
                const fecha: string = cliente.Fecha ?? "";
                const descripcion: string = cliente.Descripción ?? "";
                const estrellasTexto: string = cliente.Estrellas ?? "★★★★★";
                const estrellasLlenas: number = Math.min(
                  5,
                  (estrellasTexto.match(/★/g) || []).length || 5
                );
                const iniciales: string =
                  nombre
                    .split(" ")
                    .filter(Boolean)
                    .slice(0, 2)
                    .map((parte) => parte[0]?.toUpperCase())
                    .join("") || "CL";

                return (
                  <CarouselItem key={`${nombre}-${index}`} className="md:basis-1/2 lg:basis-1/3">
                    <Card key={`${nombre}-${index}`} className="border border-[#18929a]">
                      <CardContent className="pt-6">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <div className="h-10 w-10 rounded-full bg-[#a6dbdd] flex items-center justify-center">
                              <span className="text-sm font-medium">
                                {iniciales}
                              </span>
                            </div>
                            <div>
                              <p className="font-medium">{nombre}</p>
                              <p className="text-sm text-muted-foreground">
                                {fecha}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={
                                  i < estrellasLlenas
                                    ? "h-4 w-4 fill-yellow-400 text-yellow-400"
                                    : "h-4 w-4 text-gray-300"
                                }
                              />
                            ))}
                          </div>
                          <p className="text-muted-foreground">{descripcion}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          {/* <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
           
          </div> */}
        </div>
      </section>

      {/* Sección 3: Call to Action */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-[#01959e] via-white to-white">
        <div className="px-4 md:px-6 w-full">
          
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                ¿Listo para Comenzar?
              </h2>
              <p className="md:text-xl">
                Descubre cómo podemos ayudarte a alcanzar tus objetivos
                empresariales. Contáctanos hoy mismo para una consulta
                personalizada.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle>Consulta Gratuita</CardTitle>
                  <CardDescription>
                    Agenda una reunión sin compromiso para conocer tus
                    necesidades
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button asChild className="w-full">
                    <Link href="/tienda">Agendar Consulta</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <CardTitle>Ver Proyectos</CardTitle>
                  <CardDescription>
                    Explora nuestro portafolio de proyectos exitosos
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button
                    variant="outline"
                    asChild
                    className="w-full bg-transparent"
                  >
                    <Link href="/tienda">Ver Portafolio</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
