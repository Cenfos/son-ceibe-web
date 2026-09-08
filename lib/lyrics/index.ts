import type { SongLyric } from "./types"
import { aXenteNonCambiaLyrics } from "./a-xente-non-cambia"
import { noiteDeEsmorgaLyrics } from "./noite-de-esmorga"
import { singlesLyrics } from "./singles"

export type { GuitarGuide, SongLyric } from "./types"

const allLyrics = [...singlesLyrics, ...noiteDeEsmorgaLyrics, ...aXenteNonCambiaLyrics]

// Una canción puede pertenecer a un single y también a un disco. Se conserva
// una única ficha para evitar duplicados al mostrar o imprimir todas las letras.
export const songLyrics: SongLyric[] = allLyrics.filter(
  (song, index) => allLyrics.findIndex((candidate) => candidate.title === song.title) === index,
)

