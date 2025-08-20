import WhatsAppLogo from '@/public/svg/whatsapp-logo-4456' // Tu SVG como componente
import Link from 'next/link'
import React from 'react'

const WhatsAppContact: React.FC = () => {
  // 👉 Ajustá estos dos valores:
  const phoneE164 = '5491176480361' // Reemplazá por tu número en formato internacional
  const presetMessage = 'Buenos días! quisiera consultar por sus productos'

  // Construimos la URL segura (encodeURIComponent evita problemas con espacios y signos)
  const waHref = `https://wa.me/${phoneE164}?text=${encodeURIComponent(presetMessage)}`

  return (
    <div className="fixed bottom-20 right-15 md:bottom-6 md:right-6 z-50 flex items-center gap-3">

      <Link
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear por WhatsApp"
        className="block hover:scale-110 transition-transform duration-300 ease-in-out drop-shadow-lg"
      >
        <WhatsAppLogo width={60} height={60} />
      </Link>
    </div>
  )
}

export default WhatsAppContact
