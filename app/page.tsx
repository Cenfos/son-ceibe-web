import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero-section"
import { HomeHighlights } from "@/components/home-highlights"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <HomeHighlights />
      </main>
      <SiteFooter />
    </>
  )
}
