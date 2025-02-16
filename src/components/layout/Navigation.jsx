import { NavItem } from "../shared/NavItem"
import { useLocation } from "react-router-dom"
import { useNavEvents } from "../../hooks/useNavEvents"
import { useTheme } from "../../hooks/useTheme"
import navbarData from "../../data/navbar"
import themesData from "../../data/themes.json"

export const Navigation = () => {
  const location = useLocation()
  const { selectedHour } = useTheme()
  const theme = themesData.hours[selectedHour.toString()].colors

  const getIndexOfCurrentPage = () => {
    switch (location.pathname) {
      case "/":
        return 1
      case "/skills":
        return 2
      case "/projects":
        return 3
      case "/contact":
        return 4
      default:
        return -1
    }
  }

  const navThemes = () => {
    switch (location.pathname) {
      case "/":
        return theme
      default :
        return {
          background: "bg-gray-600",
          text: "text-blue-500",
          "before-background": "before:bg-blue-500",
          "after-background": "after:bg-blue-500",
          "hour-background": "bg-blue-500",
          "border": "border-blue-500",
        }
    }
  }

  useNavEvents(getIndexOfCurrentPage())

  return (
    // <nav className="fixed right-6 top-[50%] translate-y-[-50%] opacity-25 hover:opacity-100 z-10">
    <nav className="fixed right-6 top-[calc(50%+24px)] translate-y-[-50%] z-10">
      <p className={`font-BrunoAceSC ${navThemes().text} mb-6 relative -right-2`}>
        <span className={`text-3xl absolute -top-2 ${getIndexOfCurrentPage () === 1 ? "left-[-16px]" : "left-[-26px]"}`}>{getIndexOfCurrentPage()}</span>
        <span className="text-lg">/</span>
        <span className=""> {navbarData.itemsCount}</span>
      </p>
      <div className={`relative before:content-[''] before:absolute before:h-[248px] before:rounded-b-full before:w-[2px] before:z-[-1] ${navThemes()["before-background"]} before:left-[50%] before:top-[-24px] before:translate-x-[-50%] after:content-[''] after:absolute after:h-[48px] after:rounded-t-full after:w-[2px] after:z-[-1] ${navThemes()["after-background"]} after:left-[50%] after:top-[-100px] after:translate-x-[-50%]`}>
        <ul className="list-none">
          {navbarData.navItems.map((item) => (
            <NavItem key={item.id} item={item} theme={navThemes()}/>
          ))}
        </ul>
      </div>
    </nav>
  )
}