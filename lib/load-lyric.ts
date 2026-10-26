import type { SongLyric } from "@/lib/lyrics/types"

const requests = new Map<string, Promise<SongLyric>>()
export function loadLyric(id: string): Promise<SongLyric> {
  const existing = requests.get(id)
  if (existing) return existing
  const request = fetch("/api/letras/" + encodeURIComponent(id)).then(async response => {
    if (!response.ok) throw new Error("No se pudo cargar la letra")
    return response.json() as Promise<SongLyric>
  }).catch(error => { requests.delete(id); throw error })
  requests.set(id, request)
  return request
}
