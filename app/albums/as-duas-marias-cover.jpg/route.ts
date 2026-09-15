import { readFileSync } from "node:fs"
import { join } from "node:path"

export const runtime = "nodejs"
export const dynamic = "force-static"

export async function GET() {
  const base64 = readFileSync(
    join(process.cwd(), "public", "albums", "as-duas-marias-cover.avif.b64"),
    "utf8",
  ).trim()

  const image = Buffer.from(base64, "base64")

  return new Response(image, {
    headers: {
      "Content-Type": "image/avif",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  })
}
