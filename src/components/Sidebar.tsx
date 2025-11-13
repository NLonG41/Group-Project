import { NavLink } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const { t } = useLanguage()

  const menuItems = [
    {
      path: '/dashboard',
      label: t.sidebar.dashboard,
      icon: '📊',
    },
    {
      path: '/class-scheduling',
      label: t.sidebar.classScheduling,
      icon: '📅',
    },
    {
      path: '/course-section-management',
      label: t.sidebar.courseSection,
      icon: '📚',
    },
    {
      path: '/user-management',
      label: t.sidebar.userManagement,
      icon: '👥',
    },
    {
      path: '/subject-management',
      label: t.sidebar.subjectManagement,
      icon: '📖',
    },
    {
      path: '/classroom-management',
      label: t.sidebar.classroomManagement,
      icon: '🏫',
    },
    {
      path: '/semester-management',
      label: t.sidebar.semesterManagement,
      icon: '📆',
    },
    {
      path: '/send-notifications',
      label: t.sidebar.sendNotifications,
      icon: '🔔',
    },
  ]

  return (
    <>
      {/* Lớp phủ */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Thanh bên */}
      <aside
        className={`fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 shadow-lg overflow-y-auto bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg transition duration-200 ${
                      isActive
                        ? 'bg-red-600 text-white shadow-md font-semibold'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`
                  }
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar

