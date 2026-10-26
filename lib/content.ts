// ============================================================================
// CONTENIDO DE SON CEIBE
// ----------------------------------------------------------------------------
// Edita aquí para actualizar textos, discos, enlaces, letras y vídeos.
// ============================================================================

export type Lang = "gl" | "es"

// ----------------------------------------------------------------------------
// DISCOS
// ----------------------------------------------------------------------------

export type Album = {
  id: string
  title: string
  year: string
  releaseDate: string // ISO YYYY-MM-DD; fecha oficial de publicación
  spotifyAlbumId: string
  cover: string
  backCover?: string
  tracklist?: string[]
  description: Record<Lang, string>
  links: {
    spotify?: string
    youtubeMusic?: string
    amazonMusic?: string
    appleMusic?: string
    youtube?: string
    bandcamp?: string
  }
}

const albumEntries: Album[] = [
  {
    id: "disco-1",
    releaseDate: "2026-05-23",
    title: "Noite de Esmorga",
    year: "2026",
    spotifyAlbumId: "70dEjVgVVoffxFh2EqAA3G",
    cover: "/albums/noite-de-esmorga-front.webp",
    backCover: "/albums/noite-de-esmorga-back.webp",
    tracklist: [
      "O home da Terra e o vento",
      "Prefiro perder na taberna",
      "Cando Ourense ardía",
      "Antes pobre que calado",
      "Cancioneiro Fake",
      "Foi un bico",
      "Din que hai festa din que hai viño",
      "Na mesa das lembranzas",
      "Sakura no vento",
      "Toda a terra no cantar",
      "O pobre cinchador",
    ],
    description: {
      gl: "O primeiro traballo de Son Ceibe: raíz galega e sons contemporáneos que se atopan nun mesmo camiño.",
      es: "El primer trabajo de Son Ceibe: raíz gallega y sonidos contemporáneos que se encuentran en un mismo camino.",
    },
    links: {
      spotify: "https://open.spotify.com/intl-es/album/70dEjVgVVoffxFh2EqAA3G",
      appleMusic: "https://music.apple.com/es/album/noite-de-esmorga/6772612223",
      youtubeMusic: "https://music.youtube.com/playlist?list=OLAK5uy_klswnuRhYMs4cZKHA2AQPYfUc_WLZeUdY",
      amazonMusic: "https://music.amazon.es/albums/B0H2R92J3J",
      youtube: "",
      bandcamp: "",
    },
  },
  {
    id: "disco-2",
    releaseDate: "2026-07-12",
    title: "A Xente non Cambia!",
    year: "2026",
    spotifyAlbumId: "6OVFWlrjaVwpGyeo7eHkgR",
    cover: "/albums/a-xente-non-cambia-front.webp",
    backCover: "/albums/a-xente-non-cambia-back.webp",
    tracklist: [
      "Amor dun día",
      "Cousas do Demo",
      "Cuncas de Lume",
      "Marcos da leira",
      "As mulleres da Terra",
      "Latexo Peregrino",
      "Tatuaxes na memoria",
      "Sen pedir nada por nada!",
      "Os dous do bote",
      "Nos teus ollos...",
    ],
    description: {
      gl: "A evolución do proxecto: máis fusión, máis forza e as mesmas raíces de sempre.",
      es: "La evolución del proyecto: más fusión, más fuerza y las mismas raíces de siempre.",
    },
    links: {
      spotify: "https://open.spotify.com/intl-es/album/6OVFWlrjaVwpGyeo7eHkgR",
      appleMusic: "https://music.apple.com/es/album/a-xente-non-cambia/6789898456",
      youtubeMusic: "https://music.youtube.com/playlist?list=OLAK5uy_n7GM8Kk0OguQtYalUvjJu4J8-cYn3InwY",
      amazonMusic: "https://music.amazon.es/albums/B0H8JN41ZV",
      youtube: "",
      bandcamp: "",
    },
  },
]

// ----------------------------------------------------------------------------
// SINGLES
// ----------------------------------------------------------------------------

export type Single = {
  id: string
  title: string
  year: string
  releaseDate: string // ISO YYYY-MM-DD; fecha oficial de publicación
  spotifyAlbumId: string
  cover: string
  tracklist?: string[]
  description: Record<Lang, string>
  links: {
    spotify?: string
    appleMusic?: string
    youtube?: string
    bandcamp?: string
  }
}

const singleEntries: Single[] = [
{
  "id": "single-6",
  "title": "Desta terra foi a voz",
  "releaseDate": "2026-10-17",
  "year": "2026",
  "spotifyAlbumId": "2GJUUKrdWsTjewldBE58dK",
  "cover": "/albums/desta-terra-foi-a-voz.jpg",
  "tracklist": [
    "Desta terra foi a voz"
  ],
  "description": {
    "gl": "Single de Son Ceibe publicado o 17 de outubro de 2026. Xa dispoñible en Spotify.",
    "es": "Single de Son Ceibe publicado el 17 de octubre de 2026. Ya disponible en Spotify."
  },
  "links": {
    "spotify": "https://open.spotify.com/intl-es/album/2GJUUKrdWsTjewldBE58dK"
  }
},
{
  "id": "single-5",
  "title": "No puzle da vida!",
  "releaseDate": "2026-10-10",
  "year": "2026",
  "spotifyAlbumId": "4rowfcO6ABGT6U5kiBSSjt",
  "cover": "/albums/no-puzle-da-vida.jpg",
  "tracklist": [
    "No puzle da vida!"
  ],
  "description": {
    "gl": "Single de Son Ceibe publicado o 10 de outubro de 2026. Xa dispoñible en Spotify.",
    "es": "Single de Son Ceibe publicado el 10 de octubre de 2026. Ya disponible en Spotify."
  },
  "links": {
    "spotify": "https://open.spotify.com/intl-es/album/4rowfcO6ABGT6U5kiBSSjt"
  }
},
  {
    id: "single-4",
    releaseDate: "2026-09-13",
    title: "As dúas Marías",
    year: "2026",
    spotifyAlbumId: "5B35ycmkjTikR6S2GppIEB",
    cover: "/albums/as-duas-marias-cover.jpg",
    tracklist: ["As dúas Marías"],
    description: {
      gl: "Unha homenaxe a Maruxa e Corália, as dúas Marías de Compostela: memoria, resistencia e liberdade polas rúas da cidade.",
      es: "Un homenaje a Maruxa y Corália, las dos Marías de Compostela: memoria, resistencia y libertad por las calles de la ciudad.",
    },
    links: {
      spotify: "https://open.spotify.com/intl-es/album/5B35ycmkjTikR6S2GppIEB",
      appleMusic: "",
      youtube: "",
      bandcamp: "",
    },
  },
  {
    id: "single-1",
    releaseDate: "2026-06-27",
    title: "As mulleres da Terra",
    year: "2026",
    spotifyAlbumId: "5HCsU499k7lw9F1Jvcf8bV",
    cover: "/albums/as-mulleres-da-terra.webp",
    tracklist: ["As mulleres da Terra"],
    description: {
      gl: "Homenaxe ás mulleres que construíron a nosa terra con suor, memoria e corazón.",
      es: "Homenaje a las mujeres que construyeron nuestra tierra con sudor, memoria y corazón.",
    },
    links: {
      spotify: "https://open.spotify.com/intl-es/album/5HCsU499k7lw9F1Jvcf8bV",
      appleMusic: "",
      youtube: "",
      bandcamp: "",
    },
  },
  {
    id: "single-2",
    releaseDate: "2026-07-25",
    title: "Voa ceibe, ti gaivota",
    year: "2026",
    spotifyAlbumId: "3LQUfdcwwnVUx51MVOheQv",
    cover: "/albums/voa-ceibe-ti-gaivota.webp",
    tracklist: ["Voa ceibe, ti gaivota"],
    description: {
      gl: "Unha canción de liberdade, mar e gaivotas. A gaivota que nunca deixa de voar.",
      es: "Una canción de libertad, mar y gaviotas. La gaviota que nunca deja de volar.",
    },
    links: {
      spotify: "https://open.spotify.com/intl-es/album/3LQUfdcwwnVUx51MVOheQv",
      appleMusic: "",
      youtube: "",
      bandcamp: "",
    },
  },
  {
    id: "single-3",
    releaseDate: "2026-08-15",
    title: "A miña terra chama!",
    year: "2026",
    spotifyAlbumId: "48hyDXKXEDkj22TtJ5KNTX",
    cover: "/albums/a-mina-terra-chama.webp",
    tracklist: ["A miña terra chama!"],
    description: {
      gl: "Un canto á terra que nos chama e ás raíces que nos acompañan.",
      es: "Un canto a la tierra que nos llama y a las raíces que nos acompañan.",
    },
    links: {
      spotify: "https://open.spotify.com/intl-es/album/48hyDXKXEDkj22TtJ5KNTX",
      appleMusic: "",
      youtube: "",
      bandcamp: "",
    },
  },
]

// ----------------------------------------------------------------------------
// VÍDEOS
// ----------------------------------------------------------------------------

// Mantener aquí solo lanzamientos publicados y con datos confirmados.
// Al añadir un disco publicado con fecha más reciente, ocupará la novedad.
const newestFirst = (a: { releaseDate: string }, b: { releaseDate: string }) =>
  b.releaseDate.localeCompare(a.releaseDate)

export const albums = [...albumEntries].sort(newestFirst)
export const singles = [...singleEntries].sort(newestFirst)
export const featuredRelease = [
  ...albums.map(album => ({ ...album, kind: "album" as const })),
  ...singles.map(single => ({ ...single, kind: "single" as const })),
].sort(newestFirst)[0]

export type Video = {
  id: string
  title: string
  youtubeId: string
  album?: string
}

export const videos: Video[] = [
  {
    id: "video-1",
    title: "As mulleres da terra",
    youtubeId: "oiRq4Axji3c",
    album: "Single",
  },
  {
    id: "video-2",
    title: "Voa ceibe, ti gaivota",
    youtubeId: "zjQRPQ4_9qk",
    album: "Single",
  },
  {
    id: "video-3",
    title: "Toda a terra no cantar",
    youtubeId: "w9zbDSTDo5E",
    album: "Noite de Esmorga",
  },
  {
    id: "video-4",
    title: "Nesa mesa de lembranzas",
    youtubeId: "g5cL6YpQrG4",
    album: "Noite de Esmorga",
  },
]

// ----------------------------------------------------------------------------
// REDES SOCIALES
// ----------------------------------------------------------------------------
export const socials = {
  spotify: "https://open.spotify.com/intl-es/artist/7hr8eGXjzSEsfwFyxwgNNH",
  instagram: "https://www.instagram.com/sonceibebanda/",
  youtube: "https://www.youtube.com/watch?v=t0ET-9PcDv8&list=OLAK5uy_klswnuRhYMs4cZKHA2AQPYfUc_WLZeUdY",
  gmail: "mailto:cenfosgaming@gmail.com",
}

// ----------------------------------------------------------------------------
// LETRAS DE CANCIONES
// ----------------------------------------------------------------------------
export type { SongLyric } from "./lyrics/types"
// Lyric text lives in lib/lyrics and is loaded separately from general site content.

// ----------------------------------------------------------------------------
// TRADUCCIONES
// ----------------------------------------------------------------------------
export const t = {
  gl: {
    home: {
      single: "Novidade",
      latest: "Últimos singles",
      allSingles: "Ver todos os singles",
      allAlbums: "Ver discografía",
      viewAlbum: "Ver disco e cancións",
      lyricsTitle: "Letras e acordes",
      lyricsBody: "As letras das cancións de Son Ceibe, con acordes e partituras dispoñibles nalgúns temas.",
      allLyrics: "Ver todas as letras",
      listenSpotify: "Escoitar en Spotify",
      video: "Vídeo",
      watch: "Ver en YouTube",
      viewVideos: "Ver vídeos",
      introTitle: "Raíces galegas, enerxía de rock",
      introBody: "Son Ceibe mestura música de raíz e sons contemporáneos. Descubre os discos publicados, as letras e a historia do proxecto.",
      albums: "discos publicados",
      singles: "singles publicados",
      exploreMusic: "Explorar toda a música",
    },
    nav: {
      home: "Inicio",
      singles: "Singles",
      albums: "Álbums",
      music: "Música",
      about: "O proxecto",
      shop: "Tenda",
      lyrics: "Letras",
      videos: "Vídeos",
      contact: "Contacto",
    },
    hero: {
      tagline: "Folk rock galego en fusión",
      subtitle:
        "Cancións que nacen da nosa terra.\nDescubre os singles e discos de Son Ceibe.",
      listen: "Escoitar",
      discover: "Coñecer o proxecto",
    },
    music: {
      title: "Os nosos discos",
      subtitle: "Dispoñibles en Spotify e nas principais plataformas.",
      singlesTitle: "Singles",
      singlesSubtitle: "As últimas cancións de Son Ceibe.",
      listenSpotify: "Escoitar en Spotify",
      comingSoon: "Reprodutor dispoñible en breve",
      platforms: "Plataformas",
      tracklist: "Cancións",
      viewFront: "Ver portada",
      viewBack: "Ver contraportada",
    },
    about: {
      title: "O proxecto",
      paragraphs: [
        "Son Ceibe é o proxecto musical de Camilo Rodríguez, compositor das cancións. Un lugar onde a lingua galega e a música de raíz se atopan coa enerxía do rock, do folk e de moitos outros estilos musicais que van labrando o son, sempre coa liberdade de probar cousas novas.",
        "Moitas das cancións nacen de cousas vividas; outras, de cousas sentidas. Falan dos momentos da vida que o tempo vai levando, das lembranzas que quedan e dun futuro incerto, sempre coa ilusión de agardar con alegría un novo día.",
        "Cada disco abre un novo capítulo deste camiño. Aquí podes descubrir as cancións, ler as súas letras e achegarte ao universo de Son Ceibe, ao teu ritmo.",
      ],
    },
    contact: {
      title: "Contacto",
      subtitle: "Escríbenos para concertos, colaboracións ou calquera consulta. Responderemos canto antes.",
      name: "Nome",
      namePlaceholder: "O teu nome",
      email: "Email",
      emailPlaceholder: "o.teu@email.com",
      subject: "Asunto",
      subjectPlaceholder: "Motivo do contacto",
      message: "Mensaxe",
      messagePlaceholder: "Escribe aquí a túa mensaxe...",
      send: "Enviar mensaxe",
      sending: "Enviando...",
      sent: "Enviado",
      success: "Mensaxe enviada correctamente. Grazas!",
      error: "Houbo un erro. Téntao de novo.",
      orEmail: "Ou escríbenos directamente a:",
    },
    shop: {
      title: "Merca o disco",
      body: "Moi pronto poderás mercar os discos de Son Ceibe en formato físico dende aquí.",
      soon: "Proximamente",
      notify: "Avisádeme",
    },
    lyrics: {
      title: "Letras",
      subtitle: "Todas as letras das nosas cancións, organizadas por disco e single. Descárgaas para ensaiar ou tocar.",
      download: "Imprimir / gardar en PDF",
      downloadCollection: "Imprimir colección",
      downloadAll: "Imprimir todas as letras",
      preview: "Ver letra",
      chords: "Con acordes",
      allAlbums: "Todos os álbums",
      sheetMusic: "Ver partitura",
    },
    videos: {
      title: "Vídeos",
      subtitle: "Vídeos oficiais de Son Ceibe no YouTube.",
    },
    footer: {
      rights: "Todos os dereitos reservados.",
      language: "Idioma",
    },
  },
  es: {
    home: {
      single: "Novedad",
      latest: "Últimos singles",
      allSingles: "Ver todos los singles",
      allAlbums: "Ver discografía",
      viewAlbum: "Ver disco y canciones",
      lyricsTitle: "Letras y acordes",
      lyricsBody: "Las letras de las canciones de Son Ceibe, con acordes y partituras disponibles en algunos temas.",
      allLyrics: "Ver todas las letras",
      listenSpotify: "Escuchar en Spotify",
      video: "Vídeo",
      watch: "Ver en YouTube",
      viewVideos: "Ver vídeos",
      introTitle: "Raíces gallegas, energía de rock",
      introBody: "Son Ceibe mezcla música de raíz y sonidos contemporáneos. Descubre los discos publicados, las letras y la historia del proyecto.",
      albums: "discos publicados",
      singles: "singles publicados",
      exploreMusic: "Explorar toda la música",
    },
    nav: {
      home: "Inicio",
      singles: "Singles",
      albums: "Álbumes",
      music: "Música",
      about: "El proyecto",
      shop: "Tienda",
      lyrics: "Letras",
      videos: "Vídeos",
      contact: "Contacto",
    },
    hero: {
      tagline: "Folk rock gallego en fusión",
      subtitle:
        "Canciones que nacen de nuestra tierra.\nDescubre los singles y discos de Son Ceibe.",
      listen: "Escuchar",
      discover: "Conocer el proyecto",
    },
    music: {
      title: "Nuestros discos",
      subtitle: "Disponibles en Spotify y en las principales plataformas.",
      singlesTitle: "Singles",
      singlesSubtitle: "Las últimas canciones de Son Ceibe.",
      listenSpotify: "Escuchar en Spotify",
      comingSoon: "Reproductor disponible en breve",
      platforms: "Plataformas",
      tracklist: "Canciones",
      viewFront: "Ver portada",
      viewBack: "Ver contraportada",
    },
    about: {
      title: "El proyecto",
      paragraphs: [
        "Son Ceibe es el proyecto musical de Camilo Rodríguez, compositor de las canciones. Un lugar donde la lengua gallega y la música de raíz se encuentran con la energía del rock, del folk y de muchos otros estilos musicales que van labrando el sonido, siempre con la libertad de probar cosas nuevas.",
        "Muchas de las canciones nacen de cosas vividas; otras, de cosas sentidas. Hablan de los momentos de la vida que el tiempo se va llevando, de los recuerdos que quedan y de un futuro incierto, siempre con la ilusión de esperar con alegría un nuevo día.",
        "Cada disco abre un nuevo capítulo de este camino. Aquí puedes descubrir las canciones, leer sus letras y acercarte al universo de Son Ceibe, a tu ritmo.",
      ],
    },
    contact: {
      title: "Contacto",
      subtitle: "Escríbenos para conciertos, colaboraciones o cualquier consulta. Responderemos lo antes posible.",
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Email",
      emailPlaceholder: "tu@email.com",
      subject: "Asunto",
      subjectPlaceholder: "Motivo del contacto",
      message: "Mensaje",
      messagePlaceholder: "Escribe aquí tu mensaje...",
      send: "Enviar mensaje",
      sending: "Enviando...",
      sent: "Enviado",
      success: "Mensaje enviado correctamente. ¡Gracias!",
      error: "Hubo un error. Inténtalo de nuevo.",
      orEmail: "O escríbenos directamente a:",
    },
    shop: {
      title: "Compra el disco",
      body: "Muy pronto podrás comprar los discos de Son Ceibe en formato físico desde aquí.",
      soon: "Próximamente",
      notify: "Avisadme",
    },
    lyrics: {
      title: "Letras",
      subtitle: "Todas las letras de nuestras canciones, organizadas por disco y single. Descárgalas para ensayar o tocar.",
      download: "Imprimir / guardar en PDF",
      downloadCollection: "Imprimir colección",
      downloadAll: "Imprimir todas las letras",
      preview: "Ver letra",
      chords: "Con acordes",
      allAlbums: "Todos los álbumes",
      sheetMusic: "Ver partitura",
    },
    videos: {
      title: "Vídeos",
      subtitle: "Vídeos oficiales de Son Ceibe en YouTube.",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      language: "Idioma",
    },
  },
} as const
