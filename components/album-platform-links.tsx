"use client"

import { ExternalLink } from "lucide-react"
import type { Album } from "@/lib/content"

export function AlbumPlatformLinks({ album, includeSpotify = false }: { album: Album; includeSpotify?: boolean }) {
  const platforms = [
    { label: "Spotify", url: includeSpotify ? album.links.spotify : undefined },
    { label: "YouTube Music", url: album.links.youtubeMusic },
    { label: "Amazon Music", url: album.links.amazonMusic },
    { label: "Apple Music", url: album.links.appleMusic },
    { label: "YouTube", url: album.links.youtube },
    { label: "Bandcamp", url: album.links.bandcamp },
  ].filter(platform => platform.url)

  if (!platforms.length) return null
  return <div className="flex flex-wrap gap-2">
    {platforms.map(platform => <a key={platform.label} href={platform.url} target="_blank" rel="noopener noreferrer" aria-label={`${platform.label} · ${album.title}`} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-secondary">
      <ExternalLink className="size-3.5 shrink-0" aria-hidden="true" />{platform.label}
    </a>)}
  </div>
}
