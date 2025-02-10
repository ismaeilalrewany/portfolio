import { SocialLinks } from "../shared/SocialLinks"
import { memo } from "react"

const Footer = () => (
  <footer className="">
    <div className="container mx-auto p-2">
      <div className="flex justify-between items-center">
        <p className="lg:text-[24px] font-BrunoAceSC">© 2025 Ismaeil Alrewany</p>
        <SocialLinks />
      </div>
    </div>
  </footer>
)

const MemoizedFooter = memo(Footer)
export { MemoizedFooter as Footer }