"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Send, CheckCircle, AlertCircle, Mail, User, MessageSquare, Tag } from "lucide-react"

export function ContactSection() {
  const { tr, lang } = useLanguage()
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    // Formspree endpoint — cámbialo por el tuyo en https://formspree.io
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaqrkjzl"

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (status === "success" || status === "error") setStatus("idle")
  }

  return (
    <section id="contact" className="scroll-mt-16 bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-4 md:px-6">
        <div className="mb-14 text-center">
          <h2 className="text-balance font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            {tr.contact.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {tr.contact.subtitle}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-10"
        >
          {/* Nombre */}
          <div>
            <label htmlFor="name" className="mb-1.5 flex items-center gap-2 text-sm font-medium text-foreground">
              <User className="size-4 text-accent" />
              {tr.contact.name}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent"
              placeholder={tr.contact.namePlaceholder}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="mb-1.5 flex items-center gap-2 text-sm font-medium text-foreground">
              <Mail className="size-4 text-accent" />
              {tr.contact.email}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent"
              placeholder={tr.contact.emailPlaceholder}
            />
          </div>

          {/* Asunto */}
          <div>
            <label htmlFor="subject" className="mb-1.5 flex items-center gap-2 text-sm font-medium text-foreground">
              <Tag className="size-4 text-accent" />
              {tr.contact.subject}
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent"
              placeholder={tr.contact.subjectPlaceholder}
            />
          </div>

          {/* Mensaje */}
          <div>
            <label htmlFor="message" className="mb-1.5 flex items-center gap-2 text-sm font-medium text-foreground">
              <MessageSquare className="size-4 text-accent" />
              {tr.contact.message}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent"
              placeholder={tr.contact.messagePlaceholder}
            />
          </div>

          {/* Botón */}
          <button
            type="submit"
            disabled={status === "sending" || status === "success"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                {tr.contact.sending}
              </>
            ) : status === "success" ? (
              <>
                <CheckCircle className="size-4" />
                {tr.contact.sent}
              </>
            ) : (
              <>
                <Send className="size-4" />
                {tr.contact.send}
              </>
            )}
          </button>

          {/* Mensajes de estado */}
          {status === "success" && (
            <p className="flex items-center gap-2 text-sm text-green-600">
              <CheckCircle className="size-4" />
              {tr.contact.success}
            </p>
          )}
          {status === "error" && (
            <p className="flex items-center gap-2 text-sm text-red-500">
              <AlertCircle className="size-4" />
              {tr.contact.error}
            </p>
          )}
        </form>

        {/* Email directo */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">{tr.contact.orEmail}</p>
          <a
            href="mailto:cenfosgaming@gmail.com"
            className="mt-1 inline-block text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            cenfosgaming@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}