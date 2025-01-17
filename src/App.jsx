import { Header } from './components/layout/Header'
import { Navigation } from './components/layout/Navigation'
import { Hero } from './components/sections/Hero'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { Footer } from './components/layout/Footer'
import { useContext, useEffect } from 'react'
import { NavContext } from './context/NavContext'

const sections = { Hero, Skills, Projects, Footer }

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