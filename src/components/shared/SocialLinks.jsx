import LinkedInIcon from "../../assets/icons/linkedin-alt-line.svg?react"
import GitHubIcon from "../../assets/icons/github-alt-line.svg?react"
import GmailIcon from "../../assets/icons/envelope-alt-line.svg?react"
import WhatsAppIcon from "../../assets/icons/whatsapp-line.svg?react"

const socials = [
  { icon: LinkedInIcon, href: "https://www.linkedin.com/in/ismaeil-alrewany/" },
  { icon: GitHubIcon, href: "https://github.com/ismaeilalrewany" },
  { icon: GmailIcon, href: "mailto:ismailalrewany332@gmail.com" },
  { icon: WhatsAppIcon, href: "https://wa.me/201097227910" }
]

export const SocialLinks = () => (
  <div className="flex gap-4">
    {socials.map((social, index) => (
      <a key={index} href={social.href} target="_blank" rel="noreferrer">
        <social.icon className="w-8 h-8 fill-current text-blue-500" />
      </a>
    ))}
  </div>
)