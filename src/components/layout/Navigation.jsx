import { useContext } from "react"
import { NavContext } from "../../context/NavContext"
import navbarData from "../../data/navbar"

export const Navigation = () => {
  const { setCurrentItem } = useContext(NavContext)

  const handleSectionClick = item => {
    navbarData.navItems.forEach(navItem => navItem.active = false)
    item.active = true
    setCurrentItem(item)
  }

  return (
    <nav className="fixed right-4 top-[50%] translate-y-[-50%]">
      <ul className="list-none text-blue-500">
      {navbarData.navItems.map((item) => (
          <li key={item.id} className={`cursor-pointer mb-2 ${item.active && "text-white"}`} onClick={() => handleSectionClick(item)}>
            {item.section}
          </li>
        ))}
      </ul>
    </nav>
  )
}