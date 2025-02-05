import { useTitle } from '../hooks/useTitle'
import { Galaxy } from '../components/shared/Galaxy'
import { Stars } from '../components/shared/Stars'
import { useRef, useContext, useEffect } from 'react'
import { SectionContext } from '../context/SectionContext'
import { Footer } from '../components/layout/Footer'
import skillsData from "../data/skills.json"

export const Skills = () => {
  const section = useRef(null)
  const { setCurrentSection } = useContext(SectionContext)

  useTitle("Ismaeil Alreweny | Skills")

  useEffect(() => {
    setCurrentSection(section)
  }, [setCurrentSection])

  return (
    <section className="h-screen text-blue-500 bg-black font-NovaSquare relative">
      <div className="absolute inset-0 overflow-hidden">
        <Stars />
      </div>

      <div className='h-full flex flex-col overflow-y-auto scrollbar-thin scrollbar-track-gray-400 scrollbar-thumb-slate-500' ref={section}>
        <div className="container flex-grow py-[60px] px-2 mx-auto text-center">
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