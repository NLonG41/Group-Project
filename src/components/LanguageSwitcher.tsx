import { useLanguage } from '../context/LanguageContext'

interface LanguageSwitcherProps {
  className?: string
}

const LanguageSwitcher = ({ className = '' }: LanguageSwitcherProps) => {
  const { language, toggleLanguage, t } = useLanguage()

  const label = language === 'vi' ? t.common.switchToEnglish : t.common.switchToVietnamese

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className={`flex items-center gap-2 px-3 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 transition ${className}`}
    >
      <span role="img" aria-label="language">
        🌐
      </span>
      <span>{label}</span>
    </button>
  )
}

export default LanguageSwitcher



