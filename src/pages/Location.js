import React from 'react'
import '../styles/location-styles.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Divider from '../images/Utility/divider.svg';

const Location = () => {
    return (
        <div>
            <div className='location'>
                <Navbar />

                <div className='container location-text text-center slide-in'>
                    <p className='gold-text'>Location</p>
                    <h2>Come Take The Taste Test</h2>

                    <div className='sub-text'>
                        <p >V&A Waterfront</p>
                        <p>19 Dock Road Cape Town, WC 8001</p>
                    </div>
                </div>
                <img src={Divider} alt='divider' className='divider'></img>
            </div>

            <div className='location-info container'>

                <div className='open-hours'>
                        <p className='gold-text'>Open Hours</p>
                        <h2>Monday - Friday</h2>
                        <p>7:00am - 6:00pm</p>
                        <h2>Saturday</h2>
                        <p>8:00am - 5:00pm</p>
                        <h2>Sunday</h2>
                        <p>Closed</p>
                </div>

                <div className='map'>
                    <div style={{ width: "100%" }}>
                        <iframe width="100%" height="600" frameborder="0" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Watershed+(Mocha%20Manor)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            <a href="https://www.gps.ie/">gps devices</a>
                        </iframe>
                    </div>
                </div>

            </div>

            <Footer />

        </div>
    )
}

export default Location