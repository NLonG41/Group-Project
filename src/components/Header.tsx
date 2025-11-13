import Logo from './Logo'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '../context/LanguageContext'

interface HeaderProps {
  adminName: string
  onLogout: () => void
  onToggleMenu: () => void
}

const Header = ({ adminName, onLogout, onToggleMenu }: HeaderProps) => {
  const { t } = useLanguage()

  return (
    <header className="fixed top-0 left-0 right-0 h-16 shadow-lg z-50 flex items-center justify-between px-6 bg-white">
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleMenu}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <Logo size="small" showText={true} textColor="dark" />
        <div className="h-8 w-px bg-gray-300"></div>
        <h1 className="text-xl font-bold text-gray-800">{t.common.appName}</h1>
      </div>
      <div className="flex items-center gap-4">
        <LanguageSwitcher />
        <span className="text-gray-700 font-medium">
          {t.header.welcome}, <span className="text-red-500 font-semibold">{adminName}</span>
        </span>
        <button
          onClick={onLogout}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition duration-200 font-medium shadow-md"
        >
          {t.common.logout}
        </button>
      </div>
    </header>
  )
}

export default Header

