import { useState } from 'react'
import './App.css'
import TopStocks from './components/TopStocks'
import{ BrowserRouter as Router, Route,Routes, Navigate, NavLink } from 'react-router-dom'
import NavBar from './components/Navbar'
import HeroSection from './components/hero-section'
import RegisterPage from './components/auth/login'
function App() {

  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={ <HeroSection/>} />
        <Route path="/login" element={ <RegisterPage/>} />
        <Route path="/TopStocks" element={ <TopStocks/>} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
