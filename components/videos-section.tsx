"use client"

import { useLanguage } from "@/components/language-provider"
import { videos } from "@/lib/content"
import { Play } from "lucide-react"

export function VideosSection() {
  const { tr } = useLanguage()

  return (
    <section id="videos" className="scroll-mt-16 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-14 text-center">
          <h2 className="text-balance font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            {tr.videos.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {tr.videos.subtitle}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {videos.map((video) => (
            <article
              key={video.id}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <div className="relative aspect-video overflow-hidden bg-black">
                <iframe
                  title={video.title}
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-foreground">{video.title}</h3>
                {video.album && (
                  <p className="mt-1 text-xs text-muted-foreground">{video.album}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
