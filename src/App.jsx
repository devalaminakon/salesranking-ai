import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Coach from './Components/Coach'
import CoursesSection from './Components/CoursesSection'
import FaqData from './Components/FaqData'
import TestimonialSlider from './Components/testimonials'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <Navbar />
    <Banner />
    <Coach />
    <CoursesSection />
    <FaqData />
    <TestimonialSlider />
    {/* <ReadyToHire /> */}
    <Footer />
    </>
  )
}

export default App
