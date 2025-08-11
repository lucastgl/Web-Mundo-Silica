import { ShoppingCart, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function TiendaPage() {
  const productos = [
    {
      id: 1,
      nombre: "Licencia Software Pro",
      precio: "$299/año",
      descripcion: "Licencia anual para software profesional",
      imagen: "/placeholder.svg?height=200&width=300",
      categoria: "Software",
      disponible: true,
    },
    {
      id: 2,
      nombre: "Consultoría Premium",
      precio: "$150/hora",
      descripcion: "Sesiones de consultoría especializada",
      imagen: "/placeholder.svg?height=200&width=300",
      categoria: "Servicios",
      disponible: true,
    },
    {
      id: 3,
      nombre: "Kit de Herramientas",
      precio: "$99",
      descripcion: "Conjunto completo de herramientas digitales",
      imagen: "/placeholder.svg?height=200&width=300",
      categoria: "Herramientas",
      disponible: false,
    },
    {
      id: 4,
      nombre: "Curso Online",
      precio: "$199",
      descripcion: "Curso completo de capacitación empresarial",
      imagen: "/placeholder.svg?height=200&width=300",
      categoria: "Educación",
      disponible: true,
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container px-4 py-16 md:px-6 md:py-24">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Tienda Online</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Encuentra productos y servicios que potenciarán tu negocio
          </p>
        </div>

        {/* Filtros y búsqueda */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar productos..." className="pl-10" />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filtros
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {productos.map((producto) => (
            <Card key={producto.id} className="overflow-hidden">
              <div className="aspect-square relative">
                <img
                  src={producto.imagen || "/placeholder.svg"}
                  alt={producto.nombre}
                  className="object-cover w-full h-full"
                />
                <Badge className="absolute top-4 left-4">{producto.categoria}</Badge>
                {!producto.disponible && (
                  <Badge variant="secondary" className="absolute top-4 right-4">
                    Agotado
                  </Badge>
                )}
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-1">{producto.nombre}</CardTitle>
                <CardDescription className="line-clamp-2">{producto.descripcion}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">{producto.precio}</span>
                  <Button disabled={!producto.disponible} size="sm">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    {producto.disponible ? "Comprar" : "Agotado"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-muted/50 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-2">¿Necesitas algo específico?</h3>
            <p className="text-muted-foreground mb-4">Contáctanos para productos personalizados o servicios a medida</p>
            <Button>Solicitar Cotización</Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
