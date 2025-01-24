import { Input } from "./Input"
import { Button } from "./Button"
import { useState } from "react"

export const ContactForm = () => {
  const [result, setResult] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending....")
    const formData = new FormData(event.target)

    formData.append("access_key", "d729d16e-3508-4e2d-a2a9-fd995e50b23a")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })

    const data = await response.json()

    if (data.success) {
      setResult("Form Submitted Successfully")
      event.target.reset()
    } else {
      console.log("Error", data)
      setResult(data.message)
    }
  }

  return (
    <>
      <form className="col-span-2" onSubmit={onSubmit}>
        <h2 className="font-Orbitron text-xl mb-4">Contact</h2>
        <Input label="Full Name" id="fullName" />
        <Input label="Email" id="email" type="email" />
        <Input label="Message" id="message" textarea />
        <Button label="Submit" type="submit" />
      </form>
      <span className="font-BrunoAceSC text-md text-blue-500" >{result}</span>
    </>
  )
}