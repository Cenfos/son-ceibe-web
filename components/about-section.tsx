"use client"

import { useLanguage } from "@/components/language-provider"

export function AboutSection() {
  const { tr, lang } = useLanguage()

  return (
    <section id="about" className="scroll-mt-16 bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative flex items-center justify-center">
            <img
              src="/son-ceibe-logo-transparent-v2.png"
              alt="Logotipo de Son Ceibe: un triskel celta de madeira rodeado de lapas azuis"
              className="aspect-square w-full max-w-md object-contain p-4 drop-shadow-[0_8px_18px_rgba(0,0,0,0.2)]"
              loading="lazy"
            />
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Son Ceibe · Folk rock galego en fusión</p>
            <h1 className="text-balance font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              {tr.about.title}
            </h1>
            <p className="mt-5 border-l-2 border-accent pl-5 font-serif text-2xl leading-relaxed text-foreground">{lang === "gl" ? "A nosa terra tamén se conta en cancións." : "Nuestra tierra también se cuenta en canciones."}</p>
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
