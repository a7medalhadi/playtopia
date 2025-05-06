"use client"

import { useLanguage } from "./language-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare } from "lucide-react"

export function ContactSection() {
  const { t, language } = useLanguage()

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold tracking-tight ${language === "ar" ? "font-cairo" : ""}`}>
            {t("contact.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className={`flex items-center gap-2 ${language === "ar" ? "font-cairo" : ""}`}>
                <Mail className="h-5 w-5" />
                {t("contact.email")}
              </CardTitle>
              <CardDescription className={language === "ar" ? "font-cairo" : ""}>
                {t("contact.message")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="mailto:info@hoppies2.com">
                <Button variant="outline" className="w-full">
                  info@hoppies2.com
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className={`flex items-center gap-2 ${language === "ar" ? "font-cairo" : ""}`}>
                <MessageSquare className="h-5 w-5" />
                {t("contact.whatsapp")}
              </CardTitle>
              <CardDescription className={language === "ar" ? "font-cairo" : ""}>
                {t("contact.message")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="https://wa.me/966138300839" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full">
                  +966 13 830 0839
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
