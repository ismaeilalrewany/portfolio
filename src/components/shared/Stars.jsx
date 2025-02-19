export const Stars = () => {
  const stars = []
  const starCount = 500

  for (let i = 0; i < starCount; i++) {
    const style = {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 3}px`,
      height: `${Math.random() * 3}px`,
      animationDelay: `${Math.random() * 10}s`
    }
    stars.push(
      <div
        key={i}
        className="absolute bg-white rounded-full animate-twinkle"
        style={style}
      />
    )
  }

  return <div className="absolute inset-0 overflow-hidden">{stars}</div>
}