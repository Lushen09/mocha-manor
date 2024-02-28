import React from 'react';
import '../styles/intro-styles.css';
import Img1 from '../images/Intro/Intro1.jpg';
import Img2 from '../images/Intro/Intro2.jpg';
import Img3 from '../images/Intro/Intro3.jpg';
import Img4 from '../images/Intro/Intro4.jpg';
import Img5 from '../images/Intro/Intro5.jpg';

const Intro = () => {
  return (
    <div className='intro'>

      <div className='container'>

        <div className='intro-text'>
          <div className='intro-col-1'>
            <p className='gold-text'>Welcome to Mocha Manor</p>
            <h2>Indulge in the Art of Coffee Perfection</h2>
          </div>

          <div className='intro-col-2 text'>
            <p>At Mocha Manor, we are dedicated to providing a safe and comfortable environment for our residents.</p>
          </div>

        </div>

        <div className='intro-gallery'>
          {/* <div className='gallery-col-1'> */}
            <img src={Img1} alt='Mocha Manor' className='intro-image main-image' />
          {/* </div> */}

          {/* <div className='gallery-col-2'> */}
            <img src={Img2} alt='Mocha Manor' className='intro-image'/>
            <img src={Img3} alt='Mocha Manor' className='intro-image'/>
            <img src={Img4} alt='Mocha Manor' className='intro-image'/>
            <img src={Img5} alt='Mocha Manor' className='intro-image'/>
          {/* </div> */}

        </div>

      </div>

    </div>
  )
}

export default Intro