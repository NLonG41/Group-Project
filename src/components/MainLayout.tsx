import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import Dashboard from '../pages/Dashboard'
import ClassScheduling from '../pages/ClassScheduling'
import CourseSectionManagement from '../pages/CourseSectionManagement'
import UserManagement from '../pages/UserManagement'
import SubjectManagement from '../pages/SubjectManagement'
import ClassroomManagement from '../pages/ClassroomManagement'
import SemesterManagement from '../pages/SemesterManagement'
import SendNotifications from '../pages/SendNotifications'

interface MainLayoutProps {
  adminName: string
  onLogout: () => void
}

const MainLayout = ({ adminName, onLogout }: MainLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header adminName={adminName} onLogout={onLogout} onToggleMenu={toggleSidebar} />
      <div className="flex pt-16">
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        <main className="flex-1 p-6 bg-gray-50 transition-all duration-300">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/class-scheduling" element={<ClassScheduling />} />
            <Route
              path="/course-section-management"
              element={<CourseSectionManagement />}
            />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/subject-management" element={<SubjectManagement />} />
            <Route
              path="/classroom-management"
              element={<ClassroomManagement />}
            />
            <Route
              path="/semester-management"
              element={<SemesterManagement />}
            />
            <Route
              path="/send-notifications"
              element={<SendNotifications />}
            />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default MainLayout

