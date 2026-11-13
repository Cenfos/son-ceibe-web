"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function SiteHeader() {
  const { lang, setLang, tr } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)

  const pathname = usePathname()
  const links = [
    { href: "/", label: tr.nav.home },
    { href: "/singles", label: tr.nav.singles },
    { href: "/albums", label: tr.nav.albums },
    { href: "/videos", label: tr.nav.videos },
    { href: "/letras", label: tr.nav.lyrics },
    { href: "/grupo", label: tr.nav.about },
    ...(pathname === "/" ? [{ href: "https://sonceibe-studio.vercel.app/", label: "Studio" }] : []),
  ]

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Son Ceibe · Inicio"
          className="flex shrink-0 items-center gap-2.5 font-serif text-lg font-semibold tracking-tight text-foreground"
        >
          <img
            src="/son-ceibe-logo.webp"
            alt=""
            aria-hidden="true"
            className="h-9 w-9 rounded-full object-cover"
          />
          <span className="hidden sm:inline">Son Ceibe</span>
        </Link>

        {/* Navegación desktop */}
        <nav className="hidden items-center gap-3 lg:gap-5 md:flex" aria-label="Principal">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Derecha: idioma + menú móvil */}
        <div className="flex items-center gap-2">
          {/* Selector de idioma */}
          <div
            className="flex items-center rounded-full border border-border bg-card p-0.5 text-xs font-semibold"
            role="group"
            aria-label={tr.footer.language}
          >
            {(["gl", "es"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                className={`rounded-full px-3 py-1 transition-colors ${
                  lang === code
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {code === "gl" ? "GL" : "ES"}
              </button>
            ))}
          </div>

          {/* Botón menú móvil */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? (lang === "gl" ? "Pechar menú" : "Cerrar menú") : "Abrir menú"}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {mobileOpen && (
        <div className="absolute right-2 top-full mt-2 w-56 rounded-xl border border-border bg-background/95 shadow-xl backdrop-blur-md md:hidden">
          <nav id="mobile-navigation" className="flex flex-col px-2 py-2" aria-label="Móbil">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
