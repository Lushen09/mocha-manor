import React from 'react'
import '../styles/footer-styles.css'
import Divider from '../images/Utility/divider.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>

            <img src={Divider} alt='divider' className='divider rotate' />

            <div className='footer-padding'>

                <div className='container'>

                    <footer>

                        <div className='footer-column'>
                            <h3>Mocha Manor</h3>
                            <p>contact@mochamanor.com</p>
                            <p>123-456-7890</p>

                            <div className='footer-icons'>
                                <ion-icon name="logo-instagram"></ion-icon>
                                <ion-icon name="logo-twitter"></ion-icon>
                                <ion-icon name="logo-tiktok"></ion-icon>
                                <ion-icon name="logo-facebook"></ion-icon>
                            </div>
                        </div>

                        <div className='footer-column'>
                            <h4>Quick Links</h4>
                            <p><Link to='/'>Home</Link></p>
                            <p><Link to='/menu'>Menu</Link></p>
                            <p><Link to='/about'>About</Link></p>
                            <p><Link to='/location'>Locations</Link></p>
                            <p><Link to='/contact'>Contact</Link></p>
                        </div>

                        <div className='footer-column'>
                            <p>&#169; 2024 Mocha Manor</p>
                            <p><a href='#'>Privacy Policy</a></p>
                            <p><a href='#'>Terms of Service</a></p>
                            <p>Design by <a href='https://webflow.com/'>Webflow</a></p>
                        </div>
                    </footer>

                </div>

            </div>

        </div>
    )
}

export default Footer