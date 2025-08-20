"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen">

      <div className="container px-4 py-16 md:px-6 md:py-24">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Contactanos</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Información de contacto */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
                <CardDescription>Múltiples formas de ponerte en contacto con nosotros</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#01959e]">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">info@empresa.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#01959e]">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#01959e]">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Dirección</p>
                    <p className="text-sm text-muted-foreground">
                      123 Calle Principal
                      <br />
                      Ciudad, País 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#01959e]">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Horario de Atención</p>
                    <p className="text-sm text-muted-foreground">
                      Lun - Vie: 9:00 AM - 6:00 PM
                      <br />
                      Sáb: 9:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulario de contacto */}
          <Card>
            <CardHeader>
              <CardTitle>Envíanos un Mensaje</CardTitle>
              <CardDescription>Completa el formulario y nos pondremos en contacto contigo</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre *</Label>
                    <Input
                      id="nombre"
                      placeholder="Tu nombre completo"
                      value={formData.nombre}
                      onChange={(e) => handleChange("nombre", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input
                      id="telefono"
                      placeholder="+54 11 6123-4567"
                      value={formData.telefono}
                      onChange={(e) => handleChange("telefono", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="asunto">Asunto *</Label>
                    <Select onValueChange={(value) => handleChange("asunto", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un asunto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="consulta">Consulta General</SelectItem>
                        <SelectItem value="productos">Información de Productos</SelectItem>
                        <SelectItem value="servicios">Servicios</SelectItem>
                        <SelectItem value="soporte">Soporte Técnico</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje">Mensaje *</Label>
                  <Textarea
                    id="mensaje"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    rows={5}
                    value={formData.mensaje}
                    onChange={(e) => handleChange("mensaje", e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Sección de Preguntas Frecuentes */}
        <div className="mt-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Preguntas Frecuentes</h2>
            <p className="text-muted-foreground">Encuentra respuestas a las consultas más comunes</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>¿Hacen envíos al interior?</AccordionTrigger>
                <AccordionContent>
                  Sí, realizamos envíos al interior del país. Utilizamos la empresa ViaCargo (o la que prefieras) y, por
                  requerimiento de la transportadora, embalamos el producto en un cajón artesanal de madera. Una vez
                  realizado el pago, el pedido se despacha dentro de los siguientes 7 días hábiles. Te notificamos y
                  enviamos foto del comprobante con el valor del envío, el cual se abona al momento de retirarlo en la
                  sucursal. Enviamos exclusivamente a sucursal, no a domicilio. Tené en cuenta que el embalaje no
                  incluye el costo del envío.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>¿Dónde están ubicados?</AccordionTrigger>
                <AccordionContent>
                  Nos encontramos en Pola 240, Morón, Buenos Aires, en una zona de fácil acceso dentro del AMBA. Nuestra
                  tienda cuenta con un showroom para que conozcas nuestras mamparas y espejos, además de recibir
                  asesoramiento personalizado. Horarios: lunes a viernes de 9:00 a 13:00 y de 13:40 a 16:00, sábados de
                  8:00 a 12:00.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>¿Hacen colocaciones?</AccordionTrigger>
                <AccordionContent>
                  Sí, ofrecemos servicio de colocación en todo el AMBA. Nuestro equipo instala mamparas y espejos con
                  precisión y cuidado, garantizando un resultado profesional. Los costos y tiempos varían según la zona.
                  También podés retirar tu compra por nuestro local a las 24 horas de haberla realizado.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>¿Tienen rebatibles / corredizas / móviles?</AccordionTrigger>
                <AccordionContent>
                  Sí, fabricamos mamparas fijas, rebatibles, corredizas y box de ducha a medida. Diseñamos soluciones
                  que combinan funcionalidad, estética y durabilidad, adaptándonos a tu espacio y estilo.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Laminado / Templado</AccordionTrigger>
                <AccordionContent>
                  El vidrio templado es hasta cinco veces más resistente que el común y, si se rompe, lo hace en
                  pequeños trozos para mayor seguridad. El vidrio laminado, similar al de un parabrisas, mantiene los
                  fragmentos adheridos a una lámina interna ante una rotura. Ambos son seguros, y la elección dependerá
                  del uso y necesidad.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>¿Cómo es la colocación?</AccordionTrigger>
                <AccordionContent>
                  Nuestros especialistas instalan las mamparas con silicona acética importada, de alta fijación y
                  resistente a hongos. El vidrio se fija a la pared y la base, asegurando estabilidad. Si preferís
                  colocarlo por tu cuenta, incluimos un instructivo detallado. Requiere 3 tornillos y tarugos de 6 mm.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>¿Incluye kit de instalación?</AccordionTrigger>
                <AccordionContent>
                  El kit (tornillos, tarugos y silicona) no está incluido, pero te brindamos una guía detallada con los
                  materiales necesarios y recomendaciones para una instalación correcta.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger>¿Cuánto tiempo demoran en entregar?</AccordionTrigger>
                <AccordionContent>
                  Si retirás en nuestro local (Pola 240, Morón), el tiempo de preparación es de 24 a 48 horas. Para
                  entregas y colocaciones en AMBA, la demora estimada es de 7 días hábiles, dependiendo de la zona y
                  complejidad.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger>¿Puedo personalizar el diseño de la mampara?</AccordionTrigger>
                <AccordionContent>
                  Sí, podés elegir entre puntas rectas o redondas, perfilería en "L" o con marco completo, y vidrio
                  transparente o esmerilado. Adaptamos el diseño a las medidas y estilo de tu baño.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger>¿Cómo se limpian las mamparas?</AccordionTrigger>
                <AccordionContent>
                  La limpieza es sencilla: usá limpiavidrios y un paño suave. Nuestros vidrios esmerilados tienen la
                  superficie lisa, evitando acumulación de sarro y suciedad.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11">
                <AccordionTrigger>¿Hacen espejos?</AccordionTrigger>
                <AccordionContent>
                  Sí, fabricamos espejos a medida, con formas cuadradas, redondas o personalizadas, con o sin marco, y
                  con opción de luz LED trasera. También podés elegir bordes biselados para un toque elegante.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12">
                <AccordionTrigger>¿Cuál es el grosor de los espejos?</AccordionTrigger>
                <AccordionContent>
                  Ofrecemos espejos de 3 mm, 4 mm y 5 mm. Los más finos son ideales para uso decorativo, mientras que
                  los más gruesos se recomiendan para uso intensivo o tamaños grandes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-13">
                <AccordionTrigger>¿Cuál es el grosor de las mamparas?</AccordionTrigger>
                <AccordionContent>
                  Fabricamos mamparas de 6 mm (3+3), 8 mm (4+4) y 10 mm (5+5), dependiendo del uso y diseño. Todos
                  nuestros vidrios son laminados de seguridad.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-14">
                <AccordionTrigger>¿Vienen a medir?</AccordionTrigger>
                <AccordionContent>
                  Sí, ofrecemos servicio de medición sin cargo. Primero enviamos un presupuesto estimado y, si lo
                  aceptás, coordinamos la visita para tomar medidas precisas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-15">
                <AccordionTrigger>¿Qué medios de pago aceptan?</AccordionTrigger>
                <AccordionContent>
                  Podés pagar en efectivo, transferencia, MercadoPago y tarjetas de crédito o débito, con opción de
                  cuotas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-16">
                <AccordionTrigger>¿Cómo puedo contactarlos?</AccordionTrigger>
                <AccordionContent>
                  Podés llamarnos o escribirnos por WhatsApp al 11 7648-0361, seguirnos en Instagram @mundosilica.ok, o
                  visitarnos en Pola 240, Morón. Nuestros horarios de atención son lunes a viernes de 9:00 a 13:00 y de
                  13:40 a 16:00, y sábados de 8:00 a 12:00.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-17">
                <AccordionTrigger>¿Hacen ventas por mayor o solo por menor?</AccordionTrigger>
                <AccordionContent>
                  Hacemos ambas. Ofrecemos precios especiales para ventas mayoristas y soluciones personalizadas para
                  proyectos grandes como hoteles o constructoras.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-18">
                <AccordionTrigger>¿Hacen productos a medida?</AccordionTrigger>
                <AccordionContent>
                  Sí, realizamos mamparas, espejos y vidrios a medida. Solo contanos tu idea y te enviamos un
                  presupuesto con fechas de entrega.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-19">
                <AccordionTrigger>¿Hacen espejos para gimnasios o estudios de danza?</AccordionTrigger>
                <AccordionContent>
                  Sí, fabricamos espejos de gran formato para gimnasios, estudios de danza y centros de entrenamiento.
                  Tomamos medidas sin cargo y ofrecemos presupuestos personalizados.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-20">
                <AccordionTrigger>¿Qué debo preparar para la colocación?</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-1">
                    <li>• Tené listo el pago en efectivo si corresponde.</li>
                    <li>• Asegurate de que el baño esté limpio y despejado.</li>
                    <li>• Dejá espacio para trabajar cómodamente.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-21">
                <AccordionTrigger>¿Qué diferencia hay entre un espejo biselado y uno sin bisel?</AccordionTrigger>
                <AccordionContent>
                  El espejo biselado tiene un borde pulido en ángulo, decorativo y elegante. El espejo sin bisel tiene
                  bordes rectos, ideal para un estilo moderno y minimalista.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-22">
                <AccordionTrigger>¿Cómo evitan las filtraciones?</AccordionTrigger>
                <AccordionContent>
                  Utilizamos silicona acética importada de alta fijación, resistente a hongos y humedad. En caso de
                  filtración tras la instalación, nuestro equipo revisa y soluciona el problema sin cargo.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-23">
                <AccordionTrigger>¿Ofrecen descuentos por pedidos grandes?</AccordionTrigger>
                <AccordionContent>
                  Sí, brindamos descuentos especiales para pedidos mayoristas o proyectos de gran escala. Podés pedir
                  una cotización personalizada.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-24">
                <AccordionTrigger>¿Cómo solicito una visita técnica?</AccordionTrigger>
                <AccordionContent>
                  Te enviamos un presupuesto estimado. Si lo aceptás, coordinamos una visita sin cargo para tomar
                  medidas. También realizamos revisiones de instalaciones previas si fuera necesario.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-25">
                <AccordionTrigger>¿Ofrecen asesoramiento en diseño de interiores?</AccordionTrigger>
                <AccordionContent>
                  Sí, ofrecemos asesoramiento para transformar tu baño. Podés enviarnos una imagen de tu espacio y te
                  proponemos combinaciones y soluciones que optimicen estética y funcionalidad.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-26">
                <AccordionTrigger>¿Los presupuestos y asesoramientos son gratuitos?</AccordionTrigger>
                <AccordionContent>
                  Sí, tanto los presupuestos como el asesoramiento y las mediciones en el lugar son sin costo.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-27">
                <AccordionTrigger>¿Qué incluye la garantía de mamparas o espejos?</AccordionTrigger>
                <AccordionContent>
                  Las mamparas tienen garantía por filtraciones si fueron instaladas por nosotros. Los espejos cuentan
                  con una garantía de 2 años contra defectos de fabricación.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-28">
                <AccordionTrigger>¿Qué hago si el producto llega dañado?</AccordionTrigger>
                <AccordionContent>
                  Enviá una foto del daño por WhatsApp o correo electrónico junto a una breve descripción. En menos de
                  24 h te brindamos una solución: reemplazo, reparación o alternativa según el caso.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-29">
                <AccordionTrigger>¿Aceptan devoluciones o cambios?</AccordionTrigger>
                <AccordionContent>
                  Sí, siempre que el producto no haya sido instalado y se mantenga en su embalaje original. Para iniciar
                  el proceso, contactanos con los datos de tu compra.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

    </div>
  )
}
