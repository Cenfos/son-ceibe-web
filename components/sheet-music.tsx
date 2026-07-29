"use client"

import { useEffect, useRef } from "react"
import { X, Printer, Download } from "lucide-react"
import type { SongLyric } from "@/lib/content"

function formatLyricsForSheet(lyrics: string) {
  const lines = lyrics.split("\n")
  const result: { type: "chord" | "lyric" | "label" | "empty"; content: string }[] = []

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) {
      result.push({ type: "empty", content: "" })
      continue
    }
    // Detectar líneas de acordes
    const chordPattern = /^\s*[A-G](?:#|b)?(?:m|maj|min|dim|aug|sus|add|7|9|5)?(?:\/[A-G](?:#|b)?)?(?:\s+[A-G](?:#|b)?(?:m|maj|min|dim|aug|sus|add|7|9|5)?(?:\/[A-G](?:#|b)?)?)*\s*$/i
    if (chordPattern.test(trimmed) && trimmed.length < 40) {
      result.push({ type: "chord", content: trimmed })
      continue
    }
    // Detectar etiquetas de sección
    if (/^(\[|\(|Estribillo|Verso|Chorus|Bridge|Puente|Intro|Outro|Final|Retrouso|Pre-estribillo)/i.test(trimmed)) {
      result.push({ type: "label", content: trimmed.replace(/[\[\]\(\)]/g, "") })
      continue
    }
    result.push({ type: "lyric", content: trimmed })
  }

  return result
}

function generateSheetHTML(song: SongLyric) {
  const lines = formatLyricsForSheet(song.lyrics)
  let bodyHTML = ""
  let inChorus = false

  for (const line of lines) {
    if (line.type === "empty") {
      bodyHTML += `<div style="height: 8px;"></div>\n`
      continue
    }
    if (line.type === "label") {
      const isChorus = /estribillo|chorus|retruso/i.test(line.content)
      if (isChorus) {
        if (inChorus) bodyHTML += `</div>\n`
        bodyHTML += `<div class="chorus">\n`
        inChorus = true
      } else {
        if (inChorus) { bodyHTML += `</div>\n`; inChorus = false }
      }
      bodyHTML += `<div class="verse-label">${line.content}</div>\n`
      continue
    }
    if (line.type === "chord") {
      bodyHTML += `<div class="chord-line">${line.content}</div>\n`
      continue
    }
    if (line.type === "lyric") {
      bodyHTML += `<div class="lyric-line">${line.content}</div>\n`
    }
  }
  if (inChorus) bodyHTML += `</div>\n`

  return `<!DOCTYPE html>
<html lang="gl">
<head>
<meta charset="UTF-8">
<title>${song.title} · Son Ceibe</title>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { background: #0f1923; padding: 20px; font-family: 'Inter', sans-serif; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .sheet { max-width: 800px; margin: 0 auto; background: linear-gradient(160deg, #1a2634 0%, #243447 30%, #1e2d3d 60%, #2a3a4a 100%); border-radius: 20px; box-shadow: 0 25px 80px rgba(0,0,0,0.4); overflow: hidden; color: #e8ddd0; }
  .header { background: linear-gradient(180deg, rgba(26,38,52,0.95) 0%, rgba(30,45,61,0.98) 100%); padding: 32px 36px 24px; text-align: center; border-bottom: 1px solid rgba(201,169,110,0.2); }
  .logo { width: 90px; height: 90px; border-radius: 50%; object-fit: cover; border: 3px solid rgba(201,169,110,0.4); box-shadow: 0 4px 20px rgba(0,0,0,0.4); margin: 0 auto 16px; display: block; }
  .title { font-family: 'Fraunces', serif; font-size: 40px; font-weight: 700; color: #c9a96e; margin: 0; text-shadow: 0 2px 12px rgba(0,0,0,0.5); }
  .subtitle { font-size: 14px; color: #7a9ab8; margin-top: 8px; letter-spacing: 0.2em; text-transform: uppercase; font-weight: 500; }
  .body { padding: 36px 44px 48px; }
  .verse-label { font-size: 12px; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; color: #c9a96e; margin-bottom: 14px; padding-left: 12px; border-left: 3px solid #4a7fb5; }
  .chord-line { font-family: 'Inter', monospace; font-size: 15px; font-weight: 700; color: #7ab8e8; letter-spacing: 0.1em; margin-bottom: 3px; opacity: 0.95; }
  .lyric-line { font-family: 'Fraunces', serif; font-size: 19px; line-height: 1.8; color: #f0e6d8; margin-bottom: 12px; padding-left: 4px; text-shadow: 0 1px 2px rgba(0,0,0,0.3); }
  .chorus { background: rgba(74, 127, 181, 0.08); border: 1px solid rgba(74, 127, 181, 0.25); border-radius: 14px; padding: 20px 24px; margin: 16px 0; }
  .chorus .verse-label { border-left-color: #c9a96e; color: #d4b87a; }
  .watermark { text-align: center; margin-top: 28px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.06); font-size: 11px; color: rgba(122, 154, 184, 0.4); letter-spacing: 0.15em; text-transform: uppercase; }
  @media print { body { background: #1a2634; padding: 0; } .sheet { box-shadow: none; border-radius: 0; } }
</style>
</head>
<body>
<div class="sheet">
  <div class="header">
    <img src="https://www.sonceibe.es/son-ceibe-logo.png" alt="Son Ceibe" class="logo" onerror="this.style.display='none'">
    <h1 class="title">${song.title}</h1>
    <p class="subtitle">Son Ceibe · ${song.album}</p>
  </div>
  <div class="body">
    ${bodyHTML}
    <div class="watermark">Son Ceibe · sonceibe.es</div>
  </div>
</div>
</body>
</html>`
}

export function SheetMusic({ song, onClose }: { song: SongLyric; onClose: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null)
  const lines = formatLyricsForSheet(song.lyrics)

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = "" }
  }, [])

  const handlePrint = () => {
    const printWindow = window.open("", "_blank")
    if (!printWindow) return
    printWindow.document.write(generateSheetHTML(song))
    printWindow.document.close()
    setTimeout(() => printWindow.print(), 500)
  }

  const handleDownload = () => {
    const html = generateSheetHTML(song)
    const blob = new Blob([html], { type: "text/html;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${song.title.replace(/\s+/g, "_")}_SonCeibe.html`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  let inChorus = false

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm">
      <div
        ref={contentRef}
        className="relative my-8 w-full max-w-3xl overflow-hidden rounded-2xl shadow-2xl"
        style={{
          background: "linear-gradient(160deg, #1a2634 0%, #243447 30%, #1e2d3d 60%, #2a3a4a 100%)",
        }}
      >
        {/* Header */}
        <div className="relative border-b border-[rgba(201,169,110,0.2)] px-6 py-6 text-center md:px-10 md:py-8"
          style={{ background: "linear-gradient(180deg, rgba(26,38,52,0.95) 0%, rgba(30,45,61,0.98) 100%)" }}>
          <img
            src="/son-ceibe-logo.png"
            alt="Son Ceibe"
            className="mx-auto mb-4 block h-20 w-20 rounded-full border-[3px] border-[rgba(201,169,110,0.4)] object-cover shadow-lg md:h-24 md:w-24"
            style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.4), 0 0 30px rgba(201,169,110,0.15)" }}
          />
          <h2 className="font-serif text-3xl font-bold tracking-tight text-[#c9a96e] md:text-4xl"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>
            {song.title}
          </h2>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-[#7a9ab8]">
            Son Ceibe · {song.album}
          </p>

          {/* Botones */}
          <div className="mt-5 flex items-center justify-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(201,169,110,0.3)] bg-[rgba(201,169,110,0.1)] px-4 py-2 text-sm font-medium text-[#c9a96e] transition-colors hover:bg-[rgba(201,169,110,0.2)]"
            >
              <Printer className="size-4" />
              Imprimir / PDF
            </button>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(201,169,110,0.3)] bg-[rgba(201,169,110,0.1)] px-4 py-2 text-sm font-medium text-[#c9a96e] transition-colors hover:bg-[rgba(201,169,110,0.2)]"
            >
              <Download className="size-4" />
              Descargar HTML
            </button>
          </div>
        </div>

        {/* Contenido */}
        <div className="px-6 py-8 md:px-10 md:py-10">
          {lines.map((line, i) => {
            if (line.type === "empty") {
              return <div key={i} className="h-2" />
            }
            if (line.type === "label") {
              const isChorus = /estribillo|chorus|retruso/i.test(line.content)
              const wasChorus = inChorus
              if (isChorus) inChorus = true
              else if (wasChorus && inChorus) inChorus = false

              return (
                <div key={i} className={`mt-6 mb-3 pl-3 text-xs font-bold uppercase tracking-[0.25em] text-[#c9a96e] ${isChorus ? "border-l-[3px] border-[#c9a96e]" : "border-l-[3px] border-[#4a7fb5]"}`}>
                  {line.content}
                </div>
              )
            }
            if (line.type === "chord") {
              return (
                <div key={i} className="mb-1 font-mono text-sm font-bold tracking-wider text-[#7ab8e8]">
                  {line.content}
                </div>
              )
            }
            return (
              <div key={i} className="mb-3 font-serif text-lg leading-relaxed text-[#f0e6d8] md:text-xl"
                style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}>
                {line.content}
              </div>
            )
          })}

          <div className="mt-8 border-t border-[rgba(255,255,255,0.06)] pt-4 text-center text-xs uppercase tracking-[0.15em] text-[rgba(122,154,184,0.4)]">
            Son Ceibe · sonceibe.es
          </div>
        </div>

        {/* Cerrar */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-[#c9a96e] backdrop-blur transition-colors hover:bg-black/50"
        >
          <X className="size-5" />
        </button>
      </div>
    </div>
  )
}