import { Link } from 'react-router-dom'
import propTypes from 'prop-types'

export const Button = ({ label , theme = {background: "bg-black"}, type = "button", to }) => {
  const buttonClasses = `relative py-3 px-4 text-[14px] lg:text-[16px] rounded-full font-BrunoAceSC ${theme.background} transition-[background-color] duration-300`

  return (
    <div className={`group relative inline-block mt-3 lg:mt-4 p-[2px] rounded-full overflow-hidden`}>
      <span className={`absolute -inset-[1000%] animate-spin-slow ${theme.spark} group-hover:[animation-play-state:paused]`}></span>
      {
        type === "link" && to ?
        <Link to={to} className={`${buttonClasses} inline-block`}>{label}</Link> :
        <button type={type} className={buttonClasses}>{label}</button>
      }
    </div>
  )
}

Button.propTypes = {
  label: propTypes.string.isRequired,
  theme: propTypes.object,
  type: propTypes.string,
  to: propTypes.string
}