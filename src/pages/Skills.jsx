import { useTitle } from '../hooks/useTitle'
import { Galaxy } from '../components/shared/Galaxy'
import { Stars } from '../components/shared/Stars'
import { useRef, useEffect } from 'react'
import { Footer } from '../components/layout/Footer'
import { useSection } from '../hooks/useSection'
import skillsData from "../data/skills.json"

export const Skills = () => {
  const section = useRef(null)
  const { setCurrentSection } = useSection()

  useTitle("Ismaeil Alreweny | Skills")

  useEffect(() => {
    setCurrentSection(section)
    section.current.focus()
  }, [setCurrentSection])

  return (
    <section className="h-screen relative">
      <Stars />
      <div className='h-full flex flex-col text-blue-500 bg-black font-NovaSquare overflow-y-auto scrollbar-thin scrollbar-track-gray-400 scrollbar-thumb-slate-500' ref={section}>
        <div className="container flex-grow py-[60px] px-2 mx-auto text-center z-[1]">
          <h1 className="font-medium text-[28px] lg:text-[48px] font-Orbitron">Skills</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 justify-center place-items-center">
            {skillsData.category.map(skill => (
              <Galaxy key={skill.id} color={skill.color} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </section>
  )
}