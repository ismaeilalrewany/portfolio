import { useContext } from "react"
import { NavContext } from "../../context/NavContext"
import { useNavEvents } from "../../hooks/useNavEvents"
import { NavItem } from "../shared/NavItem"
import navbarData from "../../data/navbar"

export const Navigation = () => {
  const { setCurrentItem } = useContext(NavContext)

  const handleSectionClick = (item) => {
    navbarData.navItems.forEach(navItem => navItem.active = false)
    item.active = true;
    setCurrentItem(item);
  }

  useNavEvents(handleSectionClick)

  return (
    <nav className="fixed right-4 top-[50%] translate-y-[-50%]">
      <ul className="list-none text-blue-500">
        {navbarData.navItems.map((item) => (
          <NavItem key={item.id} item={item} onClick={handleSectionClick} />
        ))}
      </ul>
    </nav>
  )
}