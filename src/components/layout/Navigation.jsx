import { useContext } from "react"
import { NavContext } from "../../context/NavContext"
import { useNavEvents } from "../../hooks/useNavEvents"
import { NavItem } from "../shared/NavItem"
import navbarData from "../../data/navbar"

export const Navigation = () => {
  const { currentItem, setCurrentItem } = useContext(NavContext)

  const handleSectionClick = (item) => {
    navbarData.navItems.forEach(navItem => navItem.active = false)
    item.active = true;
    setCurrentItem(item);
  }

  const getIndexOfCurrentItem = () => {
    return navbarData.navItems.findIndex(item => item.id === currentItem.id)  + 1
  }

  useNavEvents(handleSectionClick)

  return (
    <nav className="fixed right-4 top-[50%] translate-y-[-50%] opacity-25 hover:opacity-100">
      <p className="font-BrunoAceSC bg-gray-600 text-blue-500 mb-6 relative -right-2">
        <span className={`text-3xl absolute -top-2 ${getIndexOfCurrentItem () === 1 ? "left-[-16px]" : "left-[-26px]"}`}>{getIndexOfCurrentItem()}</span>
        <span className="text-lg">/</span>
        <span className=""> {navbarData.itemsCount}</span>
      </p>
      <div className="relative before:content-[''] before:absolute before:h-[324px] before:w-[2px] before:z-[-1] before:bg-blue-500 before:left-[50%] before:top-[-104px] before:translate-x-[-50%]">
        <ul className="list-none">
          {navbarData.navItems.map((item) => (
            <NavItem key={item.id} item={item} onClick={handleSectionClick} />
          ))}
        </ul>
      </div>
    </nav>
  )
}