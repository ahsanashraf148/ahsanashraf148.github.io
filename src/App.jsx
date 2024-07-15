import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Education from './components/education/Education'
import Experience from './components/experience/Experience'
// import Skills from './components/skills/Skills'
// import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Education />
      <Experience />
      {/* <Skills />
      <Portfolio /> */}
      <Contact />
      <Footer />


    </>
  )
}

export default App
