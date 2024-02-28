import React from 'react'
import '../styles/hero-styles.css'
import Logo from '../images/Hero/coffee-logo.png'
import Divider from '../images/Utility/divider.svg'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'



const Hero = () => {


    return (
        <div className='hero'>
            <Navbar />

            <div className='container'>

                <div className='hero-content text-center text-light slide-in'>

                    <div className='container logo-section'>
                        <img src={Logo} alt='coffee logo' className='coffee-logo' />
                    </div>

                    <h1>Crafting Moments, One Cup at a Time</h1>
                    <p>Where Every Sip Tells a Story</p>
                    <Link to="/menu"><button className=''>View Menu</button></Link>
                </div>
            </div>

            <img src={Divider} alt='divider' className='divider'></img>

        </div>
    )
}

export default Hero