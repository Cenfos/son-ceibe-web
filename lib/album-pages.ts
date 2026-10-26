import { albums, type Album } from "@/lib/content"
import { songLyrics } from "@/lib/lyrics"

import { albumSlug } from "@/lib/album-path"
export { albumPath, albumSlug } from "@/lib/album-path"

export const publishedAlbumPages = albums.map(album => ({ album, slug: albumSlug(album) }))
const normalized = (title: string) => title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "")
export function albumSongs(album: Album) {
  return (album.tracklist ?? []).flatMap(title => {
    const song = songLyrics.find(song => normalized(song.title) === normalized(title))
    return song ? [{ ...song, album: album.title }] : []
  })
}
