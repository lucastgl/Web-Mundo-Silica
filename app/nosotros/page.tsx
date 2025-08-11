export default function NosotrosPage() {
  return (
    <div className="min-h-screen">

      <div className="container px-4 py-16 md:px-6 md:py-24">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Sobre Nosotros</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Conoce nuestra historia, misión y el equipo que hace posible nuestro éxito
          </p>
        </div>

        <div className="prose prose-gray max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Nuestra Historia</h2>
          <p className="text-muted-foreground mb-6">
            Fundada en 2014, nuestra empresa nació con la visión de transformar la manera en que las organizaciones
            abordan sus desafíos más complejos. Desde nuestros humildes comienzos, hemos crecido hasta convertirnos en
            un referente en el sector, siempre manteniendo nuestro compromiso con la calidad y la innovación.
          </p>
          <p className="text-muted-foreground">
            A lo largo de los años, hemos tenido el privilegio de trabajar con empresas de diversos sectores,
            ayudándolas a alcanzar sus objetivos y superar sus expectativas. Nuestro equipo multidisciplinario combina
            experiencia técnica con creatividad para ofrecer soluciones únicas y efectivas.
          </p>
        </div>
      </div>

    </div>
  )
}
