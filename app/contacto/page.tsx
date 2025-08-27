"use client";

import type React from "react";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import preguntasFrecuentes from "@/mocks/preguntas-frecuentes.json";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    // Validación del lado del cliente
    const camposFaltantes = [];
    if (!formData.nombre.trim()) camposFaltantes.push("Nombre");
    if (!formData.email.trim()) camposFaltantes.push("Email");
    if (!formData.asunto.trim()) camposFaltantes.push("Asunto");
    if (!formData.mensaje.trim()) camposFaltantes.push("Mensaje");

    if (camposFaltantes.length > 0) {
      setSubmitStatus("error");
      setErrorMessage(
        `Por favor completa los siguientes campos: ${camposFaltantes.join(", ")}`
      );
      setIsLoading(false);
      return;
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus("error");
      setErrorMessage("Por favor ingresa un email válido");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          nombre: "",
          email: "",
          telefono: "",
          asunto: "",
          mensaje: "",
        });
        console.log("Email enviado:", result);
      } else {
        setSubmitStatus("error");
        // Usar el mensaje específico del servidor si está disponible
        setErrorMessage(
          result.message ||
            "Hubo un error al enviar el mensaje. Por favor, intenta nuevamente."
        );
        console.error("Error:", result);
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        "Error de conexión. Por favor, verifica tu conexión a internet e intenta nuevamente."
      );
      console.error("Error enviando formulario:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Limpiar el estado de error cuando el usuario empiece a escribir
    if (submitStatus === "error") {
      setSubmitStatus("idle");
      setErrorMessage("");
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#E6FFFF] flex justify-center items-center">
      <div className="container px-4 py-16 md:px-6 md:py-24">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Contactanos
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Información de contacto */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
                <CardDescription>
                  Múltiples formas de ponerte en contacto con nosotros
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#01959e]">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">
                      info@empresa.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#01959e]">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-sm text-muted-foreground">
                      +54 11 7648-0361
                    </p>
                    <p className="text-sm text-muted-foreground">7707-6505</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#01959e]">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Dirección</p>
                    <p className="text-sm text-muted-foreground">
                      Pola 240 - CP 1708, Morón
                      <br />
                      Buenos Aires, Argentina
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
                      Lunes a Viernes 8:00 a 13:00 , 13:30 a 16:00
                      <br />
                      Sábados 7:00 a 13:00
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
              <CardDescription>
                Completa el formulario y nos pondremos en contacto contigo
              </CardDescription>
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
                    <Select
                      onValueChange={(value) => handleChange("asunto", value)}
                      value={formData.asunto}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un asunto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="consulta">
                          Consulta General
                        </SelectItem>
                        <SelectItem value="productos">
                          Información de Productos
                        </SelectItem>
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

                <Button type="submit" className="w-full" disabled={isLoading}>
                  <Send className="mr-2 h-4 w-4" />
                  {isLoading ? "Enviando..." : "Enviar Mensaje"}
                </Button>

                {/* Mensajes de estado */}
                {submitStatus === "success" && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
                    <p className="text-green-800 text-sm">
                      ¡Mensaje enviado correctamente! Te contactaremos pronto.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-red-800 text-sm">{errorMessage}</p>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Sección de Preguntas Frecuentes */}
        <div className="mt-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">
              Preguntas Frecuentes
            </h2>
            <p className="text-muted-foreground">
              Encuentra respuestas a las consultas más comunes
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {preguntasFrecuentes.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger>{faq.pregunta}</AccordionTrigger>
                  <AccordionContent>
                    {faq.respuesta.includes("\n") ? (
                      <ul className="space-y-1">
                        {faq.respuesta.split("\n").map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      faq.respuesta
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
