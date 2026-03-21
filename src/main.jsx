import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

try {
  const stored = localStorage.getItem('theme')
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches
  const theme = stored === 'dark' || stored === 'light' ? stored : (prefersDark ? 'dark' : 'light')
  document.documentElement.dataset.theme = theme
} catch {
  // Ignore theme initialization errors
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
