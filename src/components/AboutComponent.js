import React, {useRef} from 'react'
import useScrollAnimation from '../custom-hooks/useScrollAnimation';
import '../styles/about-styles.css'
import AboutImg from '../images/About/about.jpg'
import { Link } from 'react-router-dom'

const AboutComponent = () => {

    const componentRef = useRef(null);
    const isVisible = useScrollAnimation(componentRef);

    return (
        <div className='about'>

            <div className='about-padding'>

                <div className='container'>

                    <div ref={componentRef} className={isVisible ? 'about-content slide-in' : 'hidden'}>

                        <img src={AboutImg} alt='AboutImage' className='about-image about-grid' />

                        <div className='about-text about-grid'>

                            <p className='gold-text'>About Us</p>
                            <h2>Get To Know Us</h2>
                            <p>Mocha Manor is a premier assisted living facility located in the heart of the city. We are dedicated to providing a safe and comfortable environment for our residents. Our staff is committed to providing the highest quality of care and services to our residents. We offer a wide range of amenities and services to ensure that our residents are able to live a fulfilling and enjoyable life. Our goal is to provide a warm and welcoming environment where our residents can feel at home.</p>
                            <Link to="/about"><button>Learn More</button></Link>
                        </div>

                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default AboutComponent