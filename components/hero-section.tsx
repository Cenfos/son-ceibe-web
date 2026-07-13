"use client"

import { useLanguage } from "@/components/language-provider"

export function HeroSection() {
  const { tr } = useLanguage()

  return (
    <section id="top" className="relative flex min-h-svh items-center overflow-hidden">
      <img
        src="/hero-band.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-b from-background/70 via-background/60 to-background" />

      <div className="relative mx-auto w-full max-w-6xl px-4 pt-24 md:px-6">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
          {tr.hero.tagline}
        </p>
        <h1 className="max-w-3xl text-balance font-serif text-5xl font-semibold leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-8xl">
          Son Ceibe
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {tr.hero.subtitle}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#music"
            className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            {tr.hero.listen}
          </a>
          <a
            href="#about"
            className="inline-flex items-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            {tr.hero.discover}
          </a>
        </div>
      </div>
    </section>
  )
}
