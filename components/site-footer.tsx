"use client"

import Link from "next/link"
import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { socials } from "@/lib/content"
import { Camera, Video, Mail, Music, Check, MessageSquare } from "lucide-react"

export function SiteFooter() {
  const { tr, lang } = useLanguage()
  const [copied, setCopied] = useState(false)

  const handleEmailClick = async (e: React.MouseEvent) => {
    // En PC, copiar al portapapeles en lugar de solo mailto
    if (typeof window !== "undefined" && !/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      e.preventDefault()
      try {
        await navigator.clipboard.writeText("sonceibecantigas@gmail.com")
        setCopied(true)
        setTimeout(() => setCopied(false), 2500)
      } catch {
        // Fallback: abrir mailto igualmente
        window.location.href = "mailto:sonceibecantigas@gmail.com"
      }
    }
  }

  const items = [
    { icon: Music, label: "Spotify", href: socials.spotify },
    { icon: Camera, label: "Instagram", href: socials.instagram },
    { icon: Video, label: "YouTube", href: socials.youtube },
    {
      icon: copied ? Check : Mail,
      label: copied ? (lang === "gl" ? "Copiado!" : "¡Copiado!") : "Email",
      href: "mailto:sonceibecantigas@gmail.com",
      onClick: handleEmailClick,
      copied,
    },
    { icon: MessageSquare, label: tr.nav.contact, href: "/contacto" },
  ]

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="grid grid-cols-2 gap-3 sm:flex sm:items-center sm:gap-5">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={item.onClick}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group flex items-center justify-center gap-2 rounded-full border border-border bg-card px-3 py-2.5 text-sm font-medium transition-all hover:bg-secondary sm:px-4 ${
                  item.copied ? "border-green-500/50 text-green-600" : "text-foreground"
                }`}
                aria-label={item.label}
              >
                <item.icon
                  className={`size-4 transition-transform group-hover:scale-110 ${
                    item.copied ? "text-green-600" : ""
                  }`}
                  aria-hidden="true"
                />
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          <nav aria-label={lang === "gl" ? "Información legal" : "Información legal"} className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <Link href="/aviso-legal" className="hover:text-foreground hover:underline">Aviso legal</Link>
            <Link href="/privacidad" className="hover:text-foreground hover:underline">{lang === "gl" ? "Política de privacidade" : "Política de privacidad"}</Link>
            <Link href="/cookies" className="hover:text-foreground hover:underline">Cookies</Link>
          </nav>

          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Son Ceibe. {tr.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}