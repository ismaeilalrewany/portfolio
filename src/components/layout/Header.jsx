import themesData from '../../data/themes.json'
import { Hour } from '../shared/Hour'

export const Header = () => {

  const iterateHours = (hours) => {
    return Object.keys(hours).map((hour) => {
      const hourNumber = Number(hour)

      return <Hour key={hours[hour].id} hour={hourNumber} />
    })
  }

  return (
    <header className="text-center">
      <div className="container px-2 py-4 mx-auto">
        <div className="flex justify-center items-end min-w-[204px] w-auto h-10">
          {
            iterateHours(themesData.hours)
          }
        </div>
      </div>
    </header>
  )
}