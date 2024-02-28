import React from 'react'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import ChooseUs from '../components/ChooseUs'
import Explore from '../components/Explore'
import AboutComponent from '../components/AboutComponent'
import Testimonials from '../components/Testimonials'
import AboutCoffee from '../components/AboutCoffee'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
      <Hero />
      <Intro />
      <ChooseUs />
      <Explore />
      <AboutComponent />
      <Testimonials />
      <AboutCoffee />
      <Footer />
    </div>
  )
}

export default Home