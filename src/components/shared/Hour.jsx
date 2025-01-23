import propTypes from 'prop-types'

export const Hour = ({ isActive, isFilled }) => {
  return (
    <div className={`relative w-3`} role="button" tabIndex="-1">
      <div className={`h-6 w-1 mx-auto ${isActive ? 'bg-blue-500' : ''} ${isFilled ? 'bg-blue-500' : 'bg-gray-500'}`}></div>
    </div>
  )
}

Hour.propTypes = {
  isActive: propTypes.bool,
  isFilled: propTypes.bool,
}