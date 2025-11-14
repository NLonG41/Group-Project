import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

interface UserMenuProps {
  adminName: string
  onLogout: () => void
  onProfile?: () => void
  onSettings?: () => void
}

const UserMenu = ({
  adminName,
  onLogout,
  onProfile,
  onSettings,
}: UserMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  // Đóng menu khi click bên ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const menuItems = [
    {
      label: t.header.profile,
      icon: '👤',
      onClick: () => {
        setIsOpen(false)
        onProfile?.()
      },
    },
    {
      label: t.header.settings,
      icon: '⚙️',
      onClick: () => {
        setIsOpen(false)
        onSettings?.()
      },
    },
    {
      label: t.header.logout,
      icon: '🚪',
      onClick: () => {
        setIsOpen(false)
        onLogout()
      },
      isDanger: true,
    },
  ]

  return (
    <div className="relative" ref={menuRef}>
      {/* Menu Button - 3 thanh ngang */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
        aria-label="User menu"
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

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 mr-2 w-56 max-w-[calc(100vw-2rem)] bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 transform transition-all duration-200 ease-out opacity-100 scale-100">
          {/* User Info Header */}
          <div className="px-4 py-3 border-b border-gray-200">
            <p className="text-sm font-medium text-gray-900">{adminName}</p>
            <p className="text-xs text-gray-500 mt-1">{t.header.welcome}</p>
          </div>

          {/* Menu Items */}
          <div className="py-1">
            {menuItems.map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={item.onClick}
                className={`w-full text-left px-4 py-2 text-sm flex items-center gap-3 transition-colors duration-150 ${
                  item.isDanger
                    ? 'text-red-600 hover:bg-red-50'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu
