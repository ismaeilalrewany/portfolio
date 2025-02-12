import { memo } from "react"
import { useLocation } from "react-router-dom"
import { SocialLinks } from "../shared/SocialLinks"
import { useTheme } from "../../hooks/useTheme"
import themesData from "../../data/themes.json"

const Footer = () => {
  const location = useLocation()
  const { selectedHour } = useTheme()
  const theme = themesData.hours[selectedHour.toString()].colors

  const textColor = () => {
    switch (location.pathname) {
      case "/":
        return theme.text
      default:
        return "text-blue-500"
    }
  }

  return (
    <footer className="">
      <div className="container mx-auto p-2">
        <div className="flex justify-between items-center">
          <p className={`lg:text-[24px] font-BrunoAceSC ${textColor()}`}>© 2025 Ismaeil Alrewany</p>
          <SocialLinks color={textColor()}/>
        </div>
      </div>
    </footer>
  )
}

const MemoizedFooter = memo(Footer)
export { MemoizedFooter as Footer }