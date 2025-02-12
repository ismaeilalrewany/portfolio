import { memo } from "react"
import { SocialLinks } from "../shared/SocialLinks"
import propTypes from 'prop-types'

const Footer = ({textColor}) => {
  const color = textColor ? textColor : 'text-blue-500'

  return (
    <footer className="">
      <div className="container mx-auto p-2">
        <div className="flex justify-between items-center">
          <p className={`text-xs md:text-base font-BrunoAceSC ${color}`}>&copy; 2025 Ismaeil Alrewany</p>
          <SocialLinks textColor={color}/>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  textColor: propTypes.string,
}

const MemoizedFooter = memo(Footer)
export { MemoizedFooter as Footer }