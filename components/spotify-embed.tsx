"use client"

import { useEffect, useId, useRef, useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { ExternalLink, Maximize2, Minimize2, Play, X } from "lucide-react"

type SpotifyEmbedProps = {
  albumId: string
  title: string
}

export function SpotifyEmbed({ albumId, title }: SpotifyEmbedProps) {
  const { lang } = useLanguage()
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const headingId = useId()

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = previousOverflow }
  }, [open])

  if (!albumId) return null

  function openPlayer() {
    dialogRef.current?.showModal()
    setOpen(true)
  }

  return <>
    <button type="button" onClick={openPlayer} aria-haspopup="dialog" className="flex min-h-16 w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">
      <Play className="size-4 shrink-0 fill-current text-primary" aria-hidden="true" />
      {lang === "gl" ? "Escoitar en Spotify" : "Escuchar en Spotify"} · {title}
    </button>

    <dialog ref={dialogRef} aria-labelledby={headingId} onClose={() => { setOpen(false); setExpanded(false) }} onClick={event => { if (event.target === event.currentTarget) event.currentTarget.close() }} className={`fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none overflow-hidden border-0 bg-background p-0 text-foreground shadow-2xl backdrop:bg-black/75 open:flex open:flex-col ${expanded ? "" : "sm:m-auto sm:h-[min(88dvh,850px)] sm:w-[min(960px,calc(100vw-3rem))] sm:rounded-2xl sm:border sm:border-border"}`}>
      <header className="flex shrink-0 items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-6">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Spotify</p>
          <h2 id={headingId} className="truncate font-serif text-lg font-semibold sm:text-2xl">{title}</h2>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button type="button" onClick={() => setExpanded(value => !value)} aria-label={expanded ? (lang === "gl" ? "Reducir reprodutor" : "Reducir reproductor") : (lang === "gl" ? "Ampliar a toda a ventá" : "Ampliar a toda la ventana")} className="hidden size-11 items-center justify-center rounded-full border border-border bg-card hover:bg-secondary sm:flex">{expanded ? <Minimize2 className="size-5" aria-hidden="true" /> : <Maximize2 className="size-5" aria-hidden="true" />}</button>
        <button type="button" autoFocus onClick={() => dialogRef.current?.close()} aria-label={lang === "gl" ? "Pechar reprodutor" : "Cerrar reproductor"} className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"><X className="size-5" aria-hidden="true" /></button>
        </div>
      </header>
      <div className="min-h-0 flex-1 bg-[#121212]">
        {open && <iframe title={`Reproductor de Spotify: ${title}`} src={`https://open.spotify.com/embed/album/${albumId}?utm_source=generator&theme=0`} width="100%" height="100%" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowFullScreen className="block h-full w-full border-0" />}
      </div>
      <footer className="shrink-0 border-t border-border px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] text-right sm:px-6">
        <a href={`https://open.spotify.com/album/${albumId}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">Abrir en Spotify<ExternalLink className="size-4" aria-hidden="true" /></a>
      </footer>
    </dialog>
  </>
}
