import { useState, useEffect } from 'react'
import { LOGO_CONFIG } from '../config/logo'

interface LogoProps {
  size?: 'small' | 'medium' | 'large'
  showText?: boolean
  textColor?: 'dark' | 'light' // dark = blue-900, light = white
  logoUrl?: string // URL của logo (nếu có, sẽ override config)
}

const Logo = ({ size = 'medium', showText = false, textColor = 'dark', logoUrl }: LogoProps) => {
  // Sử dụng logoUrl từ props hoặc từ config
  const finalLogoUrl = logoUrl || LOGO_CONFIG.logoUrl
  const [imageError, setImageError] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const sizeClasses = {
    small: { container: 'h-8', image: 'h-8', text: 'text-lg', subtext: 'text-xs' },
    medium: { container: 'h-12', image: 'h-12', text: 'text-2xl', subtext: 'text-sm' },
    large: { container: 'h-20', image: 'h-20', text: 'text-4xl', subtext: 'text-base' },
  }

  const classes = sizeClasses[size]

  // Ưu tiên sử dụng logoUrl nếu có, nếu không thì thử load từ public folder
  const defaultImageSources = ['/logo.png', '/logo.jpg', '/logo.svg', '/logo.webp']
  const imageSources = finalLogoUrl ? [finalLogoUrl, ...defaultImageSources] : defaultImageSources

  // Reset state khi URL thay đổi
  useEffect(() => {
    setImageError(false)
    setCurrentImageIndex(0)
  }, [finalLogoUrl])

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement
    console.log('Logo load error, trying next source:', imageSources[currentImageIndex])
    
    if (currentImageIndex < imageSources.length - 1) {
      // Thử source tiếp theo
      setCurrentImageIndex(currentImageIndex + 1)
    } else {
      // Đã thử hết tất cả sources
      console.log('All logo sources failed, showing fallback')
      setImageError(true)
    }
  }

  const handleImageLoad = () => {
    // Reset error state khi ảnh load thành công
    if (imageError) {
      setImageError(false)
    }
  }

  return (
    <div className={`flex items-center gap-2 ${classes.container}`}>
      {/* Luôn hiển thị ảnh logo trước */}
      {!imageError && imageSources[currentImageIndex] ? (
        <img
          key={currentImageIndex} // Force re-render khi index thay đổi
          src={imageSources[currentImageIndex]}
          alt="USTH Logo"
          className={`${classes.image} object-contain flex-shrink-0`}
          onError={handleImageError}
          onLoad={handleImageLoad}
          loading="lazy"
        />
      ) : (
        /* Fallback: Hiển thị icon SVG hiện đại nếu không có file ảnh */
        <div className={`${classes.image} flex-shrink-0`}>
          <svg
            viewBox="0 0 120 120"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background circle with gradient */}
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1E40AF" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
              <linearGradient id="logoGradientRed" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#DC2626" />
                <stop offset="100%" stopColor="#EF4444" />
              </linearGradient>
              <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                <feOffset dx="2" dy="2" result="offsetblur"/>
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.3"/>
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Modern shield/badge shape */}
            <path
              d="M60 10 L100 25 L100 65 C100 85, 80 100, 60 110 C40 100, 20 85, 20 65 L20 25 Z"
              fill="url(#logoGradient)"
              filter="url(#shadow)"
            />
            
            {/* Inner decorative element - stylized U */}
            <path
              d="M40 35 L40 65 C40 75, 50 80, 60 80 C70 80, 80 75, 80 65 L80 35"
              stroke="white"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            
            {/* Academic cap icon */}
            <path
              d="M50 45 L60 40 L70 45 L60 50 Z"
              fill="url(#logoGradientRed)"
            />
            <path
              d="M45 48 L60 40 L75 48"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            
            {/* Star accent */}
            <path
              d="M60 25 L62 30 L67 30 L63 33 L65 38 L60 35 L55 38 L57 33 L53 30 L58 30 Z"
              fill="#FFD700"
            />
          </svg>
        </div>
      )}

      {/* Text bên cạnh logo (nếu showText = true) */}
      {showText && (
        <div className="flex flex-col">
          <div className={`font-bold ${classes.text} ${
            textColor === 'light' ? 'text-white' : 'text-blue-900'
          } leading-tight tracking-tight`}>
            USTH
          </div>
          {size !== 'small' && (
            <div className={`${classes.subtext} leading-tight`}>
              <span className={`${textColor === 'light' ? 'text-red-300' : 'text-red-600'} font-semibold`}>VIETNAM</span>{' '}
              <span className={textColor === 'light' ? 'text-white' : 'text-blue-900'}>FRANCE UNIVERSITY</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Logo
