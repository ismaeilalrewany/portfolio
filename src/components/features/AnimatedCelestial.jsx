import { useEffect, useState } from 'react'

export const AnimatedCelestial = () => {
  const [currentHour, setCurrentHour] = useState(new Date().getHours())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      setCurrentHour(new Date().getHours())
    }, 60000)

    return () => clearInterval(timer)
  }, [])

  const isDayTime = currentHour >= 7 && currentHour < 19

  return (
    <div className="fixed top-4 right-4 z-50 overflow-x-hidden w-[200px] h-16">
      {mounted && (
        <div className={`absolute ${isDayTime ? 'opacity-0' : 'opacity-100'} animate-slide-right-left`}>
          {/* Moon */}
          <svg
            className="w-12 h-12 text-gray-200"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2a9.91 9.91 0 0 0-3 .46 10 10 0 0 1 0 19.08A10 10 0 1 0 12 2z" />
          </svg>
        </div>
      )}

      {mounted && (
        <div className={`absolute ${isDayTime ? 'opacity-100' : 'opacity-0'} animate-slide-right-left`}>
          {/* Sun */}
          <svg
            className="w-12 h-12 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42m12.72-12.72l1.42-1.42" />
          </svg>
        </div>
      )}
    </div>
  )
}