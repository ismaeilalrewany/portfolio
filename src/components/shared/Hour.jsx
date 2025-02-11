import MoonIcon from "../../assets/icons/moon-line.svg?react"
import SunIcon from "../../assets/icons/sun-line.svg?react"
import themesData from "../../data/themes.json"
import propTypes from 'prop-types'

export const Hour = ({ hour, hoveredHour, onMouseEnter, onMouseLeave, onClick, selectedHour }) => {
  const theme = themesData.hours[selectedHour.toString()].colors

  const calculateHeight = () => {
    if (hoveredHour !== null) {
      if (hour === hoveredHour) return '40px'
      if (hour === hoveredHour - 1 || hour === hoveredHour + 1) return '30px'
    }

    if (hour === selectedHour) return '40px'

    let calculatedHeight = 0
    if (hour <= 12) {
      calculatedHeight = 16 + 0.727 * (hour - 1)
    } else if (hour >= 13) {
      calculatedHeight = 23.997 - 0.727 * (hour - 13)
    } else {
      calculatedHeight = 16
    }
    return `${calculatedHeight}px`
  }

  const showIcon = hour === selectedHour
  const showSunIcon = showIcon && hour >= 7 && hour <= 18

  return (
    <div 
      className="w-full relative" 
      role="button" 
      tabIndex="-1"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <div
        className={`relative w-[2px] rounded-full mx-auto ${theme["hour-background"]} transition-all duration-300 ${
          (hour < 7 || hour > 18) ? 'opacity-40' : 'opacity-100'
        }`}
        style={{ height: calculateHeight() }} 
      />
      {showIcon && (
        <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className={`p-2 rounded-full ${theme["hour-background"]} flex items-center justify-center`}>
            {showSunIcon ? (
              <SunIcon className={`w-6 h-6 ${theme["hour-icon-color"]}`} />
            ) : (
              <MoonIcon className={`w-6 h-6 ${theme["hour-icon-color"]}`} />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

Hour.propTypes = {
  hour: propTypes.number.isRequired,
  hoveredHour: propTypes.number,
  onMouseEnter: propTypes.func,
  onMouseLeave: propTypes.func,
  onClick: propTypes.func,
  selectedHour: propTypes.number.isRequired,
}