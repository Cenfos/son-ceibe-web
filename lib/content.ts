// ============================================================================
// CONTENIDO DE SON CEIBE
// ----------------------------------------------------------------------------
// Este archivo centraliza TODO el contenido de la web en gallego (gl) y
// español (es). Edita aquí para actualizar textos, discos y enlaces.
// ============================================================================

export type Lang = "gl" | "es"

// ----------------------------------------------------------------------------
// DISCOS
// ----------------------------------------------------------------------------
// Para cada disco:
//  - spotifyAlbumId: el ID del álbum en Spotify. Ábrelo en Spotify, pulsa
//    "Compartir" > "Copiar enlace del álbum". El enlace es algo como:
//    https://open.spotify.com/album/4aawyAB9vmqN3uQ7FjRGTy
//    El ID es la parte final: 4aawyAB9vmqN3uQ7FjRGTy
//    Pégalo aquí y el reproductor de Spotify aparecerá automáticamente.
//  - cover: ruta a la carátula (reemplaza los archivos en /public/albums).
//  - links: enlaces a las plataformas (deja "" para ocultar el botón).

export type Album = {
  id: string
  title: string
  year: string
  spotifyAlbumId: string // <-- PEGA AQUÍ EL ID DE SPOTIFY
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
    year: "",
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
    title: "A xente non cambia",
    year: "",
    spotifyAlbumId: "6OVFWlrjaVwpGyeo7eHkgR",
    cover: "/albums/a-xente-non-cambia-front.png",
    backCover: "/albums/a-xente-non-cambia-back.png",
    tracklist: [
      "Amor dun día",
      "Cousas do Demo",
      "Cuncas de lume",
      "Marcos da Leira",
      "As mulleres da Terra",
      "Latexo Peregrino",
      "Tatuaxes na Memoria",
      "Sen pedir nada por nada",
      "Os dous do bote",
      "Nos teus ollos",
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
// REDES SOCIALES (deja "" para ocultar)
// ----------------------------------------------------------------------------
export const socials = {
  spotify: "https://open.spotify.com/intl-es/album/70dEjVgVVoffxFh2EqAA3G",
  instagram: "https://www.instagram.com/sonceibebanda/",
  youtube: "https://www.youtube.com/watch?v=t0ET-9PcDv8&list=OLAK5uy_klswnuRhYMs4cZKHA2AQPYfUc_WLZeUdY",
  gmail: "mailto:cenfosgaming@gmail.com",
}

// ----------------------------------------------------------------------------
// TRADUCCIONES DE LA INTERFAZ
// ----------------------------------------------------------------------------
export const t = {
  gl: {
    nav: {
      music: "Música",
      about: "O grupo",
      shop: "Tenda",
    },
    hero: {
      tagline: "Folk galego en fusión",
      subtitle:
        "Dous discos, unha mesma raíz. Escoita a Son Ceibe onde queiras.",
      listen: "Escoitar",
      discover: "Coñecer o grupo",
    },
    music: {
      title: "Os nosos discos",
      subtitle: "Dispoñibles en Spotify e nas principais plataformas.",
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
    shop: {
      title: "Merca o disco",
      body: "Moi pronto poderás mercar os discos de Son Ceibe en formato físico dende aquí.",
      soon: "Proximamente",
      notify: "Avisádeme",
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
    },
    hero: {
      tagline: "Folk gallego en fusión",
      subtitle:
        "Dos discos, una misma raíz. Escucha a Son Ceibe donde quieras.",
      listen: "Escuchar",
      discover: "Conocer al grupo",
    },
    music: {
      title: "Nuestros discos",
      subtitle: "Disponibles en Spotify y en las principales plataformas.",
      listenSpotify: "Escuchar en Spotify",
      comingSoon: "Reproductor disponible en breve",
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
    shop: {
      title: "Compra el disco",
      body: "Muy pronto podrás comprar los discos de Son Ceibe en formato físico desde aquí.",
      soon: "Próximamente",
      notify: "Avisadme",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      language: "Idioma",
    },
  },
} as const
