import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import LogoMS from "@/public/LogoMS-NBG.png";

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="w-full px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src={LogoMS.src} alt="Logo" width={100} height={100} />
            </Link>
            <p className="text-sm text-muted-foreground">
              Soluciones innovadoras para el crecimiento de tu negocio.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Enlaces Rápidos</h4>
            <div className="space-y-2">
              <Link
                href="/nosotros"
                className="block text-sm text-muted-foreground hover:text-primary"
              >
                Nosotros
              </Link>
              <Link
                href="/productos"
                className="block text-sm text-muted-foreground hover:text-primary"
              >
                Productos
              </Link>
              <Link
                href="/proyectos"
                className="block text-sm text-muted-foreground hover:text-primary"
              >
                Proyectos
              </Link>
            </div>
          </div>

          {/* Servicios */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Servicios</h4>
            <div className="space-y-2">
              <Link
                href="https://www.mercadolibre.com.ar/pagina/mundosilicaok#client=SEARCH&component_id=menu_home&label=Inicio&tracking_id="
                className="block text-sm text-muted-foreground hover:text-primary"
              >
                Tienda
              </Link>
              <Link
                href="/contacto"
                className="block text-sm text-muted-foreground hover:text-primary"
              >
                Contacto
              </Link>
            </div>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Contacto</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@empresa.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Ciudad, País</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Empresa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
