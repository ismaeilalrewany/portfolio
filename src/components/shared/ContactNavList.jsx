import propTypes from "prop-types"

export const ContactNavList = ({ title, items }) => (
  <div className="col-span-1">
    <h2 className="font-Orbitron">{title}</h2>
    <ul className="list-none">
      {items.map(item => (
        <li key={item.id}>
          <a href={item.url || item.github} target="_blank">{item.title}</a>
        </li>
      ))}
    </ul>
  </div>
)

ContactNavList.propTypes = {
  title: propTypes.string.isRequired,
  items: propTypes.array.isRequired,
}