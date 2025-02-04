import { useTitle } from "../hooks/useTitle"
import { Button } from "../components/shared/Button"
import { useRef, useContext, useEffect } from "react"
import { SectionContext } from "../context/SectionContext"

export const Hero = () => {
  const section = useRef(null)
  const { setCurrentSection } = useContext(SectionContext)

  useTitle("Ismaeil Alrewany | Front-end Web Developer")

  useEffect(() => {
    setCurrentSection(section)
  }, [setCurrentSection])

  return (
    <section className="bg-gray-600 text-blue-500 h-screen font-NovaSquare relative" ref={section}>
      <div className="container px-2 mx-auto h-full flex flex-col justify-center items-center">
        <h1 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[96px] font-medium font-Orbitron">Ismaeil Alrewany</h1>
        <p className="md:text-[24px] lg:text-[32px]">I&apos;m a Front-end Web Developer</p>
        <Button label="Download CV" />
        <div className="absolute bottom-6">
          
        </div>
      </div>
    </section>
  )
}