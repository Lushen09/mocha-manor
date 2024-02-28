import React from 'react'
import '../styles/explore-styles.css'
import Divider from '../images/Utility/divider.svg'
import { Link } from 'react-router-dom'

const Explore = () => {
    return (
        <div className='explore'>

            <img src={Divider} alt='divider' className='divider rotate' />

            <div className='container explore-padding'>

                <div className='explore-content text-center'>
                    <div className='explore-location explore-text'>
                        <p className='gold-text'>Our menu</p>
                        <h3>See whats in store</h3>
                        <Link to="/menu"><button className='btn-light'>View Menu</button></Link>
                    </div>

                    <div className='explore-divider'></div>

                    <div className='explore-menu explore-text'>
                        <p className='gold-text'>Our location</p>
                        <h3>Come pay us a visit</h3>
                        <Link to="/location"><button className='btn-light'>View Location</button></Link>
                    </div>
                </div>

            </div>

            <img src={Divider} alt='divider' className='divider' />
        </div>
    )
}

export default Explore