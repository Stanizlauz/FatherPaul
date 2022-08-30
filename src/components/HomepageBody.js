import React from 'react'
import AboutMe from './AboutMe'
import Footer from './Footer'
import Header from './Header'
import HeaderBody from './HeaderBody'
// import Hero from './Hero'
import Services from './Services'
import Testimonials from './Testimonials'

export default function HomepageBody() {
  return (
   <>
   <Header />
   <HeaderBody />
   {/* <Hero /> */}
   <AboutMe />
   <Services />
   <Testimonials />
   <Footer />
   </>
  )
}
