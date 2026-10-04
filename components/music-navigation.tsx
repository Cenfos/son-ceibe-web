"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/components/language-provider"

export function MusicNavigation() {
  const pathname = usePathname()
  const { tr } = useLanguage()
  const links = [{ href: "/singles", label: tr.nav.singles }, { href: "/albums", label: tr.nav.albums }]
  return <nav aria-label={tr.nav.music} className="mx-auto flex max-w-6xl gap-3 px-4 pt-8 md:px-6">
    {links.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} className={`rounded-full border border-border px-5 py-2 text-sm font-semibold transition-colors ${pathname === link.href ? "bg-primary text-primary-foreground" : "bg-card hover:bg-secondary"}`}>{link.label}</Link>)}
  </nav>
}
