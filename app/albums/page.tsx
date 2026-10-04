import type { Metadata } from "next"
import { AlbumsSection } from "@/components/albums-section"
import { PageLayout } from "@/components/page-layout"
import { MusicNavigation } from "@/components/music-navigation"

export const metadata: Metadata = { title: "Álbums · Son Ceibe" }

export default function Page() {
  return <PageLayout><MusicNavigation /><AlbumsSection mode="albums" /></PageLayout>
}
