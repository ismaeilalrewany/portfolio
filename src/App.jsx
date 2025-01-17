import { Header } from './components/layout/Header'
import { Nav } from './components/layout/Nav'
import { Hero } from './components/sections/Hero'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { Footer } from './components/layout/Footer'
import { useContext, useEffect } from 'react'
import { NavContext } from './context/NavContext'
import { useNavContext } from './hooks/useNavContext'

export const App = () => {
  const { item } = useContext(NavContext)
  const { title, section } = useContext(NavContext)
  const sections = { Hero, Skills, Projects, Footer }
  const SectionComponent = sections[section] || Hero

  useEffect(() => {
    document.title = `Portfolio | ${title}`
  }, [title])

  return (
    <main className="relative">
      <Header />
      <useNavContext>
        <Nav />
        <SectionComponent />
      </useNavContext>
    </main>
  )
}