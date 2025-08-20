import Taller from "@/public/Taller.webp";
import Image from "next/image";

export default function NosotrosPage() {
  return (
    <div className="min-h-screen relative w-full overflow-hidden flex justify-center md:justify-end items-center">
      {/* Imagen de fondo - solo visible en desktop */}
      <div className="absolute inset-0 w-full h-full z-0 hidden md:block">
        <Image
          src={Taller}
          alt="Taller de Mundo Silica"
          fill
          className="object-cover w-full h-full"
          priority
          sizes="100vw"
        />
        {/* Overlay con gradiente - solo en desktop */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "linear-gradient(121deg, rgba(255, 255, 255, 0.2) 40%, rgba(1, 149, 158, 1) 55%)",
          }}
        ></div>
      </div>

      {/* Fondo blanco para móvil */}
      <div className="absolute inset-0 w-full h-full z-0 bg-white md:hidden"></div>

      {/* Contenido */}
      <div className="relative z-10 container px-4 py-16 md:px-6 md:py-24 w-full flex justify-center md:justify-end">
        <div className="max-w-2xl text-center md:text-left space-y-8 md:mr-15">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-black md:text-white">
              Sobre Nosotros
            </h1>
            <p className="max-w-[700px] text-black md:text-white md:text-xl mx-auto md:mx-0">
              Conoce nuestra historia, misión y el equipo que hace posible
              nuestro éxito
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-black md:text-white">Nuestra Historia</h2>
            <p className="text-black md:text-white">
              Mundo Silica nació en 2008 como la evolución natural de una
              reconocida vidriería local, con una amplia experiencia en el
              trabajo del vidrio y sus múltiples aplicaciones. Los primeros años
              estuvieron dedicados a ofrecer soluciones personalizadas en
              cristales y espejos para el hogar, siempre con un enfoque en la
              calidad artesanal y el trato cercano con cada cliente.
            </p>
            <p className="text-black md:text-white">
              Con el tiempo, y respondiendo a las nuevas tendencias en diseño y
              construcción, la empresa se especializó en la fabricación y venta
              de mamparas para baño y espejos a medida, combinando
              funcionalidad, estética y durabilidad en cada producto.
            </p>
            <p className="text-black md:text-white">
              Hoy, más de una década después, Mundo Silica se ha consolidado
              como un referente en el sector, participando en grandes proyectos
              de urbanización y colaborando con desarrolladores, arquitectos y
              constructoras en obras de envergadura. Nuestro compromiso se
              mantiene intacto: ofrecer productos de alta calidad, innovar en
              diseños y brindar un servicio profesional que nos permita superar
              las expectativas de quienes confían en nosotros.
            </p>
            <p className="text-black md:text-white">
              Desde nuestros inicios como vidriería hasta nuestra posición
              actual como especialistas en mamparas y espejos, la historia de
              Mundo Silica es un ejemplo de adaptación, crecimiento y pasión por
              el trabajo bien hecho.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
