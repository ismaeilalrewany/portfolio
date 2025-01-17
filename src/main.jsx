import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NavProvider } from './context/NavProvider.jsx'
import { App } from './App.jsx'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavProvider>
      <App />
    </NavProvider>
  </StrictMode>
)