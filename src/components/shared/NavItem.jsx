import { useState } from "react"
import propTypes from "prop-types"

export const NavItem = ({ item, onClick }) => {
  const [displayDescription, setDisplayDescription] = useState(false)

  return (
    <li
      key={item.id}
      className="relative mx-auto cursor-pointer border-2 mb-6 w-8 h-8 rounded-full bg-gray-600 border-blue-500 flex justify-center items-center"
      onClick={() => onClick(item)}
      onMouseEnter={() => setDisplayDescription(true)}
      onMouseLeave={() => setDisplayDescription(false)}
    >
      {item.active && <div className="w-4 h-4 bg-blue-500 rounded-full"></div>}
      {displayDescription && (
        <div className="absolute left-[-120px] text-blue-500 font-BrunoAceSC font-bold">
          <div className="relative">
            <span className="absolute top-1/2 left-0 w-[120px] h-0.5 bg-blue-500 -translate-y-1/2 inline-block"></span>
            <span className="relative z-[1] bg-gray-600 pr-1 inline-block">{item.section}</span>
          </div>
        </div>
      )}
    </li>
  )
}

NavItem.propTypes = {
  item: propTypes.object.isRequired,
  onClick: propTypes.func.isRequired,
}