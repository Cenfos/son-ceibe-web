import type { MetadataRoute } from "next"
import { albumPath } from "@/lib/album-path"
import { albums } from "@/lib/content"
import { siteUrl } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/musica", "/albums", "/singles", "/videos", "/letras", "/grupo", "/contacto"]

  return [...pages, ...albums.map(albumPath)].map(path => ({
    url: new URL(path, siteUrl).href,
  }))
}
