import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '../context/LanguageContext'

interface LoginProps {
  onLogin: (username: string, password: string) => void
}

const Login = ({ onLogin }: LoginProps) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { t } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!username || !password) {
      setError(t.login.errors.required)
      return
    }

    onLogin(username, password)
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
          {/* Logo & Language */}
          <div className="flex flex-col items-center mb-8">
            <LanguageSwitcher className="self-end" />
            <Logo size="large" showText={true} />
          </div>

          <h1 className="text-gray-800 text-3xl font-bold text-center mb-4">
            {t.login.title}
          </h1>

          <div className="mb-6 p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-800 text-xs text-center">
            💡 <strong>{t.login.infoBadge}</strong> {t.login.infoMessage}
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}

          {/* Username Input */}
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              {t.login.usernameLabel}
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder={t.login.usernamePlaceholder}
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              {t.login.passwordLabel}
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder={t.login.passwordPlaceholder}
            />
          </div>

          {/* Log In Button */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-[1.02] active:scale-[0.98] mb-4 shadow-md"
          >
            {t.login.submitButton}
          </button>

          {/* Register Link */}
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              {t.login.registerPrompt}{' '}
              <Link
                to="/register"
                className="text-blue-900 hover:text-blue-700 font-medium underline"
              >
                {t.login.registerLink}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login

