import React, {useRef} from 'react'
import useScrollAnimation from '../custom-hooks/useScrollAnimation';
import '../styles/contact-styles.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Divider from '../images/Utility/divider.svg'

const Contact = () => {

    const componentRef = useRef(null);
    const isVisible = useScrollAnimation(componentRef);

    return (
        <div>

            <div className='contact'>
                <Navbar />

                <div className='container'>
                    <div className='contact-text text-center slide-in'>
                        <h2>Contact Us</h2>
                        <p>Have a question or comment? We'd love to hear from you. Get in touch with us and we will be more than happy to chat.</p>
                    </div>
                </div>

                <img src={Divider} alt='divider' className='divider' />
            </div>

            <div ref={componentRef} className={isVisible ? 'contact-section slide-in' : 'hidden'}>
                <div className='container'>
                    <div className='contact-options text-center'>
                        <h3>Call Us</h3>
                        <p className='gold-text'>123-456-7890</p>
                        <h3>Email Us</h3>
                        <p className='gold-text'>contact@mochamanor.com</p>
                    </div>

                    <div className='contact-form'>
                        <h3>Leave us a message and we will get back to you</h3>

                        <form class="row g-3">
                            <div class="col-md-6">
                                <label for="inputEmail4" class="form-label">Name</label>
                                <input type="text" class="form-control" id="inputEmail4" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputPassword4" class="form-label">Email</label>
                                <input type="email" class="form-control" id="inputPassword4" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputEmail4" class="form-label">Phone</label>
                                <input type="Numbe" class="form-control" id="inputEmail4" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputPassword4" class="form-label">Subject</label>
                                <input type="text" class="form-control" id="inputPassword4" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div class="col-12">
                                <button type="submit">Send</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default Contact