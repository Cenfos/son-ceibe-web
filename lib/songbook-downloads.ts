export const songbookAlbumId = "a-saber-o-que-ven"

const folder = "/cancioneiros/" + songbookAlbumId
export const songbookPdf = folder + "/a-saber-o-que-ven-cancioneiro.pdf"

const songbookSongIds = new Set([
  "no-puzle-da-vida",
  "a-mina-terra-chama",
  "amores-cegos",
  "as-duas-marias",
  "desta-terra-foi-a-voz",
  "a-esmorga-os-levou",
  "a-saber-o-que-ven",
  "fios-de-amor",
  "amor-dun-neno",
  "me-estan-a-fartar",
  "mais-ti-non-o-queres-ver",
  "onde-o-ceo-bica-o-mar",
  "a-catro-patas",
  "aqui-que-non-quede-nada",
])

export function lyricSlug(title: string) {
  return title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
}

export function songbookSongPdf(id: string) {
  return songbookSongIds.has(id) ? folder + "/" + id + ".pdf" : undefined
}
