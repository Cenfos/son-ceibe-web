export type GuitarGuide = {
  level: "Medio"
  key: string
  capo?: string
  rhythm: string
  sections: Array<{ title: string; chords: string }>
}

export type SongLyric = {
  title: string
  album: string
  collections?: string[]
  lyrics: string
  hasChords: boolean
  // A guitar guide alone does not mean the lyric text contains chord notation.
  lyricsFormat?: "plain" | "chorded"
  guitarGuide?: GuitarGuide
}

