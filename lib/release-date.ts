import type { Lang } from "@/lib/content"

// Fixed month names keep SSR and browsers identical regardless of ICU support.
const months = {
  gl: ["xaneiro", "febreiro", "marzo", "abril", "maio", "xuño", "xullo", "agosto", "setembro", "outubro", "novembro", "decembro"],
  es: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
} as const

export function formatReleaseDate(date: string, lang: Lang) {
  const [year, month, day] = date.split("-")
  return `${Number(day)} de ${months[lang][Number(month) - 1]} de ${year}`
}
