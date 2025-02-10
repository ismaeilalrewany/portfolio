import propTypes from 'prop-types'

export const Hour = ({ hour }) => {
  const height = () => {
    let height = 0

    if (hour <= 12) {
      height = 16 + 0.727 * (hour - 1)
    } else if (hour >= 13) {
      height = 23.997 - 0.727 * (hour - 13)
    } else {
      height = 16
    }

    return height + 'px'
  }

  return (
    <div className={`w-full`} role="button" tabIndex="-1">
      <div className={`w-[2px] rounded-full mx-auto bg-soft-white ${(hour < 9 || hour > 16) ? 'opacity-25' : 'opacity-100'}`}
      style={{height: height()}}></div>
    </div>
  )
}

Hour.propTypes = {
  hour: propTypes.number.isRequired,
}