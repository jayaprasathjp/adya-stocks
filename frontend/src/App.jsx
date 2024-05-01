import { useState } from 'react'
import './App.css'
import TopStocks from './components/TopStocks'
import{ BrowserRouter as Router, Route,Routes, Navigate, NavLink } from 'react-router-dom'
import NavBar from './components/Navbar'
import HeroSection from './components/hero-section'
import LoginPage from './components/auth/login'
import MyStocks from './components/MyStocks'
import Wallet from './components/Wallet'
import RegisterPage from './components/auth/register'
import AddStock from './components/AddStock'
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={ <HeroSection/>} />
        <Route path="/login" element={ <LoginPage/>} />
        <Route path="/Register" element={ <RegisterPage/>} />
        
        <Route path="/TopStocks" element={ <TopStocks/>} />
        <Route path="/mystocks" element={ <MyStocks/>} />
        <Route path="/addStocks" element={ <AddStock/>} />
      </Routes>
      
    </Router>
      
    </>
  )
}

export default App
