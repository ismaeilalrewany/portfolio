import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import navbarData from "../data/navbar"

export const useNavEvents = (indexOfCurrentPage) => {
  const currentPageIndex = indexOfCurrentPage - 1
  const [touchStart, setTouchStart] = useState(0)
  const navigate = useNavigate()

  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp" && currentPageIndex > 0) {
      // if (window.scrollY === 0) {
      //   navigate(navbarData.navItems[currentPageIndex - 1].url)
      // }
      // console.log(window.innerHeight)
      navigate(navbarData.navItems[currentPageIndex - 1].url)
    } else if (event.key === "ArrowDown" && currentPageIndex < navbarData.navItems.length - 1) {
      navigate(navbarData.navItems[currentPageIndex + 1].url)
    } else {
      return
    }
  }

  const handleWheel = (event) => {
    if (event.deltaY < 0 && currentPageIndex > 0) {
      navigate(navbarData.navItems[currentPageIndex - 1].url)
    } else if (event.deltaY > 0 && currentPageIndex < navbarData.navItems.length - 1) {
      navigate(navbarData.navItems[currentPageIndex + 1].url)
    } else {
      return
    }
  }

  const handleTouchStart = (event) => {
    setTouchStart(event.touches[0].clientY)
  }

  const handleTouchEnd = (event) => {
    const touchEnd = event.changedTouches[0].clientY
    const touchDifference = touchStart - touchEnd

    if (touchDifference > 50 && currentPageIndex < navbarData.navItems.length - 1) {
      navigate(navbarData.navItems[currentPageIndex + 1].url)
    } else if (touchDifference < -50 && currentPageIndex > 0) {
      navigate(navbarData.navItems[currentPageIndex - 1].url)
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
    };
  }, [currentPageIndex, touchStart])

  return { handleTouchStart, handleTouchEnd }
}