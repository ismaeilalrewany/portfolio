import { useRef, useState, useEffect } from "react"
import propTypes from "prop-types"

export const ContactSectionLayout = ({ children }) => {
  const contactRef = useRef(null)
  const [isBigScreen, setIsBigScreen] = useState(false)

  useEffect(() => {
    const checkHeight = () => {
      if (window.innerHeight > contactRef.current.clientHeight) {
        setIsBigScreen(true)
      } else {
        setIsBigScreen(false)
      }
    }

    checkHeight()
    window.addEventListener("resize", checkHeight)
    return () => window.removeEventListener("resize", checkHeight)
  }, [])

  return (
    <section 
      className={`${isBigScreen ? "h-screen" : "h-full"} text-blue-500 bg-gray-600 font-NovaSquare pt-[60px]`} 
      ref={contactRef}
    >
      <div className="container px-2 mx-auto text-center">
        <div className="grid grid-flow-row grid-cols-2 gap-4 text-left">
          {children}
        </div>
      </div>
    </section>
  )
}

ContactSectionLayout.propTypes = {
  children: propTypes.node.isRequired
}