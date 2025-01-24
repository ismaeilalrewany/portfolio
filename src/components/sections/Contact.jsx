import { ContactSectionLayout } from "./ContactSectionLayout"
import { ContactNavList } from "../shared/ContactNavList"
import { About } from "../shared/About"
import { SocialLinks } from "../shared/SocialLinks"
import { ContactForm } from "../shared/ContactForm"
import { Footer } from "../shared/Footer"
import navbarData from "../../data/navbar.json"
import projectsData from "../../data/projects.json"

export const Contact = () => {
  const aboutContent = "I am Ismaeil Alrewany, I am a web developer and designer with a passion..."

  return (
    <ContactSectionLayout>
      <ContactNavList title="Portfolio" items={navbarData.navItems} />
      <ContactNavList title="Projects" items={projectsData.projects} />
      <About content={aboutContent} />
      <SocialLinks />
      <ContactForm />
      <Footer />
    </ContactSectionLayout>
  )
}