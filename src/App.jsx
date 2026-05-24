import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/landing.jsx'
import LoginPopup from './pages/login.jsx'
import Common from './pages/common.jsx'
import Business from './pages/business.jsx'
import Services from './pages/services.jsx'
import Dashboard from './pages/dashboard.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route 
        path="/login" 
        element={
          <LoginPopup 
            showLogin={true} 
            setShowLogin={() => {}} 
          />
        } 
      />
      <Route path="/common" element={<Common />} />
      <Route path="/business" element={<Business />} />
      <Route path="/services" element={<Services />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App