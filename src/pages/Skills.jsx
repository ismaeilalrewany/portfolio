import { useTitle } from '../hooks/useTitle'
import { Galaxy } from '../components/shared/Galaxy'
import { Stars } from '../components/shared/Stars'
import skillsData from "../data/skills.json"

export const Skills = () => {
  useTitle("Ismaeil Alreweny | Skills")

  return (
    <section className="h-screen text-blue-500 bg-black font-NovaSquare pt-[60px] overflow-y-auto scrollbar-thin scrollbar-track-gray-400 scrollbar-thumb-slate-500">
      <Stars />
      <div className="container px-2 mx-auto text-center">
        <h1 className="font-medium text-[28px] lg:text-[48px] font-Orbitron">Skills</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 justify-center place-items-center">
          {
            skillsData.skillCategory.map(skill => (
              <Galaxy key={skill.id} color={skill.color}/>
            ))
          }
        </div>
      </div>
    </section>
  )
}