"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  dir: string
}

const translations = {
  en: {
    home: "Home",
    about: "About Us",
    contact: "Contact",
    "hero.title": "Fun in Action",
    "hero.subtitle": "Creating unforgettable experiences for everyone",
    "about.title": "About PlayTopia",
    "about.description":
      "PlayTopia is your destination for fun and entertainment. We provide exciting activities and experiences for all ages.",
    "contact.title": "Contact Us",
    "contact.email": "Email",
    "contact.whatsapp": "WhatsApp",
    "contact.message": "Send us a message",
    "cta.whatsapp": "Contact via WhatsApp",
    language: "العربية",
    "footer.rights": "All rights reserved",
  },
  ar: {
    home: "الرئيسية",
    about: "من نحن",
    contact: "اتصل بنا",
    "hero.title": "المرح في العمل",
    "hero.subtitle": "نخلق تجارب لا تُنسى للجميع",
    "about.title": "عن بلاي توبيا",
    "about.description": "بلاي توبيا هي وجهتك للمرح والترفيه. نقدم أنشطة وتجارب مثيرة لجميع الأعمار.",
    "contact.title": "اتصل بنا",
    "contact.email": "البريد الإلكتروني",
    "contact.whatsapp": "واتساب",
    "contact.message": "أرسل لنا رسالة",
    "cta.whatsapp": "تواصل عبر واتساب",
    language: "English",
    "footer.rights": "جميع الحقوق محفوظة",
  },
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: () => "",
  dir: "ltr",
})

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en")
  const [dir, setDir] = useState<string>("ltr")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
    setDir(language === "ar" ? "rtl" : "ltr")
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = language
  }, [language])

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>{children}</LanguageContext.Provider>
}
