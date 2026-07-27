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
    id: "single-1",
    title: "As mulleres da Terra",
    year: "2025",
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
    year: "2025",
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
  spotify: "https://open.spotify.com/intl-es/album/70dEjVgVVoffxFh2EqAA3G",
  instagram: "https://www.instagram.com/sonceibebanda/",
  youtube: "https://www.youtube.com/watch?v=t0ET-9PcDv8&list=OLAK5uy_klswnuRhYMs4cZKHA2AQPYfUc_WLZeUdY",
  gmail: "mailto:cenfosgaming@gmail.com",
}

// ----------------------------------------------------------------------------
// LETRAS DE CANCIONES
// ----------------------------------------------------------------------------
export type SongLyric = {
  title: string
  album: string
  lyrics: string
  hasChords: boolean
}

export const songLyrics: SongLyric[] = [
  {
    title: "As mulleres da Terra",
    album: "Singles",
    hasChords: false,
    lyrics: `Nacín coa forza do vento

co sal prendida na pel,

ben cedo aprendín na vida,

ninguén manda no meu ser!


Teño as mans feitas de pedra,

contaba aquela muller,

teño os ollos xa ben fartos,

melhor hai cousas non ver!!


Nas cinco esquinas do mundo

vai camiñando o meu pé,

levo historias nas feridas

que a chuvia non pode ver.


Son mareas de lembranzas

que regresan outra vez,

son as voces que me empurran

a quedar e a pertencer.


Ese berro que arrecende,

moi preto á beira do mar,

eran voces que aínda escoitas,

meigas eran do lugar!


Houbo noites sen estrelas,

houbo días sen cantar,

mais elas seguían ergueitas,

non as podían parar…


(Estribillo)

Poden pecharnos as portas,

poden esquecer de Nós,

poden finxir que non somos,

mais seguimos sendo Nós,

Hai mulleres nesta terra,

na memoria e no suor,

nas historias que nos deixan

latexando o corazón.


Hai pedras que gardan nomes

que o tempo quixo afogar,

tamén voces baixo a leira,

que non se deixan calar.

Porque cando o vento soa,

fraga, souto e piñeiral,

voltan as mans silenciadas,

a falar neste lugar!

(Estribillo)

Poden pecharnos as portas,

poden esquecer de Nós,

poden finxir que non somos,

mais seguimos sendo Nós,

Hai mulleres nesta terra,

na memoria e no suor,

nas historias que nos deixan

latexando o corazón.

(fin )

Elas agardan no porto,

dos que marchan cara ao mar,

vida dura, vida chea,

que ninguén puido dobrar.

Aprendín da Rosalía,

que as tristuras fan cantar,

que hai pobos que nunca morren,

pois teñen o seu falar!


(Estribillo)

Poden pecharnos as portas,

poden esquecer de Nós,

poden finxir que non somos,

mais seguimos sendo Nós,

Hai mulleres nesta terra,

na memoria e no suor,

nas historias que nos deixan

latexando o corazón.

(fin )`,
  },
  {
    title: "O home da Terra e o vento",
    album: "Noite de Esmorga",
    hasChords: false,
    lyrics: `Do/ Do7-Fa/ Fam-Do/ La7-Rem/ Sol7-Do

Estrofa 1-

No sur onde canta o vento

e a herba fala co sol,

ergueuse un home sinxelo

coa forza da razón.

Sen traxe grande nin trono,

sen medo a poder falar,

traía nos ollos do pobo

un mundo por comezar.

(x2) Do/Sol/Fa)


Estribillo

O home da terra e do vento,

irmán da voz popular,

cando fala a xente humilde

late forte o teu cantar.

O home da terra e a xente,

porque xae do corazón,

coma o mar que nunca cala

fala o pobo en rebelión.

(repetir)

fala o pobo en rebelión.

fala o pobo en rebelión.


Estrofa 2

O home da terra e da xente

cantará o mar coas cidades,

mentres haxa un soño libre

erguerase a dignidade.

Dicía: pobre non é

quen vive con pouco pan,

pobre equen precisa todo

pra poderse namorar!

pra poderse namorar!

pra poderse namorar!


Punteo por aquí?

Estrofa 3

Do Río da Prata ao Miño

corre a mesma convicción .

coma o mar que nunca cala

fala o pobo en rebelión.

Pepe, voz do pobo enteiro,

terra libre ao camiñar,

mentres haxa pan na mesa

convidado a xantar!  (x2)


Estribillo

O home da terra e do vento,

irmán da voz popular,

cando fala a xente humilde

late forte o teu cantar.

O home da terra e a xente,

porque xae do corazón,

coma o mar que nunca cala

fala o pobo en rebelión.

(repetir)

fala o pobo en rebelión.

fala o pobo en rebelión.

Estrofa final (peche emotivo)

O home da terra e a xente,

voz aberta do pobo enteiro,

coma o mar que nunca cala

fala o pobo verdadeiro.

O vento leva a túa voz,

o mar non pode calar,

fai un ano que morreches,

quen te puidera voltar.

quen te puidera voltar.

quen te puidera voltar.`,
  },
  {
    title: "Prefiro perder na taberna",
    album: "Noite de Esmorga",
    hasChords: true,
    lyrics: `(na taberna)

**(Intro falada, medio rindo)**

Vaia mundo… se dis o que pensas, estás ben fodido…


**(Estrofa 1)**

Estaba un día na Taberna    Am/G

coa tortilla por tomar,          F/E

boa pataca e tamén viño     Am/G

qué máis se pode agardar!  F/E


Pero alí aparecenron          Am/G

tres dos bos sen avisar       F/E

pra xogar ó tute a tarde,     Am/G

logo a noite xa virá!!!        F/E


**(Estrofa 2)**

Tocoulle sair a un do pobo, Am/G

que facería sen ti,                F/E

as de bastos non é broma    Am/G

máis te vale asistir!             F/E


Triunfaba daquela en copas, Am/G

máis non se podía pedir,       F/E

miña man xa case tiña,        Am/G

poucas por se decidir!         F/E


**(Estrofa 3 - )**

E así seguiu a partida,         Am/G

“veña, paga ti esta ronda”,  F/E

dúas copiñas de Brasil         Am/G

e mañá será outra historia!  F/E


Falamos sen dar máis voltas, Am/G

das noticias e do amor,           F/E

daquel profe que non sabe     Am/G

nin dicir ben a lección!          F/E


**(Estribillo Principal)**x2

E aquela tarde aprendín    Fa/Do

que os amigos de verdade, G/Am

falan mal diante de ti,        Fa/Do

non as costas, é verdade!    G/Am


E se me das a elexir,                Fa/Do

entre gañar ou perder,                 G/Am

os cartos xa non me importan    Fa/Do

eu alí quero volver!!!                  G/Am/Re7/Sol


**(Estrofa 4 - Nova: Trampas e Política)**


Am/   Hai quen fala de barallas             G

F/      coma se fosen ao azar,                 E

Am/   pero sempre hai unha man           G

 F/      que aprende a barallar.                E

Hai partidas ben curiosas,            Am/G

que ninguén quere perder,            F/E

pero sempre hai quen sorrí          Am/G

antes de se repartir.                      F/E


**(Estribillo)**

E aquela tarde aprendín          Fa/Do

que os amigos de verdade,        G/Am

falan mal diante de ti,              Fa/Do

non as costas, é verdade!           G/Am

Se me das a elexir,                    Fa/Do

entre gañar ou perder,                 G/Am

os cartos xa non me importan   Fa/Do

eu alí quero volver!!!                 G/Am/Re7/Sol

eu alí quero volver!!!   Am/Re7/G

Quen de aquí quere volver???? Am/Re7/G`,
  },
  {
    title: "Cando Ourense ardía",
    album: "Noite de Esmorga",
    hasChords: true,
    lyrics: `!

Fa, Sib, Fa, Do,…

Sempre era no Volante onde empezaba a confusión,

era noite de saída, María tiña a solución,

licor café era a carta da taberna si señor,                             Fa, Sib, Fa, Do,…

duas copiñas, só quería, queimarnos ben a razón!


Era Heavy o que soaba non busques explicación,

dous velliños coñecían algo máis que o reguetón!

Comenzabase a rir, e a noite sen saber,

que eses que estaban alí, de esmorga mellor non ver!

 F – C – Dm – Bb

Hoxe imos a por todas,  sálvense mellor non ver,

se me miras ben os ollos, apartalos non vas poder!


 Dm – Bb – C – C

E cando corría a noite parecía Ourense arder,

aquelas noites son nosas, sen nada xa que perder,

mozas, risas, e os amigos que pedían licor café,

e se pecho os ollos forte… volvo unha e outra vez!


Eran catro ou máis ben cinco,  qué mais da podían ser,

que algún casi xa iba farto, farto farto de beber!


Menos mal que no Sinesio a cousa un pouco relaxaba,

ti falabas e falabas, e as mozas so escoitaban!

Moitas promesas facías, moi ben te querias deixar,

mais de todo aquelo queda, máis ven pouco que lembrar!


Logo fumos  a dar voltas, de esmorga o Correxidor,

menos mal que inda quedaba no Lokal outro licor!


E cando corría a noite parecía Ourense arder,

aquelas noites son nosas, sen nada xa que perder,

mozas, risas, e os amigos que pedían licor café,

e se pecho os ollos forte… volvo unha e outra vez!


As paredes tatuadas nomes que non han volver,

un bater sen porta algunha, liberdade ata romper,

rock soando polas veas, coma se fose a lei,

e por un burato no baño… medio mundo podes ver!


E cando corría a noite parecía Ourense arder,

aquelas noites son nosas, sen nada xa que perder,

mozas, risas, e os amigos que pedían licor café,

e se pecho os ollos forte… volvo unha e outra vez!


volvo unha e outra vez!

volvo unha e outra vez!`,
  },
  {
    title: "Antes pobre que calado",
    album: "Noite de Esmorga",
    hasChords: true,
    lyrics: `”

G – D – C – D

Hai quen navega en silencio

co medo como timón,

eu prefiro mar aberto

e vivir sen dirección.


Que a verdade, aínda que doa,

é lume que non se apaga,

e quen vive da mentira

nin dorme nin se levanta.


As cousas boas da vida

van e veñen, quen sabrá

xa podes estar tranquilo

que o tempo xa cho dirá!


C – G – D – Em

C – G – D – G

Berra forte, non te cales,

que a vida vai nun cantar,

a verdade non se vende

nin se manda silenciar.


E que digan o que queiran,

xa me poden agardar,

antes pobre ca calado,

que vencido por calar.


G – D – C – D

E se un día eu me perdo

entre o que fun e o que son,

que me atope na mirada

cando fale o corazón.


Ponme outra que esta noite,

ainda queda por vivir,

o licor este non debe

de alterarme moito a min!


Se me faltan as palabras

queda aínda o meu sentir,

hai silencios que acompañan

hoxe toca resistir!


C – G – D – Em

C – G – D – G

Berra forte, non te cales,

que a vida vai nun cantar,

a verdade non se vende

nin se manda silenciar.


E que digan o que queiran,

xa me poden agardar,

antes pobre ca calado,

que vencido por calar.


G – D – C – D

Hai quen ten cadeas feitas

de medos e de rancor,

eu prefiro pasos longos

que me leven onde estou.


Que a vida é este intre

que pasa sen avisar,

e os soños que non viviches

nunca máis han de voltar.


E se o vento un día esquece

de levarme onde eu soñei,

lembraréi que cada paso

foi un mundo que crucei.


Berra forte, non te cales,

que a vida vai nun cantar,

a verdade non se vende

nin se manda silenciar.


E que digan o que queiran,

xa me poden agardar,

antes pobre ca calado,

que vencido por calar.


Que a alegría é como o vento,

que non se pode agarrar,

pero se sopla no peito,

nunca deixes de bailar!`,
  },
  {
    title: "Cancioneiro Fake",
    album: "Noite de Esmorga",
    hasChords: true,
    lyrics: `C   F   C   G

Estribillo:

F   C   G   Am

F   C   G   G

(Intro – ritmo folk alegre, casi de romería)

Nesta taberna da rede

venden verdades por litros,

e un veciño que comparte

bostas no medio do millo.

Se o dixo un vídeo curto

dun rapaz ben peiteado,

seguro que é verdade

que ben fala o condenado!

(Estribillo )F   C   G   Am

Ai, ai, ai!

no Cancioneiro Fake

cada quen conta o seu conto

 non o podo crer!

Ai, ai, ai!

no Cancioneiro Fake

moitos seguen a corrente,

será certo ou será fake

C   F   C   G

Ai, que ben soa a mentira

se a repiten sen parar,

se o algoritmo a bendice

xa non hai que dubidar.

Dálle “gústame” á parvada,

non te vaias complicar,

que se soa en todas partes

algo bo debe levar...


(Estribillo )F   C   G   Am

Ai, ai, ai!

no Cancioneiro Fake

cada quen conta o seu conto

non o podo crer!


Ai, ai, ai!

no Cancioneiro Fake

moitos seguen a corrente,

será certo ou será fake


C   F   C   G

Din que os tolos dos labregos

non saben nin que pensar,

cos chourizos ben curados

esqueceron chatear...

Hai perfís con foto seria

que non pisan nin o bar,

pero que opinan de todo

sen ter terra que sachar.

(Estribillo )F   C   G   Am

Ai, ai, ai!

no Cancioneiro Fake

cada quen conta o seu conto

non o podo crer!

Ai, ai, ai!

no Cancioneiro Fake

moitos seguen a corrente,

será certo ou será fake


(Final – subida festiva)

C   F   C   G

E mentres a gaita soa,

na festa da opinión,

cada quen coa súa verdade

brindando coa razón.

O labrego ben cansado

vai á taberna a tomar,

o seu viño e a partida,

nada lle ten que envexar!

F     C     G

nada lle ten que envexar!

nada lle ten que envexar!`,
  },
  {
    title: "Foi un bico",
    album: "Noite de Esmorga",
    hasChords: true,
    lyrics: `Am                         F

Aquela noite te vin chegar

C                           G

e non sabía o teu nome,

Am                        F

quedei pasmado con eses rizos

C                          G

e coa pícara sorrisa.


Am                        F

Marchaches logo do Local,

C                         G

apenas nos presentaron,

Am                         F

a nosa historia seguía en pé

C                         G

nin nos decatamos.


Am                        F

Xa no Sitio falamos pouco

C

coma quen sabe

G

que algo está escrito nunca se sabe

Am

dígoche a verdade.


Am                         F

Eu xa marchaba, a noite foi longa,

C                         G

cansado e de valde,

Am                         F

cando dixeches: “quédate un chisco”,

C                         G

foi casualidade?


F                          C

Foi un bico quen quixo facer

G                           Am

unha canción pra non esquecer,

F                          C

algo que parecía sinxelo

G

non o podo crer.


F                          C

O vento e a choiva pasarán,

G

as pedras do camiño non nos separarán,

F                          C

cada día, ao carón dese bico,

G

a vida sabe mellor!


Am                         F

Pasaron noites, pasaron anos

C                         G

e seguimos xuntos aquí

Am                         F

houbo problemas e tamén risas

C                         G

pero sempre xuntos, si


Am                         F

Ás veces a vida dá voltas,

C                         G

outras todo vai xenial,

Am                         F

pero o bico daquela noite

C                         G

marcou o camiño sen máis


F                          C

Foi un bico quen quixo facer

G                           Am

unha canción pra non esquecer,

F                          C

algo que parecía sinxelo

G

non o podo crer.


F                          C

O vento e a choiva pasarán,

G

as pedras do camiño non nos separarán,

F                          C

cada día, ao carón dese bico,

G

a vida sabe mellor!


Am                         F

O muiño que se move,

C                         G

as follas que o río arrastra,

Am                         F

mais non leva o que sentimos,

C                         G

daquel bico de esperanza.`,
  },
  {
    title: "Din que hai festa din que hai viño",
    album: "Noite de Esmorga",
    hasChords: true,
    lyrics: `!


INTRO

| G | C | G | D |   x2


VERSO 1

      G

Non sei nin que día era,

        D

máis me dixo meu irmán,

        Em

“en Compostela hoxe non queda

        C

nada novo pra mirar”.


        G

Daquela xa vin ben claro

        D

que tocaba arrincar,

        Em

que se o Albariño nos chama

      C     D      G

non se lle pode faltar!


VERSO 2

        G

Chegamos e xa na praza

        D

había festa de verdade,

        Em

postos cheos, risas claras,

        C

viño fresco é calidade!


        G

Adegas que teñen leiras

        D

moito traballo lles deron

        Em

vendimar é só unha parte

      C     D      G

cunca e grolo mereceron!


ESTRIBILLO

        G

Din que hai festa, din que hai viño,

        D

din que non falte o Albariño

        Em

que onde haxa festa e amigos

        C

vou correndo, non dubido!


        G

Din que hai festa, din que hai baile,

        D

din que a noite está por vir

        Em

vas por unha copa soa…

        C

ti xa non queres partir!


        G

Din que está a soar a gaita,

        D

din que ferve o corazón,

        Em

que entre risas e cantigas

      C     D      G

arde viva a tradición!!!


VERSO 3

        G

Uns falaban das colleitas,

        D

outros do tempo e do mar,

        Em

e nós entre a boa xente

        C

xa non queremos marchar!


        G

E alí tiña uns amigos

        D

deses bos de convidar,

        Em

“se mollas a gorxa un chisco

      C     D      G

logo tes que comentar!”


→ ESTRIBILLO

 G

Din que hai festa, din que hai viño,

        D

din que non falte o Albariño

        Em

que onde haxa festa e amigos

        C

vou correndo, non dubido!


        G

Din que hai festa, din que hai baile,

        D

din que a noite está por vir

        Em

vas por unha copa soa…

        C

ti xa non queres partir!


        G

Din que está a soar a gaita,

        D

din que ferve o corazón,

        Em

que entre risas e cantigas

      C     D      G

arde viva a tradición!!!


VERSO 4

        G

Como fomos coma sempre

        D

de sorpresa e sen pensar,

        Em

a un furancho nos levaron:

        C

“fame non ides pasar”.


        G

Empanada, carne ao forno,

        D

polvo á feira e algo máis,

        Em

cada prato que chegaba

      C     D      G

xa era excusa para quedar


→ ESTRIBILLO


FINAL


        Em

E cando fala meu pobo,

        C

eu non podo dubidar,

        G

esta é a miña casa,

        D

aquí está o meu fogar!!!!


(Entrar ESTRIBILLO final forte)`,
  },
  {
    title: "Na mesa das lembranzas",
    album: "Noite de Esmorga",
    hasChords: true,
    lyrics: `!


Nun pobo da miña terra,

onde as raíces sempre medran,

terra de orballo que abriga,

cun luar que aloumiña…


(Estribillo)


Ay, lalala, ay, lalala

Nesa mesa de lembranzas,

que ainda é boa e ben querida,

erguemos bicos ao vento,

porque a vida é compartida!


Ay, lalala, ay, lalala

E aqueles nomes que marchan

ainda quedan todavía,

os recordos e os consellos,

que nos deron algún día!


(fin estribillo)


Cando espertas na mañá,

entre brétemas e vento,

se mirás ben cara atrás,

podes ver que pasa o tempo...


Era a voz da miña avoa

cociñando con ledicia,

era tempo de xantar,

máis te valía non faltar!


Os avós xa na lareira,

contan súas historias vellas,

pois o tempo nunca os leva,

teñen as mans ben abertas!


Que empece a soar a Gaita,

xunto a nosa pandeireta,

pois neste pobo rapaz

cada lembranza é unha festa!


(Estribillo)


Ay, lalala, ay, lalala

Nesa mesa de lembranzas,

que ainda é boa e ben querida,

erguemos bicos ao vento,

porque a vida é compartida!


Ay, lalala, ay, lalala

E aqueles nomes que marchan

ainda quedan todavía,

os recordos e os consellos,

que nos deron algún día!


(fin estribillo)


E aqueles consellos foron

máis aló do que imaxinas:

un camiño que fixemos

con abrazos e cantigas.


Hoxe son un souto verde,

unha experiencia na vida,

manantial que nunca para,

peta o mar en cada esquina!


(Estribillo)


Ay, lalala, ay, lalala

Nesa mesa de lembranzas,

que ainda é boa e ben querida,

erguemos bicos ao vento,

porque a vida é compartida!


Ay, lalala, ay, lalala

E aqueles nomes que marchan

ainda quedan todavía,

os recordos e os consellos,

que nos deron algún día!


(fin estribillo)`,
  },
  {
    title: "Sakura no vento",
    album: "Noite de Esmorga",
    hasChords: true,
    lyrics: `Lam-SOL /FA-MI


Un día naceu Sakura,

veu coa semente do vento,

eses ollos son meu norte

qué alegría qué momento!


Eu mirabate en silencio,

aprendendo sen querer,

que ás veces os máis pequenos

nos ensinan cómo ser.


Pequena pero ben firme,

co teu xeito teu de pensar,

cando algo non che encaixa

xa se pode preparar.


(Estribillo) x2

FA-DO / SOL-LAm


Pasarán máis de mil anos

en que volva acontecer

unha flor que teña tanto,

tanto tanto que ofrecer!


Eu so quero ver a risa

esa que fai florecer

que amencer sempre acontece

non dubides florecer!

FA-DO-SOL


Lam-SOL /FA-MI


Co pincel tu fas a maxia,

co barro fas as cancións,

levas dentro un universo

que non ten explicación!


Sakura co vento medra,

mais non deixes de crear,

que este mundo xa precisa

xente que saiba soñar.


E debuxas coma nos mangas,

ollos grandes pa mirar,

mundos onde todo doe

pero apréndese a voar.


(Estribillo) x2 FA-DO / SOL-LAm


Pasarán máis de mil anos

en que volva acontecer

unha flor que teña tanto,

tanto tanto que ofrecer!


Eu so quero ver a risa

esa que fai florecer

que amencer sempre acontece

non dubides florecer!

FA-DO-SOL


Non fai falta ser o Gojo,

nin loitar coma Sukuna,

ti xa tes forza por dentro

que non precisa armadura.


Pasarán máis de mil cousas

que aínda están por descubrir

e outras que xa pasan sempre,

nada novo para tí!


E aquí tes a túa casa,

onde sempre fai calor,

aquí é onde naciches

ti xa sabes somos nós!


FA-DO / SOL-LAm


Pasarán máis de mil anos

en que volva acontecer

unha flor que teña tanto

que nos faga renacer.


Eu so quero ver a risa

esa que fai florecer

que amencer sempre acontece

non dubides que estaréi!

FA-DO-SOL


*Din que hai flores que nacen co vento… e que nunca deixan de medrar dentro de ti. *`,
  },
  {
    title: "Toda a terra no cantar",
    album: "Noite de Esmorga",
    hasChords: true,
    lyrics: `"

\\\\[Estrofa 1]

Marchei unha mañá calquera,

xa sen poder mirar atrás,

miña nai quedou na porta vella,

cun sorriso… e ganas de chorar.

\\\\[Estrofa 2]

Aquel río onde eu pescaba

despediume ao carón do mar,

e coma se fose un vello,

non parei de recordar.

\\\\[Estrofa 3]

Fun andando ben dereito,

pouco máis podía facer,

coa maleta pegada ao peito

e moito por aprender!

\\\\[Estribillo - Versión Corta]

Vou e veño, veño e vou,

xa non sei nin onde estou!

Se marchei foi por vivir,

pero lévoo todo aquí!

Ergue o vaso, brinda xa,

por quen non puido quedar,

que onde vaias vas levar…

¡toda a terra no cantar!

\\\\[Estrofa 4]

Alí tiña o pan e o teito,

e un traballo de verdade,

fun quedando pouco a pouco,

o tempo pasa… ¡non hai xeito!


\\\\[Estrofa 5]

Lembranzas da túa terra,

esas non marchan xamais,

pero cando a fame arrea

é valente quen o fai!

\\\\[Estrofa 6]

As lembranzas non se esquecen,

cun bo viño e o lume atrás,

pero quen deixa o fogar,

non pensa máis que en voltar!

\\\\[Estribillo - Versión Corta]

Vou e veño, veño e vou,

xa non sei nin onde estou!

Se marchei foi por vivir,

pero lévoo todo aquí!

Ergue o vaso, brinda xa,

por quen marcha a pelexar,

que onde vaias vas levar…

¡toda a terra no cantar!

\\\\[Puente - El momento de Rosalía]

(La música baja de intensidad, más íntimo)

Como dicía Rosalía,

a saudade aprende a andar,

que un non é só de onde nace…

senón de onde o van lembrar.

\\\\[Estrofa 7 - Subida final]

(Empieza a subir el ritmo y la batería)

Que a terra cando te chama,

non o podes dubidar,

hai portas que non se pechan…

¡que un non marcha por folgar!


\\\\[Estribillo Final - Versión Épica]

(Con toda la banda y coros de taberna)

Vou e veño, veño e vou,

¡xa non sei nin onde estou!

Se marchei foi por vivir,

¡pero lévoo todo aquí!

Ergue o vaso, brinda xa:

¡Por quen non puido quedar!

¡Por quen marcha a pelexar!

¡Por quen non deixa de amar!

¡Por quen se vai sen falar!

¡Por quen se bota ao mar!

¡Que onde vaias vas levar...

¡TODA A TERRA NO CANTAR!


(Coros repitiendo "Toda a terra no cantar" mientras la música se funde con el ruido de la taberna y un brindis final: ¡Saúde!)`,
  },
  {
    title: "O pobre cinchador",
    album: "Noite de Esmorga",
    hasChords: true,
    lyrics: `(Cantiga / Introdución)

Habia en Canido un mozo,

non moi dado a estudar,

marchou logo a Compostela

coa cabeza por armar.

Ficou soñando na estación:

“esta noite pinta amor…”

E os amigos en voz baixa:

“xa chegou o cinchador”.


(Verso)

Na casa dos estudantes

fixeron competición:

salchicha e cervexa fría,

ata perder a razón.

Unha, dúas, tres e catro,

ninguén sabía contar…

cando perdeu dixo rindo:

“imos de esmorga a brindar!”


(Retruso / Estribillo)

Bebe, bebe cinchador,

enche o vaso sen temor,

que entre risas e licor

sempre mandas ti, señor.

Bebe, bebe cinchador,

canta alto esta canción,

que buscando amor perfecto

sempre atopas… confusión.


(Verso)

Nun bar vello en Compostela

coñeceu unha muller,

ollos negros, risa tola,

boa noite pra perder!

Bailaron ata que o día

veu chamar polo balcón,

e ao espertar dixo abraiado,

“de quen será este condón!”


Acordes: Sol/Re/Do/Re

(Verso)

E así foi media vida

entre festa e corazóns,

cada moza parecía

a mellor das ilusións.

Pero ao pouco tempo sempre

rompía aquela relación,

dicía: “non é a perfecta…

seguirei na expedición”.


(Retruso / Estribillo)

Bebe, bebe cinchador,

que esmorga é o mellor,

entre risas e licor

mandas sempre si señor.

Bebe, bebe cinchador,

canta alto esta canción,

que buscando amor perfecto

sempre medra a confusión


(Final de taberna)

Agora anda polo Brasil

fotos cheas de calor,

a piscina e caipiriña

e nos mollados si señor!

Pasaron noites e risas,

fume, canción e licor,

e ao final baixa a cabeza:

“son un pobre soñador.”

(Retruso / Estribillo)

Bebe, bebe cinchador,

que esmorga é o mellor,

entre risas e licor

mandas sempre si señor.

Bebe, bebe cinchador,

canta alto esta canción,

que buscando amor perfecto

“son un pobre soñador.”`,
  },
  {
    title: "Amor dun día",
    album: "A xente non cambia",
    hasChords: true,
    lyrics: `G             D

 Era unha noite de inverno,

Em            C

 nunha cidade de pedra,

G             D

pois as rúas xa pedían

Em            C

algo de licor nas veas.

 G             D

 Fun andando cos amigos,

Em            C

 con moitas gañas de festa,

G             D

pois por fin xa rematamos,

 Em            C

 aquelo que menos presta!

 G             D

Esas noites non se esquecen,

Em            C

 eras libre como as serpes,

G             D

pois na cabeza non tiñas,

Em            C

 nin horarios nin deberes.

 G             D

Camiñando pola rúa,

Em            C

á luz das farolas vellas,

G             D

 pedras molladas brillando,

Em            C

 era noite de lua chea!

\\\\[Estribillo]

G             D

Foi un bico de xeo e lume ,

Em            C

coma o vento que chegou,

G             D

 xa era tarde aquela noite,

Em            C

e marchaches xa co sol.

G             D

 Amor de inverno dun día,

Em            C

sen promesas sen razón,

G             D

máis quedaron para sempre,

 Em            C

 pegadas no corazón!

 G             D

Fomos sombra e fomos lúa,

 Em            C

antes de votar a andar,

G             D

o que foi da súa vida,

Em            C

 iso non sabrei xamáis!

 G             D

Os amigos xa marchaban,

Em            C

cada quen para o seu lar,

G             D

 máis eu tiña a derradeira,

Em            C

 copa por se rematar!

 G             D

E naquel Sitio nos vimos,

 Em            C

 eran cousas do azar,

G             D

 quen podía imaxinarse,

Em            C

que un bico nos imos dar!

\\\\[Estribillo]


 G             D

 Agardo que o vento leve


Em            C

os teus soños ata o mar,

G             D

e que por fin atoparas

Em            C

un amor que dure máis!

 G             D

Nunca souben do teu nome,

Em            C

 nin tampouco onde vas,

G             D

 mais desexo que na vida

Em            C

 sexas libre coma o mar!

\\\\[Final Chorus]

G             D

Foi un bico de xeo e lume,

Em            C

 coma o vento que chegou.

G             D

Xa era tarde aquela noite,

Em            C

e marchaches xa co sol.

G             D

Amor de inverno dun día,

Em            C

 sen promesas, sen razón.


G             D

 Máis quedaron para sempre

Em            C

pegadas no corazón.

(pegadas no corazón) (pegadas no corazón)


“`,
  },
  {
    title: "Cousas do Demo",
    album: "A xente non cambia",
    hasChords: true,
    lyrics: `| G | D | Em | C |

| G | D | C  | D |

G

E que pasaría aquél día,

D

que ata o Demo me dicía,

Em

hoxe é mellor que non saias,

C               D

deixa a troula pra outro día!


G

Algo pasaba no corpo,

D

que ata a sangue percorría,

Em

sitios polos que non anda,

C               D

quen sabía quen sabía!


G

Xunteime xa cos amigos,

D

era tarde, noite fría,

Em

cousas malas que aprendías,

C               D

tamén boas iso é vida!

\\\\[Retrouso]

G

E o Demo, vendo tal vida,

D

moito, moito nos sorría,

Em

mentres nós cos seus cantares,

C               D

esa esmorga acontecía!


G

Inda o Demo non sabía,

D

moi ben porque alí sorrían,

Em

mais na Rúa do Sol agarda,

C               D

o viño, a caña e a alegría!

G

Uns chegaban xa ben antes,

D

outros tarde pra cantina,

Em

máis aquí ninguén agarda,

C               D

iso non cambia na vida!

G

Mentres tanto alá na barra,

D

Óvalo que se chamaba,

Em

entre futbolíns e risas,

C               D

a corbata vai manchada!

G

Pouco importaba esa mancha,

D

Rúa do Sol nos agardaba,

Em

e con semellante tropa,

C               D

a noite non remataba!


\\\\[Retrouso]


Em

E xa case sen durmir,

C

e o sol petando na fiestra,

G

lembranzas da Noitevella,

D

aínda perduran na testa!

Em

Pois na praia de San Xurxo,

C

a pachanga non faltaba,

G

nin o Demo o pode crer,

D

resaca mellor non ter!

Em

Non te esquezas daquel día,

C

non o volvas a intentar!

G

Pois co Demo ese día,

D

aprendemos a xogar!


\\\\[Retrouso Final]`,
  },
  {
    title: "Cuncas de lume",
    album: "A xente non cambia",
    hasChords: true,
    lyrics: `(Intro - Am - G - F - E  (x2)


Uh-oh…

Am

non hai volta atrás esta noite…


(Verso 1)


Am                             G

Baixa o sol coma un puño no val,

                F               E

cheira a fume, queimada que vai,

Am                             G

uns falaban dun conxuro tal,

                F               E

que afastaba o mal daquel lugar!


Am                             G

Xente rota por dentro e por fóra,

                F               E

algúns fuxen da súa propia memoria,

Am                             G

outros coseron medo coa risa,

                F               E

e hai quen perde así toda a súa vida!


(Pre-estribillo – subindo tensión)


F                          G

E cando nos cae a noite sen pedir perdón,

Am                         E

arde na memoria preto, historias no corazón!


(Estribillo – explosivo)


Am                  G

¡Berran forte ao seu carón!

F                   G

¡co poder deste licor!

Am                  G

tan quente que fai o lume

F                   E

mouchos, coruxas non son!


Am                  G

E coas cuncas cheas de lume,

F                   G

faise a nosa tradición,

Am                  G

pois ó brindar nesas cuncas,

F                 E

meigas afastadas son!

Am                G

meigas afastadas son!


(Verso 2)


Am                             G

Pois logo da sardiñada, pra facer a dixestión,

                F               E

que nunca falte a queimada, nas cuncas da tradición!

Am                             G

Risas que baten axiña, ¡coma o bater dun tambor!

                F               E

pois naquela noite todos, liberamos nosa dor!


(Pre-estribillo – subindo tensión)


(Estribillo – explosivo)


(Verso 3 - Con ritmo machacón)


Am                             G

E berran forte todos eles, coma un só feitizo ardendo,

                F               E

cada quen coa súa gorxa... e o mal vaise desfacendo!

Am                             G

As lapas saltan no pote, todos salvados xa están!

                F               E

Porque coas cuncas de lume rompe ese medo ancestral!

F                          G

As cuncas cheas de lume… hoxe hai festa ata rachar!


(Verso 4 - Baja la intensidad, más melódico)


Am                             G

E entre o fume vense ás veces, moitas verdades brillar,

                F               E

amores perdidos que aínda, hai quen pensa que han voltar.

Am                             G

Máis naquel intre atopamos, que a queimada leva xa,

                F               E

máis azucre do debido, ¡bótalle un chisco máis!

F                                      G

pero ninguén quere mirar cara atrás,

Am                                     E

porque esta noite… só hai que queimar.


(Último estribillo – final épico, todo o grupo)`,
  },
  {
    title: "Marcos da Leira",
    album: "A xente non cambia",
    hasChords: true,
    lyrics: `**\\\\[INTRO]**

**G - D7 - G - G**


**\\\\[VERSO 1]**

**G**

Xa cho dixen o outro día,

**D7**

que non me toques os marcos,

**D7**

máis che vale facer caso,

**G**

non me toques o carallo.


**G**

Que as cousas da miña terra,

**D7**

mellor que non as souberas,

**D7**

ando co sacho na leira,

**G**

máis te vale non o esquezas.


**\\\\[ESTRIBILLO 1]**

**C**

Non me veñas con parvadas,

**G**

que a paciencia se esgotou,

**D7**

que o que sementas na terra,

**G**

iso mesmo eu che dou!


**C**

Era voz da terra brava,

**G**

que non deixa de berrar,

**D7**

non te esquezas do pasado,

**G**

vai rañar e vai rañar.


**D7**

Pois quen rouba un palmo a terra,

**G**

rouba a alma do lugar!

**D7**

Que non me toques os marcos,

**G**

loita obreira non querrás!


**G**

PORQUE CANDO O POBO FALA,

**D7**

NON SÓ É MURMURAR,

**D7**

QUE POR SABER TI NON SABES,

**G**

NIN PATACAS XA PRANTAR!


**G**

E polo furado da porta,

**D7**

non me volvas albiscar,

**D7**

que coa vara das das vacas,

**G**

xa te hei de escorrentar.


**\\\\[ESTRIBILLO 2]**


**G**

E aquel día no furancho,

**D7**

dese pobo somos nós,

**D7**

por fin ti ben entendiches

**G**

que a terra fala por nós.


**G**

Pode ser que aquel día

**D7**

a cabeza che mudou,

**D7**

e que cun grolo de viño

**G**

amañamos entre os dous.


**\\\\[CIERRE]**

**C**

Hai feridas nesta terra

**G**

que non queren pechar máis,

**D7**

cada pedra ten memoria.

**G**

Para cada marco un dono hai.


**\\\\[FINAL]** **G - D7 - G**`,
  },
  {
    title: "As mulleres da Terra",
    album: "A xente non cambia",
    hasChords: false,
    lyrics: `Nacín coa forza do vento

co sal prendida na pel,

ben cedo aprendín na vida,

ninguén manda no meu ser!


Teño as mans feitas de pedra,

contaba aquela muller,

teño os ollos xa ben fartos,

melhor hai cousas non ver!!


Nas cinco esquinas do mundo

vai camiñando o meu pé,

levo historias nas feridas

que a chuvia non pode ver.


Son mareas de lembranzas

que regresan outra vez,

son as voces que me empurran

a quedar e a pertencer.


Ese berro que arrecende,

moi preto á beira do mar,

eran voces que aínda escoitas,

meigas eran do lugar!


Houbo noites sen estrelas,

houbo días sen cantar,

mais elas seguían ergueitas,

non as podían parar…


(Estribillo)

Poden pecharnos as portas,

poden esquecer de Nós,

poden finxir que non somos,

mais seguimos sendo Nós,

Hai mulleres nesta terra,

na memoria e no suor,

nas historias que nos deixan

latexando o corazón.


Hai pedras que gardan nomes

que o tempo quixo afogar,

tamén voces baixo a leira,

que non se deixan calar.

Porque cando o vento soa,

fraga, souto e piñeiral,

voltan as mans silenciadas,

a falar neste lugar!

(Estribillo)

Poden pecharnos as portas,

poden esquecer de Nós,

poden finxir que non somos,

mais seguimos sendo Nós,

Hai mulleres nesta terra,

na memoria e no suor,

nas historias que nos deixan

latexando o corazón.

(fin )

Elas agardan no porto,

dos que marchan cara ao mar,

vida dura, vida chea,

que ninguén puido dobrar.

Aprendín da Rosalía,

que as tristuras fan cantar,

que hai pobos que nunca morren,

pois teñen o seu falar!


(Estribillo)

Poden pecharnos as portas,

poden esquecer de Nós,

poden finxir que non somos,

mais seguimos sendo Nós,

Hai mulleres nesta terra,

na memoria e no suor,

nas historias que nos deixan

latexando o corazón.

(fin )`,
  },
  {
    title: "Latexo Peregrino",
    album: "A xente non cambia",
    hasChords: true,
    lyrics: `INTRO


| G | D | Em | C |

| G | D | C | D |


(G) Un día comezas andar,

(D) pouco a pouco es peregrino!

(Em) Pois o camiño os teus pés,

(C) moitas historias van ver!


(G) Cada quen fixo o camiño,

(D) ao seu modo ao seu andar,

(Em) Non hai fin, só percorrido,

(C) moito tempo compartido!


(Em) Van camiño da lembranza,

(C) van en busca do seu ser!

(G) Máis o que foi no camiño,

(D) todo aquilo non vas crer!


(G) Mil historias no camiño,

(D) día e noite xuntos van,

(Em) Son os pobres peregrinos,

(C) sempre sen mirar atrás.


(C) ¡Ei, Santiago, xa se sente!

(G) Canta xunta toda a xente!

(D) Non hai meta nin destino,

(Em) só un latexo peregrino!


(C) ¡Ei, Santiago, xa se sente!

(G) Canta xunta toda a xente!

(D) Non hai meta nin destino,

(C) D              G

só un latexo peregrino!


(G) Era un mozo peregrino,

(D) que empezou só o camiño,

(Em) mais logo de andar un pouco,

(C) xa ía arrimado cos outros!


(G) Moitas amizades fixo,

(D) desas que se han de lembrar,

(Em) pois xuntos faise o camiño,

(C) xa na noite un grolo vai!


(G) Moitas vieiras peregrino,

(D) Compostela está a agardar,

(Em) ti camiña peregrino,

(C) coa túa vara pra axudar!


(G) Mil historias no camiño,

(D) día e noite xuntos van,

(Em) Son os pobres peregrinos,

(C) sempre sen mirar atrás.


(C) ¡Ei, Santiago, xa se sente!

(G) Canta xunta toda a xente!

(D) Non hai meta nin destino,

(Em) só un latexo peregrino!


(C) ¡Ei, Santiago, xa se sente!

(G) Canta xunta toda a xente!

(D) Non hai meta nin destino,

(C) D              G

só un latexo peregrino!


(Em) No Cebreiro sopra o vento,

(C) en Melide hai polbo á feira,

(G) En cada taberna tiñas,

(D) peixe, carne ou zamburiñas!


(Em) Hai quen camiñaba só,

(C) hai quen roda ata o solpor,

(G) Hai quen perdeu o seu norte,

(D) aquí vese andar mellor.


(G) Nas costas pesa a mochila,

(D) mais esta paisaxe brilla,

(Em) xa estás perto meu amigo,

(C) din que hai viño nesta vila!


(G) Mil historias no camiño,

(D) día e noite xuntos van,

(Em) Son os pobres peregrinos,

(C) sempre sen mirar atrás.


(C) ¡Ei, Santiago, xa se sente!

(G) Canta xunta toda a xente!

(D) Non hai meta nin destino,

(Em) só un latexo peregrino!


(C) ¡Ei, Santiago, xa se sente!

(G) Canta xunta toda a xente!

(D) Non hai meta nin destino,

(C) D              G

só un latexo peregrino!


(G) Desde Sarria a Compostela,

(D) desde o mundo ata a taberna,

(Em) Cada paso conta historias,

(C) cada noite xa é unha festa!


(G) E cando soan as campás,

(D) xa na praza do Obradoiro,

(Em) ninguén chega sendo o mesmo,

(C) leva o Camiño no peito!


(C) ¡Ei, Santiago, xa se sente!

(G) Canta xunta toda a xente!

(D) Non hai meta nin destino,

(Em) só un latexo peregrino!


(C) ¡Ei, Santiago, xa se sente!

(G) Canta xunta toda a xente!

(D) Non hai meta nin destino,

(C) D              G

só un latexo peregrino!


FINAL


| Em | C | G | D |

| Em | C | D | G |`,
  },
  {
    title: "Tatuaxes na Memoria",
    album: "A xente non cambia",
    hasChords: true,
    lyrics: `\\\\[Intro]  Am  F  C  G (x2)


\\\\[Verse 1]


Am                    F           C              G

Aínda lembro ese arrecendo, daquela terra mollada,

Am                   F           C              G

eran as primeiras choivas, en Galicia eu estaba!

Am                   F           C              G

Hai lembranzas que quedaron, por algún motivo foi,

Am                 F           C                    G

nese intre que pasaron, non se esquecen con razón!


\\\\[Verse 2]


Am          F              C              G

Era orballo, chuviscada, choiva e moita treboada,

Am               F         C             G

máis tarde ou cedo sempre ese sol se albiscaba!

Am                F        C            G

Como os pinos que lle cantan ó vento de madrugada,

Am               F         C                 G

a miña alma tamén canta despois da gran treboada.


\\\\[Chorus]


C               G        Am                   F

Tatuaxes na memoria, que o tempo non os borrou.

C                 G        Am               F

sementes de nova vida que a miña alma gardou!

C                  G        Am                  F

E se ves que chega o amor dos que prefiren quedar,

C                  G          Am                 F    (Am)

faino medrar no teu peito… que non se perda no mar.


\\\\[Verse 3] (Suave, arpegiado)


Am                 F          C               G

A voz dos avós na veira, un bico ao pé do mar,

Am                 F          C                 G

un amigo que te chama, e nunca deixou de estar.

(Con fuerza)


Am                  F         C                   G

Que fuxan as vellas dores, que medren as herbas novas,

Am                  F         C                    G

que a vida cura con flores as cicatrices máis fondas.

Am                 F          C               G

Despois dunha treboada, a terra volve a brotar,

Am                F          C                 G

o vento limpa a mirada, ¡volta sempre a camiñar!

G

¡volta sempre a camiñar!


\\\\[Chorus]

\\\\[Verse 4]

Am               F        C                G

Cada bágoa foi un río e a nosa alma navegou,

Am                 F        C                 G

cada sorriso é unha flor que neste peito espertou.

Am                   F        C                G

Como os trazos dun debuxo que pintan a realidade,

Am                   F        C                 G

miro o mundo cos teus ollos, con orgullo e dignidade.


\\\\[Bridge] (Marcando los golpes)

F                  G          Am               C

Miña terra, meu sorriso, herba verde do camiño,

F                 G          Am                 E7

se caín, hoxe me ergo coma o brote do piñeiro.

F                   G          Am                 C

Que a memory ten tatuaxes, pero o peito ten sementes,

F                  G          Am                 E7

e o amor que levas dentro fainos libres e valentes.

F                         G          Am                      C

Non hai inverno que nos cegue, nin vento que nos mude o norte,

F                 G          Am           G     F       G

somos fillos desta terra, somos ceibes, somos fortes!


\\\\[Chorus]...que non se perda no mar!(x3)


C               G        Am                   F

Tatuaxes na memoria, que o tempo non os borrou.

C                 G        Am               F

sementes de nova vida que a miña alma agardou!

C                  G        Am                  F

E se ves que chega o amor dos que prefiren quedar,

C                  G          Am                 F

faino medrar no teu peito… que non se perda no mar!


\\\\[Outro]


Am                 F

...que non se perda no mar!

C                  G

...que non se perda no mar!

Am                 F        Am

...que non se perda no mar!


"`,
  },
  {
    title: "Sen pedir nada por nada",
    album: "A xente non cambia",
    hasChords: true,
    lyrics: `\\\\### **Letra con Acordes**


**(Intro Instrumental - Ritmo alegre y marcado)**

**G - C - D - G**

**G - C - D - G**


**Estrofa 1**

**G**

Era unha aldea pequena,

**C**

dun pobo que hei de lembrar,

**D**

nunha vella casa de pedra

**G**

moita familia a xantar.

**G**

Alí case todos os días

**C**

comían caldo a fartar,

**D**

pois a carne se curaba,

**G**

e a matanza hai que agardar!


**Estrofa 2**

**G**

Os ovos ían pra feira,

**C**

feira das Somozas, vai,

**D**

cos froitos de todo o ano

**G**

que a terra sempre lles dá.

**Em**

Abaixo viven as vacas,

**Bm**

os porcos xusto ao entrar,

**C**

e subindo as escaleiras

**D**

arriba vas descansar.


**ESTRIBILLO

**G**

¡Ai, a Panda, a miña aldea!

**C**

Onde o lume nunca para,

**D**

onde o pobo se axudaba

**G**

cun sorriso na mirada.

**Em**

Xuntos todos no camiño,

**Bm**

¡sen pedir nada por nada!

**C**

compartindo pan e viño,

**D** (un rasgueo fuerte hacia abajo y frena)

coa colleita ben gardada.


**(Interludio rápido)**

**G - C - D - G**


**Estrofa 3**

**G**

Ao carón está a cociña

**C**

cunha lareira de pedra,

**D**

as ovellas polo monte,

**G**

as galiñas pola herba.

**G**

Saían todas de paseo

**C**

pola mañá tan tranquilas,

**D**

e só con darlles un berro

**G**

pra a casa volven axiña.


**Estrofa 4 (A gran anécdota)**

**G**

E ata que un día aconteceu,

**C**

que unha das oito irmás,

**D**

foi coas vacas a lindar

**G**

e no monte deulle vida.

**Em**

E volveu co seu meniño,

**Bm**

outro máis para a familia,

**C**

coas vacas detrás,

**D**

nun feliz parto de día.


**(Se repite el ESTRIBILLO con el doble de energía)**


**Estrofa 5 (Final)**

**G**

Naquela feira de Somozas,

**C**

alí foron a vender,

**D**

as cousas que eles tiñan

**G**

que a terra lles deu a ben.

**G**

Era xente moi humilde

**C**

que do campo eles vivían

**D**

e cos veciños da contorna

**G**

o pouco que había compartían.


**Outro (Final épico aumentando velocidad)**

**G - C - D - G** (Repetir hasta terminar en un golpe seco en **G**).`,
  },
  {
    title: "Os dous do bote",
    album: "A xente non cambia",
    hasChords: true,
    lyrics: `(Ritmo folk rock enérgico)

G - C - D - G (x2)


G                              C

Era un día xa esperado, no que Lugo estaba a encher,

D                             G

coa ilusión daquela esmorga que agardaba acontecer!

G                                 C

Poucos cartos ían no peto, festas de non esquecer,

D                             G

desas que levas por dentro, moitas mozas iamos ver!


Em                        C

Nunha tasca da Muralla comezamos a brindar,

D                          G

e só cun primeiro brinde xa non se podía parar!

Em                            C

Viño branco, viño tinto, outra rolda para alá,

D                             G

porque cando un leva o bote faise o xefe do lugar!


\\\\[Estribillo / Chorus]

 **G**                       **C**

¡Máis daquela nos perdemos, que nos busquen eles xa!

D                    G

Moitos cartos nos levamos, as birras van faltar! (¡Ey!)

G                       C

Pois hoxe temos o bote, hoxe non hai que aforrar!

D                         G

Noite de viños e risas, moza convidada estás!

Em                         C

Mentres tanto os compañeiros sen parar de preguntar:

D                        G

"¿Alguén viu os dous do bote? Onde carallo estarán?"


G                             C

E nós mortos xa coa risa, sen intención de voltar,

D                          G

porque a festa era tan boa que buscar non vou buscar!

G                             C

Son esas noites de troula, que non podes agardar,

D                         G

lúa de bailes e risas, que atopar vas atopar!


Em                          C

E os amigos de verdade, sempre se volven xuntar,

D                            G

máis do bote aquela noite, ¡non soubemos nada máis!


\\\\[Estribillo / Chorus]


Puente (Subidón Folk)

         **G**                     **C**

¡Que nos busquen na cidade! Esta noite é San Froilán,

D                            G

que despois de tanta troula xa nos coñecen de máis.

Em                       C

E o raiar do Sol na pedra, amencía na muralla...

D                            G

pois logo desa batalla, ¡dese bote non quedaba!


\\\\[Estribillo Final]




\\\\[Outro - Más lento e intenso]

  **G**                  **C**

O bote quedou baleiro, pero o peito vai ben cheo,

D                       (parada)      G

¡que noites coma esta en Lugo... déixante preto do ceo!


(Termina con un rasgueo seco y fuerte en G)`,
  },
  {
    title: "Nos teus ollos",
    album: "A xente non cambia",
    hasChords: true,
    lyrics: `(G) (D) (Em) (C) (x2)


(G)Era unha tarde (D)calquera

(Em)estaba ledo (C)sen querer,

(G)camiñando pola (D)rúa,

(Em)cousas que non (C)podes crer!

(G)Quen sabía quen (D)soupera

(Em)que alí nos (C)íamos ver,

(G)cada quen fai seu (D)camiño,

(Em)máis axudas non (C)vas ter…


(G)Ti falabasme (D)amodo,

(Em)cuns ollos que (C)fan tremer,

(G)eran azuis coma o (D)ceo,

(Em)eu non o podía (C)crer…


\\\\## Estribillo


(G)Nos teus ollos (D)vexo a vida,

(Em)que se agocha (C)sen razón,

(G)eras luz entre a (D)negrura,

(Em)agora so queda a (C)dor!

(G)Nos teus ollos (D)vai perdida,

(Em)toda a forza que (C)quedou,

(G)eras alguén con (D)futuro,

(Em)mais a vida che (C)fallou.


(G) (D) (Em) (C) (x1)


(G)Unha moza (D)torturada

(Em)polas malas (C)decisións,

(G)unha vida (D)solapada,

(Em)que non tiña (C)solución…


(G)Máis naquel intre (D)falamos,

(Em)como dous amigos (C)que,

(G)xa facía moito (D)tempo

(Em)que inda quedaban (C)por ver.


(G)E nese preciso (D)instante

(Em)comencei a (C)comprender,

(G)que o tempo te leva (D)tarde

(Em)as veces a ser (C)quen es!


\\\\## Estribillo


(G)Nos teus ollos (D)vexo a vida,

(Em)que se agocha (C)sen razón,

(G)eras luz entre a (D)negrura,

(Em)agora so queda a (C)dor.

(G)Nos teus ollos (D)vai perdida

(Em)toda a forza que (C)quedou,

(G)eras alguén con (D)futuro,

(Em)mais a vida che (C)fallou.


\\\\## Puente

(Am)Porque todos (C)cometemos

(G)moitos erros sen  (D)saber,

(Am)pero hai xente que o (C)paga

(G)todo xunto dunha (D)vez!


(Am)Tanta amargura (C)fixeches,

(G)de pronto no (D)corazón,

(Am)que eu tiven que (C)convidarte,

(G)pois ti levabas (D)razón.


(Am)Precisabas dun (C)amigo

(G)un grolo de (D)corazón,

(Am)eu so puiden darte (C)cartos

(G)a tua aperta mos (D)pagou!


\\\\## Estrofa 3


(G)E se un día (D)escoitas isto,

(Em)agardo de (C)corazón

(G)que a tua vida xa (D)cambiara,

(Em)que atoparas (C)solución.


(G)Pois naqueles ollos (D)brilla

(Em)a tristura e a (C)emoción,

(G)e os consellos que (D)nos dimos,

(Em)sinceros coma a (C)razón!


\\\\## Estribillo Final

(Máxima intensidad)


(G)Nos teus ollos (D)vexo a vida,

(Em)que se agocha (C)sen razón,

(G)eras luz entre a (D)negrura,

(Em)agora so queda a (C)dor.

(G)Nos teus ollos (D)vai perdida,

(Em)toda a forza que (C)quedou,

(G)eras alguén con (D)futuro,

(Em)mais a vida che (C)fallou!


(G)E se algún día te (D)levantas

(Em)desta fría (C)escuridade,

(G)nos teus ollos (D)vexo a vida,

(Em)volve a túa (C)claridade!`,
  },
  {
    title: "Voa ceibe, ti gaivota",
    album: "Singles",
    hasChords: true,
    lyrics: `\\\\[Verso 1]

Un vello me dixo un día,

cada quen ten a súa forza,

a súa maneira de andar,

o seu xeito… a súa forma de voar!


Pois calquer gaivota sabe,

que ás veces mellor quedar,

se ruxe a treboada,

a choiva te vai levar!


Só tes que agardar un chisco,

deixas feito o teu camiño,

pois por onde sempre voas…

voltan as vellas historias!


\\\\[Estribillo]

Voa ceibe, ti Gaivota,

non te deixes arrastrar,

pois este vento da costa

sempre, sempre vai voltar!


Pois tes o niño nas rochas

e alí te están a agardar

os teus meniños pequenos,

¡cada quen ten seu fogar!


\\\\[Verso 2]

Miña gaivota querida,

sempre a terra a sinalar!

Vai ao carón do meu bote,

¡non me deixes de guiar!


Pois sempre que limpo o peixe,

non me esquezo de te ollar,

como vas detrás do barco…

¡cos golfiños a saltar!


E ao chegar por fin ao porto,

ainda estamos a albiscar,

o arrecendo do teu corpo,

polo ceo a voar!


\\\\[Estribillo]

Voa ceibe, ti Gaivota,

non te deixes arrastrar,

pois este vento da costa

sempre, sempre vai voltar!


Pois tes o niño nas rochas

e alí te están a agardar

os teus meniños pequenos,

¡cada quen ten seu fogar!


\\\\[Verso 3]

Aprendín da túa vida,

sen palabras ensinar,

que hai ventos que non se vencen...

hai que saber agardar.

E despois da noite escura,

sempre volve clarexar,

igual ca branca gaivota

que non deixa de voar!!!`,
  },
]

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
    },
    hero: {
      tagline: "Folk galego en fusión",
      subtitle:
        "Dous discos, dous singles, unha mesma raíz. Escoita a Son Ceibe onde queiras.",
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
    shop: {
      title: "Merca o disco",
      body: "Moi pronto poderás mercar os discos de Son Ceibe en formato físico dende aquí.",
      soon: "Proximamente",
      notify: "Avisádeme",
    },
    lyrics: {
      title: "Letras",
      subtitle: "Todas as letras das nosas cancións. Descárgaas en .txt para ensaiar ou tocar.",
      download: "Descargar .txt",
      preview: "Ver letra",
      chords: "Con acordes",
      allAlbums: "Todos os álbums",
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
    },
    hero: {
      tagline: "Folk gallego en fusión",
      subtitle:
        "Dos discos, dos singles, una misma raíz. Escucha a Son Ceibe donde quieras.",
      listen: "Escuchar",
      discover: "Conocer al grupo",
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
    lyrics: {
      title: "Letras",
      subtitle: "Todas las letras de nuestras canciones. Descárgalas en .txt para ensayar o tocar.",
      download: "Descargar .txt",
      preview: "Ver letra",
      chords: "Con acordes",
      allAlbums: "Todos los álbumes",
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