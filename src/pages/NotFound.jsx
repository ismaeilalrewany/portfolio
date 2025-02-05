import { Button } from "../components/shared/Button"
import { useTitle } from "../hooks/useTitle"

export const NotFound = () => {
  useTitle("404 - Page Not Found")

  return (
    <section className="h-screen bg-gray-600 text-blue-500 font-NovaSquare">
      <div className="container px-2 mx-auto h-full flex flex-col justify-center items-center">
        <h1 className="text-[32px] lg:text-[96px] font-medium font-Orbitron">404</h1>
        <p className="lg:text-[32px]">Page Not Found</p>
        <Button label="Go Home" type="link" to="/" />
      </div>
    </section>
  )
}