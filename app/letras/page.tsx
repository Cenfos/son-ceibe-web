import type { Metadata } from "next"
import { LyricsSection } from "@/components/lyrics-section"
import { PageLayout } from "@/components/page-layout"

export const metadata: Metadata = { title: "Letras · Son Ceibe" }

export default function LyricsPage() {
  return <PageLayout><LyricsSection /></PageLayout>
}
