import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const Button = ({ label, type = "button", to }) => {
  const commonClasses = "py-2 px-4 border border-blue-500 rounded-[20px] mt-3 lg:mt-4 text-[14px] lg:text-[16px] font-BrunoAceSC"
  let button = null

  if (type === "link" && to) {
    button = <Link to={to} className={commonClasses}>{label}</Link>
  } else {
    button = <button type={type} className={commonClasses}>{label}</button>
  }

  return button
}

Button.propTypes = {
  label: propTypes.string.isRequired,
  type: propTypes.string,
  to: propTypes.string
}