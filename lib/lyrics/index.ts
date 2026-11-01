import { aSaberOQueVenLyrics } from "./a-saber-o-que-ven"
import { publishedSingleUpdates } from "./published-single-updates"
import type { SongLyric } from "./types"
import { aXenteNonCambiaLyrics } from "./a-xente-non-cambia"
import { noiteDeEsmorgaLyrics } from "./noite-de-esmorga"
import { singlesLyrics } from "./singles"
import { asDuasMariasLyrics } from "./as-duas-marias"

export type { GuitarGuide, SongLyric } from "./types"

const existingLyrics = [...publishedSingleUpdates, ...asDuasMariasLyrics, ...singlesLyrics, ...noiteDeEsmorgaLyrics, ...aXenteNonCambiaLyrics]

const normalized = (title: string) => title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "")
const albumLyrics = aSaberOQueVenLyrics.map(song => {
  const existing = existingLyrics.find(candidate => normalized(candidate.title) === normalized(song.title))
  return { ...song, ...existing, title: song.title, album: song.album, collections: Array.from(new Set([...(existing?.collections ?? (existing ? [existing.album] : [])), song.album])) }
})
const allLyrics = [...albumLyrics, ...existingLyrics.filter(song => !albumLyrics.some(candidate => normalized(candidate.title) === normalized(song.title)))]

// Una canción puede pertenecer a un single y también a un disco. Se conserva
// una única ficha para evitar duplicados al mostrar o imprimir todas las letras.
export const songLyrics: SongLyric[] = allLyrics.filter(
  (song, index) => allLyrics.findIndex((candidate) => candidate.title === song.title) === index,
)
