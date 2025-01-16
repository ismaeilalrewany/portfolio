export const Hero = () => {
  return (
    <section className="bg-gray-600 text-blue-500 h-screen">
      <div className="container mx-auto h-full flex flex-col justify-center items-center">
        <h1 className="text-[40px] lg:text-[96px] font-medium">Ismaeil Alrewany</h1>
        <p className="lg:text-[32px]">I&apos;m a Front-end Developer</p>
        <button type="button" className="py-2 px-4 border border-blue-500 rounded-[20px] mt-3 lg:mt-4 text-[14px] lg:text-[16px]">Download CV</button>
      </div>
    </section>
  )
}