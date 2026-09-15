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
  spotifyAlbumId: string
  cover: string
  backCover?: string
  tracklist?: string[]
  description: Record<Lang, string>
  links: {
    spotify?: string
    appleMusic?: string
    youtube?: string
    bandcamp?: string
  }
}

export const albums: Album[] = [
  {
    id: "disco-1",
    title: "Noite de Esmorga",
    year: "2026",
    spotifyAlbumId: "70dEjVgVVoffxFh2EqAA3G",
    cover: "/albums/noite-de-esmorga-front.png",
    backCover: "/albums/noite-de-esmorga-back.png",
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
      appleMusic: "",
      youtube: "",
      bandcamp: "",
    },
  },
  {
    id: "disco-2",
    title: "A Xente non Cambia!",
    year: "2026",
    spotifyAlbumId: "6OVFWlrjaVwpGyeo7eHkgR",
    cover: "/albums/a-xente-non-cambia-front.png",
    backCover: "/albums/a-xente-non-cambia-back.png",
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
      gl: "A evolución do grupo: máis fusión, máis forza e as mesmas raíces de sempre.",
      es: "La evolución del grupo: más fusión, más fuerza y las mismas raíces de siempre.",
    },
    links: {
      spotify: "https://open.spotify.com/intl-es/album/6OVFWlrjaVwpGyeo7eHkgR",
      appleMusic: "",
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

export const singles: Single[] = [
  {
    id: "single-4",
    title: "As dúas Marías",
    year: "2026",
    spotifyAlbumId: "5B35ycmkjTikR6S2GppIEB",
    cover: "/albums/as-duas-marias.svg",
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
    title: "As mulleres da Terra",
    year: "2026",
    spotifyAlbumId: "5HCsU499k7lw9F1Jvcf8bV",
    cover: "/albums/as-mulleres-da-terra.png",
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
    title: "Voa ceibe, ti gaivota",
    year: "2026",
    spotifyAlbumId: "3LQUfdcwwnVUx51MVOheQv",
    cover: "/albums/voa-ceibe-ti-gaivota.png",
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
    title: "A miña terra chama!",
    year: "2026",
    spotifyAlbumId: "48hyDXKXEDkj22TtJ5KNTX",
    cover: "/albums/a-mina-terra-chama.png",
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
export { songLyrics } from "./lyrics"

// ----------------------------------------------------------------------------
// TRADUCCIONES
// ----------------------------------------------------------------------------
export const t = {
  gl: {
    nav: {
      music: "Música",
      about: "O grupo",
      shop: "Tenda",
      lyrics: "Letras",
      videos: "Vídeos",
      contact: "Contacto",
    },
    hero: {
      tagline: "Folk galego en fusión",
      subtitle:
        "Dous discos, catro singles, unha mesma raíz. Escoita a Son Ceibe onde queiras.",
      listen: "Escoitar",
      discover: "Coñecer o grupo",
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
      title: "O grupo",
      paragraphs: [
        "Son Ceibe é un proxecto musical galego que nace co obxectivo de tender unha ponte entre o pasado e o presente da nosa cultura. Cun estilo firmemente asentado no Folk Rock, a súa música fusiona a forza e a maxia dos instrumentos tradicionais galegos coa enerxía, as guitarras e a contundencia do rock moderno.",
        "Máis alá das etiquetas, Son Ceibe é un espazo de liberdade creativa onde se reivindica a música de raíz desde unha perspectiva actual. As súas composicións son un reflexo da identidade galega: nelas conviven a enerxía da festa e a verbena, a nostalxia, o respecto polos que viñeron antes e as vivencias do día a día que todos compartimos.",
        "Cun pé no respecto absoluto pola nosa tradición e outro na potencia do rock contemporáneo, o proxecto busca conectar con públicos de todas as xeracións. Son Ceibe non é só un grupo de cancións; é unha homenaxe á cultura popular, unha celebración da amizade e unha viaxe musical pensada para sentirse, cantarse e bailarse con orgullo.",
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
    nav: {
      music: "Música",
      about: "El grupo",
      shop: "Tienda",
      lyrics: "Letras",
      videos: "Vídeos",
      contact: "Contacto",
    },
    hero: {
      tagline: "Folk gallego en fusión",
      subtitle:
        "Dos discos, cuatro singles, una misma raíz. Escucha a Son Ceibe donde quieras.",
      listen: "Escuchar",
      discover: "Conocer al grupo",
    },
    music: {
      title: "Nuestros discos",
      subtitle: "Disponibles en Spotify y en las principales plataformas.",
      singlesTitle: "Singles",
      singlesSubtitle: "Las últimas canciones de Son Ceibe.",
      listenSpotify: "Escuchar en Spotify",
      comingSoon: "Reprodutor dispoñible en breve",
      platforms: "Plataformas",
      tracklist: "Canciones",
      viewFront: "Ver portada",
      viewBack: "Ver contraportada",
    },
    about: {
      title: "El grupo",
      paragraphs: [
        "Son Ceibe es un proyecto musical gallego que nace con el objetivo de tender un puente entre el pasado y el presente de nuestra cultura. Con un estilo firmemente asentado en el Folk Rock, su música fusiona la fuerza y la magia de los instrumentos tradicionales gallegos con la energía, las guitarras y la contundencia del rock moderno.",
        "Más allá de las etiquetas, Son Ceibe es un espacio de libertad creativa donde se reivindica la música de raíz desde una perspectiva actual. Sus composiciones son un reflejo de la identidad gallega: en ellas conviven la energía de la fiesta y la verbena, la nostalgia, el respeto por los que vinieron antes y las vivencias del día a día que todos compartimos.",
        "Con un pie en el respeto absoluto por nuestra tradición y otro en la potencia del rock contemporáneo, el proyecto busca conectar con públicos de todas las generaciones. Son Ceibe no es solo un grupo de canciones; es un homenaje a la cultura popular, una celebración de la amistad y un viaje musical pensado para sentirse, cantarse y bailarse con orgullo.",
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
