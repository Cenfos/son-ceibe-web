import type { Metadata } from "next"
import { LyricsLibrary } from "@/components/lyrics-library"
import { PageLayout } from "@/components/page-layout"
import { lyricIndex, lyricCollections } from "@/lib/lyrics-library"

export const metadata: Metadata = { title: "Letras · Son Ceibe", description: "Busca as letras de Son Ceibe por disco ou canción e descárgaas en PDF." }
export default function LyricsPage() { return <PageLayout><LyricsLibrary index={lyricIndex} collections={lyricCollections} /></PageLayout> }
