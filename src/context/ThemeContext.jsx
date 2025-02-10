import { createContext } from "react"

export const ThemeContext = createContext({
  selectedHour: {},
  handleHourChange: () => {}
})