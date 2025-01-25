import { useTitle } from "../hooks/useTitle"
export const Projects = () => {
  useTitle("Ismaeil Alrewany | Projects")

  return (
    <section className="h-screen text-blue-500 bg-gray-600 font-NovaSquare pt-[60px]">
      <div className="container px-2 mx-auto text-center">
        <h1 className="font-medium text-[28px] lg:text-[48px] font-Orbitron">Projects</h1>
        <p className="lg:text-[24px]">Portfolio, Al-cashier, Al-bayie, Special Design</p>
      </div>
    </section>
  )
}