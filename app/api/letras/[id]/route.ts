import { publicLyricRecords } from "@/lib/lyrics-library"

export const dynamic = "force-static"
export const dynamicParams = false
export function generateStaticParams() { return publicLyricRecords.map(({ id }) => ({ id })) }
export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const entry = publicLyricRecords.find(entry => entry.id === id)
  if (!entry) return Response.json({ error: "Letra non dispoñible" }, { status: 404 })
  return Response.json(entry.song, { headers: { "Cache-Control": "public, max-age=3600", "X-Robots-Tag": "noindex" } })
}
