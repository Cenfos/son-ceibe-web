"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowRight, BookOpen, ChevronDown, Download, Guitar, Search, X } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { SongLyricsBody } from "@/components/song-lyrics-body"
import { loadLyric } from "@/lib/load-lyric"
import type { SongLyric } from "@/lib/lyrics/types"
import type { LyricIndexEntry, LyricCollection } from "@/lib/lyrics-library-types"

function PdfDownload({ ids, title, collection = false }: { ids: string[]; title: string; collection?: boolean }) {
  const { lang } = useLanguage()
  const [busy, setBusy] = useState(false)
  const [failed, setFailed] = useState(false)
  async function download() {
    setBusy(true); setFailed(false)
    try { const [songs, pdf] = await Promise.all([Promise.all(ids.map(loadLyric)), import("@/lib/lyrics-pdf")]); await pdf.downloadLyricsPdf(songs, title) }
    catch { setFailed(true) }
    finally { setBusy(false) }
  }
  return <div className="shrink-0"><button type="button" onClick={download} disabled={busy || !ids.length} aria-label={"PDF · " + title} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold hover:bg-secondary disabled:opacity-60"><Download className="size-4" aria-hidden="true" />{busy ? "Preparando…" : collection ? (lang === "gl" ? "PDF da colección" : "PDF de la colección") : "PDF"}</button>{failed && <p role="alert" className="mt-2 max-w-xs text-sm text-destructive">{lang === "gl" ? "Non se puido crear o PDF. Téntao de novo." : "No se pudo crear el PDF. Inténtalo de nuevo."}</p>}</div>
}

const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()

export function LyricsLibrary({ index, collections }: { index: LyricIndexEntry[]; collections: LyricCollection[] }) {
  const { lang } = useLanguage()
  const [selected, setSelected] = useState<string | null>(null)
  const [query, setQuery] = useState("")
  const [open, setOpen] = useState<string | null>(null)
  const [loaded, setLoaded] = useState<Record<string, SongLyric>>({})
  const [pending, setPending] = useState<Record<string, boolean>>({})
  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const collection = collections.find(item => item.id === selected)
  const searching = query.trim().length > 0
  const visible = index.filter(song => (!collection || song.collections.includes(collection.title)) && (!searching || normalize(song.title).includes(normalize(query.trim()))))
  const showResults = !!selected || searching
  const title = collection?.title ?? (lang === "gl" ? "Todas as cancións" : "Todas las canciones")
  async function fetchSong(id: string) {
    setPending(previous => ({ ...previous, [id]: true })); setErrors(previous => ({ ...previous, [id]: false }))
    try { const song = await loadLyric(id); setLoaded(previous => ({ ...previous, [id]: song })) }
    catch { setErrors(previous => ({ ...previous, [id]: true })) }
    finally { setPending(previous => ({ ...previous, [id]: false })) }
  }
  function toggle(id: string) {
    if (open === id) { setOpen(null); return }
    setOpen(id)
    if (!loaded[id] && !pending[id]) void fetchSong(id)
  }
  function select(id: string) { setSelected(id); setQuery(""); setOpen(null) }
  return <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
    <header className="mx-auto max-w-2xl text-center"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Son Ceibe</p><h1 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">Letras</h1><p className="mt-4 text-lg leading-relaxed text-muted-foreground">{lang === "gl" ? "Escolle un disco ou busca a túa canción. Letras para ler, cantar e levar contigo en PDF." : "Elige un disco o busca tu canción. Letras para leer, cantar y llevar contigo en PDF."}</p></header>
    <div className="relative mx-auto mb-10 mt-8 max-w-xl"><label htmlFor="library-search" className="sr-only">{lang === "gl" ? "Buscar canción polo título" : "Buscar canción por título"}</label><Search className="pointer-events-none absolute left-4 top-4 size-5 text-muted-foreground" aria-hidden="true" /><input id="library-search" type="search" value={query} onChange={event => { setQuery(event.target.value); setOpen(null) }} placeholder={lang === "gl" ? "Que canción buscas?" : "¿Qué canción buscas?"} className="min-h-14 w-full rounded-full border border-border bg-card py-3 pl-12 pr-5 text-base outline-none focus:border-accent focus:ring-2 focus:ring-accent/25" /></div>
    <div role="group" aria-label={lang === "gl" ? "Escoller colección" : "Elegir colección"} className="grid gap-4 sm:grid-cols-3">{collections.map(item => <button key={item.id} type="button" aria-pressed={selected === item.id} onClick={() => select(item.id)} className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 text-left transition-colors hover:bg-secondary aria-pressed:border-accent aria-pressed:bg-secondary aria-pressed:ring-1 aria-pressed:ring-accent"><Image src={item.cover} alt="" width={160} height={160} sizes="80px" className="size-20 shrink-0 rounded-lg object-cover shadow-sm" /><span className="min-w-0"><span className="block font-serif text-xl font-semibold leading-snug">{item.title}</span><span className="mt-2 block text-sm text-muted-foreground">{item.count + " letras"}</span></span></button>)}</div>
    <div className="mt-5 flex flex-wrap justify-center gap-3"><button type="button" onClick={() => select("all")} aria-pressed={selected === "all"} className="min-h-11 rounded-full border border-border px-5 py-2 text-sm font-semibold hover:bg-secondary aria-pressed:bg-secondary">{lang === "gl" ? "Ver todas as cancións" : "Ver todas las canciones"}</button>{selected && <button type="button" onClick={() => { setSelected(null); setQuery(""); setOpen(null) }} className="inline-flex min-h-11 items-center gap-2 rounded-full px-4 py-2 text-sm text-muted-foreground hover:text-foreground"><X className="size-4" />{lang === "gl" ? "Limpar selección" : "Limpiar selección"}</button>}</div>
    {!showResults ? <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-dashed border-border px-6 py-10 text-center"><BookOpen className="mx-auto size-8 text-accent" aria-hidden="true" /><h2 className="mt-4 font-serif text-2xl font-semibold">{lang === "gl" ? "Cada canción ten a súa historia" : "Cada canción tiene su historia"}</h2><p className="mt-3 leading-relaxed text-muted-foreground">{lang === "gl" ? "Escolle unha colección de arriba ou escribe un título no buscador para empezar." : "Elige una colección de arriba o escribe un título en el buscador para empezar."}</p></div> : <div className="mt-12">
      <header className="mb-6 flex flex-wrap items-start justify-between gap-5"><div><h2 className="font-serif text-3xl font-semibold">{title}</h2><p role="status" className="mt-2 text-sm text-muted-foreground">{visible.length} {visible.length === 1 ? (lang === "gl" ? "canción" : "canción") : (lang === "gl" ? "cancións" : "canciones")}{searching ? ' · "' + query.trim() + '"' : ""}</p>{collection && <Link prefetch={false} href={collection.href} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold hover:underline">{collection.singles ? (lang === "gl" ? "Ver singles" : "Ver singles") : (lang === "gl" ? "Escoitar e coñecer o disco" : "Escuchar y conocer el disco")}<ArrowRight className="size-4" /></Link>}</div>{visible.length > 0 && <PdfDownload ids={visible.map(song => song.id)} title={searching ? title + " - " + query.trim() : title} collection />}</header>
      {!visible.length && <p className="rounded-xl border border-border bg-card p-7 text-center text-muted-foreground">{lang === "gl" ? "Non atopamos cancións con ese título. Proba con outra palabra ou limpa a selección." : "No encontramos canciones con ese título. Prueba otra palabra o limpia la selección."}</p>}
      <div className="space-y-3">{visible.map(song => <article key={song.id} className="overflow-hidden rounded-xl border border-border bg-card"><div className="flex items-center gap-3 p-4 sm:px-5"><button type="button" aria-expanded={open === song.id} aria-controls={"lyric-panel-" + song.id} onClick={() => toggle(song.id)} className="flex min-h-12 min-w-0 flex-1 items-center justify-between gap-3 text-left"><span className="min-w-0"><span className="block font-serif text-xl font-semibold">{song.title}</span><span className="mt-1 block text-xs text-muted-foreground">{song.album}</span></span><span className="flex shrink-0 items-center gap-2">{song.hasChords && <Guitar className="size-4 text-accent" aria-label={lang === "gl" ? "Con acordes" : "Con acordes"} />}<span className="hidden text-sm text-muted-foreground sm:inline">{open === song.id ? (lang === "gl" ? "Pechar" : "Cerrar") : (lang === "gl" ? "Ver letra" : "Ver letra")}</span><ChevronDown className={"size-5 transition-transform " + (open === song.id ? "rotate-180" : "")} /></span></button><PdfDownload ids={[song.id]} title={song.title} /></div>
        {open === song.id && <div id={"lyric-panel-" + song.id} aria-busy={pending[song.id]} className="border-t border-[#cbd8c5] bg-[#eff5eb] px-5 py-7 text-[#101610] sm:px-9"><div className="mx-auto max-w-2xl">{pending[song.id] && <p role="status">{lang === "gl" ? "Cargando letra…" : "Cargando letra…"}</p>}{errors[song.id] && <div role="alert"><p>{lang === "gl" ? "Non se puido cargar a letra." : "No se pudo cargar la letra."}</p><button type="button" onClick={() => void fetchSong(song.id)} className="mt-3 rounded-full border border-[#aebda6] px-5 py-2 font-semibold">{lang === "gl" ? "Tentar de novo" : "Reintentar"}</button></div>}{loaded[song.id] && <><header className="mb-6 border-b border-[#cbd8c5] pb-5 text-center"><Image src="/son-ceibe-logo.webp" alt="Son Ceibe" width={56} height={56} className="mx-auto mb-3 size-14 rounded-full" /><h3 className="font-serif text-2xl font-semibold">{song.title}</h3><p className="mt-2 text-sm text-[#4f5d4c]">{song.album}</p></header><SongLyricsBody song={loaded[song.id]} /></>}</div></div>}
      </article>)}</div>
    </div>}
  </section>
}
