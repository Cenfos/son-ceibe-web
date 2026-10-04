"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { legalContent } from "@/lib/legal"

export function LegalPage({ kind }: { kind: keyof typeof legalContent }) {
  const { lang } = useLanguage()
  const [title, sections] = legalContent[kind][lang]
  return <article className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
    <h1 className="font-serif text-4xl font-semibold md:text-5xl">{title}</h1>
    <p className="mt-4 text-sm text-muted-foreground">{lang === "gl" ? "Última actualización" : "Última actualización"}: 04/10/2026</p>
    <div className="mt-10 space-y-8">{sections.map(([heading, body]) => <section key={heading}><h2 className="font-serif text-2xl font-semibold">{heading}</h2><p className="mt-3 leading-relaxed text-muted-foreground">{body}</p></section>)}</div>
    {kind !== "legal" && <nav aria-label={lang === "gl" ? "Información dos provedores" : "Información de los proveedores"} className="mt-10 flex flex-wrap gap-4 text-sm text-primary underline">
      <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">Formspree</a>
      <a href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noopener noreferrer">Vercel</a>
      <a href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel Web Analytics</a>
      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google / YouTube / Gmail</a>
      <a href="https://www.spotify.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">Spotify</a>
    </nav>}
    <Link href="/contacto" className="mt-10 inline-block font-semibold text-primary underline">Contacto</Link>
  </article>
}
