"use client"

import { albumPath } from "@/lib/album-path"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Music2, Compass } from "lucide-react"
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
            <Link href={albumPath(album)} className="group block" aria-label={album.title}>
              <Image src={album.cover} alt={album.title} width={640} height={640} sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 560px" className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
            </Link>
            <div className="p-6 md:p-8">
              <time dateTime={album.releaseDate} className="text-sm text-muted-foreground">{formatReleaseDate(album.releaseDate, lang)}</time>
              <h3 className="mt-2 font-serif text-2xl font-semibold md:text-3xl"><Link href={albumPath(album)} className="hover:underline">{album.title}</Link></h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{album.description[lang]}</p>
              <div className="mt-6"><SpotifyEmbed albumId={album.spotifyAlbumId} title={album.title} /></div>
              <div className="mt-4"><AlbumPlatformLinks album={album} /></div>
              <Link href={albumPath(album)} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">{tr.home.viewAlbum}<ArrowRight className="size-4" /></Link>
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
    <section className="bg-background px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-border bg-card md:grid-cols-[0.85fr_1.15fr]">
        <div className="relative min-h-64 md:min-h-96">
          <Image src="/hero-costa-galega-v2.webp" alt={lang === "gl" ? "Mar, rochas e vexetación na costa galega" : "Mar, rocas y vegetación en la costa gallega"} fill sizes="(max-width: 768px) 100vw, 480px" className="object-cover object-left" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
          <p className="absolute bottom-6 left-6 right-6 font-serif text-2xl text-white md:bottom-8 md:left-8">{lang === "gl" ? "Unha terra. Moitas historias." : "Una tierra. Muchas historias."}</p>
        </div>
        <div className="flex flex-col items-start justify-center p-7 sm:p-10 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{lang === "gl" ? "O universo de Son Ceibe" : "El universo de Son Ceibe"}</p>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold md:text-4xl">{tr.home.introTitle}</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{tr.home.introBody}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{lang === "gl" ? "Un proxecto musical de Camilo Rodríguez. Cancións en galego para contar o que somos e o que sentimos." : "Un proyecto musical de Camilo Rodríguez. Canciones en gallego para contar lo que somos y lo que sentimos."}</p>
          <Link href="/grupo" className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"><Compass className="size-4" aria-hidden="true" />{tr.hero.discover}<ArrowRight className="size-4" aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  </>
}
