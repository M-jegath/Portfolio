import React from 'react'
import MainLayout from './layouts/MainLayout'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Works from './components/Works'
import Contact from './components/Contact'

function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
      <Works />
      <Contact />
    </MainLayout>
  )
}

export default App
