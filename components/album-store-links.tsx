"use client"

import { ExternalLink } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import type { Album } from "@/lib/content"

export function AlbumStoreLinks({ album }: { album: Album }) {
  const { lang } = useLanguage()
  const platforms = [
    { label: "Amazon Music", url: album.links.amazonMusic },
    { label: "Apple Music", url: album.links.appleMusic },
  ]

  return platforms.map(({ label, url }) => url ? (
    <a key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={`${label} · ${album.title}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">
      <ExternalLink className="size-4 shrink-0" aria-hidden="true" />
      {lang === "gl" ? "Escoitar en" : "Escuchar en"} {label}
    </a>
  ) : null)
}
