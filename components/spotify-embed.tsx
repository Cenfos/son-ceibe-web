"use client"

type SpotifyEmbedProps = {
  albumId: string
  title: string
}

export function SpotifyEmbed({ albumId, title }: SpotifyEmbedProps) {
  if (!albumId) return null

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <iframe
        title={`Reproductor de Spotify: ${title}`}
        src={`https://open.spotify.com/embed/album/${albumId}?utm_source=generator&theme=0`}
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="block"
      />
    </div>
  )
}
