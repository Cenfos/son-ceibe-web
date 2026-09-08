import type { SongLyric } from "./types"
import { aXenteNonCambiaLyrics } from "./a-xente-non-cambia"
import { noiteDeEsmorgaLyrics } from "./noite-de-esmorga"
import { singlesLyrics } from "./singles"

export type { SongLyric } from "./types"

export const songLyrics: SongLyric[] = [
  ...singlesLyrics,
  ...noiteDeEsmorgaLyrics,
  ...aXenteNonCambiaLyrics,
]

