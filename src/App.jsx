import { Header } from './components/layout/Header'
import { Navigation } from './components/layout/Navigation'
import { Hero } from './pages/Hero'
import { Skills } from './pages/Skills'
import { Projects } from './pages/Projects'
import { Contact } from './pages/Contact'
import { NavContext } from './context/NavContext'
import { useContext, useEffect } from 'react'

const sections = { Hero, Skills, Projects, Contact }

export const App = () => {
  const { currentItem } = useContext(NavContext)
  const SectionComponent = sections[currentItem.section] || Hero

  useEffect(() => {
    document.title = `Portfolio | ${currentItem.title}`
  }, [currentItem.title])

  return (
    <main className="relative">
      <Header />
      <Navigation />
      <SectionComponent />
    </main>
  )
}