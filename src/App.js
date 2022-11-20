import React from 'react'
import Header from './Component/Header/Header'
import Home from './Component/Home/Home'
import Portfolio from './Component/Portfolio/Portfolio'
import Graduate from './Component/Graduate/Graduate'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer'
import './App.css'

const App = () => {
  return (
    <>
    <Header />
    <Home/>
    <Portfolio/>
    <Graduate/>
    <Contact/>
    <Footer/>
    </>
  
  )
  
}

export default App