"use client"

import { useState } from "react"
import { Copy, Share2 } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function AlbumShare({ title, path }: { title: string; path: string }) {
  const { lang } = useLanguage()
  const [status, setStatus] = useState("")
  const url = "https://sonceibe.es" + path
  async function copy() {
    try { await navigator.clipboard.writeText(url); setStatus(lang === "gl" ? "Ligazón copiada" : "Enlace copiado") }
    catch { setStatus(lang === "gl" ? "Non se puido copiar a ligazón" : "No se pudo copiar el enlace") }
  }
  async function share() {
    try { if (navigator.share) await navigator.share({ title: title + " · Son Ceibe", url }); else await copy() }
    catch (error) { if (!(error instanceof DOMException && error.name === "AbortError")) setStatus(lang === "gl" ? "Non se puido compartir" : "No se pudo compartir") }
  }
  return <div><div className="flex flex-wrap gap-3"><button type="button" onClick={share} className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-semibold hover:bg-secondary"><Share2 className="size-4" />Compartir</button><button type="button" onClick={copy} className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-semibold hover:bg-secondary"><Copy className="size-4" />{lang === "gl" ? "Copiar ligazón" : "Copiar enlace"}</button><a href={"https://wa.me/?text=" + encodeURIComponent(title + " · Son Ceibe " + url)} target="_blank" rel="noopener noreferrer" className="rounded-full border border-border px-4 py-2.5 text-sm font-semibold hover:bg-secondary">WhatsApp</a></div><p role="status" className="mt-2 min-h-5 text-xs text-muted-foreground">{status}</p></div>
}
