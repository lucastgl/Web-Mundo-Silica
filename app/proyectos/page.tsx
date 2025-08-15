import Link from "next/link"
import { Button } from "@/components/ui/button"
import proyectos from "@/mocks/proyectos.json"

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

        {proyectos.map((proyecto, index) => {
          const esFondoSuave = index % 2 === 1
          const imagenPrimero = index % 2 === 1
          const titulo = proyecto.Proyecto ?? "Proyecto"
          const descripcion = proyecto.Descripcion ?? ""
          const destacados: string[] = Array.isArray(proyecto.Destacados) ? proyecto.Destacados : []
          const textoImagen = encodeURIComponent(titulo)

          return (
            <section key={`${titulo}-${index}`} className={`mb-16 ${esFondoSuave ? "bg-[#D5EAED] rounded-lg p-8" : ""}`}>
              <div className="grid gap-8 md:grid-cols-2 items-center">
                {/* Imagen */}
                <div className={`aspect-video rounded-lg overflow-hidden ${imagenPrimero ? "md:col-start-2 md:row-start-1" : ""}`}>
                  <img
                    src={proyecto.Fotos[0]}
                    alt={titulo}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Texto */}
                <div className={`space-y-4 ${imagenPrimero ? "md:col-start-1 md:row-start-1" : ""}`}>
                  <h2 className="text-3xl font-bold">{titulo}</h2>
                  <p className="text-muted-foreground text-lg">{descripcion}</p>
                  <ul className="space-y-2 text-muted-foreground">
                    {destacados.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )
        })}

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
