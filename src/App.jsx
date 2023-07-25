import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Footer from './components/footer/Footer'
import Portfolio from './components/portfollio/Portfolio'


const App = () => {
  return (
  <>
  <Header />
  <Nav />
  <Portfolio />
  <Experience />
  <Services />
  <About />
  <Contact />
  <Footer />

  </>
  )
}

export default App