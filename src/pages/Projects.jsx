import { useRef, useEffect } from "react"
import { Card } from "../components/shared/Card"
import { Footer } from "../components/layout/Footer"
import { useTitle } from "../hooks/useTitle"
import { useSection } from "../hooks/useSection"
import projectsData from "../data/projects.json"

export const Projects = () => {
  const section = useRef(null)
  const { setCurrentSection } = useSection()

  useTitle("Ismaeil Alrewany | Projects")

  useEffect(() => {
    setCurrentSection(section)
    section.current.focus()
  }, [setCurrentSection])

  return (
    <section className="h-screen text-blue-500 bg-gray-600 font-NovaSquare overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-track-gray-400 scrollbar-thumb-slate-500" ref={section}>
      <div className="flex flex-col">
        <div className="container flex-grow px-2 py-[60px] mx-auto text-center">
          <h1 className="font-medium text-[28px] lg:text-[48px] font-Orbitron">Projects</h1>
          <div className="grid place-items-center grid-cols-1 gap-4 mt-4 lg:grid-cols-2">
            {
              projectsData.projects.map(project => (
                <Card key={project.id} data={project} />
              ))
            }
          </div>
        </div>
        <Footer />
      </div>
    </section>
  )
}