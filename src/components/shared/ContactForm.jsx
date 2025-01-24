import propTypes from "prop-types"

const FormInput = ({ label, id, type = "text", textarea = false }) => (
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

export const ContactForm = () => (
  <form className="col-span-2" action="" method="post">
    <h2 className="font-Orbitron text-xl mb-4">Contact</h2>
    <FormInput label="Full Name" id="fullName" />
    <FormInput label="Email" id="email" type="email" />
    <FormInput label="Message" id="message" textarea />
    <div>
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </div>
  </form>
)

FormInput.propTypes = {
  label: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  type: propTypes.string,
  textarea: propTypes.bool,
}