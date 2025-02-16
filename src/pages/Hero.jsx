import { useRef, useEffect } from "react"
import { Header } from "../components/layout/Header"
import { Button } from "../components/shared/Button"
import { Footer } from "../components/layout/Footer"
import { useTitle } from "../hooks/useTitle"
import { useSection } from "../hooks/useSection"
import { useTheme } from "../hooks/useTheme"
import themesData from "../data/themes.json"

export const Hero = () => {
  const section = useRef(null)
  const { setCurrentSection } = useSection()
  const { selectedHour } = useTheme()
  const theme = themesData.hours[selectedHour.toString()].colors

  useTitle("Ismaeil Alrewany | Front-end Web Developer")

  useEffect(() => {
    setCurrentSection(section)
    section.current.focus()
  }, [setCurrentSection])

  return (
    <>
      <section className={`h-screen transition-colors ${theme.background} ${theme.text} font-NovaSquare relative overflow-x-hidden overflow-y-auto scrollbar-thin ${theme["scrollbar-track"]} ${theme["scrollbar-thumb"]}`} ref={section}>
        <div className="flex flex-col h-full">
          <Header />
          <div className="container px-2 mx-auto flex-grow flex flex-col justify-center items-center">
            <h1 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[96px] font-medium font-Orbitron">Ismaeil Alrewany</h1>
            <p className="md:text-[24px] lg:text-[32px]">I&apos;m a Front-end Web Developer</p>
            <Button label="Download CV" />
            <div className="absolute bottom-6">
              
            </div>
          </div>
          <Footer textColor={theme.text}/>
        </div>
      </section>
    </>
  )
}