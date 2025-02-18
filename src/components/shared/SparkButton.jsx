import { SparkStyle } from './SparkStyle'
import propTypes from 'prop-types'

export const SparkButton = ({ label , theme = {background: "bg-black"}, type = "button" }) => {
  return (
    <SparkStyle theme={theme}>
      <button type={type} className={`relative py-3 px-4 text-[14px] lg:text-[16px] rounded-full font-BrunoAceSC ${theme.background} transition-[background-color] duration-300`}>{label}</button>
    </SparkStyle>
  )
}

SparkButton.propTypes = {
  label: propTypes.string.isRequired,
  theme: propTypes.object,
  type: propTypes.string,
}