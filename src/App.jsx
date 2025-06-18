import { useState } from 'react'


import styles from './App.module.css'
import Navbar from "./Components/Navbar/Navbar"
import { Hero } from './Components/Hero/Hero'
import { About } from './Components/About/About'
import { Experience } from './Components/Experience/Experience'
import { Projects } from './Components/Projects/Project'
import { Contact } from './Components/Contact/Contact'
import Certificate from './Components/Certificates/Certificate'
function App() {


  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <Hero />
        <About />
        <Experience/>
        <Projects/>
        <Certificate/>
        <Contact/>
      
      </div>

    </>
  )
}

export default App
