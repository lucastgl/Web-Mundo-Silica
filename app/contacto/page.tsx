"use client";

import React from "react";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import FacebookIcon from "@/public/svg/FacebookIcon";
import InstagramIcon from "@/public/svg/InstagramIcon";
import Link from "next/link";
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

// Tipos
interface FormValues {
  nombre: string;
  email: string;
  telefono: string;
  asunto: string;
  mensaje: string;
}

interface StatusType {
  type: 'success' | 'error' | 'sending';
  message?: string;
}

interface FormikHelpers {
  resetForm: () => void;
  setSubmitting: (isSubmitting: boolean) => void;
  setStatus: (status: StatusType) => void;
}

// Validaciones
const VALIDACION_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

// Variables de entorno
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID || "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID || "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY || "";

export default function ContactoPage() {
  const getInitialValues = (): FormValues => ({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: ""
  });

  const getValidationSchema = () => (
    Yup.lazy(() =>
      Yup.object().shape({
        nombre: Yup.string()
          .min(2, 'El nombre debe tener al menos 2 caracteres')
          .required("Campo Obligatorio"),
        email: Yup.string()
          .email("Ingrese un formato de email válido")
          .required("Campo Obligatorio")
          .matches(VALIDACION_EMAIL, 'Ingrese un formato de email válido'),
        telefono: Yup.string()
          .min(8, 'El teléfono debe tener al menos 8 caracteres'),
        asunto: Yup.string()
          .min(3, 'El asunto debe tener al menos 3 caracteres')
          .required('Campo Obligatorio'),
        mensaje: Yup.string()
          .min(10, 'El mensaje debe tener al menos 10 caracteres')
          .max(500, 'El mensaje no debe superar los 500 caracteres')
          .required('Campo Obligatorio'),
      })
    )
  );

  const onSubmit = (values: FormValues, { resetForm, setSubmitting, setStatus }: FormikHelpers) => {
    console.log(values);
    setSubmitting(true);
    setStatus({ type: 'sending' });

    // Mapear los valores al template de EmailJS basado en template.html
    const templateParams = {
      name_from: values.nombre,
      topic: values.asunto,
      contact_email: values.email,
      contact_number: values.telefono || "No proporcionado",
      message: values.mensaje
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('Email enviado exitosamente:', response);
        setStatus({ type: 'success' });
        resetForm();
      })
      .catch((error) => {
        console.error('Error enviando email:', error);
        setStatus({ type: 'error', message: 'Error al enviar el mensaje. Por favor, intenta nuevamente.' });
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const { values, setFieldValue, errors, handleSubmit, isSubmitting, status } = useFormik({
    initialValues: getInitialValues(),
    validationSchema: getValidationSchema(),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit,
  });

  return (
    <div className="min-h-screen w-full bg-[#E6FFFF] flex justify-center items-center">
      <div className="container px-4 py-16 md:px-6 md:py-24">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Contactanos
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
          {/* Información de contacto */}
          <div className="space-y-6 flex flex-col">
            <Card className="flex-1">
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
                      mundosilica.ok@gmail.com
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
          <div className="flex flex-col items-center justify-center">
            <Card className="w-full max-w-none">
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
                        name="nombre"
                        placeholder="Tu nombre completo"
                        value={values.nombre}
                        onChange={(e) => setFieldValue("nombre", e.target.value)}
                        className={errors.nombre ? "border-red-500" : ""}
                      />
                      {errors.nombre && (
                        <p className="text-sm text-red-600">{errors.nombre}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={values.email}
                        onChange={(e) => setFieldValue("email", e.target.value)}
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono</Label>
                      <Input
                        id="telefono"
                        name="telefono"
                        placeholder="+54 11 6123-4567"
                        value={values.telefono}
                        onChange={(e) => setFieldValue("telefono", e.target.value)}
                        className={errors.telefono ? "border-red-500" : ""}
                      />
                      {errors.telefono && (
                        <p className="text-sm text-red-600">{errors.telefono}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="asunto">Asunto *</Label>
                      <Select
                        onValueChange={(value) => setFieldValue("asunto", value)}
                        value={values.asunto}
                      >
                        <SelectTrigger className={errors.asunto ? "border-red-500" : ""}>
                          <SelectValue placeholder="Selecciona un asunto" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Consulta General">
                            Consulta General
                          </SelectItem>
                          <SelectItem value="Información de Productos">
                            Información de Productos
                          </SelectItem>
                          <SelectItem value="Servicios">Servicios</SelectItem>
                          <SelectItem value="Soporte Técnico">
                            Soporte Técnico
                          </SelectItem>
                          <SelectItem value="Otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.asunto && (
                        <p className="text-sm text-red-600">{errors.asunto}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensaje">Mensaje *</Label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                      rows={5}
                      value={values.mensaje}
                      onChange={(e) => setFieldValue("mensaje", e.target.value)}
                      className={errors.mensaje ? "border-red-500" : ""}
                    />
                    {errors.mensaje && (
                      <p className="text-sm text-red-600">{errors.mensaje}</p>
                    )}
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </Button>

                  {/* Mensajes de estado */}
                  {status?.type === "success" && (
                    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
                      <p className="text-green-800 text-sm">
                        ¡Mensaje enviado correctamente! Te contactaremos pronto.
                      </p>
                    </div>
                  )}

                  {status?.type === "error" && (
                    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
                      <p className="text-red-800 text-sm">{status.message}</p>
                    </div>
                  )}

                  {status?.type === "sending" && (
                    <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-md">
                      <p className="text-blue-800 text-sm">
                        Enviando mensaje...
                      </p>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sección de Redes Sociales */}
        <div className="mt-12">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">
                Nuestras redes sociales
              </CardTitle>
              <CardDescription className="text-center">
                Síguenos en nuestras redes sociales para mantenerte al día
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center space-x-8">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#01959e]">
                    <FacebookIcon width={20} height={20} stroke="white" />
                  </div>
                  <div>
                    <p className="font-medium">Facebook</p>
                    <Link
                      href="https://www.facebook.com/mundosilica.ok"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-[#01959e] transition-colors"
                    >
                      MundoSilica.ok
                    </Link>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#01959e]">
                    <InstagramIcon width={20} height={20} stroke="white" />
                  </div>
                  <div>
                    <p className="font-medium">Instagram</p>
                    <Link
                      href="https://www.instagram.com/mundosilica.ok/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-[#01959e] transition-colors"
                    >
                      MundoSilica.ok
                    </Link>
                  </div>
                </div>
              </div>
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