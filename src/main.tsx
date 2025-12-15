import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css' // Import theme-aware global styles
import './i18n' // Initialize i18n before rendering
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
