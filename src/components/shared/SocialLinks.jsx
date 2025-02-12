import LinkedInIcon from "../../assets/icons/linkedin-alt-line.svg?react"
import GitHubIcon from "../../assets/icons/github-alt-line.svg?react"
import GmailIcon from "../../assets/icons/envelope-alt-line.svg?react"
import WhatsAppIcon from "../../assets/icons/whatsapp-line.svg?react"
import propTypes from "prop-types"

const socials = [
  { icon: LinkedInIcon, href: "https://www.linkedin.com/in/ismaeil-alrewany/" },
  { icon: GitHubIcon, href: "https://github.com/ismaeilalrewany" },
  { icon: GmailIcon, href: "mailto:ismailalrewany332@gmail.com" },
  { icon: WhatsAppIcon, href: "https://wa.me/201097227910" }
]

export const SocialLinks = ({textColor}) => (
  <div className="flex gap-4">
    {socials.map((social, index) => (
      <a key={`M${index}`} href={social.href} target="_blank" rel="noreferrer">
        <social.icon className={`w-4 md:w-6 h-4 md:h-6 fill-current ${textColor}`} />
      </a>
    ))}
  </div>
)

SocialLinks.propTypes = {
  textColor: propTypes.string,
}