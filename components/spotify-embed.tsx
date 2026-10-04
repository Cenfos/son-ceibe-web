"use client"

import { useState } from "react"
import { Play } from "lucide-react"

type SpotifyEmbedProps = {
  albumId: string
  title: string
}

export function SpotifyEmbed({ albumId, title }: SpotifyEmbedProps) {
  const [open, setOpen] = useState(false)
  if (!albumId) return null

  if (!open) {
    return (
      <button type="button" onClick={() => setOpen(true)} className="flex min-h-16 w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">
        <Play className="size-4 fill-current text-primary" />
        Cargar reprodutor de Spotify · {title}
      </button>
    )
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <iframe
        title={`Reproductor de Spotify: ${title}`}
        src={`https://open.spotify.com/embed/album/${albumId}?utm_source=generator&theme=0`}
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="block"
      />
    </div>
  )
}
