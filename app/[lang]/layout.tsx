import type React from "react"
import { LanguageProvider } from "@/components/language-provider"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
        <LanguageProvider>{children}</LanguageProvider>

  )
}
