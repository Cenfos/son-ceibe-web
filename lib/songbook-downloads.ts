const songbookSongs: Record<string, string[]> = {
  "a-saber-o-que-ven": [
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
  ],
  "a-xente-non-cambia": [
    "amor-dun-dia",
    "cousas-do-demo",
    "cuncas-de-lume",
    "marcos-da-leira",
    "as-mulleres-da-terra",
    "latexo-peregrino",
    "tatuaxes-na-memoria",
    "sen-pedir-nada-por-nada",
    "os-dous-do-bote",
    "nos-teus-ollos",
  ],
  "noite-de-esmorga": [
    "o-home-da-terra-e-o-vento",
    "prefiro-perder-na-taberna",
    "cando-ourense-ardia",
    "antes-pobre-que-calado",
    "cancioneiro-fake",
    "foi-un-bico",
    "din-que-hai-festa-din-que-hai-vino",
    "na-mesa-das-lembranzas",
    "sakura-no-vento",
    "toda-a-terra-no-cantar",
    "o-pobre-cinchador",
  ],
  singles: ["voa-ceibe-ti-gaivota"],
}

export function lyricSlug(title: string) {
  return title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
}

export function songbookAlbumPdf(albumId?: string) {
  if (!albumId || !Object.hasOwn(songbookSongs, albumId)) return undefined
  return `/cancioneiros/${albumId}/${albumId}-cancioneiro.pdf`
}

export function songbookSongPdf(id: string) {
  const albumId = Object.keys(songbookSongs).find(album => songbookSongs[album].includes(id))
  return albumId ? `/cancioneiros/${albumId}/${id}.pdf` : undefined
}
