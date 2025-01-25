import propTypes from 'prop-types'

export const About = ({ content }) => (
  <article className="col-span-2">
    <h2 className="font-Orbitron">About</h2>
    <p>{content}</p>
  </article>
)

About.propTypes = {
  content: propTypes.string.isRequired
}