import { useContext, useEffect, useState } from "react"
import { NavContext } from "../../context/NavContext"
import navbarData from "../../data/navbar"

export const Navigation = () => {
  const { currentItem, setCurrentItem } = useContext(NavContext)
  const [touchStart, setTouchStart] = useState(0)

  const handleSectionClick = item => {
    navbarData.navItems.forEach(navItem => navItem.active = false)
    item.active = true
    setCurrentItem(item)
  }

  const handleKeyDown = (event) => {
    let currentIndex = navbarData.navItems.findIndex(item => item.active)

    if (event.key === "ArrowUp" && currentIndex > 0) {
      handleSectionClick(navbarData.navItems[currentIndex - 1])
    } else if (event.key === "ArrowDown" && currentIndex < navbarData.navItems.length - 1) {
      handleSectionClick(navbarData.navItems[currentIndex + 1])
    } else {
      return
    }
  }

  const handleWheel = (event) => {
    let currentIndex = navbarData.navItems.findIndex(item => item.active)

    if (event.deltaY < 0 && currentIndex > 0) {
      handleSectionClick(navbarData.navItems[currentIndex - 1])
    } else if (event.deltaY > 0 && currentIndex < navbarData.navItems.length - 1) {
      handleSectionClick(navbarData.navItems[currentIndex + 1])
    } else {
      return
    }
  }

  const handleTouchStart = (event) => {
    setTouchStart(event.touches[0].clientY)
  }

  const handleTouchEnd = (event) => {
    const currentIndex = navbarData.navItems.findIndex(item => item.active)
    const touchEnd = event.changedTouches[0].clientY
    const touchDifference = touchStart - touchEnd

    if (touchDifference > 50 && currentIndex < navbarData.navItems.length - 1) {
      handleSectionClick(navbarData.navItems[currentIndex + 1])
    } else if (touchDifference < -50 && currentIndex > 0) {
      handleSectionClick(navbarData.navItems[currentIndex - 1])
    } else {
      return
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("wheel", handleWheel)
    window.addEventListener("touchstart", handleTouchStart)
    window.addEventListener("touchend", handleTouchEnd)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchend", handleTouchEnd)
    }
  }, [currentItem, touchStart])

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