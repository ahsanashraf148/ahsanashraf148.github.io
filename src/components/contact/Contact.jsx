import React from 'react'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import './contact.css'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_35awyuq', 'template_3a24xsg', form.current, 'zB8USXrX4jGFwLmtS')
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          form.current.reset();
        },
      );
  };

  return (
    <section id='contact'>
      <h5>Let's get in touch</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact___options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>ahsanashraf148@gmail.com</h5>
            <a href="mailto:ahsanashraf148@gmail.com" target='__blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <FaFacebookMessenger className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Ahsan Ashraf</h5>
            <a href="https://m.me/ahsan.ashraf.5832343" target='__blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <FaWhatsappSquare className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+92 3132135384</h5>
            <a href="https://api.whatsapp.com/send?phone=923132135384" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email address' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section >
  )
}

export default Contact
