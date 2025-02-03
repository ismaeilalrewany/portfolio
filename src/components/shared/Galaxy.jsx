import propTypes from 'prop-types'

export const Galaxy = ({color}) => {
  const createSpiralArms = () => {
    const arms = []
    const armCount = 4
    const starsPerArm = 150

    for (let arm = 0; arm < armCount; arm++) {
      for (let i = 0; i < starsPerArm; i++) {
        const angle = (i / starsPerArm) * Math.PI * 4 + (arm * Math.PI * 2) / armCount
        const radius = (i / starsPerArm) * 40
        const x = 50 + radius * Math.cos(angle)
        const y = 50 + radius * Math.sin(angle)
        
        const style = {
          top: `${y}%`,
          left: `${x}%`,
          width: `${Math.random() * 2 + 1}px`,
          height: `${Math.random() * 2 + 1}px`,
          animationDelay: `${Math.random() * 10}s`
        }
        
        arms.push(
          <div
            key={`arm-${arm}-${i}`}
            className="absolute bg-white/80 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] animate-twinkle"
            style={style}
          />
        )
      }
    }

    return arms
  }

  const galaxyCoreColor = () => {
    switch (color) {
      case "purple":
        return "bg-[radial-gradient(ellipse_at_center,_rgba(125,200,255,0.8)_0%,_rgba(96,76,220,0.6)_30%,_rgba(40,20,80,0.4)_100%)] shadow-[0_0_80px_40px_rgba(96,76,220,0.3),0_0_150px_100px_rgba(40,20,80,0.2)_inset]"
      case "green":
        return "bg-[radial-gradient(ellipse_at_center,_rgba(150,255,180,0.9)_0%,_rgba(50,200,150,0.7)_40%,_rgba(20,80,100,0.4)_100%)] shadow-[0_0_100px_50px_rgba(50,200,150,0.3),0_0_150px_80px_rgba(20,150,100,0.2)_inset]"
      case "pink":
        return "bg-[radial-gradient(ellipse_at_center,_rgba(255,200,220,0.9)_0%,_rgba(255,100,180,0.7)_30%,_rgba(120,30,100,0.4)_100%)] shadow-[0_0_80px_40px_rgba(255,100,180,0.3),0_0_120px_80px_rgba(180,50,120,0.2)_inset]"
      default:
        return ""
    }
  }

  return (
    <div className="relative w-[300px] h-[300px] bg-transparent rounded-full overflow-hidden md:last:col-span-2 lg:last:col-span-1">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full animate-rotate">
        {createSpiralArms()}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full ${galaxyCoreColor()} backdrop-blur-sm animate-pulse-slow`} />
      </div>
    </div>
  )
}

Galaxy.propTypes = {
  color: propTypes.string
}