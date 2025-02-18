import propTypes from 'prop-types'

export const SparkStyle = ({ children, theme }) => {
  return (
    <div className={`group relative inline-block mt-3 lg:mt-4 p-[2px] rounded-full overflow-hidden`}>
      <span className={`absolute -inset-[1000%] animate-spin-slow ${theme.spark} group-hover:[animation-play-state:paused]`}></span>
      { children }
    </div>
  )
}

SparkStyle.propTypes = {
  theme: propTypes.object.isRequired,
  children: propTypes.node.isRequired,
}