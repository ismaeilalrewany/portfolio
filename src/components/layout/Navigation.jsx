import { NavItem } from "../shared/NavItem"
import { useLocation } from "react-router-dom"
import { useNavEvents } from "../../hooks/useNavEvents"
import navbarData from "../../data/navbar"

export const Navigation = () => {
  const location = useLocation()

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

  useNavEvents(getIndexOfCurrentPage())

  return (
    <nav className="fixed right-6 top-[50%] translate-y-[-50%] opacity-25 hover:opacity-100">
      <p className="font-BrunoAceSC bg-gray-600 text-blue-500 mb-6 relative -right-2">
        <span className={`text-3xl absolute -top-2 ${getIndexOfCurrentPage () === 1 ? "left-[-16px]" : "left-[-26px]"}`}>{getIndexOfCurrentPage()}</span>
        <span className="text-lg">/</span>
        <span className=""> {navbarData.itemsCount}</span>
      </p>
      <div className="relative before:content-[''] before:absolute before:h-[324px] before:w-[2px] before:z-[-1] before:bg-blue-500 before:left-[50%] before:top-[-104px] before:translate-x-[-50%]">
        <ul className="list-none">
          {navbarData.navItems.map((item) => (
            <NavItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </nav>
  )
}