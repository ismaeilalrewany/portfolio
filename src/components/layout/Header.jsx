import { useState, useEffect } from 'react'
import { Hour } from '../shared/Hour'
import themesData from '../../data/themes.json'

export const Header = () => {
  const [hoveredHour, setHoveredHour] = useState(null)
  const [selectedHour, setSelectedHour] = useState(() => {
    sessionStorage.removeItem('selectedHour')
    return new Date().getHours()
  })
  const [isAutoHour, setIsAutoHour] = useState(true)

  useEffect(() => {
    const storedHour = sessionStorage.getItem('selectedHour')
    const initialHour = storedHour ? Number(storedHour) : new Date().getHours()

    setSelectedHour(initialHour)
    setIsAutoHour(!storedHour)

    const timer = setInterval(() => {
      if (isAutoHour) {
        const currentHour = new Date().getHours()
        if (currentHour !== selectedHour) {
          setSelectedHour(currentHour)
          sessionStorage.removeItem('selectedHour')
        }
      }
    }, 60000)

    return () => clearInterval(timer)
  }, [isAutoHour, selectedHour])

  const handleSelectedHour = (hour) => {
    setSelectedHour(hour)
    sessionStorage.setItem('selectedHour', hour.toString())
  }

  const iterateHours = (hours) => {
    return Object.keys(hours).map((hour) => {
      const hourNumber = Number(hour)
      return (
        <Hour
          key={hours[hour].id}
          hour={hourNumber}
          hoveredHour={hoveredHour}
          onMouseEnter={() => setHoveredHour(hourNumber)}
          onMouseLeave={() => setHoveredHour(null)}
          onClick={() => handleSelectedHour(hourNumber)}
          selectedHour={selectedHour}
        />
      )
    })
  }

  return (
    <header className="text-center">
      <div className="container px-2 pt-16 mx-auto">
        <div className="flex justify-center items-end min-w-[204px] w-auto h-10">
          {iterateHours(themesData.hours)}
        </div>
      </div>
    </header>
  )
}