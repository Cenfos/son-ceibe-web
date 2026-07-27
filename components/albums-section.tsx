"use client"

import { useState } from "react"
import { ExternalLink, Music, Play, RotateCcw } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { albums, singles, type Album, type Single } from "@/lib/content"
import { SpotifyEmbed } from "@/components/spotify-embed"

export function AlbumsSection() {
  const { tr } = useLanguage()

  return (
    <section id="music" className="scroll-mt-16 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Singles */}
        <div className="mb-20">
          <div className="mb-14 max-w-2xl">
            <h2 className="text-balance font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              {tr.music.singlesTitle}
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              {tr.music.singlesSubtitle}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {singles.map((single) => (
              <SingleCard key={single.id} single={single} />
            ))}
          </div>
        </div>

        {/* Discos */}
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

function SingleCard({ single }: { single: Single }) {
  const { lang, tr } = useLanguage()

  const platforms = [
    { key: "spotify", label: "Spotify", url: single.links.spotify },
    { key: "appleMusic", label: "Apple Music", url: single.links.appleMusic },
    { key: "youtube", label: "YouTube", url: single.links.youtube },
    { key: "bandcamp", label: "Bandcamp", url: single.links.bandcamp },
  ].filter((p) => p.url)

  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      {/* Imagen arriba, centrada y con tamaño máximo */}
      <div className="relative mx-auto max-w-sm overflow-hidden">
        <img
          src={single.cover || "/placeholder.svg"}
          alt={`Portada do single ${single.title} de Son Ceibe`}
          className="aspect-square w-full object-cover"
        />
        {single.year ? (
          <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
            {single.year}
          </span>
        ) : null}
      </div>

      {/* Contenido abajo, centrado */}
      <div className="p-6 text-center md:p-8">
        <h3 className="font-serif text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          {single.title}
        </h3>
        <p className="mx-auto mt-3 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
          {single.description[lang]}
        </p>

        {single.tracklist && single.tracklist.length > 0 && (
          <div className="mx-auto mt-6 max-w-md">
            <h4 className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <Music className="size-3.5" />
              {tr.music.tracklist}
            </h4>
            <ol className="space-y-1.5 text-left">
              {single.tracklist.map((track, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm text-foreground"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary text-[10px] font-semibold text-secondary-foreground">
                    {i + 1}
                  </span>
                  {track}
                </li>
              ))}
            </ol>
          </div>
        )}

        {platforms.length > 0 && (
          <div className="mx-auto mt-6 max-w-md">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {tr.music.platforms}
            </h4>
            <div className="flex flex-wrap justify-center gap-2">
              {platforms.map((p) => (
                <a
                  key={p.key}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  <ExternalLink className="size-3" />
                  {p.label}
                </a>
              ))}
            </div>
          </div>
        )}

        {single.spotifyAlbumId && (
          <div className="mx-auto mt-6 max-w-lg">
            <SpotifyEmbed albumId={single.spotifyAlbumId} title={single.title} />
          </div>
        )}
      </div>
    </article>
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

      {/* Info */}
      <div className={reversed ? "md:order-1" : ""}>
        <h3 className="font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {album.title}
        </h3>
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
          {album.description[lang]}
        </p>

        {album.tracklist && album.tracklist.length > 0 && (
          <div className="mt-8">
            <h4 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <Music className="size-3.5" />
              {tr.music.tracklist}
            </h4>
            <ol className="space-y-2">
              {album.tracklist.map((track, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm text-foreground"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-[10px] font-semibold text-secondary-foreground">
                    {i + 1}
                  </span>
                  {track}
                </li>
              ))}
            </ol>
          </div>
        )}

        {platforms.length > 0 && (
          <div className="mt-8">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {tr.music.platforms}
            </h4>
            <div className="flex flex-wrap gap-2">
              {platforms.map((p) => (
                <a
                  key={p.key}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                  {p.label}
                </a>
              ))}
            </div>
          </div>
        )}

        {album.spotifyAlbumId ? (
          <div className="mt-8">
            <SpotifyEmbed albumId={album.spotifyAlbumId} title={album.title} />
          </div>
        ) : (
          <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Play className="size-4" aria-hidden="true" />
            {tr.music.comingSoon}
          </div>
        )}
      </div>
    </article>
  )
}
