import { Navigation } from './components/layout/Navigation'
import { Hero } from './pages/Hero'
import { Skills } from './pages/Skills'
import { Projects } from './pages/Projects'
import { Contact } from './pages/Contact'
import { NotFound } from './pages/NotFound'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { SectionContextProvider } from './context/SectionContextProvider'

const MainLayout = () => (
  <>
    <Navigation />
    <Outlet />
  </>
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Hero /> },
      { path: '/skills', element: <Skills /> },
      { path: '/projects', element: <Projects /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export const App = () => {
  return (
    <main className="relative">
      <SectionContextProvider>
        <RouterProvider router={router} />
      </SectionContextProvider>
    </main>
  )
}