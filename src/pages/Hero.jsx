import { useTitle } from "../hooks/useTitle"
import { Button } from "../components/shared/Button"

export const Hero = () => {
  useTitle("Ismaeil Alrewany | Front-end Web Developer")

  return (
    <section className="bg-gray-600 text-blue-500 h-screen font-NovaSquare">
      <div className="container px-2 mx-auto h-full flex flex-col justify-center items-center">
        <h1 className="text-[32px] lg:text-[96px] font-medium font-Orbitron">Ismaeil Alrewany</h1>
        <p className="lg:text-[32px]">I&apos;m a Front-end Web Developer</p>
        <Button label="Download CV" />
      </div>
    </section>
  )
}