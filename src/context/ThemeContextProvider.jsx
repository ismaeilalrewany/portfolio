import { useState, useEffect } from 'react'
import { ThemeContext } from './ThemeContext'
import propTypes from 'prop-types'

export const ThemeContextProvider = ({ children }) => {
  const [selectedHour, setSelectedHour] = useState(() => {
    sessionStorage.removeItem('selectedHour')
    return new Date().getHours() + 1
  })
  const [isAutoHour, setIsAutoHour] = useState(true)

  useEffect(() => {
    const storedHour = sessionStorage.getItem('selectedHour')
    const initialHour = storedHour ? Number(storedHour) : new Date().getHours() + 1

    setSelectedHour(initialHour)
    setIsAutoHour(!storedHour)

    const timer = setInterval(() => {
      if (isAutoHour) {
        const currentHour = new Date().getHours() + 1
        if (currentHour !== selectedHour) {
          setSelectedHour(currentHour)
          sessionStorage.removeItem('selectedHour')
        }
      }
    }, 60000)

    return () => clearInterval(timer)
  }, [isAutoHour, selectedHour])

  const handleHourChange = (hour) => {
    setIsAutoHour(false)
    setSelectedHour(hour)
    sessionStorage.setItem('selectedHour', hour.toString())
  }

  return (
    <ThemeContext.Provider value={{ selectedHour, handleHourChange }}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeContextProvider.propTypes = {
  children: propTypes.node.isRequired,
}