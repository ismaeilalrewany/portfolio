import { useState } from "react"
import { NavContext } from "../context/NavContext"
import navbarData from "../data/navbar"
import propTypes from "prop-types"

export const NavProvider = ({ children }) => {
  const [currentItem, setCurrentItem] = useState(navbarData.navItems[0])

  return (
    <NavContext.Provider value={{ currentItem, setCurrentItem }}>
      {children}
    </NavContext.Provider>
  )
}

NavProvider.propTypes = {
  children: propTypes.node.isRequired,
}