"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/components/language-provider"

type Controller = { play: () => void; destroy: () => void; addListener: (name: string, callback: () => void) => void }
type Api = { createController: (element: HTMLElement, options: { uri: string; width: string; height: string }, callback: (controller: Controller) => void) => void }
let sdk: Promise<Api> | undefined
function loadSdk(): Promise<Api> {
  const cached = (window as Window & { sonCeibeSpotifyApi?: Api }).sonCeibeSpotifyApi
  if (cached) return Promise.resolve(cached)
  if (sdk) return sdk
  sdk = new Promise((resolve, reject) => {
    const target = window as Window & { onSpotifyIframeApiReady?: (api: Api) => void; sonCeibeSpotifyApi?: Api }
    const timeout = setTimeout(() => reject(new Error("Spotify API timeout")), 10000)
    const previous = target.onSpotifyIframeApiReady
    target.onSpotifyIframeApiReady = api => { clearTimeout(timeout); target.sonCeibeSpotifyApi = api; resolve(api); previous?.(api) }
    const script = document.createElement("script")
    script.src = "https://open.spotify.com/embed/iframe-api/v1"
    script.async = true
    script.onerror = () => { clearTimeout(timeout); reject(new Error("Spotify API unavailable")) }
    document.body.appendChild(script)
  })
  return sdk
}

export function SpotifyAutoplayEmbed({ albumId, title }: { albumId: string; title: string }) {
  const { lang } = useLanguage()
  const host = useRef<HTMLDivElement>(null)
  const [fallback, setFallback] = useState(false)
  const [ready, setReady] = useState(false)
  useEffect(() => {
    let cancelled = false
    let controller: Controller | undefined
    const container = host.current
    if (!container) return
    // React owns the container; Spotify may replace only this disposable child.
    const element = document.createElement("div")
    container.appendChild(element)
    void loadSdk().then(api => {
      if (cancelled) return
      api.createController(element, { uri: "spotify:album:" + albumId, width: "100%", height: "100%" }, instance => {
        if (cancelled) { instance.destroy(); return }
        controller = instance
        container.querySelector("iframe")?.setAttribute("title", "Reproductor de Spotify: " + title)
        instance.addListener("ready", () => {
          if (cancelled) return
          setReady(true)
          try { instance.play() } catch { /* Native controls remain available. */ }
        })
      })
    }).catch(() => { if (!cancelled) setFallback(true) })
    return () => { cancelled = true; controller?.destroy(); container.replaceChildren() }
  }, [albumId, title])
  return <div className="flex h-full min-h-0 flex-col">
    <p role="status" className="shrink-0 bg-card px-4 py-3 text-sm text-muted-foreground">{!ready && !fallback ? (lang === "gl" ? "Abrindo o disco…" : "Abriendo el disco…") : (lang === "gl" ? "Se a música non comeza, pulsa Reproducir no reprodutor." : "Si la música no empieza, pulsa Reproducir en el reproductor.")}</p>
    {fallback ? <iframe title={"Reproductor de Spotify: " + title} src={"https://open.spotify.com/embed/album/" + albumId + "?theme=0"} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowFullScreen className="min-h-0 w-full flex-1 border-0" /> : <div ref={host} className="min-h-0 w-full flex-1 [&>iframe]:h-full [&>iframe]:w-full" />}
  </div>
}
