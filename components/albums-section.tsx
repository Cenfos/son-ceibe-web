"use client"

import { useState } from "react"
import { ExternalLink, Music, Play, RotateCcw } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { albums, type Album } from "@/lib/content"
import { SpotifyEmbed } from "@/components/spotify-embed"

export function AlbumsSection() {
  const { tr } = useLanguage()

  return (
    <section id="music" className="scroll-mt-16 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-14 max-w-2xl">
          <h2 className="text-balance font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            {tr.music.title}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {tr.music.subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {albums.map((album, index) => (
            <AlbumCard key={album.id} album={album} reversed={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AlbumCard({ album, reversed }: { album: Album; reversed: boolean }) {
  const { lang, tr } = useLanguage()
  const [showBack, setShowBack] = useState(false)

  const platforms = [
    { key: "spotify", label: "Spotify", url: album.links.spotify },
    { key: "appleMusic", label: "Apple Music", url: album.links.appleMusic },
    { key: "youtube", label: "YouTube", url: album.links.youtube },
    { key: "bandcamp", label: "Bandcamp", url: album.links.bandcamp },
  ].filter((p) => p.url)

  const canFlip = Boolean(album.backCover)
  const currentImage = showBack && album.backCover ? album.backCover : album.cover

  return (
    <article className="grid items-start gap-8 md:grid-cols-2 md:gap-12">
      {/* Carátula */}
      <div className={reversed ? "md:order-2" : ""}>
        <div className="group relative overflow-hidden rounded-2xl border border-border shadow-sm">
          <img
            src={currentImage || "/placeholder.svg"}
            alt={
              showBack
                ? `Contraportada do disco ${album.title} de Son Ceibe`
                : `Portada do disco ${album.title} de Son Ceibe`
            }
            className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {album.year ? (
            <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
              {album.year}
            </span>
          ) : null}

          {canFlip && (
            <button
              type="button"
              onClick={() => setShowBack((v) => !v)}
              className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-background/85 px-4 py-2 text-xs font-semibold text-foreground backdrop-blur transition-colors hover:bg-background"
            >
              <RotateCcw className="size-3.5" aria-hidden="true" />
              {showBack ? tr.music.viewFront : tr.music.viewBack}
            </button>
          )}
        </div>
      </div>

      {/* Info + reproductor */}
      <div className={reversed ? "md:order-1" : ""}>
        <div className="mb-2 flex items-center gap-2 text-accent">
          <Music className="size-4" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em]">
            {tr.hero.tagline}
          </span>
        </div>
        <h3 className="font-serif text-3xl font-semibold tracking-tight text-foreground">
          {album.title}
        </h3>
        <p className="mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
          {album.description[lang]}
        </p>

        <div className="mt-6">
          {album.spotifyAlbumId ? (
            <SpotifyEmbed albumId={album.spotifyAlbumId} title={album.title} />
          ) : (
            <div className="flex items-center gap-3 rounded-xl border border-dashed border-border bg-card px-4 py-5 text-sm text-muted-foreground">
              <Play className="size-5 text-accent" aria-hidden="true" />
              {tr.music.comingSoon}
            </div>
          )}
        </div>

        {album.tracklist && album.tracklist.length > 0 && (
          <div className="mt-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {tr.music.tracklist}
            </p>
            <ol className="grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
              {album.tracklist.map((track, i) => (
                <li
                  key={track}
                  className="flex items-baseline gap-3 text-sm text-foreground"
                >
                  <span className="w-5 shrink-0 text-right font-mono text-xs text-accent">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{track}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {platforms.length > 0 && (
          <div className="mt-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {tr.music.platforms}
            </p>
            <div className="flex flex-wrap gap-2">
              {platforms.map((p) => (
                <a
                  key={p.key}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  {p.label}
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}
