import type { Album } from "@/lib/content"

export function albumSlug(album: Album) {
  return album.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
}
export function albumPath(album: Album) { return "/albums/" + albumSlug(album) }
