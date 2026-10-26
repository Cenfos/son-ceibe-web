import type { SongLyric } from "@/lib/lyrics/types"

export async function createLyricsPdf(songs: SongLyric[], title: string, logoPng?: Uint8Array) {
  const { PDFDocument, StandardFonts, rgb, pushGraphicsState, popGraphicsState, moveTo, lineTo, closePath, clip, endPath } = await import("pdf-lib")
  const doc = await PDFDocument.create()
  doc.setTitle(title + " · Son Ceibe")
  doc.setAuthor("Camilo Rodríguez · Son Ceibe")
  const regular = await doc.embedFont(StandardFonts.TimesRoman)
  const bold = await doc.embedFont(StandardFonts.TimesRomanBold)
  const mono = await doc.embedFont(StandardFonts.Courier)
  if (!logoPng) {
    const response = await fetch("/son-ceibe-logo-pdf.png")
    if (!response.ok) throw new Error("No se pudo cargar el logotipo")
    logoPng = new Uint8Array(await response.arrayBuffer())
  }
  const logo = await doc.embedPng(logoPng)
  const ink = rgb(0.08, 0.16, 0.11), green = rgb(0.22, 0.38, 0.29), copper = rgb(0.51, 0.36, 0.21)
  const W = 595.28, H = 841.89, margin = 57, gap = 25
  const safe = (s: string) => s.normalize("NFC").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/→/g, "->").replace(/←/g, "<-")
  function wrap(text: string, font: typeof regular, size: number, width: number) {
    const lines: string[] = []
    let rest = safe(text)
    while (rest && font.widthOfTextAtSize(rest, size) > width) {
      let end = 1
      while (end < rest.length && font.widthOfTextAtSize(rest.slice(0, end + 1), size) <= width) end++
      const space = rest.lastIndexOf(" ", end)
      const cut = font === mono || space < end / 2 ? end : space
      lines.push(rest.slice(0, cut)); rest = rest.slice(cut).replace(/^ +/, "")
    }
    if (rest) lines.push(rest)
    return lines.length ? lines : [""]
  }
  function decorate(page: ReturnType<typeof doc.addPage>) {
    page.drawRectangle({ x: 0, y: 0, width: W, height: H, color: rgb(0.953, 0.976, 0.94) })
    page.drawRectangle({ x: 30, y: 30, width: W - 60, height: H - 60, borderColor: green, borderWidth: 11, borderOpacity: 0.11 })
    for (const inset of [22, 38]) page.drawRectangle({ x: inset, y: inset, width: W - 2 * inset, height: H - 2 * inset, borderColor: green, borderWidth: 0.65, borderOpacity: 0.55 })
    // Interlaced lines echo Studio's SonCeibe Celtic frame, kept outside the text.
    for (const direction of [-1, 1]) {
      let horizontal = "M 0 0", vertical = "M 0 0"
      for (let i = 0; i < 20; i++) {
        const x = i * 24, a = (i % 2 ? -1 : 1) * direction * 4
        horizontal += ` C ${x + 6} ${a} ${x + 18} ${-a} ${x + 24} 0`
      }
      for (let i = 0; i < 31; i++) {
        const y = i * 24, a = (i % 2 ? -1 : 1) * direction * 4
        vertical += ` C ${a} ${y + 6} ${-a} ${y + 18} 0 ${y + 24}`
      }
      for (const y of [30, H - 30]) page.drawSvgPath(horizontal, { x: 57, y, borderColor: copper, borderWidth: 0.85, borderOpacity: 0.65 })
      for (const x of [30, W - 30]) page.drawSvgPath(vertical, { x, y: H - 49, borderColor: copper, borderWidth: 0.85, borderOpacity: 0.65 })
    }
    for (const x of [30, W - 30]) for (const y of [30, H - 30]) {
      page.drawCircle({ x, y, size: 8, borderColor: green, borderWidth: 1, color: rgb(0.91, 0.95, 0.89) })
      page.drawSvgPath("M -5 0 C -5 -8 5 -8 5 0 C 5 8 -5 8 -5 0 M 0 -5 C -8 -5 -8 5 0 5 C 8 5 8 -5 0 -5", { x, y, borderColor: copper, borderWidth: 0.8 })
    }
    page.pushOperators(pushGraphicsState(), moveTo(W / 2 + 26, 774))
    for (let i = 1; i <= 48; i++) page.pushOperators(lineTo(W / 2 + 26 * Math.cos(i * Math.PI / 24), 774 + 26 * Math.sin(i * Math.PI / 24)))
    page.pushOperators(closePath(), clip(), endPath())
    page.drawImage(logo, { x: (W - 52) / 2, y: 748, width: 52, height: 52 })
    page.pushOperators(popGraphicsState())
    page.drawCircle({ x: W / 2, y: 774, size: 26, borderColor: copper, borderWidth: 0.7 })
  }
  type Row = { text: string; heading: boolean; mono: boolean; blank?: boolean }
  for (const song of songs) {
    // Chord notation keeps a wide measure so its alignment survives export.
    const columns = song.lyricsFormat === "chorded" ? 1 : 2
    const columnWidth = (W - margin * 2 - (columns - 1) * gap) / columns
    const rows: Row[] = []
    function add(text: string, heading = false, chorded = false) {
      if (!text.trim()) { if (!rows.at(-1)?.blank) rows.push({ text: "", heading: false, mono: false, blank: true }); return }
      for (const part of wrap(text, heading ? bold : chorded ? mono : regular, chorded ? 10 : 12, columnWidth)) rows.push({ text: part, heading, mono: chorded })
    }
    for (const raw of song.lyrics.split("\n")) {
      const clean = raw.replace(/&(?:#x20|#32);/gi, " ").replace(/\\/g, "").replace(/\*\*/g, "").replace(/^#+\s*/, "")
      const heading = /^\[.*\]$/.test(clean.trim())
      add(heading ? clean.trim().slice(1, -1) : clean, heading, song.lyricsFormat === "chorded")
    }
    if (song.guitarGuide) {
      add(""); add("Guía de acordes", true)
      add("Tonalidad: " + song.guitarGuide.key)
      if (song.guitarGuide.capo) add("Cejilla: " + song.guitarGuide.capo)
      add("Ritmo: " + song.guitarGuide.rhythm)
      for (const section of song.guitarGuide.sections) { add(section.title, true); add(section.chords, false, true) }
    }
    while (rows.at(-1)?.blank) rows.pop()
    const height = (row: Row) => row.blank ? 7 : row.heading ? 21 : 15.5
    let cursor = 0, continued = false
    while (cursor < rows.length || !continued) {
      const page = doc.addPage([W, H]); decorate(page)
      let top = 724
      for (const titleLine of wrap(song.title, bold, 22, W - margin * 2)) { page.drawText(titleLine, { x: (W - bold.widthOfTextAtSize(titleLine, 22)) / 2, y: top, size: 22, font: bold, color: ink }); top -= 27 }
      const album = safe(song.album + (continued ? " · continuación" : ""))
      page.drawText(album, { x: (W - regular.widthOfTextAtSize(album, 11)) / 2, y: top, size: 11, font: regular, color: green })
      top -= 29
      const available = top - 81
      const remaining = rows.slice(cursor).reduce((sum, row) => sum + height(row), 0)
      let leftBudget = available
      if (columns === 2 && remaining <= available * 2) {
        let total = 0, best = Infinity
        for (let split = cursor + 1; split < rows.length; split++) {
          total += height(rows[split - 1])
          if (!(rows[split].heading || rows[split - 1].blank)) continue
          const difference = Math.abs(total - remaining / 2)
          if (total <= available && remaining - total <= available && difference < best) { leftBudget = total + 0.1; best = difference }
        }
      }
      const dividerHeight = Math.min(available, Math.max(leftBudget, remaining - leftBudget))
      if (columns === 2) page.drawLine({ start: { x: W / 2, y: top + 6 }, end: { x: W / 2, y: Math.max(82, top - dividerHeight) }, thickness: 0.5, color: green, opacity: 0.22 })
      for (let column = 0; column < columns && cursor < rows.length; column++) {
        const budget = column === 0 ? leftBudget : available
        let used = 0, y = top
        while (cursor < rows.length) {
          const row = rows[cursor], step = height(row)
          if (used && used + step + (row.heading ? 31 : 0) > budget) break
          if (used && !row.blank && (row.heading || rows[cursor - 1]?.blank)) {
            let stanzaHeight = step
            let next = cursor + 1
            if (row.heading) while (next < rows.length && rows[next].blank) stanzaHeight += height(rows[next++])
            while (next < rows.length && !rows[next].blank && !rows[next].heading) stanzaHeight += height(rows[next++])
            if (stanzaHeight <= budget && used + stanzaHeight > budget) break
          }
          if (!used && row.blank) { cursor++; continue }
          if (row.text) page.drawText(safe(row.text), { x: margin + column * (columnWidth + gap), y, size: row.mono ? 10 : 12, font: row.heading ? bold : row.mono ? mono : regular, color: row.heading ? copper : ink })
          y -= step; used += step; cursor++
        }
      }
      continued = true
      if (cursor >= rows.length) break
    }
  }
  const pages = doc.getPages()
  pages.forEach((page, i) => {
    const footer = "Son Ceibe · Camilo Rodríguez · www.sonceibe.es"
    page.drawText(footer, { x: (W - regular.widthOfTextAtSize(footer, 9)) / 2, y: 58, size: 9, font: regular, color: green })
    page.drawText(String(i + 1) + " / " + pages.length, { x: W - margin - 27, y: 58, size: 8, font: regular, color: green })
  })
  return doc.save()
}

export async function downloadLyricsPdf(songs: SongLyric[], title: string) {
  const bytes = await createLyricsPdf(songs, title)
  const url = URL.createObjectURL(new Blob([new Uint8Array(bytes)], { type: "application/pdf" }))
  const link = document.createElement("a")
  link.href = url
  link.download = title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").toLowerCase() + "-letras.pdf"
  document.body.appendChild(link); link.click(); link.remove()
  setTimeout(() => URL.revokeObjectURL(url), 60000)
}
