import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { PageLayout } from "@/components/page-layout"
import { PublishedAlbumPage } from "@/components/published-album-page"
import { publishedAlbumPages, albumPath, albumSongs } from "@/lib/album-pages"

export const dynamicParams = false
export function generateStaticParams() { return publishedAlbumPages.map(({ slug }) => ({ slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const entry = publishedAlbumPages.find(entry => entry.slug === slug)
  if (!entry) return {}
  const { album } = entry
  const url = "https://sonceibe.es" + albumPath(album)
  const images = [{ url: "https://sonceibe.es" + album.cover, width: 1200, height: 1200, alt: album.title + " · Son Ceibe" }]
  return { title: album.title + " · Son Ceibe", description: album.description.gl, alternates: { canonical: url }, openGraph: { type: "website", title: album.title + " · Son Ceibe", description: album.description.gl, url, images, locale: "gl_ES" }, twitter: { card: "summary_large_image", title: album.title + " · Son Ceibe", description: album.description.gl, images: images.map(image => image.url) } }
}
export default async function AlbumPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const entry = publishedAlbumPages.find(entry => entry.slug === slug)
  if (!entry) notFound()
  return <PageLayout><PublishedAlbumPage album={entry.album} songs={albumSongs(entry.album)} otherAlbums={publishedAlbumPages.filter(other => other.slug !== slug).map(other => other.album)} /></PageLayout>
}
