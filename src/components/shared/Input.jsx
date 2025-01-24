import propTypes from "prop-types"

export const Input = ({ label, id, type = "text", textarea = false }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-blue-500">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={id}
          rows="4"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      )}
    </div>
  )
}

Input.propTypes = {
  label: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  type: propTypes.string,
  textarea: propTypes.bool,
}