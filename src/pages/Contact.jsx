import { ContactNavList } from "../components/shared/ContactNavList"
import { About } from "../components/layout/About"
import { ContactForm } from "../components/layout/ContactForm"
import { Footer } from "../components/layout/Footer"
import { useTitle } from "../hooks/useTitle"
import { useRef, useContext, useEffect } from "react"
import { SectionContext } from "../context/SectionContext"
import navbarData from "../data/navbar.json"
import projectsData from "../data/projects.json"

export const Contact = () => {
  const section = useRef(null)
  const { setCurrentSection } = useContext(SectionContext)
  const aboutContent = "I am Ismaeil Alrewany, I am a web developer and designer with a passion..."

  useTitle("Ismaeil Alreweny | Contact")

  useEffect(() => {
    setCurrentSection(section)
    section.current.focus()
  }, [setCurrentSection])

  return (
    <section className={`h-screen text-blue-500 bg-gray-600 font-NovaSquare overflow-y-auto scrollbar-thin scrollbar-track-gray-400 scrollbar-thumb-slate-500`} ref={section}>
      <div className="flex flex-col">
        <div className="container flex-grow px-2 py-[60px] mx-auto text-center">
          <h1 className="font-medium text-[28px] lg:text-[48px] font-Orbitron">Contact</h1>
          <div className="grid grid-flow-row grid-cols-2 gap-4 text-left">
            <ContactNavList title="Portfolio" items={navbarData.navItems} />
            <ContactNavList title="Projects" items={projectsData.projects} />
            <About content={aboutContent} />
            <ContactForm />
          </div>
        </div>
        <Footer />
      </div>
    </section>
  )
}