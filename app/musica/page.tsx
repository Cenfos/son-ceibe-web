import { AlbumsSection } from "@/components/albums-section"
import { PageLayout } from "@/components/page-layout"

import { MusicNavigation } from "@/components/music-navigation"

export default function MusicPage() {
  return <PageLayout><MusicNavigation /><AlbumsSection /></PageLayout>
}
