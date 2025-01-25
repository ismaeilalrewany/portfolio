import { Button } from "../components/shared/Button"

export const NotFound = () => {
  return (
    <section className="bg-gray-600 text-blue-500 h-screen font-NovaSquare">
      <div className="container px-2 mx-auto h-full flex flex-col justify-center items-center">
        <h1 className="text-[32px] lg:text-[96px] font-medium font-Orbitron">404</h1>
        <p className="lg:text-[32px]">Page Not Found</p>
        <Button label="Go Home" link="/" />
      </div>
    </section>
  )
}