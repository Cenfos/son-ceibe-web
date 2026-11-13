"use client"

import Link from "next/link"
import { albumPath } from "@/lib/album-path"
import { useState, type CSSProperties } from "react"
import { Download, ExternalLink, Music, RotateCcw } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { albums, singles, type Album, type Single } from "@/lib/content"
import { formatReleaseDate } from "@/lib/release-date"
import { AlbumPlatformLinks } from "@/components/album-platform-links"
import { SpotifyEmbed } from "@/components/spotify-embed"
import { SongbookScore } from "@/components/songbook-score"
import { lyricSlug, songbookAlbumPdf, songbookSongPdf } from "@/lib/songbook-downloads"

export function AlbumsSection({ mode = "all" }: { mode?: "all" | "singles" | "albums" }) {
  const { lang, tr } = useLanguage()
  const singlesPdf = mode === "singles" ? songbookAlbumPdf("singles") : undefined
  const AlbumHeading = mode === "all" ? "h2" : "h1"

  return (
    <section id="music" className="music-surface scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Singles */}
        {mode !== "albums" && <div className={mode === "all" ? "mb-20" : ""}>
          <div className="mb-14 max-w-2xl">
            <h1 className="text-balance font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              {tr.music.singlesTitle}
            </h1>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              {tr.music.singlesSubtitle}
            </p>
            {singlesPdf && (
              <a href={singlesPdf} download className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">
                <Download className="size-4" aria-hidden="true" />
                {lang === "gl" ? "Descargar cancioneiro de singles (PDF)" : "Descargar cancionero de singles (PDF)"}
              </a>
            )}
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {singles.map((single) => (
              <SingleCard key={single.id} single={single} showSongbook={mode === "singles"} />
            ))}
          </div>
        </div>

        }

        {mode !== "singles" && <>
        {/* Discos */}
        <div className="mb-14 max-w-2xl">
          <AlbumHeading className="text-balance font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            {tr.music.title}
          </AlbumHeading>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {tr.music.subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
        </>}
      </div>
    </section>
  )
}

function SingleCard({ single, showSongbook }: { single: Single; showSongbook: boolean }) {
  const { lang, tr } = useLanguage()
  const songId = lyricSlug(single.title)
  const pdf = showSongbook ? songbookSongPdf(songId) : undefined

  const platforms = [
    { key: "spotify", label: "Spotify", url: single.links.spotify },
    { key: "appleMusic", label: "Apple Music", url: single.links.appleMusic },
    { key: "youtube", label: "YouTube", url: single.links.youtube },
    { key: "bandcamp", label: "Bandcamp", url: single.links.bandcamp },
  ].filter((p) => p.url)

  return (
    <article id={single.id} className={`min-w-0 scroll-mt-24 overflow-hidden release-card rounded-2xl border shadow-sm ${pdf ? "md:has-[details[open]]:col-span-2" : ""}`}>
      {/* Imagen arriba, centrada y con tamaño máximo */}
      <div className="relative mx-auto max-w-sm overflow-hidden">
        <img
          src={single.cover || "/placeholder.svg"}
          alt={`Portada do single ${single.title} de Son Ceibe`}
          loading="lazy"
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
        <time dateTime={single.releaseDate} className="mt-3 block text-sm text-muted-foreground">{formatReleaseDate(single.releaseDate, lang)}</time>

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
        {pdf && (
          <details className="mt-6 rounded-xl border border-border text-left">
            <summary className="cursor-pointer px-4 py-3 text-sm font-semibold">
              {lang === "gl" ? "Ver letra con acordes" : "Ver letra con acordes"}
            </summary>
            <div className="rounded-b-xl bg-[#eff5eb] p-4 text-[#101610] sm:p-6">
              <a href={pdf} download className="mb-4 inline-flex items-center gap-2 text-sm font-semibold hover:underline">
                <Download className="size-4" aria-hidden="true" />
                {lang === "gl" ? "Descargar letra con acordes (PDF)" : "Descargar letra con acordes (PDF)"}
              </a>
              <SongbookScore id={songId} title={single.title} />
            </div>
          </details>
        )}
      </div>
    </article>
  )
}

function AlbumCard({ album }: { album: Album }) {
  const { lang, tr } = useLanguage()
  const [showBack, setShowBack] = useState(false)

  const canFlip = Boolean(album.backCover)
  const currentImage = showBack && album.backCover ? album.backCover : album.cover

  return (
    <article id={album.id} className="scroll-mt-24 grid items-center gap-8 border-b border-border pb-14 last:border-b-0 last:pb-0 md:grid-cols-2 md:gap-x-12">
      {/* Carátula */}
      <div>
        <div className="release-card group relative overflow-hidden rounded-2xl border shadow-sm">
          <img
            src={currentImage || "/placeholder.svg"}
            alt={
              showBack
                ? `Contraportada do disco ${album.title} de Son Ceibe`
                : `Portada do disco ${album.title} de Son Ceibe`
            }
            className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
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
      <div>
        <h3 className="font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {album.title}
        </h3>
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
          {album.description[lang]}
        </p>

        <time dateTime={album.releaseDate} className="mt-3 block text-sm text-muted-foreground">{formatReleaseDate(album.releaseDate, lang)}</time>



        <div className="mt-8">
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{tr.music.platforms}</h4>
          <AlbumPlatformLinks album={album} includeSpotify />
        </div>

        {album.spotifyAlbumId ? (
          <div className="mt-8">
            <SpotifyEmbed albumId={album.spotifyAlbumId} title={album.title} />
          </div>
        ) : null}
        <Link href={albumPath(album)} className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">{tr.home.viewAlbum}</Link>
      </div>
        {album.tracklist && album.tracklist.length > 0 && (
          <div className="md:col-span-2">
            <h4 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <Music className="size-3.5" />
              {tr.music.tracklist}
            </h4>
            <ol style={{ "--track-rows": Math.ceil(album.tracklist.length / 2) } as CSSProperties} className="grid grid-cols-1 gap-x-12 md:grid-cols-2 md:grid-flow-col md:grid-rows-[repeat(var(--track-rows),auto)]">
              {album.tracklist.map((track, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 border-b border-border py-3 text-sm text-foreground"
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
    </article>
  )
}
