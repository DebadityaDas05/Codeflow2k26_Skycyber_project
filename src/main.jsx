import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
//import App from './App.jsx'
//import Layout from './components/Layout.jsx'
//import Home from './components/Home.jsx'
import Common from './pages/common.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Common />
    </BrowserRouter>
  </StrictMode>,
)
