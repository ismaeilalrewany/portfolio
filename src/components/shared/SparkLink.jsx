import { SparkStyle } from "./SparkStyle"
import { Link } from "react-router-dom"
import propTypes from 'prop-types'

export const SparkLink = ({ label, theme = {background: "bg-black"}, to }) => {
  return (
    <SparkStyle theme={theme}>
      <Link to={to} className={`inline-block relative py-3 px-4 text-[14px] lg:text-[16px] rounded-full font-BrunoAceSC ${theme.background} transition-[background-color] duration-300`}>{label}</Link>
    </SparkStyle>
  )
}

SparkLink.propTypes = {
  label: propTypes.string.isRequired,
  theme: propTypes.object,
  to: propTypes.string,
}