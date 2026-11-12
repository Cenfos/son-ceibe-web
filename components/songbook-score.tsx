"use client"

import { useId, useLayoutEffect, useRef, useState } from "react"
import Image from "next/image"
import { Maximize2, X } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import scores from "@/lib/songbook-scores.json"

type Score = {
  guide: string[][]
  sections: {
    title: string
    lines: { text: string; kind?: string; chords?: [number, string][] }[]
  }[]
}

const songbookScores: Record<string, Score> = scores as Record<string, Score>
const chordClass = "font-mono font-bold text-[#a51620]"

function ResponsiveChordLine({ chords, text }: { chords: [number, string][]; text: string }) {
  const firstOffset = chords[0][0]
  const lineWidth = Math.max(text.length, ...chords.map(([offset, chord]) => offset + chord.length))
  const tracks = chords.map(([offset, chord], index) => {
    const nextOffset = chords[index + 1]?.[0] ?? lineWidth
    return `minmax(max-content, ${Math.max(chord.length, nextOffset - offset)}fr)`
  })

  return (
    <p
      className={`grid text-[0.9em] ${chordClass}`}
      style={{
        width: `min(100%, ${lineWidth}ch)`,
        gridTemplateColumns: [...(firstOffset ? [`minmax(0, ${firstOffset}fr)`] : []), ...tracks].join(" "),
      }}
    >
      {firstOffset > 0 && <span aria-hidden="true" />}
      {chords.map(([, chord], index) => <span key={index} className="whitespace-nowrap">{chord}</span>)}
    </p>
  )
}

function ScoreContent({ score, compact = false, wideVerses = false }: { score: Score; compact?: boolean; wideVerses?: boolean }) {
  const rowCount = score.sections.reduce(
    (total, section) => total + 1 + section.lines.reduce((rows, line) => rows + (line.chords ? 2 : 1), 0),
    0,
  )
  const columns = wideVerses
    ? "@min-[38rem]/score:columns-2 @min-[74rem]/score:columns-3"
    : `@min-[38rem]/score:columns-2 @min-[46rem]/score:columns-3 ${rowCount >= 68 && score.sections.length >= 4 ? "@min-[65rem]/score:columns-4" : ""}`

  return (
    <div className="@container/score space-y-[0.85em] text-[#101610]">
      <div className="rounded-lg border border-[#aebda6] bg-white/60 px-[0.8em] py-[0.5em] text-[0.92em] leading-tight">
        {score.guide.map((line, index) => (
          <p key={index}>
            {line.map((part, position) => (
              <span key={position} className={position % 2 ? chordClass : undefined}>{part}</span>
            ))}
          </p>
        ))}
      </div>
      <div className={`gap-6 ${columns}`}>
        {score.sections.map(({ title, lines }, index) => (
          <section key={index} className={compact ? "mb-[0.55em] break-inside-avoid leading-[1.05]" : "mb-[0.75em] break-inside-avoid"}>
            <h4 className="mb-[0.15em] font-bold">{title}</h4>
            {lines.map(({ text, kind, chords }, lineIndex) => (
              <div key={lineIndex} className={compact ? "leading-[1.08]" : "leading-[1.24]"}>
                {chords && (wideVerses ? <ResponsiveChordLine chords={chords} text={text} /> : (
                  <p className={`whitespace-pre text-[0.9em] ${chordClass}`}>
                    {chords.map(([offset, chord], i) => {
                      const previous = chords[i - 1]
                      return " ".repeat(previous ? Math.max(1, offset - previous[0] - previous[1].length) : offset) + chord
                    }).join("")}
                  </p>
                ))}
                <p className={kind === "sequence" ? chordClass : kind === "repeat" ? "text-[0.92em] italic" : undefined}>{text}</p>
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  )
}

const minSize = 9
const maxSize = 22
const defaultSize = 16
const controlClass = "inline-flex min-h-9 items-center gap-2 rounded-full border border-[#aebda6] bg-white px-3 text-sm font-semibold text-[#101610] hover:bg-[#e3ecdd]"

function fitScore(viewport: HTMLDivElement, content: HTMLDivElement) {
  let size = maxSize
  while (size > minSize) {
    content.style.fontSize = size + "px"
    if (content.offsetHeight <= viewport.clientHeight) return size
    size--
  }
  content.style.fontSize = minSize + "px"
  return minSize
}

export function SongbookScore({ id, title }: { id: string; title: string }) {
  const { lang } = useLanguage()
  const [size, setSize] = useState(defaultSize)
  const [expanded, setExpanded] = useState(false)
  const dialog = useRef<HTMLDialogElement>(null)
  const viewport = useRef<HTMLDivElement>(null)
  const content = useRef<HTMLDivElement>(null)
  const headingId = useId()
  const score = songbookScores[id]
  const wideVerses = id === "tatuaxes-na-memoria" || id === "foi-un-bico"

  useLayoutEffect(() => {
    if (!expanded || !dialog.current || !viewport.current || !content.current) return
    dialog.current.showModal()
    const fitted = fitScore(viewport.current, content.current)
    setSize(fitted)
  }, [expanded])

  if (!score) return null

  const sizeControl = (
    <label className="flex items-center gap-2 text-sm font-semibold">
      {lang === "gl" ? "Tamaño do texto" : "Tamaño del texto"}
      <input
        type="range"
        min={minSize}
        max={maxSize}
        value={size}
        onChange={event => setSize(event.currentTarget.valueAsNumber)}
        className="w-24 accent-[#a51620]"
      />
    </label>
  )

  const logo = (
    <Image
      src="/cancioneiros/a-saber-o-que-ven/son-ceibe-agua.webp"
      alt="Son Ceibe"
      width={44}
      height={44}
      className="size-11 shrink-0 rounded-sm"
      unoptimized
    />
  )

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-3">
        {sizeControl}
        <button type="button" className={controlClass} onClick={() => setExpanded(true)}>
          <Maximize2 className="size-4" aria-hidden="true" />
          {lang === "gl" ? "Vista ampla" : "Vista amplia"}
        </button>
        <div className="ml-auto">{logo}</div>
      </div>
      <div style={{ fontSize: size }}><ScoreContent score={score} wideVerses={wideVerses} /></div>
      <dialog
        ref={dialog}
        aria-labelledby={headingId}
        onClose={() => setExpanded(false)}
        className="fixed inset-0 m-auto h-[95dvh] max-h-none w-[96vw] max-w-[94rem] overflow-hidden rounded-xl border border-[#aebda6] bg-[#eff5eb] text-[#101610] shadow-2xl backdrop:bg-black/60"
      >
        {expanded && (
          <div className="flex h-full min-h-0 flex-col">
            <header className="flex shrink-0 flex-wrap items-center gap-3 border-b border-[#aebda6] px-4 py-2 sm:px-6">
              <h3 id={headingId} className="mr-auto font-serif text-xl font-semibold">{title}</h3>
              {sizeControl}
              <button type="button" className={controlClass} onClick={() => {
                if (viewport.current && content.current) {
                  setSize(fitScore(viewport.current, content.current))
                  viewport.current.scrollTop = 0
                }
              }}>
                {lang === "gl" ? "Axustar á pantalla" : "Ajustar a la pantalla"}
              </button>
              <button type="button" className={controlClass} onClick={() => dialog.current?.close()}>
                <X className="size-4" aria-hidden="true" />
                {lang === "gl" ? "Pechar" : "Cerrar"}
              </button>
              {logo}
            </header>
            <div ref={viewport} className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
              <div ref={content} style={{ fontSize: size }} className="px-4 py-3 sm:px-6">
                <ScoreContent score={score} compact wideVerses={wideVerses} />
              </div>
            </div>
          </div>
        )}
      </dialog>
    </div>
  )
}
