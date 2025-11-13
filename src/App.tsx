import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import MainLayout from './components/MainLayout'
import { LanguageProvider, useLanguage } from './context/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

const AppContent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [adminName, setAdminName] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const { t } = useLanguage()

  // Kiểm tra trạng thái đăng nhập từ localStorage khi component mount
  useEffect(() => {
    const savedAuth = localStorage.getItem('isAuthenticated')
    const savedAdminName = localStorage.getItem('adminName')

    if (savedAuth === 'true' && savedAdminName) {
      setIsAuthenticated(true)
      setAdminName(savedAdminName)
    }
    setIsLoading(false)
  }, [])

  const handleLogin = (username: string, password: string) => {
    // Mock login - replace with actual authentication when backend is ready
    // Hiện tại: chấp nhận bất kỳ username/password nào để test
    if (username && password) {
      const displayName = username.charAt(0).toUpperCase() + username.slice(1)

      setIsAuthenticated(true)
      setAdminName(displayName)

      // Lưu vào localStorage để giữ trạng thái đăng nhập khi refresh
      localStorage.setItem('isAuthenticated', 'true')
      localStorage.setItem('adminName', displayName)
      localStorage.setItem('adminUsername', username)
    }
  }

  const handleRegister = (username: string, password: string, confirmPassword: string) => {
    // Mock register - replace with actual API call when backend is ready
    if (username && password && confirmPassword) {
      // Lưu danh sách tài khoản đã đăng ký vào localStorage
      const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]')

      // Kiểm tra xem username đã tồn tại chưa
      const userExists = registeredUsers.some((user: any) => user.username === username)

      if (userExists) {
        // Trong test mode, vẫn cho phép đăng ký nhưng lưu vào danh sách
        // Khi có backend, sẽ trả về lỗi nếu username đã tồn tại
      }

      // Thêm tài khoản mới vào danh sách
      registeredUsers.push({
        username,
        password, // Trong thực tế, nên hash password trước khi lưu
        createdAt: new Date().toISOString()
      })

      localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers))
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setAdminName('')

    // Xóa thông tin đăng nhập khỏi localStorage
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('adminName')
    localStorage.removeItem('adminUsername')
  }

  // Hiển thị loading trong khi kiểm tra trạng thái đăng nhập
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-gray-600">{t.common.loading}</div>
      </div>
    )
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/" replace />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/register"
          element={
            isAuthenticated ? (
              <Navigate to="/" replace />
            ) : (
              <Register onRegister={handleRegister} />
            )
          }
        />
        <Route
          path="/*"
          element={
            isAuthenticated ? (
              <MainLayout adminName={adminName} onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </Router>
  )
}

export default App

