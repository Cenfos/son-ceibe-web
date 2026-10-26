"use client"

import { useState } from "react"
import { Download } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import type { SongLyric } from "@/lib/lyrics/types"

export function LyricsPdfButton({ songs, title, collection = false }: { songs: SongLyric[]; title: string; collection?: boolean }) {
  const { lang } = useLanguage()
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState(false)
  async function download() {
    setBusy(true); setError(false)
    try { const { downloadLyricsPdf } = await import("@/lib/lyrics-pdf"); await downloadLyricsPdf(songs, title) }
    catch { setError(true) }
    finally { setBusy(false) }
  }
  return <span className="inline-flex flex-col items-start gap-2"><button type="button" disabled={busy || !songs.length} onClick={download} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-60" aria-label={(collection ? "PDF · " : "PDF · ") + title}><Download className="size-4" />{busy ? (lang === "gl" ? "Preparando PDF…" : "Preparando PDF…") : collection ? (lang === "gl" ? "Descargar letras en PDF" : "Descargar letras en PDF") : "Descargar PDF"}</button>{error && <span role="alert" className="text-sm text-destructive">{lang === "gl" ? "Non se puido crear o PDF. Téntao de novo." : "No se pudo crear el PDF. Inténtalo de nuevo."}</span>}</span>
}
