import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/nav-styles.css'
import icon from '../images/Utility/navIcon.png'

const Navbar = () => {


    const [isVisible, setIsVisible] = useState(false);

    const toggleNav = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div>
            <div className='nav-container'>
                <div className='responsive-navbar'>
                    <img src={icon} alt='Brand logo' className='nav-icon'></img>
                    <h2 className='logo'>Mocha Manor</h2>
                    
                    <nav className='nav-lg text-light'>
                        <ul>
                            <li><Link to='/mocha-manor'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/location'>Location</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>

                        <Link to='/menu'><button type='button'>Menu</button></Link>

                    </nav>
                    <div className='toggle'>
                        <a onClick={toggleNav}><ion-icon name={!isVisible ? "menu-outline" : "close-outline"}></ion-icon></a>
                    </div>
                </div>
                <div className='nav-border'></div>
            </div>


            <nav className={isVisible ? 'nav-sm' : 'nav-sm-hide'}>
                <ul className='menu-list'>
                    <li><Link to='/mocha-manor'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/location'>Location</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
                <Link to='/menu'><button type='button' className='mobile-button'>Menu</button></Link>
            </nav>
        </div>
    )
}

export default Navbar