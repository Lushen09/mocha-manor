import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// Re uses the same styles as the about and testimonials section on the home page so we can import them here
import '../styles/about-styles.css';
import '../styles/about-page-styles.css';
import '../styles/testimonials-styles.css';
import Owner1 from '../images/AboutPage/Owner1.jpg';
import Divider from '../images/Utility/divider.svg';


const About = () => {
  return (
    <div>

      <div className='about-page'>

        <Navbar />

        <div className='container'>

          <div className='about-hero-content text-center text-light'>
            <p className='gold-text'>Our Story</p>
            <h1>About Us</h1>
            <p className='grey-text'>Our story begins in the heart of the Southwest, where coffee is more than just a drink, it's a way of life. We believe in crafting moments, one cup at a time, where every sip tells a story. Our mission is to bring people together through the art of coffee, and to create a space where everyone feels welcome.</p>
          </div>
        </div>

        <img src={Divider} alt='divider' className='divider'></img>

      </div>



      <div className='about-background origin'>
        <img src={Owner1} alt='Owners' className='origin-image about-grid' />

        <div className='about-text about-grid'>

          <p className='gold-text'>The Founders' Story</p>
          <h2>A Blend of Passion and Partnership</h2>
          <p>Meet Sarah and Alex, the dynamic duo behind our beloved coffee shop. Their journey began with a shared love for the artistry of coffee-making and a dream to create a welcoming space where community thrives. Sarah's background in hospitality management and Alex's expertise in specialty coffee roasting provided the perfect recipe for success. United by their vision of crafting exceptional coffee experiences, they embarked on a quest to source the finest beans, hone their barista skills, and cultivate an atmosphere of warmth and camaraderie. Through dedication, innovation, and a whole lot of love, they turned their dream into Mocha Manor, a haven where passion brews in every cup, and friendships flourish with every sip.</p>

        </div>
      </div>

      <div className='about-background about-staff'>
        <p className='gold-text'>Meet the Team</p>
        <h2>Our Passionate Staff</h2>
      </div>


      <div className='about-background testimonials-gallery text-center'>

        <div className='about-gallery-item'>
          <div className='testimonials-gallery-item-text'>
            <p>Stephanie</p>
            <p>Barista</p>
          </div>
        </div>

        <div className='about-gallery-item'>
          <div className='testimonials-gallery-item-text'>
            <p>Nigel</p>
            <p>Chef, Barista</p>
          </div>
        </div>

        <div className='about-gallery-item'>
          <div className='testimonials-gallery-item-text'>
            <p>Chloe</p>
            <p>Waitress</p>
          </div>
        </div>

      </div>

      <Footer />

    </div>
  )
}

export default About