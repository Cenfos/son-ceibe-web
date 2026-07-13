"use client"

import { ShoppingBag } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function ShopSection() {
  const { tr } = useLanguage()

  return (
    <section id="shop" className="scroll-mt-16 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
        <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <ShoppingBag className="size-6" aria-hidden="true" />
        </div>
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          {tr.shop.soon}
        </span>
        <h2 className="mt-3 text-balance font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          {tr.shop.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {tr.shop.body}
        </p>
        <button
          type="button"
          disabled
          className="mt-8 inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground opacity-60"
        >
          {tr.shop.notify}
        </button>
      </div>
    </section>
  )
}
