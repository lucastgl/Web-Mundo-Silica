export default function NosotrosPage() {
  return (
    <div className="min-h-screen">
      <div className="container px-4 py-16 md:px-6 md:py-24">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Sobre Nosotros
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Conoce nuestra historia, misión y el equipo que hace posible nuestro
            éxito
          </p>
        </div>

        <div className="prose prose-gray max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Nuestra Historia</h2>
          <p className="text-muted-foreground mb-6">
            Mundo Silica nació en 2008 como la evolución natural de una
            reconocida vidriería local, con una amplia experiencia en el trabajo
            del vidrio y sus múltiples aplicaciones. Los primeros años
            estuvieron dedicados a ofrecer soluciones personalizadas en
            cristales y espejos para el hogar, siempre con un enfoque en la
            calidad artesanal y el trato cercano con cada cliente.
          </p>
          <p className="text-muted-foreground">
            Con el tiempo, y respondiendo a las nuevas tendencias en diseño y
            construcción, la empresa se especializó en la fabricación y venta de
            mamparas para baño y espejos a medida, combinando funcionalidad,
            estética y durabilidad en cada producto.
          </p>
          <p className="text-muted-foreground mb-6">
            Hoy, más de una década después, Mundo Silica se ha consolidado como
            un referente en el sector, participando en grandes proyectos de
            urbanización y colaborando con desarrolladores, arquitectos y
            constructoras en obras de envergadura. Nuestro compromiso se
            mantiene intacto: ofrecer productos de alta calidad, innovar en
            diseños y brindar un servicio profesional que nos permita superar
            las expectativas de quienes confían en nosotros.
          </p>
          <p className="text-muted-foreground">
            Desde nuestros inicios como vidriería hasta nuestra posición actual
            como especialistas en mamparas y espejos, la historia de Mundo
            Silica es un ejemplo de adaptación, crecimiento y pasión por el
            trabajo bien hecho.
          </p>
        </div>
      </div>
    </div>
  );
}
