import { LanguageProvider } from "@/components/language-provider"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { AlbumsSection } from "@/components/albums-section"
import { AboutSection } from "@/components/about-section"
import { ShopSection } from "@/components/shop-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <LanguageProvider>
      <SiteHeader />
      <main>
        <HeroSection />
        <AlbumsSection />
        <AboutSection />
        <ShopSection />
      </main>
      <SiteFooter />
    </LanguageProvider>
  )
}
