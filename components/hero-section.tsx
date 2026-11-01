"use client"

import { useLanguage } from "@/components/language-provider"
import Image from "next/image"
import { albums } from "@/lib/content"
import { SpotifyEmbed } from "@/components/spotify-embed"
import { AlbumStoreLinks } from "@/components/album-store-links"

export function HeroSection() {
  const { tr, lang } = useLanguage()

  return (
    <section
      id="top"
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden pb-20 pt-28"
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
          <Image
          src="/hero-costa-galega-v2.webp"
          alt="Paisaxe da costa galega cun faro ao solpor"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[80%_40%] md:object-[50%_40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center md:px-6">
        <h1 className="sr-only">Son Ceibe</h1>
        <Image
          src="/son-ceibe-wordmark-wood.png"
          alt=""
          aria-hidden="true"
          width={1728}
          height={928}
          priority
          sizes="(max-width: 640px) 90vw, 580px"
          className="mx-auto h-auto w-full max-w-[580px] drop-shadow-[0_3px_3px_rgba(0,0,0,0.65)]"
        />
        <p className="mt-4 text-xl font-medium tracking-wide text-accent sm:text-2xl">
          {tr.hero.tagline}
        </p>
        <p className="mx-auto mt-6 max-w-2xl whitespace-pre-line text-pretty text-lg leading-relaxed text-muted-foreground">
          {tr.hero.subtitle}
        </p>

        {albums[0] && <div className="mx-auto mt-9 flex max-w-3xl flex-wrap items-center justify-center gap-3">{albums[0].spotifyAlbumId ? <SpotifyEmbed albumId={albums[0].spotifyAlbumId} title={albums[0].title} autoPlay heroButtonLabel={tr.hero.listen} /> : albums[0].links.youtubeMusic ? <a href={albums[0].links.youtubeMusic} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90">{lang === "gl" ? "Escoitar en YouTube Music" : "Escuchar en YouTube Music"}</a> : null}<AlbumStoreLinks album={albums[0]} /></div>}

      </div>
    </section>
  )
}
