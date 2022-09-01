import React from 'react'
import AboutMe from './AboutMe'
import Feature from './Feature'
import Footer from './Footer'
import Header from './Header'
import HeaderBody from './HeaderBody'
// import Hero from './Hero'
import Services from './Services'
import Slider from './Slider'
import Testimonials from './Testimonials'

export default function HomepageBody() {
  return (
   <>
   <Header />
   <Slider />
   <HeaderBody />
   {/* <Hero /> */}
   <AboutMe />
   <Services />
   <Feature />
   <Testimonials />
   <Footer />
   </>
  )
}
