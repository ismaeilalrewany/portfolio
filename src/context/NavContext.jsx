import { createContext } from "react"

export const NavContext = createContext({
  currentItem: {},
  setCurrentItem: () => {}
})