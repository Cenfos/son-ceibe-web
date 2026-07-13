"use client"

import { ExternalLink, Mail } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { socials } from "@/lib/content"

export function SiteFooter() {
  const { tr } = useLanguage()

  // Añadimos gmail a la lista de enlaces
  const links = [
    { key: "spotify", label: "Spotify", url: socials.spotify, isEmail: false },
    { key: "instagram", label: "Instagram", url: socials.instagram, isEmail: false },
    { key: "youtube", label: "YouTube", url: socials.youtube, isEmail: false },    
    { key: "gmail", label: "Email", url: (socials as any).gmail, isEmail: true },
  ].filter((l) => l.url)

  return (
    <footer className="border-t border-border bg-secondary py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center md:px-6">
        <span className="font-serif text-2xl font-semibold tracking-tight text-foreground">
          Son Ceibe
        </span>

        {links.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2">
            {links.map((l) => (
              <a
                key={l.key}
                href={l.url}
                // Si es un email, no abre pestaña nueva; si es red social, sí.
                target={l.isEmail ? undefined : "_blank"}
                rel={l.isEmail ? undefined : "noopener noreferrer"}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-background"
              >
                {l.label}
                {l.isEmail ? (
                  <Mail className="size-3.5" aria-hidden="true" />
                ) : (
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                )}
              </a>
            ))}
          </div>
        )}

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Son Ceibe. {tr.footer.rights}
        </p>
      </div>
    </footer>
  )
}