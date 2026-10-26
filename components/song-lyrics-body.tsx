import type { ReactNode } from "react"
import type { SongLyric } from "@/lib/lyrics/types"

const sectionPattern = /^(?:\[|\(|(?:Estribillo|Verso|Estrofa|Chorus|Bridge|Puente|Intro|Outro|Final|Retrouso|Pre-estribillo)(?:\s+\d+)?\s*:?\s*$|Letra con acordes\b)/i
const chordName = "(?:(?:[A-G]|Do|Re|Mi|Fa|Sol|La|Si)(?:#|b)?(?:m|maj|min|dim|aug|sus|add|7|9|5)?(?:\\/(?:[A-G]|Do|Re|Mi|Fa|Sol|La|Si)(?:#|b)?)?)"
const chordLinePattern = new RegExp(`^\\s*(?:\\|?\\s*${chordName}\\s*(?:[-–|/,]\\s*)?)+(?:\\(?(?:x|X)\\d+\\)?)?\\s*$`, "i")
const inlineChordPattern = new RegExp(`\\((${chordName})\\)|(^|\\s{2,})(${chordName})(?=\\s{2,}|$)`, "g")
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
    const prefix = match[2] ?? ""
    const chord = match[1] ?? match[3]
    if (!chord) continue

    const start = (match.index ?? 0) + (match[1] ? 0 : prefix.length)
    const tokenLength = match[1] ? chord.length + 2 : chord.length
    chord.split("").forEach((character, offset) => { chordCharacters[start + offset] = character })
    for (let offset = 0; offset < tokenLength; offset += 1) lyricCharacters[start + offset] = " "
    found = true
  }

  return found ? { chords: chordCharacters.join("").trimEnd(), lyrics: lyricCharacters.join("").trimEnd() } : null
}

function formatLyrics(lyrics: string, readChords = false) {
  const formatted: ReactNode[] = []
  let pendingChords: string | null = null

  lyrics.split("\n").forEach((line, index) => {
    const clean = cleanLine(line)
    if (!clean.trim()) {
      if (!pendingChords) formatted.push(<div key={`space-${index}`} className="h-2" />)
      return
    }

    const named = readChords ? namedChords(clean) : null
    if (named) {
      if (pendingChords) formatted.push(<p key={`chords-${index}`} className="font-mono text-sm font-bold tracking-wide text-[#624b1c]">{pendingChords}</p>)
      pendingChords = named
      return
    }

    if (readChords && isChordLine(clean)) {
      if (pendingChords) formatted.push(<p key={`chords-${index}`} className="font-mono text-sm font-bold tracking-wide text-[#624b1c]">{pendingChords}</p>)
      pendingChords = clean
      return
    }

    const inline = readChords && !pendingChords ? splitInlineChords(clean) : null
    if (sectionPattern.test(clean.trim()) && !inline) {
      if (pendingChords) formatted.push(<p key={`chords-${index}`} className="font-mono text-sm font-bold tracking-wide text-[#624b1c]">{pendingChords}</p>)
      pendingChords = null
      formatted.push(<p key={`section-${index}`} className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-[#624b1c]">{clean}</p>)
      return
    }

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

    formatted.push(<p key={`line-${index}`} className={`${readChords ? "font-mono " : ""}text-base leading-7 text-[#101610]`}>{clean}</p>)
  })

  if (pendingChords) formatted.push(<p key="chords-final" className="font-mono text-sm font-bold tracking-wide text-[#624b1c]">{pendingChords}</p>)
  return formatted
}

export function SongLyricsBody({ song }: { song: SongLyric }) {
  return <>
    <div className="space-y-1">{formatLyrics(song.lyrics, song.lyricsFormat === "chorded")}</div>
    {song.guitarGuide && <aside className="mt-7 rounded-lg border border-[#aebda6] bg-[#f7f4eb] p-5 text-[#101610]">
      <h4 className="mb-3 font-semibold">Acordes para guitarra · {song.guitarGuide.level}</h4>
      <p className="text-sm"><strong>Tonalidad:</strong> {song.guitarGuide.key}</p>
      {song.guitarGuide.capo && <p className="mt-1 text-sm"><strong>Cejilla:</strong> {song.guitarGuide.capo}</p>}
      <p className="mt-1 text-sm"><strong>Ritmo:</strong> {song.guitarGuide.rhythm}</p>
      <div className="mt-4 space-y-3">{song.guitarGuide.sections.map(section => <div key={section.title}><p className="text-xs font-bold uppercase tracking-wide text-[#624b1c]">{section.title}</p><p className="mt-1 whitespace-pre-wrap font-mono text-sm">{section.chords}</p></div>)}</div>
    </aside>}
  </>
}

