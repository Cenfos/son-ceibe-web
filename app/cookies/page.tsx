import type { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = { title: "Cookies · Son Ceibe" }

export default function Page() { return <PageLayout><LegalPage kind="cookies" /></PageLayout> }
