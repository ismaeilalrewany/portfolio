import propTypes from 'prop-types'

export const Button = ({label, type = "button"}) => {
  return (
    <button type={type} className="py-2 px-4 border border-blue-500 rounded-[20px] mt-3 lg:mt-4 text-[14px] lg:text-[16px] font-BrunoAceSC">{label}</button>
  )
}

Button.propTypes = {
  label: propTypes.string.isRequired,
  type: propTypes.string
}