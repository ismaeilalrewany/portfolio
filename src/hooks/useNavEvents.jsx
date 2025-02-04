import { useEffect, useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { SectionContext } from "../context/SectionContext"
import navbarData from "../data/navbar"

export const useNavEvents = (indexOfCurrentPage) => {
  const currentPageIndex = indexOfCurrentPage - 1
  const [touchStart, setTouchStart] = useState(0)
  const navigate = useNavigate()
  const { currentSection } = useContext(SectionContext)
  const isScrollable = (element) => element.scrollHeight > element.clientHeight > 0

  const handleKeyDown = (event) => {
    if (!currentSection) return
    const element = currentSection.current

    if (!isScrollable(element) || (event.key === "ArrowUp" && element.scrollTop === 0) || (event.key === "ArrowDown" && element.scrollTop + element.clientHeight === element.scrollHeight)) {
      if (event.key === "ArrowUp" && currentPageIndex > 0) {
        navigate(navbarData.navItems[currentPageIndex - 1].url)
      } else if (event.key === "ArrowDown" && currentPageIndex < navbarData.navItems.length - 1) {
        navigate(navbarData.navItems[currentPageIndex + 1].url)
      }
    }
  }

  const handleWheel = (event) => {
    if (!currentSection) return
    const element = currentSection.current

    if (!isScrollable(element) || (event.deltaY < 0 && element.scrollTop === 0) || (event.deltaY > 0 && element.scrollTop + element.clientHeight === element.scrollHeight)) {
      if (event.deltaY < 0 && currentPageIndex > 0) {
        navigate(navbarData.navItems[currentPageIndex - 1].url)
      } else if (event.deltaY > 0 && currentPageIndex < navbarData.navItems.length - 1) {
        navigate(navbarData.navItems[currentPageIndex + 1].url)
      }
    }
  }

  const handleTouchStart = (event) => {
    setTouchStart(event.touches[0].clientY)
  }

  const handleTouchEnd = (event) => {
    if (!currentSection) return
    const element = currentSection.current

    const touchEnd = event.changedTouches[0].clientY
    const touchDifference = touchStart - touchEnd

    if (!isScrollable(element) || (touchDifference > 0 && element.scrollTop + element.clientHeight === element.scrollHeight) || (touchDifference < 0 && element.scrollTop === 0)) {
      if (touchDifference > 50 && currentPageIndex < navbarData.navItems.length - 1) {
        navigate(navbarData.navItems[currentPageIndex + 1].url)
      } else if (touchDifference < -50 && currentPageIndex > 0) {
        navigate(navbarData.navItems[currentPageIndex - 1].url)
      }
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
    };
  }, [currentPageIndex, touchStart, currentSection])

  return { handleTouchStart, handleTouchEnd }
}