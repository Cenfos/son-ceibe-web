"use client"

import { useState, type CSSProperties } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ChevronDown, Download, RotateCcw } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { SpotifyEmbed } from "@/components/spotify-embed"
import { AlbumPlatformLinks } from "@/components/album-platform-links"
import { LyricsPdfButton } from "@/components/lyrics-pdf-button"
import { SongLyricsBody } from "@/components/song-lyrics-body"
import { AlbumShare } from "@/components/album-share"
import { lyricSlug, songbookAlbumId, songbookPdf, songbookSongPdf } from "@/lib/songbook-downloads"
import { albumPath, albumSlug } from "@/lib/album-path"
import { formatReleaseDate } from "@/lib/release-date"
import type { Album, SongLyric } from "@/lib/content"

const downloadClass = "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
export function PublishedAlbumPage({ album, songs, otherAlbums }: { album: Album; songs: SongLyric[]; otherAlbums: Album[] }) {
  const { lang, tr } = useLanguage()
  const [showBack, setShowBack] = useState(false)
  const hasSongbook = albumSlug(album) === songbookAlbumId
  const displayingBack = showBack && Boolean(album.backCover)
  return <>
    <div className="mx-auto max-w-6xl px-4 pt-7 md:px-6"><Link href="/albums" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="size-4" />{lang === "gl" ? "Volver á discografía" : "Volver a la discografía"}</Link></div>
    <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-10 md:grid-cols-2 md:gap-16 md:px-6 md:py-14">
      <div className="mx-auto w-full max-w-lg">
        <div className="relative overflow-hidden rounded-xl shadow-2xl">
          <Image src={displayingBack ? album.backCover! : album.cover} alt={(displayingBack ? "Contraportada · " : "Portada · ") + album.title} width={1000} height={1000} sizes="(max-width: 768px) 92vw, 520px" priority className="aspect-square w-full object-cover" />
          {album.backCover && <button type="button" onClick={() => setShowBack(value => !value)} aria-pressed={displayingBack} className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-background/85 px-4 py-2 text-xs font-semibold text-foreground backdrop-blur transition-colors hover:bg-background"><RotateCcw className="size-3.5" aria-hidden="true" />{displayingBack ? tr.music.viewFront : tr.music.viewBack}</button>}
        </div>
      </div>
      <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Son Ceibe · {album.year}</p><h1 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">{album.title}</h1><time dateTime={album.releaseDate} className="mt-4 block text-sm text-muted-foreground">{formatReleaseDate(album.releaseDate, lang)}</time><p className="mt-5 text-lg leading-relaxed text-muted-foreground">{album.description[lang]}</p><p className="mt-4 text-sm text-muted-foreground">{album.tracklist?.length} {lang === "gl" ? "cancións · Letras e música: Camilo Rodríguez" : "canciones · Letras y música: Camilo Rodríguez"}</p><div className="mt-6"><SpotifyEmbed albumId={album.spotifyAlbumId} title={album.title} /></div><div className="mt-4"><AlbumPlatformLinks album={album} includeSpotify /></div><a href="#cancions" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold hover:underline">{lang === "gl" ? "Ver cancións e letras" : "Ver canciones y letras"}<ChevronDown className="size-4" /></a><div className="mt-7"><AlbumShare title={album.title} path={albumPath(album)} />{process.env.NODE_ENV === "development" && <p className="mt-1 text-xs text-muted-foreground">{lang === "gl" ? "Vista previa local: esta páxina aínda non está publicada." : "Vista previa local: esta página todavía no está publicada."}</p>}</div></div>
    </section>
    <section id="cancions" className="scroll-mt-20 bg-secondary px-4 py-14 md:px-6 md:py-20"><div className="mx-auto max-w-6xl"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{album.title}</p><h2 className="mt-3 font-serif text-3xl font-semibold">{lang === "gl" ? "Cancións e letras" : "Canciones y letras"}</h2><p className="mt-3 text-muted-foreground">{lang === "gl" ? "Abre cada canción para ler a letra e descargar o seu PDF." : "Abre cada canción para leer la letra y descargar su PDF."}</p><div className="mt-5">{hasSongbook ? <a href={songbookPdf} download className={downloadClass}><Download className="size-4" aria-hidden="true" />{lang === "gl" ? "Descargar cancioneiro completo (PDF)" : "Descargar cancionero completo (PDF)"}</a> : <LyricsPdfButton songs={songs} title={album.title} collection />}</div><ol style={{ "--track-rows": Math.ceil((album.tracklist?.length ?? 0) / 2) } as CSSProperties} className="mt-8 grid grid-cols-1 items-start gap-x-12 md:grid-cols-2 md:grid-flow-col md:grid-rows-[repeat(var(--track-rows),auto)]">{(album.tracklist ?? []).map((title, index) => {
      const id = lyricSlug(title)
      const song = songs.find(song => lyricSlug(song.title) === id)
      const pdf = hasSongbook ? songbookSongPdf(id) : undefined
      return <li key={title} className="min-w-0 border-b border-border"><details className="group"><summary className="flex cursor-pointer list-none items-center gap-4 py-5 [&::-webkit-details-marker]:hidden"><span className="w-6 shrink-0 text-sm tabular-nums text-accent">{String(index + 1).padStart(2, "0")}</span><h3 className="flex-1 font-serif text-xl font-semibold">{title}</h3><ChevronDown className="size-4 shrink-0 transition-transform group-open:rotate-180" /></summary><div className="mb-5 rounded-xl border border-[#cbd8c5] bg-[#eff5eb] px-5 py-6 text-[#101610] sm:ml-10 sm:px-8">{song ? <><div className="mb-6">{pdf ? <a href={pdf} download className={downloadClass}><Download className="size-4" aria-hidden="true" />{lang === "gl" ? "Descargar letra con acordes (PDF)" : "Descargar letra con acordes (PDF)"}</a> : <LyricsPdfButton songs={[song]} title={song.title} />}</div><SongLyricsBody song={song} /></> : <p>{lang === "gl" ? "Letra dispoñible en breve." : "Letra disponible próximamente."}</p>}</div></details></li>
    })}</ol></div></section>
    <section className="mx-auto max-w-6xl px-4 py-14 md:px-6"><h2 className="font-serif text-2xl font-semibold">{lang === "gl" ? "Máis música de Son Ceibe" : "Más música de Son Ceibe"}</h2><div className="mt-6 grid gap-5 sm:grid-cols-2">{otherAlbums.map(other => <Link key={other.id} href={albumPath(other)} className="flex items-center gap-5 rounded-xl border border-border bg-card p-4 hover:bg-secondary"><Image src={other.cover} alt={other.title} width={160} height={160} className="size-24 shrink-0 rounded-lg object-cover" /><span className="flex-1 font-serif text-xl font-semibold">{other.title}</span><ArrowRight className="size-5 shrink-0" /></Link>)}</div></section>
  </>
}
