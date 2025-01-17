import { useContext } from "react"
import { NavContext } from "../../context/NavContext"
import { navItems } from "../../data/navbar"

export const Nav = () => {
  const { setItem } = useContext(NavContext)

  const sectionHandler = (e) => {
    const itemId = e.target.key
    navItems.forEach(item => item.active = false)
    navItems.forEach(item => {
      if (item.id === itemId) {
        item.active = true
        setItem(itemId)
      }
    })
  }

  return (
    <nav className="fixed right-4 top-[50%] translate-y-[-50%]">
      <ul className="list-none text-blue-500">
        {navItems.map(item => (
          <li key={item.id} className="cursor-pointer mb-2" onClick={sectionHandler}>{item.section}</li>
        ))}
      </ul>
    </nav>
  )
}