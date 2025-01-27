import { useTitle } from "../hooks/useTitle"
import projectsData from "../data/projects.json"
import { Card } from "../components/shared/Card"

export const Projects = () => {
  useTitle("Ismaeil Alrewany | Projects")

  return (
    <section className="h-screen text-blue-500 bg-gray-600 font-NovaSquare pt-[60px] overflow-x-hidden  overflow-y-auto scrollbar-thin scrollbar-track-gray-400 scrollbar-thumb-slate-500">
      <div className="container px-2 mx-auto text-center">
        <h1 className="font-medium text-[28px] lg:text-[48px] font-Orbitron">Projects</h1>
        <div className="grid place-items-center grid-cols-1 gap-4 mt-4 lg:grid-cols-2">
          {
            projectsData.projects.map(project => (
              <Card key={project.id} data={project} />
            ))
          }
        </div>
      </div>
    </section>
  )
}