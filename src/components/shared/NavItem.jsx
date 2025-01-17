import propTypes from "prop-types"

export const NavItem = ({ item, onClick }) => {
  return (
    <li
      key={item.id}
      className={`cursor-pointer mb-2 ${item.active && "text-white"}`}
      onClick={() => onClick(item)}
    >
      {item.section}
    </li>
  )
}

NavItem.propTypes = {
  item: propTypes.object.isRequired,
  onClick: propTypes.func.isRequired,
}