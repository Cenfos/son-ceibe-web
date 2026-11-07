import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero-section"
import { HomeHighlights } from "@/components/home-highlights"
import { siteDescription, siteTitle } from "@/lib/site"

const socialImage = {
  url: "/portada-social",
  width: 1200,
  height: 630,
  alt: "Son Ceibe · Folk galego en fusión",
}

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: siteTitle,
    description: siteDescription,
    siteName: "Son Ceibe",
    locale: "gl_ES",
    url: "/",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [socialImage],
  },
}

export default async function Page() {
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
