import { Link } from "react-router-dom"
import propTypes from "prop-types"

export const ContactNavList = ({ title, items }) => (
  <div className="col-span-1">
    <h2 className="font-Orbitron">{title}</h2>
    <ul className="list-none">
      {items.map(item => (
        <li key={item.id}>
          {
            item.url ? (
              <Link to={item.url}>{item.title}</Link>
            ) : (
              <a href={item.github} target="_blank">{item.title}</a>
            )
          }
        </li>
      ))}
    </ul>
  </div>
)

ContactNavList.propTypes = {
  title: propTypes.string.isRequired,
  items: propTypes.array.isRequired,
}