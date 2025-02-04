import { useState } from "react"
import { SectionContext } from "../context/SectionContext"
import propTypes from "prop-types"

export const SectionContextProvider = ({ children }) => {
  const [currentSection, setCurrentSection] = useState(null)

  return (
    <SectionContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </SectionContext.Provider>
  )
}

SectionContextProvider.propTypes = {
  children: propTypes.node.isRequired,
}