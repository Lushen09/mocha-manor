import React from 'react'
import '../styles/testimonials-styles.css'
import Divider from '../images/Utility/divider.svg'

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <img src={Divider} alt='divider' className='divider rotate' />

            <div className='testimonials-padding'>

                <div className='container'>

                    <div className='testimonials-text'>

                        <div className='testimonials-col-1'>
                            <p className='gold-text'>Testimonials</p>
                            <h2 className='testimonial-heading'>What Our Customers Say About Us</h2>
                        </div>

                        <div className='testimonials-col-2 text'>
                            <button>Menu</button>
                        </div>

                    </div>

                    <div className='testimonials-gallery'>
                            
                            <div className='testimonials-gallery-item'>
                                <div className='testimonials-gallery-item-text'>
                                    <h4 className='testimonial-heading'>"Divine coffee, always."</h4>
                                    <p className='testimonial-text'> The ambiance is warm, the coffee divine, and the service always leaves me with a smile.</p>
                                    <p className=''>Lily H</p>
                                </div>
                            </div>
    
                            <div className='testimonials-gallery-item'>
                                <div className='testimonials-gallery-item-text'>
                                    <h4 className='testimonial-heading'>"Instantly felt at home."</h4>
                                    <p className='testimonial-text'>The cozy atmosphere coupled with their exceptional brews made me an instant regular. Can't recommend it enough!</p>
                                    <p className=''>Alex M</p>
                            </div>
                                </div>
    
                            <div className='testimonials-gallery-item'>
                                <div className='testimonials-gallery-item-text'>
                                    <h4 className='testimonial-heading'>"Perfect brew sanctuary."</h4>
                                    <p className='testimonial-text'>Mocha Manor exceeds all expectations with their diverse selection and quality. It's my sanctuary in a bustling world.</p>
                                    <p className=''>Emily C</p>
                                </div>
                            </div>

                    </div>


                </div>

            </div>

            <img src={Divider} alt='divider' className='divider' />
        </div>
    )
}

export default Testimonials