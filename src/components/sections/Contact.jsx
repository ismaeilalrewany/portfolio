import LinkedInIcon from "../../assets/icons/linkedin-alt-line.svg?react"
import GitHubIcon from "../../assets/icons/github-alt-line.svg?react"
import GmailIcon from "../../assets/icons/envelope-alt-line.svg?react"
import WhatsAppIcon from "../../assets/icons/whatsapp-line.svg?react"
import { useRef, useState, useEffect } from "react"

export const Contact = () => {
  const contactRef = useRef(null)
  const [isBigScreen, setIsBigScreen] = useState(false)

  useEffect(() => {
    const checkHeight = () => {
      if (window.innerHeight > contactRef.current.clientHeight) {
        setIsBigScreen(true)
      } else {
        setIsBigScreen(false)
      }
    }

    checkHeight()
    window.addEventListener("resize", checkHeight)
    return () => window.removeEventListener("resize", checkHeight)
  }, [])

  return (
    <section className={`${isBigScreen ? "h-screen" : "h-full"} text-blue-500 bg-gray-600 font-NovaSquare pt-[60px]`} ref={contactRef}>
      <div className="container px-2 mx-auto text-center">
        <div className="grid grid-flow-row grid-cols-2 gap-4 text-left">
        <div className="col-span-1">
          <h2 className="font-Orbitron">Portfolio</h2>
          <ul className="list-none">
            <li>Hero</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h2 className="font-Orbitron">Projects</h2>
          <ul className="list-none">
            <li>Portfolio</li>
            <li>Al-cashier</li>
            <li>Al-bayie</li>
            <li>Special Design</li>
          </ul>
        </div>
        <article className="col-span-2">
          <h2 className="font-Orbitron">About</h2>
          <p>I am Ismaeil Alrewany, I am a web developer and designer with a passion for creating beautiful and functional user experiences. I have been studying web development for 2 years and I have been working on my own website for that long. I am always looking for new opportunities to learn and grow as a developer.</p>
        </article>
        <div className="col-span-2">
          <h2 className="font-Orbitron">Social</h2>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/ismaeil-alrewany/" target="_blank" rel="noreferrer">
              <LinkedInIcon className="w-8 h-8 fill-current text-blue-500" />
            </a>
            <a href="https://github.com/ismaeilalrewany" target="_blank" rel="noreferrer">
              <GitHubIcon className="w-8 h-8 fill-current text-blue-500" />
            </a>
            <a href="mailto:ismailalrewany332@gmail.com" target="_blank" rel="noreferrer">
              <GmailIcon className="w-8 h-8 fill-current text-blue-500" />
            </a>
            <a href="https://wa.me/201097227910" target="_blank" rel="noreferrer">
              <WhatsAppIcon className="w-8 h-8 fill-current text-blue-500" />
            </a>
          </div>
        </div>
        <form className="col-span-2" action="" method="post">
          <h2 className="font-Orbitron text-xl mb-4">Contact</h2>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-blue-500">Full Name</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-blue-500">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-blue-500">Message</label>
            <textarea
              name="message"
              id="message"
              rows="4"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
        <footer className="col-span-2">
          <p className="lg:text-[24px] font-BrunoAceSC">© 2025 Ismaeil Alrewany</p>
        </footer>
      </div>
    </div>
    </section>
  )
}