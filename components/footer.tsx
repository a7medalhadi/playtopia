"use client"

import { useLanguage } from "./language-provider"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const { t, language } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            {/* <Image src="/images/logo.png" alt="PlayTopia Logo" width={100} height={50} className="h-auto w-auto" /> */}
            <p className="text-sm text-muted-foreground text-center md:text-start">
              © {currentYear} شركة الهوايات للترفيه.PlayTopia. {t("footer.rights")}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex items-center gap-4">
              <Link
                href="mailto:info@hoppies2.com"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                info@hoppies2.com
              </Link>
              <Link
                href="https://wa.me/966138300839"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                +966 13 830 0839
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
