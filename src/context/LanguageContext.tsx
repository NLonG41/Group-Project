import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react'
import { Language, translations, Translations } from '../i18n/translations'

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return 'vi'
  }

  const saved = localStorage.getItem('appLanguage') as Language | null
  if (saved === 'vi' || saved === 'en') {
    return saved
  }

  return 'vi'
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('appLanguage', language)
    }
  }, [language])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'vi' ? 'en' : 'vi'))
  }

  const value = useMemo<LanguageContextValue>(() => {
    return {
      language,
      setLanguage,
      toggleLanguage,
      t: translations[language],
    }
  }, [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }

  return context
}
