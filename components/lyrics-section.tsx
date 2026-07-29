"use client"

import { useState, useMemo } from "react"
import { ChevronDown, Download, Music, Guitar, FileText } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { songLyrics } from "@/lib/content"
import { SheetMusic } from "@/components/sheet-music"

function detectChordLines(text: string): boolean[] {
  const lines = text.split("\n")
  const chordPattern = /^\s*[A-G](?:#|b)?(?:m|maj|min|dim|aug|sus|add|7|9|5)?(?:\/[A-G](?:#|b)?)?(?:\s+[A-G](?:#|b)?(?:m|maj|min|dim|aug|sus|add|7|9|5)?(?:\/[A-G](?:#|b)?)?)*\s*$/i
  return lines.map((line) => chordPattern.test(line))
}

function formatLyrics(text: string) {
  const lines = text.split("\n")
  const isChordLine = detectChordLines(text)

  return lines.map((line, i) => {
    if (!line.trim()) {
      return <div key={i} className="h-3" />
    }
    if (isChordLine[i]) {
      return (
        <p key={i} className="font-mono text-sm tracking-wider text-accent font-semibold leading-tight">
          {line}
        </p>
      )
    }
    if (/^(\[|\(|Estribillo|Verso|Chorus|Bridge|Puente|Intro|Outro|Final|Retrouso)/i.test(line.trim())) {
      return (
        <p key={i} className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mt-4 mb-1">
          {line}
        </p>
      )
    }
    return (
      <p key={i} className="text-base leading-relaxed text-foreground whitespace-pre-wrap">
        {line}
      </p>
    )
  })
}

function downloadLyric(title: string, lyrics: string) {
  const blob = new Blob([lyrics], { type: "text/plain;charset=utf-8" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = `${title.replace(/\s+/g, "_")}.txt`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export function LyricsSection() {
  const { tr } = useLanguage()
  const [openSong, setOpenSong] = useState<string | null>(null)
  const [filterAlbum, setFilterAlbum] = useState<string>("all")
  const [sheetSong, setSheetSong] = useState<typeof songLyrics[0] | null>(null)

  const albums = useMemo(() => {
    const map = new Map<string, typeof songLyrics>()
    songLyrics.forEach((song) => {
      if (!map.has(song.album)) map.set(song.album, [])
      map.get(song.album)!.push(song)
    })
    return Array.from(map.entries())
  }, [])

  const filteredSongs = useMemo(() => {
    if (filterAlbum === "all") return songLyrics
    return songLyrics.filter((s) => s.album === filterAlbum)
  }, [filterAlbum])

  const albumOptions = ["all", ...albums.map(([name]) => name)]

  return (
    <>
      <section id="lyrics" className="scroll-mt-16 bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="mb-14 text-center">
            <h2 className="text-balance font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              {tr.lyrics.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {tr.lyrics.subtitle}
            </p>
          </div>

          {/* Filtro por álbum */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {albumOptions.map((album) => (
              <button
                key={album}
                onClick={() => setFilterAlbum(album)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  filterAlbum === album
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "border border-border bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {album === "all" ? tr.lyrics.allAlbums : album}
              </button>
            ))}
          </div>

          {/* Lista de canciones */}
          <div className="space-y-3">
            {filteredSongs.map((song) => {
              const isOpen = openSong === `${song.album}-${song.title}`
              return (
                <div
                  key={`${song.album}-${song.title}`}
                  className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
                >
                  <button
                    onClick={() => setOpenSong(isOpen ? null : `${song.album}-${song.title}`)}
                    className="flex w-full items-center justify-between px-5 py-4 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <Music className="size-4 text-accent" />
                      <div>
                        <span className="font-medium text-foreground">{song.title}</span>
                        <span className="ml-2 text-xs text-muted-foreground">{song.album}</span>
                      </div>
                      {song.hasChords && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                          <Guitar className="size-3" />
                          {tr.lyrics.chords}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronDown
                        className={`size-5 text-muted-foreground transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="border-t border-border">
                      <div className="max-h-[60vh] overflow-y-auto px-5 py-6">
                        <div className="mb-4 flex items-center justify-between">
                          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            {song.album}
                          </span>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setSheetSong(song)}
                              className="inline-flex items-center gap-2 rounded-full border border-[rgba(201,169,110,0.3)] bg-[rgba(201,169,110,0.08)] px-4 py-2 text-xs font-semibold text-[#c9a96e] transition-colors hover:bg-[rgba(201,169,110,0.15)]"
                            >
                              <FileText className="size-3.5" />
                              Ver partitura
                            </button>
                            <button
                              onClick={() => downloadLyric(song.title, song.lyrics)}
                              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                            >
                              <Download className="size-3.5" />
                              {tr.lyrics.download}
                            </button>
                          </div>
                        </div>
                        <div className="space-y-0.5">
                          {formatLyrics(song.lyrics)}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Modal de partitura */}
      {sheetSong && (
        <SheetMusic song={sheetSong} onClose={() => setSheetSong(null)} />
      )}
    </>
  )
}