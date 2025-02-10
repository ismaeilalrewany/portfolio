import { useState } from 'react'
import { Hour } from '../shared/Hour'
import { useTheme } from "../../hooks/useTheme"
import themesData from '../../data/themes.json'

export const Header = () => {
  const [hoveredHour, setHoveredHour] = useState(null)
  const { selectedHour, handleHourChange } = useTheme()

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
          onClick={() => handleHourChange(hourNumber)}
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