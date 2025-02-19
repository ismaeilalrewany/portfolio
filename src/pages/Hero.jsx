import { useRef, useEffect } from "react"
import { Stars } from "../components/shared/Stars"
// import { AnimatedCelestial } from "../components/features/AnimatedCelestial"
import { Header } from "../components/layout/Header"
import { SparkLink } from "../components/shared/SparkLink"
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
  const cvfileId = "1dXqwBNv2CUqWSF-9Q8xXcns0ooF5ij3L"

  useTitle("Ismaeil Alrewany | Front-end Web Developer")

  useEffect(() => {
    setCurrentSection(section)
    section.current.focus()
  }, [setCurrentSection])

  return (
    <section className={`h-screen relative overflow-x-hidden overflow-y-auto scrollbar-thin ${theme["scrollbar-track"]} ${theme["scrollbar-thumb"]}`} ref={section}>
      <Stars />
      {/* <AnimatedCelestial /> */}
      <div className={`flex flex-col h-full transition-colors duration-300 ${theme.background} ${theme.text} font-NovaSquare`}>
        <Header />
        <div className="container px-2 mx-auto flex-grow flex flex-col justify-center items-center z-[1]">
          <h1 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[96px] font-medium font-Orbitron">Ismaeil Alrewany</h1>
          <p className="md:text-[24px] lg:text-[32px]">I&apos;m a Front-end Web Developer</p>
          <SparkLink theme={theme} label="Download CV" to={`https://drive.google.com/uc?export=download&id=${cvfileId}`} />
          <div className="absolute bottom-6">
            
          </div>
        </div>
        <Footer textColor={theme.text}/>
      </div>
    </section>
  )
}