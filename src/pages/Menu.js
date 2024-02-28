import React, { useState } from 'react'
import '../styles/menu-styles.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { MenuData } from '../components/MenuData'
import Divider from '../images/Utility/divider.svg'

const Menu = () => {

    const { drinks, meals, desserts } = MenuData;

    // const [drink, setDrink] = useState(true);
    // const [meal, setMeal] = useState(false);
    // const [dessert, setDessert] = useState(false);

    const [currentMenu, setCurrentMenu] = useState(drinks);

    const handleClick = (data) => {
        setCurrentMenu(data);
    }

    return (
        <div className='menu'>
            <div className='menu-header'>
                <Navbar />
                <img src={Divider} alt='divider' className='divider
                ' />
            </div>

            

            <div className='menu-padding'>
                <div className='container'>

                    <div className='text-center'>
                        <h2>MENU</h2>
                        <p>Our menu is filled with delicious meals, desserts, and drinks. We have something for everyone!</p>
                    </div>


                    <div className='menu-selector text-center'>
                        <button  onClick={() => handleClick(drinks)}>Drinks</button>
                        <button  onClick={() => handleClick(meals)}>Meals</button>
                        <button  onClick={() => handleClick(desserts)}>Desserts</button>
                    </div>

                    <div className='menu-items'>

                        {
                            currentMenu.map((currentMenu) => {
                                return (
                                    <div className='menu-item container'>
                                        <img src={currentMenu.image} alt='espresso' className='menu-icon' />
                                        <div>
                                            <h4>{currentMenu.name}</h4>
                                            <p className='description'>{currentMenu.description}</p>
                                        </div>
                                        <p className='price'>&#163;{currentMenu.price}</p>
                                    </div>
                                )
                            })

                        }

                    </div>

                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Menu