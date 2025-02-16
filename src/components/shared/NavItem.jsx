import { useState, useRef, useEffect } from "react"
import { NavLink } from "react-router-dom"
import propTypes from "prop-types"

export const NavItem = ({ item }) => {
  const description = useRef(null)
  const [displayDescription, setDisplayDescription] = useState(false)
  const [descriptionLineWidth, setDescriptionLineWidth] = useState(0)

  useEffect(() => {
    if (description.current) {
      const descriptionWidth = description.current.clientWidth
      const lineWidth = 120 - descriptionWidth
      setDescriptionLineWidth(lineWidth)
    }
  }, [displayDescription])

  return (
    <NavLink
      to={item.url}
      className={({ isActive }) =>
        `relative mx-auto cursor-pointer border-2 mb-6 w-8 h-8 rounded-full bg-gray-600 border-blue-500 flex justify-center items-center ${
          isActive ? "active" : ""
        }`
      }
      onMouseEnter={() => setDisplayDescription(true)}
      onMouseLeave={() => setDisplayDescription(false)}
    >
      {({ isActive }) => (
        <>
          {isActive && <div className="w-4 h-4 bg-blue-500 rounded-full"></div>}
          {displayDescription && (
            <div className="absolute left-[-120px] text-blue-500 font-BrunoAceSC font-bold">
              <div className="relative">
                <span className={`absolute top-1/2 h-0.5 bg-blue-500 -translate-y-1/2 inline-block rounded-l-full`} style={{width: `${descriptionLineWidth}px`, right: `-${descriptionLineWidth}px`}}></span>
                <span className="relative pr-1 inline-block" ref={description}>{item.page}</span>
              </div>
            </div>
          )}
        </>
      )}
    </NavLink>
  )
}

NavItem.propTypes = {
  item: propTypes.object.isRequired,
}