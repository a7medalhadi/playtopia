"use client"

import { useLanguage } from "./language-provider"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"

export function HeroSection() {
  const { t, language } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pink-500 to-pink-400 py-16 md:py-24">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className={`flex flex-col gap-6 ${language === "ar" ? "md:order-2" : "md:order-1"}`}>
            <div>
              <h1
                className={`text-4xl md:text-5xl font-bold tracking-tight text-white ${language === "ar" ? "font-cairo" : ""}`}
              >
                PlayTopia
              </h1>
              <p className={`mt-2 text-xl md:text-2xl font-medium text-white ${language === "ar" ? "font-cairo" : ""}`}>
                {t("hero.title")}
              </p>
              <p className={`mt-4 text-lg text-white/90 ${language === "ar" ? "font-cairo" : ""}`}>
                {t("hero.subtitle")}
              </p>
            </div>

            <div>
              <Link href="https://wa.me/966138300839" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  {t("cta.whatsapp")}
                </Button>
              </Link>
            </div>
          </div>

          <div className={`${language === "ar" ? "md:order-1" : "md:order-2"}`}>
            <div className="relative aspect-square max-w-md mx-auto">
              <Image src="/images/promo1.png" alt="PlayTopia Promotion" fill className="object-contain" priority />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-yellow-400 opacity-20"></div>
        <div className="absolute top-1/2 -right-24 w-64 h-64 rounded-full bg-cyan-400 opacity-20"></div>
        <div className="absolute -bottom-32 left-1/4 w-72 h-72 rounded-full bg-orange-400 opacity-20"></div>
      </div>
    </section>
  )
}
