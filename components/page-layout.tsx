import type { ReactNode } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export function PageLayout({ children }: { children: ReactNode }) {
  return <><SiteHeader /><main className="pt-16">{children}</main><SiteFooter /></>
}
