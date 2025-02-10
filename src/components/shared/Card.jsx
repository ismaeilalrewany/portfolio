export const Card = () => {
  return (
    <div className="relative w-[300px] h-[300px] flex items-center justify-center overflow-visible">
      {/* Smoke layers */}
      <div className="absolute w-full h-full">
        {/* Main smoke plume */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-[350px] h-[350px]">
            <div className="animate-smoke-1 absolute inset-0 bg-gradient-to-br from-white/70 via-white/25 to-transparent rounded-[40%] transform-gpu mix-blend-screen" />
            <div className="animate-smoke-2 absolute inset-0 bg-gradient-to-tr from-white/60 via-white/15 to-transparent rounded-[35%] transform-gpu mix-blend-screen" />
            <div className="animate-smoke-3 absolute inset-0 bg-gradient-to-tl from-white/50 via-white/10 to-transparent rounded-[30%] transform-gpu mix-blend-screen" />
          </div>
        </div>

        {/* Subtle ongoing turbulence effect */}
        <div className="absolute inset-0 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent mix-blend-overlay opacity-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/3 to-transparent mix-blend-overlay opacity-50" />
        </div>
      </div>

      {/* Optional - Smoke origin point */}
      {/* <div className="relative z-10 w-4 h-4 rounded-full bg-orange-400/80 shadow-xl" /> */}
      <p className="text-gray-600 z-10">Hello from under the smoke</p>
    </div>
  )
}