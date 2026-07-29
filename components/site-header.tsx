"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function SiteHeader() {
  const { lang, setLang, tr } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [
    { href: "#music", label: tr.nav.music },
    { href: "#videos", label: tr.nav.videos },
    { href: "#lyrics", label: tr.nav.lyrics },
    { href: "#about", label: tr.nav.about },
    { href: "#shop", label: tr.nav.shop },
    { href: "#contact", label: tr.nav.contact },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <a
          href="#top"
          className="flex shrink-0 items-center gap-2.5 font-serif text-lg font-semibold tracking-tight text-foreground"
        >
          <img
            src="/son-ceibe-logo.png"
            alt=""
            aria-hidden="true"
            className="h-9 w-9 rounded-full object-cover"
          />
          <span className="hidden sm:inline">Son Ceibe</span>
        </a>

        {/* Navegación desktop */}
        <nav className="hidden items-center gap-5 lg:gap-6 md:flex" aria-label="Principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
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
            aria-label={mobileOpen ? "Pechar menú" : "Abrir menú"}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {mobileOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col px-4 py-3" aria-label="Móbil">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}