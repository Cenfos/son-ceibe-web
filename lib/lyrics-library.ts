// Public catalogue only. Never import drafts into this module.
import { songLyrics } from "@/lib/lyrics"
import { albums, singles } from "@/lib/content"
import { albumPath, albumSlug } from "@/lib/album-path"
import type { LyricIndexEntry, LyricCollection } from "@/lib/lyrics-library-types"

const slug = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
const display = (name: string) => name === "A xente non cambia" ? "A Xente non Cambia!" : name
export const publicLyricRecords = songLyrics.map(song => ({ id: slug(song.title), song }))
export const lyricIndex: LyricIndexEntry[] = publicLyricRecords.map(({ id, song }) => ({ id, title: song.title, album: display(song.album), collections: (song.collections ?? [song.album]).map(display), hasChords: song.hasChords }))
export const lyricCollections: LyricCollection[] = [
  ...albums.map(album => ({ id: albumSlug(album), title: album.title, cover: album.cover, href: albumPath(album), count: lyricIndex.filter(song => song.collections.includes(album.title)).length })),
  { id: "singles", title: "Singles", cover: singles[0]?.cover ?? "/son-ceibe-logo.webp", href: "/singles", count: lyricIndex.filter(song => song.collections.includes("Singles")).length, singles: true },
]
