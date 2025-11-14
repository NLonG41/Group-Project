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
    if (username && password) {
      const displayName = username.charAt(0).toUpperCase() + username.slice(1)

      setIsAuthenticated(true)
      setAdminName(displayName)

      localStorage.setItem('isAuthenticated', 'true')
      localStorage.setItem('adminName', displayName)
      localStorage.setItem('adminUsername', username)
    }
  }

  const handleRegister = (username: string, password: string, confirmPassword: string) => {
    if (username && password && confirmPassword) {
      const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]')

      registeredUsers.push({
        username,
        password,
        createdAt: new Date().toISOString()
      })

      localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers))
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setAdminName('')

    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('adminName')
    localStorage.removeItem('adminUsername')
  }

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

