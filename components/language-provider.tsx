"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"
import { t, type Lang } from "@/lib/content"

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  tr: (typeof t)[Lang]
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Gallego por defecto
  const [lang, setLangState] = useState<Lang>("gl")

  useEffect(() => {
    const stored = window.localStorage.getItem("son-ceibe-lang")
    if (stored === "gl" || stored === "es") {
      setLangState(stored)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang === "gl" ? "gl" : "es"
  }, [lang])

  const setLang = (next: Lang) => {
    setLangState(next)
    window.localStorage.setItem("son-ceibe-lang", next)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, tr: t[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage debe usarse dentro de LanguageProvider")
  }
  return ctx
}
