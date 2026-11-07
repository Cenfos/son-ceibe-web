import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

export const dynamic = "force-static"

export async function GET() {
  const logo = await readFile(join(process.cwd(), "public", "son-ceibe-logo-transparent-v2.png"))
  const logoUrl = "data:image/png;base64," + logo.toString("base64")

  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", alignItems: "center", gap: 52, padding: 65, background: "#1c2620", color: "#f2ede1" }}>
      <div style={{ display: "flex", flexShrink: 0, padding: 24, borderRadius: 28, background: "#f2ede1" }}>
        <img src={logoUrl} width={320} height={320} alt="" />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ color: "#d1b987", fontSize: 25, letterSpacing: 4 }}>MÚSICA EN GALEGO</div>
        <div style={{ fontSize: 90, fontWeight: 700, lineHeight: 1.15, marginTop: 14 }}>Son Ceibe</div>
        <div style={{ fontSize: 39, marginTop: 16 }}>Folk galego en fusión</div>
        <div style={{ color: "#d1b987", fontSize: 26, marginTop: 38 }}>sonceibe.es</div>
      </div>
    </div>,
    { width: 1200, height: 630 },
  )
}
