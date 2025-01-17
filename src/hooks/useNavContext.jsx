import { useState } from "react"
import { NavContext } from "../contexts/NavContext"

export const useNavContext = ({children}) => {
  const [item, setItem] = useState({})

  return (
    <NavContext.Provider value={{item, setItem}}>
      {children}
    </NavContext.Provider>
  )
}