"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { SpotifyEmbed } from "@/components/spotify-embed"
import { AlbumPlatformLinks } from "@/components/album-platform-links"
import { LyricsPdfButton } from "@/components/lyrics-pdf-button"
import { SongLyricsBody } from "@/components/lyrics-section"
import { AlbumShare } from "@/components/album-share"
import { albumPath } from "@/lib/album-path"
import { formatReleaseDate } from "@/lib/release-date"
import type { Album, SongLyric } from "@/lib/content"

const normalized = (title: string) => title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "")
export function PublishedAlbumPage({ album, songs, otherAlbums }: { album: Album; songs: SongLyric[]; otherAlbums: Album[] }) {
  const { lang, tr } = useLanguage()
  return <>
    <div className="mx-auto max-w-6xl px-4 pt-7 md:px-6"><Link href="/albums" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="size-4" />{lang === "gl" ? "Volver á discografía" : "Volver a la discografía"}</Link></div>
    <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-10 md:grid-cols-2 md:gap-16 md:px-6 md:py-14">
      <div className="mx-auto w-full max-w-lg"><Image src={album.cover} alt={"Portada · " + album.title} width={1000} height={1000} sizes="(max-width: 768px) 92vw, 520px" priority className="aspect-square w-full rounded-xl object-cover shadow-2xl" />{album.backCover && <details className="mt-5 rounded-xl border border-border bg-card"><summary className="cursor-pointer px-5 py-3 text-sm font-semibold">{tr.music.viewBack}</summary><Image src={album.backCover} alt={"Contraportada · " + album.title} width={1000} height={1000} sizes="(max-width: 768px) 92vw, 520px" className="aspect-square w-full rounded-b-xl object-cover" /></details>}</div>
      <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Son Ceibe · {album.year}</p><h1 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">{album.title}</h1><time dateTime={album.releaseDate} className="mt-4 block text-sm text-muted-foreground">{formatReleaseDate(album.releaseDate, lang)}</time><p className="mt-5 text-lg leading-relaxed text-muted-foreground">{album.description[lang]}</p><p className="mt-4 text-sm text-muted-foreground">{album.tracklist?.length} {lang === "gl" ? "cancións · Letras e música: Camilo Rodríguez" : "canciones · Letras y música: Camilo Rodríguez"}</p><div className="mt-6"><SpotifyEmbed albumId={album.spotifyAlbumId} title={album.title} /></div><div className="mt-4"><AlbumPlatformLinks album={album} includeSpotify /></div><a href="#cancions" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold hover:underline">{lang === "gl" ? "Ver cancións e letras" : "Ver canciones y letras"}<ChevronDown className="size-4" /></a><div className="mt-7"><AlbumShare title={album.title} path={albumPath(album)} />{process.env.NODE_ENV === "development" && <p className="mt-1 text-xs text-muted-foreground">{lang === "gl" ? "Vista previa local: esta páxina aínda non está publicada." : "Vista previa local: esta página todavía no está publicada."}</p>}</div></div>
    </section>
    <section id="cancions" className="scroll-mt-20 bg-secondary px-4 py-14 md:px-6 md:py-20"><div className="mx-auto max-w-4xl"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{album.title}</p><h2 className="mt-3 font-serif text-3xl font-semibold">{lang === "gl" ? "Cancións e letras" : "Canciones y letras"}</h2><p className="mt-3 text-muted-foreground">{lang === "gl" ? "Abre cada canción para ler a letra e descargar o seu PDF." : "Abre cada canción para leer la letra y descargar su PDF."}</p><div className="mt-5"><LyricsPdfButton songs={songs} title={album.title} collection /></div><ol className="mt-8 divide-y divide-border border-y border-border">{(album.tracklist ?? []).map((title, index) => {
      const song = songs.find(song => normalized(song.title) === normalized(title))
      return <li key={title}><details className="group"><summary className="flex cursor-pointer list-none items-center gap-4 py-5 [&::-webkit-details-marker]:hidden"><span className="w-6 shrink-0 text-sm tabular-nums text-accent">{String(index + 1).padStart(2, "0")}</span><h3 className="flex-1 font-serif text-xl font-semibold">{title}</h3><ChevronDown className="size-4 shrink-0 transition-transform group-open:rotate-180" /></summary><div className="mb-5 rounded-xl border border-[#cbd8c5] bg-[#eff5eb] px-5 py-6 text-[#101610] sm:ml-10 sm:px-8">{song ? <><div className="mb-6"><LyricsPdfButton songs={[song]} title={song.title} /></div><SongLyricsBody song={song} /></> : <p>{lang === "gl" ? "Letra dispoñible en breve." : "Letra disponible próximamente."}</p>}</div></details></li>
    })}</ol></div></section>
    <section className="mx-auto max-w-6xl px-4 py-14 md:px-6"><h2 className="font-serif text-2xl font-semibold">{lang === "gl" ? "Máis música de Son Ceibe" : "Más música de Son Ceibe"}</h2><div className="mt-6 grid gap-5 sm:grid-cols-2">{otherAlbums.map(other => <Link key={other.id} href={albumPath(other)} className="flex items-center gap-5 rounded-xl border border-border bg-card p-4 hover:bg-secondary"><Image src={other.cover} alt={other.title} width={160} height={160} className="size-24 shrink-0 rounded-lg object-cover" /><span className="flex-1 font-serif text-xl font-semibold">{other.title}</span><ArrowRight className="size-5 shrink-0" /></Link>)}</div></section>
  </>
}
