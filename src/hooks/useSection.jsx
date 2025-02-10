import { SectionContext } from '../context/SectionContext'
import { useContext } from 'react'

export const useSection = () => {
  const context = useContext(SectionContext)
  if (context === undefined) {
    throw new Error('useSection must be used within a SectionContextProvider')
  }
  return context
}