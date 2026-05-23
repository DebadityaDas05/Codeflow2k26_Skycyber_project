import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Common from '../pages/common'
import Footer from './Footer'

function Layout() {
  return (
    <>
      <Header/>
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/common" element={<Common/>} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default Layout