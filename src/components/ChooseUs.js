import React, {useRef} from 'react'
import useScrollAnimation from '../custom-hooks/useScrollAnimation';
import '../styles/choose-styles.css'
import Coffee from '../images/ChooseUs/coffee.png'
import Machine from '../images/ChooseUs/machine.png'
import Cake from '../images/ChooseUs/cake.png'
import Divider from '../images/Utility/divider.svg'

const ChooseUs = () => {

    const componentRef = useRef(null);
    const isVisible = useScrollAnimation(componentRef);

    return (
        <div className='choose-us'>

            <div ref={componentRef} className={isVisible ? 'container slide-in' : 'hidden'}>

                <div className='choose-us-text text-center'>
                    <p className='gold-text'>Why Us</p>
                    <h2>What Makes Us Stand Out</h2>

                </div>

                <div className='icon-grid text-center'>

                    <div className='icon-grid-item'>
                        <img src={Coffee} alt='coffee' className='icon-image'/>
                        <h3>Quality Coffee</h3>
                        <p>Our coffee is made from the finest beans, roasted to perfection.</p>
                    </div>

                    <div className='icon-grid-item'>
                        <img src={Machine} alt='machine' className='icon-image'/>
                        <h3>State of the Art Machines</h3>
                        <p>Our machines are top of the line, ensuring the perfect brew every time.</p>
                    </div>

                    <div className='icon-grid-item'>
                        <img src={Cake} alt='cake' className='icon-image'/>
                        <h3>Delicious Treats</h3>
                        <p>Our pastries and cakes are made fresh daily, and are the perfect compliment to our coffee.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseUs