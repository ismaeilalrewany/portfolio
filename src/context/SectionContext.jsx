import { createContext } from "react"

export const SectionContext = createContext({
  currentSection: {},
  setCurrentSection: () => {}
})