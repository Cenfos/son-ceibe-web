"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Music2, Users } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { formatReleaseDate } from "@/lib/release-date"
import { AlbumPlatformLinks } from "@/components/album-platform-links"
import { SpotifyEmbed } from "@/components/spotify-embed"
import { albums, singles, featuredRelease } from "@/lib/content"

export function HomeHighlights() {
  const { lang, tr } = useLanguage()
  const release = featuredRelease
  const latestSingles = singles.filter(single => single.id !== release?.id).slice(0, 3)
  const releasePath = release?.kind === "album" ? "/albums" : "/singles"
  const releaseLinkLabel = release?.kind === "album" ? tr.home.allAlbums : tr.home.allSingles
  return <>
    {release && <section className="bg-background py-16 md:py-20">
      <article className="mx-auto grid max-w-6xl items-center gap-8 px-4 md:grid-cols-[280px_1fr] md:gap-12 md:px-6">
        <Image src={release.cover} alt={release.title} width={560} height={560} className="mx-auto w-full max-w-[280px] rounded-2xl object-cover shadow" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{tr.home.single}</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold md:text-4xl">{release.title}</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{release.description[lang]}</p>
          <time dateTime={release.releaseDate} className="mt-3 block text-sm text-muted-foreground">{formatReleaseDate(release.releaseDate, lang)}</time>
          <div className="mt-6 flex flex-wrap gap-4">
            {release.links.spotify && <a href={release.links.spotify} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"><Music2 className="size-4" />{tr.home.listenSpotify}</a>}
            <Link href={releasePath} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">{releaseLinkLabel}<ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </article>
    </section>}
    <section className="bg-secondary py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-serif text-3xl font-semibold">{tr.home.latest}</h2>
          <Link href="/singles" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">{tr.home.allSingles}<ArrowRight className="size-4" /></Link>
        </div>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
          {latestSingles.map(single => <Link key={single.id} href={`/singles#${single.id}`} className="group">
            <Image src={single.cover} alt={single.title} width={400} height={400} className="aspect-square w-full rounded-xl object-cover shadow-sm transition-transform group-hover:scale-[1.02]" />
            <h3 className="mt-3 font-serif text-lg font-semibold group-hover:underline">{single.title}</h3>
            <time dateTime={single.releaseDate} className="mt-1 block text-sm text-muted-foreground">{formatReleaseDate(single.releaseDate, lang)}</time>
          </Link>)}
        </div>
      </div>
    </section>
    <section className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-serif text-3xl font-semibold">{tr.music.title}</h2>
          <Link href="/albums" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">{tr.home.allAlbums}<ArrowRight className="size-4" /></Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {albums.slice(0, 2).map(album => <article key={album.id} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <Link href={`/albums#${album.id}`} className="group block" aria-label={album.title}>
              <Image src={album.cover} alt={album.title} width={640} height={640} sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 560px" className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
            </Link>
            <div className="p-6 md:p-8">
              <time dateTime={album.releaseDate} className="text-sm text-muted-foreground">{formatReleaseDate(album.releaseDate, lang)}</time>
              <h3 className="mt-2 font-serif text-2xl font-semibold md:text-3xl"><Link href={`/albums#${album.id}`} className="hover:underline">{album.title}</Link></h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{album.description[lang]}</p>
              <div className="mt-6"><SpotifyEmbed albumId={album.spotifyAlbumId} title={album.title} /></div>
              <div className="mt-4"><AlbumPlatformLinks album={album} /></div>
              <Link href={`/albums#${album.id}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">{tr.home.viewAlbum}<ArrowRight className="size-4" /></Link>
            </div>
          </article>)}

        </div>
      </div>
    </section>
    <section className="bg-secondary py-16 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center md:px-6">
        <div className="max-w-2xl"><h2 className="font-serif text-3xl font-semibold">{tr.home.lyricsTitle}</h2><p className="mt-3 leading-relaxed text-muted-foreground">{tr.home.lyricsBody}</p></div>
        <Link href="/letras" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">{tr.home.allLyrics}<ArrowRight className="size-4" /></Link>
      </div>
    </section>
    <section className="bg-background py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center md:px-6">
        <div className="max-w-2xl"><h2 className="font-serif text-3xl font-semibold">{tr.home.introTitle}</h2><p className="mt-3 text-muted-foreground">{tr.home.introBody}</p></div>
        <Link href="/grupo" className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold hover:bg-secondary"><Users className="size-4" />{tr.nav.about}</Link>
      </div>
    </section>
  </>
}
