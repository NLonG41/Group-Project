import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '../context/LanguageContext'

interface RegisterProps {
  onRegister: (username: string, password: string, confirmPassword: string) => void
}

const Register = ({ onRegister }: RegisterProps) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const { t } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!username || !password || !confirmPassword) {
      setError(t.register.errors.required)
      return
    }

    if (username.length < 3) {
      setError(t.register.errors.shortUsername)
      return
    }

    if (password.length < 6) {
      setError(t.register.errors.shortPassword)
      return
    }

    if (password !== confirmPassword) {
      setError(t.register.errors.mismatch)
      return
    }

    onRegister(username, password, confirmPassword)
    setSuccess(t.register.successMessage)

    // Tự động chuyển đến trang đăng nhập sau 2 giây
    setTimeout(() => {
      window.location.href = '/login'
    }, 2000)
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.3), rgba(255, 20, 147, 0.25), rgba(138, 43, 226, 0.3))' }}
    >
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200"
        >
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <LanguageSwitcher className="self-end" />
            <Logo size="large" showText={true} />
          </div>

          <h1 className="text-gray-800 text-3xl font-bold text-center mb-4">
            {t.register.title}
          </h1>

          <div className="mb-6 p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-800 text-xs text-center">
            💡 <strong>{t.register.infoBadge}</strong> {t.register.infoMessage}
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
              {success}
            </div>
          )}

          {/* Username Input */}
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              {t.register.usernameLabel}
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder={t.register.usernamePlaceholder}
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              {t.register.passwordLabel}
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder={t.register.passwordPlaceholder}
            />
          </div>

          {/* Confirm Password Input */}
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              {t.register.confirmPasswordLabel}
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder={t.register.confirmPasswordPlaceholder}
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-[1.02] active:scale-[0.98] mb-4 shadow-md"
          >
            {t.register.submitButton}
          </button>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              {t.register.loginPrompt}{' '}
              <Link
                to="/login"
                className="text-blue-900 hover:text-blue-700 font-medium underline"
              >
                {t.register.loginLink}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register

