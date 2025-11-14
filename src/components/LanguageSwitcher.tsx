import { useLanguage } from '../context/LanguageContext'

interface LanguageSwitcherProps {
  className?: string
}

const LanguageSwitcher = ({ className = '' }: LanguageSwitcherProps) => {
  const { language, setLanguage } = useLanguage()

  const isEnglish = language === 'en'

  return (
    <div className={`relative inline-flex items-center ${className}`}>
      {/* Toggle Bar Container */}
      <div className="relative flex bg-gray-200 p-0.5 shadow-inner border border-gray-400">
        {/* Sliding Indicator */}
        <div
          className={`absolute top-0.5 bottom-0.5 w-[calc(50%-0.125rem)] shadow-sm transition-transform duration-300 ease-in-out ${
            isEnglish 
              ? 'left-0.5 bg-blue-500' 
              : 'left-[calc(50%+0.125rem)] bg-red-500'
          }`}
        />
        
        {/* English Button */}
        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`relative z-10 px-2 py-1 text-xs font-semibold transition-colors duration-200 flex-1 ${
            isEnglish
              ? 'text-white'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          EN
        </button>
        
        {/* Vietnamese Button */}
        <button
          type="button"
          onClick={() => setLanguage('vi')}
          className={`relative z-10 px-2 py-1 text-xs font-semibold transition-colors duration-200 flex-1 ${
            !isEnglish
              ? 'text-white'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          VI
        </button>
      </div>
    </div>
  )
}

export default LanguageSwitcher
