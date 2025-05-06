"use client"

import { useLanguage } from "./language-provider"
import Image from "next/image"

export function AboutSection() {
  const { t, language } = useLanguage()

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${language === "ar" ? "md:order-2" : "md:order-1"}`}>
            <div>
              <h2 className={`text-3xl md:text-4xl font-bold tracking-tight ${language === "ar" ? "font-cairo" : ""}`}>
                {t("about.title")}
              </h2>
              <p className={`mt-4 text-lg text-muted-foreground ${language === "ar" ? "font-cairo" : ""}`}>
                {t("about.description")}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-cyan-100 rounded-lg p-4 text-center">
                <h3 className={`text-xl font-bold text-cyan-700 ${language === "ar" ? "font-cairo" : ""}`}>#499</h3>
              </div>
              <div className="bg-yellow-100 rounded-lg p-4 text-center">
                <h3 className={`text-xl font-bold text-yellow-700 ${language === "ar" ? "font-cairo" : ""}`}>
                  Fun in Action
                </h3>
              </div>
            </div>
          </div>

          <div className={`${language === "ar" ? "md:order-1" : "md:order-2"}`}>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square">
                <Image src="/images/promo2.png" alt="PlayTopia Fun" fill className="object-cover rounded-lg" />
              </div>
              <div className="relative aspect-square">
                <Image src="/images/promo3.png" alt="PlayTopia Activities" fill className="object-cover rounded-lg" />
              </div>
              <div className="relative aspect-square col-span-2">
                <Image src="/images/promo4.png" alt="PlayTopia Offer" fill className="object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
