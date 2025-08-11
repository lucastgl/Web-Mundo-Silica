import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Empresa - Soluciones Innovadoras",
  description: "Ofrecemos soluciones integrales y productos de alta calidad para impulsar el crecimiento de tu empresa",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1 w-full flex justify-center">
          {children}
        </main>
        <Footer />
      </body>    </html>
  )
}
