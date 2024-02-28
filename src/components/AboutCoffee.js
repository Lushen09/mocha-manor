import React, { useRef } from 'react'
import useScrollAnimation from '../custom-hooks/useScrollAnimation';
import '../styles/about-coffee-styles.css'


const AboutCoffee = () => {

    const componentRef = useRef(null);
    const isVisible = useScrollAnimation(componentRef);

    return (
        <div className='about-coffee'>

            <div className='about-coffee-padding'>

                <div ref={componentRef} className={isVisible ? 'container slide-in' : 'hidden'}>

                    <div className='about-coffee-text'>
                        <p className='gold-text'>Our Coffee</p>
                        <h2>Get To Know Our Coffee</h2>
                    </div>

                    <div className='about-coffee-content'>

                        <div className='about-coffee-column'>

                            <div className='column-container1'>

                                <div className='column-item1'>
                                    <h3>Rich Origins</h3>
                                    <p>Our coffee beans are sourced from the world's finest regions, ensuring a flavor journey that delights with every sip.</p>
                                </div>
                                <div className='column-item2'>
                                    <h3>Craftsmanship in Every Cup</h3>
                                    <p>Each brew is meticulously prepared by our skilled baristas, who infuse passion and precision into every pour.</p>
                                </div>

                            </div>

                        </div>

                        <div className='about-coffee-column'>
                            <div className='column-break'>

                            </div>
                        </div>

                        <div className='about-coffee-column'>

                            <div className='column-container2'>

                                <div className='column-item1'>
                                    <h3>Sustainable Excellence</h3>
                                    <p>We prioritize sustainability at every step, from ethically sourcing beans to eco-friendly packaging, delivering a guilt-free coffee experience.</p>

                                </div>
                                <div className='column-item2'>
                                    <h3>Customizable Creations</h3>
                                    <p>Whether you crave a classic espresso or a trendy artisanal latte, our menu offers endless possibilities for you to tailor your perfect cup.</p>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </div>

    )
}

export default AboutCoffee