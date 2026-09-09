"use client"

import { type ReactNode, useMemo, useState } from "react"
import { ChevronDown, Download, Guitar, Music } from "lucide-react"
import { songLyrics, type SongLyric } from "@/lib/content"
import { useLanguage } from "@/components/language-provider"

const sectionPattern = /^(\[|\(|Estribillo|Verso|Estrofa|Chorus|Bridge|Puente|Intro|Outro|Final|Retrouso|Pre-estribillo|Letra con acordes)/i
const chordName = "(?:(?:[A-G]|Do|Re|Mi|Fa|Sol|La|Si)(?:#|b)?(?:m|maj|min|dim|aug|sus|add|7|9|5)?(?:\\/(?:[A-G]|Do|Re|Mi|Fa|Sol|La|Si)(?:#|b)?)?)"
const chordLinePattern = new RegExp(`^\\s*(?:\\|?\\s*${chordName}\\s*(?:[-–|/,]\\s*)?)+(?:\\(?(?:x|X)\\d+\\)?)?\\s*$`, "i")
const inlineChordPattern = new RegExp(`(^|\\s{2,})(?:\\((${chordName})\\)|(${chordName})(?=\\s|$))`, "g")
const namedChordsPattern = /^Acordes:\s*(.+)$/i

function cleanLine(line: string) {
  return line.replace(/\*\*/g, "").replace(/\\+/g, "").replace(/^\s*#{1,6}\s*/, "").trimEnd()
}

function displayCollection(collection: string) {
  return collection === "A xente non cambia" ? "A Xente non Cambia!" : collection
}

function songCollections(song: SongLyric) {
  return (song.collections ?? [song.album]).map(displayCollection)
}

function isChordLine(line: string) {
  return chordLinePattern.test(line.trim())
}

function namedChords(line: string) {
  return line.match(namedChordsPattern)?.[1]
}

function splitInlineChords(line: string) {
  const chordCharacters = Array.from({ length: line.length }, () => " ")
  const lyricCharacters = Array.from(line)
  let found = false

  for (const match of line.matchAll(inlineChordPattern)) {
    const prefix = match[1] ?? ""
    const chord = match[2] ?? match[3]
    if (!chord) continue

    const start = (match.index ?? 0) + prefix.length
    const tokenLength = match[2] ? chord.length + 2 : chord.length
    chord.split("").forEach((character, offset) => { chordCharacters[start + offset] = character })
    for (let offset = 0; offset < tokenLength; offset += 1) lyricCharacters[start + offset] = " "
    found = true
  }

  return found ? { chords: chordCharacters.join("").trimEnd(), lyrics: lyricCharacters.join("").trimEnd() } : null
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character] ?? character)
}

function lyricBodyHtml(lyrics: string) {
  const formatted: string[] = []
  let pendingChords: string | null = null

  lyrics.split("\n").forEach((line) => {
    const clean = cleanLine(line)
    const content = escapeHtml(clean)
    if (!clean.trim()) {
      if (!pendingChords) formatted.push('<div class="space"></div>')
      return
    }
    const named = namedChords(clean)
    if (named) {
      if (pendingChords) formatted.push(`<p class="chords">${escapeHtml(pendingChords)}</p>`)
      pendingChords = named
      return
    }
    if (isChordLine(clean)) {
      if (pendingChords) formatted.push(`<p class="chords">${escapeHtml(pendingChords)}</p>`)
      pendingChords = clean
      return
    }
    if (sectionPattern.test(clean.trim())) {
      if (pendingChords) formatted.push(`<p class="chords">${escapeHtml(pendingChords)}</p>`)
      pendingChords = null
      formatted.push(`<p class="section">${content}</p>`)
      return
    }

    const inline = pendingChords ? null : splitInlineChords(clean)
    if (pendingChords || inline) {
      formatted.push(`<div class="chord-verse"><p class="chords">${escapeHtml(pendingChords ?? inline?.chords ?? "")}</p><p class="line">${escapeHtml(inline?.lyrics ?? clean)}</p></div>`)
      pendingChords = null
      return
    }
    formatted.push(`<p class="line">${content}</p>`)
  })

  if (pendingChords) formatted.push(`<p class="chords">${escapeHtml(pendingChords)}</p>`)
  return formatted.join("\n")
}

function guitarGuideHtml(song: SongLyric) {
  if (!song.guitarGuide) return ""

  const sections = song.guitarGuide.sections.map((section) => `<div class="guide-section"><strong>${escapeHtml(section.title)}</strong><span>${escapeHtml(section.chords)}</span></div>`).join("")
  return `<aside class="guitar-guide">
    <h3>Acordes para guitarra clásica · nivel medio</h3>
    <p><strong>Tonalidad:</strong> ${escapeHtml(song.guitarGuide.key)}</p>
    <p><strong>Ritmo:</strong> ${escapeHtml(song.guitarGuide.rhythm)}</p>
    ${sections}
  </aside>`
}

function lyricDocument(title: string, collection: string, songs: SongLyric[]) {
  const entries = songs.map((song) => `
    <section class="lyric">
      <h2>${escapeHtml(song.title)}</h2>
      <p class="collection">${escapeHtml(displayCollection(song.album))}</p>
      <div class="lyrics">${lyricBodyHtml(song.lyrics)}</div>
      ${guitarGuideHtml(song)}
    </section>
  `).join("\n")

  return `<!doctype html>
<html lang="gl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)} · Son Ceibe</title>
  <style>
    :root { color: #111811; background: #dce7d8; font-family: Georgia, serif; }
    * { box-sizing: border-box; }
    body { margin: 0; padding: 32px 16px; background: linear-gradient(135deg, #dce7d8 0%, #e8dfcf 100%); }
    main { max-width: 760px; margin: 0 auto; background: linear-gradient(160deg, #edf3e9 0%, #e9e0d2 100%); border: 1px solid #aebda6; }
    header { padding: 32px 28px 24px; text-align: center; background: rgba(210, 224, 204, .72); border-bottom: 1px solid #aebda6; }
    .logo { width: 72px; height: 72px; object-fit: cover; border-radius: 50%; margin-bottom: 14px; }
    h1, h2 { margin: 0; font-weight: 700; color: #101610; }
    h1 { font-size: 29px; }
    h2 { font-size: 25px; }
    .collection { margin: 8px 0 0; color: #4f5d4c; font: 700 12px Arial, sans-serif; letter-spacing: .12em; text-transform: uppercase; }
    .lyric { padding: 34px 28px; border-bottom: 1px solid #aebda6; }
    .lyric:last-of-type { border-bottom: 0; }
    .lyrics { margin-top: 28px; }
    .line { margin: 0 0 8px; color: #111811; font-size: 18px; line-height: 1.65; }
    .chords { margin: 14px 0 3px; color: #624b1c; font: 700 14px/1.4 "Courier New", monospace; letter-spacing: .04em; }
    .chord-verse { margin: 0 0 8px; font-family: "Courier New", monospace; }
    .chord-verse .chords { margin: 0; white-space: pre; }
    .chord-verse .line { margin: 0; white-space: pre-wrap; overflow-wrap: anywhere; font: 18px/1.65 "Courier New", monospace; }
    .section { margin: 24px 0 8px; color: #624b1c; font: 700 12px Arial, sans-serif; letter-spacing: .13em; text-transform: uppercase; }
    .space { height: 8px; }
    .guitar-guide { margin-top: 28px; padding: 18px; border: 1px solid #aebda6; background: rgba(247, 244, 235, .8); font: 14px/1.55 Arial, sans-serif; }
    .guitar-guide h3 { margin: 0 0 12px; color: #101610; font-size: 16px; }
    .guitar-guide p { margin: 4px 0; color: #111811; }
    .guide-section { margin-top: 13px; color: #111811; }
    .guide-section strong { display: block; color: #624b1c; font-size: 12px; letter-spacing: .08em; text-transform: uppercase; }
    .guide-section span { display: block; margin-top: 3px; font: 700 14px "Courier New", monospace; }
    footer { padding: 24px 28px; text-align: center; background: #17251f; color: #fffdf8; font: 13px Arial, sans-serif; line-height: 1.7; }
    footer a { color: #ead39c; text-decoration: none; }
    .print-action { display: block; margin: 18px auto 0; padding: 10px 16px; border: 0; border-radius: 99px; background: #17251f; color: #fffdf8; font: 700 13px Arial, sans-serif; cursor: pointer; }
    @page { size: A4 portrait; margin: 12mm; }
    @media print {
      body { padding: 0; background: #fff; }
      main { max-width: none; border: 0; background: #fff; }
      header { padding: 0 0 8mm; background: #fff; }
      .lyric { padding: 8mm 0; border-color: #aebda6; }
      .lyrics { columns: 2; column-gap: 12mm; }
      .lyrics p, .chord-verse, .guitar-guide { break-inside: avoid; }
      h2, .collection { break-after: avoid; }
      .guitar-guide { background: #fff; }
      footer { padding: 6mm 0 0; background: #fff; color: #111811; }
      footer a { color: #111811; }
      .print-action { display: none; }
    }
  </style>
</head>
<body>
  <main>
    <header>
      <img class="logo" src="https://www.sonceibe.es/son-ceibe-logo.png" alt="Son Ceibe">
      <h1>${escapeHtml(title)}</h1>
      <p class="collection">${escapeHtml(collection)}</p>
    </header>
    ${entries}
    <footer>
      Son Ceibe<br>
      <a href="https://www.sonceibe.es">www.sonceibe.es</a> ·
      <a href="https://www.instagram.com/sonceibebanda/">Instagram @sonceibebanda</a>
      <button class="print-action" onclick="window.print()">Imprimir / gardar en PDF</button>
    </footer>
  </main>
  <script>window.addEventListener("load", () => window.print())</script>
</body>
</html>`
}

function openPrintDocument(title: string, collection: string, songs: SongLyric[]) {
  const printableWindow = window.open("", "_blank")
  if (!printableWindow) return

  printableWindow.document.open()
  printableWindow.document.write(lyricDocument(title, collection, songs))
  printableWindow.document.close()
  printableWindow.focus()
}

function formatLyrics(lyrics: string) {
  const formatted: ReactNode[] = []
  let pendingChords: string | null = null

  lyrics.split("\n").forEach((line, index) => {
    const clean = cleanLine(line)
    if (!clean.trim()) {
      if (!pendingChords) formatted.push(<div key={`space-${index}`} className="h-2" />)
      return
    }

    const named = namedChords(clean)
    if (named) {
      if (pendingChords) formatted.push(<p key={`chords-${index}`} className="font-mono text-sm font-bold tracking-wide text-[#624b1c]">{pendingChords}</p>)
      pendingChords = named
      return
    }

    if (isChordLine(clean)) {
      if (pendingChords) formatted.push(<p key={`chords-${index}`} className="font-mono text-sm font-bold tracking-wide text-[#624b1c]">{pendingChords}</p>)
      pendingChords = clean
      return
    }

    if (sectionPattern.test(clean.trim())) {
      if (pendingChords) formatted.push(<p key={`chords-${index}`} className="font-mono text-sm font-bold tracking-wide text-[#624b1c]">{pendingChords}</p>)
      pendingChords = null
      formatted.push(<p key={`section-${index}`} className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-[#624b1c]">{clean}</p>)
      return
    }

    const inline = pendingChords ? null : splitInlineChords(clean)
    if (pendingChords || inline) {
      formatted.push(
        <div key={`verse-${index}`} className="font-mono text-base leading-7">
          <p className="m-0 whitespace-pre font-bold text-[#624b1c]">{pendingChords ?? inline?.chords}</p>
          <p className="m-0 whitespace-pre-wrap break-words text-[#101610]">{inline?.lyrics ?? clean}</p>
        </div>,
      )
      pendingChords = null
      return
    }

    formatted.push(<p key={`line-${index}`} className="text-base leading-7 text-[#101610]">{clean}</p>)
  })

  if (pendingChords) formatted.push(<p key="chords-final" className="font-mono text-sm font-bold tracking-wide text-[#624b1c]">{pendingChords}</p>)
  return formatted
}

export function LyricsSection() {
  const { tr } = useLanguage()
  const [openSong, setOpenSong] = useState<string | null>(null)
  const [filterAlbum, setFilterAlbum] = useState("all")

  const collections = useMemo(() => {
    const grouped = new Map<string, SongLyric[]>()
    songLyrics.forEach((song) => songCollections(song).forEach((collection) => grouped.set(collection, [...(grouped.get(collection) ?? []), song])))
    return Array.from(grouped.entries())
  }, [])

  const filteredSongs = useMemo(() => filterAlbum === "all" ? songLyrics : songLyrics.filter((song) => songCollections(song).includes(filterAlbum)), [filterAlbum])

  return (
    <section id="lyrics" className="scroll-mt-16 bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <img src="/son-ceibe-logo.png" alt="Son Ceibe" className="mx-auto mb-5 h-16 w-16 rounded-full object-cover" />
          <h2 className="font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">{tr.lyrics.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">{tr.lyrics.subtitle}</p>
        </div>

        <div className="mb-5 flex flex-wrap justify-center gap-2">
          {["all", ...collections.map(([name]) => name)].map((collection) => (
            <button key={collection} onClick={() => setFilterAlbum(collection)} className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${filterAlbum === collection ? "bg-primary text-primary-foreground" : "border border-border bg-card text-muted-foreground hover:text-foreground"}`}>
              {collection === "all" ? tr.lyrics.allAlbums : collection}
            </button>
          ))}
        </div>

        <div className="mb-8 flex justify-center">
          <button onClick={() => openPrintDocument(filterAlbum === "all" ? tr.lyrics.downloadAll : filterAlbum, filterAlbum === "all" ? "Son Ceibe" : filterAlbum, filteredSongs)} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
            <Download className="size-4" />
            {filterAlbum === "all" ? tr.lyrics.downloadAll : `${tr.lyrics.downloadCollection}: ${filterAlbum}`}
          </button>
        </div>

        <div className="space-y-3">
          {filteredSongs.map((song) => {
            const songKey = `${song.album}-${song.title}`
            const isOpen = openSong === songKey
            return (
              <article key={songKey} className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                <button onClick={() => setOpenSong(isOpen ? null : songKey)} aria-expanded={isOpen} aria-controls={`lyric-${songKey}`} className="flex w-full items-center justify-between px-5 py-4 text-left">
                  <span className="flex min-w-0 items-center gap-3">
                    <Music className="size-4 shrink-0 text-[#8c6c2f]" />
                    <span className="min-w-0"><span className="block font-semibold text-foreground">{song.title}</span><span className="block text-xs text-muted-foreground">{displayCollection(song.album)}</span></span>
                    {song.hasChords && <Guitar className="size-4 shrink-0 text-[#8c6c2f]" aria-label={tr.lyrics.chords} />}
                  </span>
                  <ChevronDown className={`size-5 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>

                {isOpen && (
                  <div id={`lyric-${songKey}`} className="border-t border-[#aebda6] px-5 py-7 md:px-8" style={{ background: "linear-gradient(160deg, #edf3e9 0%, #e9e0d2 100%)", color: "#101610" }}>
                    <div className="mx-auto max-w-2xl">
                      <header className="border-b border-[#aebda6] pb-5 text-center">
                        <img src="/son-ceibe-logo.png" alt="Son Ceibe" className="mx-auto mb-3 h-14 w-14 rounded-full object-cover" />
                        <h3 className="font-serif text-3xl font-semibold text-[#101610]">{song.title}</h3>
                        <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-[#4f5d4c]">{displayCollection(song.album)}</p>
                      </header>
                      <div className="space-y-1 py-7">{formatLyrics(song.lyrics)}</div>
                      {song.guitarGuide && (
                        <aside className="mb-7 rounded-lg border border-[#aebda6] bg-[#f7f4eb]/80 p-5 text-[#101610]">
                          <div className="mb-4 flex items-center gap-2 font-semibold"><Guitar className="size-4 text-[#624b1c]" />Acordes para guitarra clásica · nivel {song.guitarGuide.level.toLowerCase()}</div>
                          <p className="text-sm"><strong>Tonalidad:</strong> {song.guitarGuide.key}</p>
                          {song.guitarGuide.capo && <p className="mt-1 text-sm"><strong>Cejilla:</strong> {song.guitarGuide.capo}</p>}
                          <p className="mt-1 text-sm"><strong>Ritmo:</strong> {song.guitarGuide.rhythm}</p>
                          <div className="mt-4 space-y-3">{song.guitarGuide.sections.map((section) => <div key={section.title}><p className="text-xs font-bold uppercase tracking-[0.12em] text-[#624b1c]">{section.title}</p><p className="mt-1 font-mono text-sm font-bold text-[#101610]">{section.chords}</p></div>)}</div>
                        </aside>
                      )}
                      <footer className="border-t border-[#aebda6] pt-5 text-center text-sm leading-6 text-[#263126]">
                        <p className="font-semibold text-[#101610]">Son Ceibe</p>
                        <a className="hover:text-black" href="https://www.sonceibe.es" target="_blank" rel="noreferrer">www.sonceibe.es</a><span className="mx-2">·</span><a className="hover:text-black" href="https://www.instagram.com/sonceibebanda/" target="_blank" rel="noreferrer">Instagram @sonceibebanda</a>
                      </footer>
                      <div className="mt-6 flex justify-center">
                        <button onClick={() => openPrintDocument(song.title, displayCollection(song.album), [song])} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"><Download className="size-4" />{tr.lyrics.download}</button>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

