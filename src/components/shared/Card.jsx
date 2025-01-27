import propTypes from 'prop-types'

export const Card = ({ data }) => {
  return (
    <h2>{data.title}</h2>
  )
}

Card.propTypes = {
  data: propTypes.object.isRequired
}