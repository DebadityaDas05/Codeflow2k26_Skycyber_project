import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Landing from './pages/landing.jsx'
import Common from './pages/common.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Common />
    </BrowserRouter>
  </StrictMode>,
)
