import { useTitle } from '../hooks/useTitle'
export const Skills = () => {
  useTitle("Ismaeil Alreweny | Skills")

  return (
    <section className="h-screen text-blue-500 bg-gray-600 font-NovaSquare pt-[60px]">
      <div className="container px-2 mx-auto text-center">
        <h1 className="font-medium text-[28px] lg:text-[48px] font-Orbitron">Skills</h1>
        <p className="lg:text-[24px]">HTML5, CSS3, JavaScript, and React</p>
      </div>
    </section>
  )
}