import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">Get In Touch</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Let's talk about everything!</h3>
                    <p className="contact__details">Don't like forms? Send me an email. 👋</p>
                </div>

                <form action="" className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input type="text" className='contact__form-input' placeholder='Insert your name' />
                        </div>

                        <div className="contact__form-div">
                            <input type="email" className='contact__form-input' placeholder='Insert your email' />
                        </div>
                    </div>

                    <div className="contact__form-div">
                        <input type="text" className='contact__form-input' placeholder='Insert your subject' />
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <textarea name="" id="" cols="30" rows="10" className='contact__form-input' placeholder='Write your message'></textarea>
                    </div>

                    <button className='btn'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact