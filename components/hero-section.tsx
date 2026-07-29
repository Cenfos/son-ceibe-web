"use client"

import { useLanguage } from "@/components/language-provider"
import { Play, Users, Music, FileText } from "lucide-react"

export function HeroSection() {
  const { tr } = useLanguage()

  return (
    <section
      id="top"
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden"
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src="/hero-band.png"
          alt="Son Ceibe en concerto"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center md:px-6">
        <h1 className="font-serif text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Son Ceibe
        </h1>
        <p className="mt-4 text-xl font-medium tracking-wide text-accent sm:text-2xl">
          {tr.hero.tagline}
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {tr.hero.subtitle}
        </p>

        {/* Botones principales */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#music"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:opacity-90 hover:shadow-xl"
          >
            <Play className="size-4" />
            {tr.hero.listen}
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            <Users className="size-4" />
            {tr.hero.discover}
          </a>
        </div>

        {/* Accesos directos */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <a
            href="#music"
            className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-medium text-accent transition-colors hover:bg-accent/20"
          >
            <Music className="size-3.5" />
            {tr.nav.music}
          </a>
          <a
            href="#lyrics"
            className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-medium text-accent transition-colors hover:bg-accent/20"
          >
            <FileText className="size-3.5" />
            {tr.nav.lyrics}
          </a>
        </div>
      </div>
    </section>
  )
}