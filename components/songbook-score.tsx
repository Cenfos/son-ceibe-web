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

export function SongbookScore({ id }: { id: string }) {
  const score = songbookScores[id]
  if (!score) return null

  return (
    <div className="space-y-6 text-[#101610]">
      <div className="space-y-1 rounded-lg border border-[#aebda6] bg-white/60 p-4 text-sm">
        {score.guide.map((line, index) => (
          <p key={index}>
            {line.map((part, position) => (
              <span key={position} className={position % 2 ? chordClass : undefined}>{part}</span>
            ))}
          </p>
        ))}
      </div>
      <div className="space-y-5">
        {score.sections.map(({ title, lines }, index) => (
          <section key={index}>
            <h4 className="mb-1 text-sm font-bold">{title}</h4>
            {lines.map(({ text, kind, chords }, lineIndex) => (
              <div key={lineIndex} className="leading-relaxed">
                {chords && (
                  <p className={`whitespace-pre ${chordClass}`}>
                    {chords.map(([offset, chord], i) => {
                      const previous = chords[i - 1]
                      return " ".repeat(previous ? Math.max(1, offset - previous[0] - previous[1].length) : offset) + chord
                    }).join("")}
                  </p>
                )}
                <p className={kind === "sequence" ? chordClass : kind === "repeat" ? "text-sm italic" : undefined}>{text}</p>
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  )
}
