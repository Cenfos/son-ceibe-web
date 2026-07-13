"use client"

import { useLanguage } from "@/components/language-provider"

export function AboutSection() {
  const { tr } = useLanguage()

  return (
    <section id="about" className="scroll-mt-16 bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative flex items-center justify-center overflow-hidden rounded-2xl border border-border bg-[oklch(0.14_0.01_150)] shadow-sm">
            <img
              src="/son-ceibe-logo.png"
              alt="Logotipo de Son Ceibe: un triskel celta de madeira rodeado de lapas azuis"
              className="aspect-square w-full max-w-md object-contain p-6"
            />
          </div>
          <div>
            <h2 className="text-balance font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              {tr.about.title}
            </h2>
            <div className="mt-6 space-y-4">
              {tr.about.paragraphs?.map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-pretty text-lg leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}