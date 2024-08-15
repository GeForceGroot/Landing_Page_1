/* eslint-disable react/jsx-no-target-blank */
import React, { useRef, useEffect, useState } from "react";
import emailjs from '@emailjs/browser';
import logo from '../images/logo.jpg';
import '../style/contact.css';
import '../style/navbar.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
AOS.init();

const Carousel = () => {
  const [scrolled, setScrolled] = useState(false);
  const form = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      requirement: e.target.requirement.value,
    };

    const emailContent = `
      Name: ${formData.name}\n
      Email: ${formData.email}\n
      Phone: ${formData.phone}\n
      Requirement: ${formData.requirement}
    `;

    const emailParams = {
      to_name: 'Recipient Name',
      from_name: formData.name,
      from_email: formData.email,
      message: emailContent,
    };

    emailjs.send('service_s9yl39f', 'template_d1jwppl', emailParams, 'Ef5elHS0NNiPr2U6U')
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        form.current.reset(); // Reset the form fields
        alert('Thank you! I will get back to you as soon as possible!');
      })
      .catch((error) => {
        console.error('There was an error sending the email:', error);
        alert('Error during sending mail');
      });
  };

  return (
    <>
      <section id="carousel">
        <section className={`Nav ${scrolled ? 'scrolled' : ''}`} id="NavId">
          <div className="container" style={{ marginTop: "25px" }}>
            <div className="row align-items-center">
              <div className="col-md-2">
                <img id="imgLogo" src={logo} alt="logo" className="img-fluid" />
              </div>
              <div className="col-md-8">
                <ul className="nav justify-content-center">
                  <li className="nav-item" data-aos="fade-down" data-aos-duration="1000" data-aos-once="false" data-aos-mirror="true">
                    <a className="nav-link" href="/" style={{ color: scrolled ? '#015c91' : 'white', fontWeight: '500', fontSize: '16px' }}>Home</a>
                  </li>
                  <li className="nav-item" data-aos="fade-down" data-aos-duration="1000" data-aos-once="false" data-aos-mirror="true">
                    <a className="nav-link" href="https://www.ascentwealth.in/#feature-22" target="_blank" style={{ color: scrolled ? '#015c91' : 'white', fontWeight: '500', fontSize: '16px' }}>
                      About&nbsp;Us
                    </a>
                  </li>
                  <li className="nav-item" data-aos="fade-down" data-aos-duration="1000" data-aos-once="false" data-aos-mirror="true">
                    <a className="nav-link" href="https://www.ascentwealth.in/#title-7" target="_blank" style={{ color: scrolled ? '#015c91 ' : 'white', fontWeight: '500', fontSize: '16px' }}>
                      Services
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 text-end" data-aos="fade-left" data-aos-duration="1200" data-aos-once="false" data-aos-mirror="true">
                <button id="btnHvn"><span>Login</span></button>
              </div>
            </div>
          </div>
        </section>

        <div className="container" style={{ marginTop: "150px", paddingBottom: "118px" }}>
          <div className="row">
            <div className="col">
              <div className="innerBox" data-aos="fade-right" data-aos-duration="1000" data-aos-once="false" data-aos-mirror="true" style={{ marginTop: '75px', color: '#b9def4', fontSize: '18px', borderRadius: '4px', padding: '8px 14px', background: 'rgb(182 225 248 / 10%)' }}>
                Maximize Your Earnings with Expert Tax and Bookkeeping Solutions
              </div>
              <p data-aos="fade-right" data-aos-duration="1200" data-aos-once="false" data-aos-mirror="true" style={{ marginTop: "25px", fontSize: '45px', fontWeight: "600", fontFamily: 'ui-sans-serif', color: 'whitesmoke' }}>"Your Quick Way To Success"</p>
              <p data-aos="fade-right" data-aos-duration="1200" data-aos-once="false" data-aos-mirror="true" style={{ fontSize: '20px', color: "whitesmoke", textAlign: 'left', marginLeft: "60px", fontWeight: '500', textShadow: "4px 4px 5px rgba(0, 0, 0, 0.1)" }}>
                A quick way to handle your unique and large operations. Whether it is to manage performance, have immediate tactics, seek AI technologies, recording transactions, paying employees, etc. Have us beside you.
              </p>
            </div>
            <div className="col">
              <form ref={form} className="form" onSubmit={sendEmail} data-aos="fade-left" data-aos-duration="1200" data-aos-once="false" data-aos-mirror="true">
                <div className='row'>
                  <h4 style={{ display: 'flex', color: 'rgba(32, 64, 99, 0.8)', fontWeight: '700', textShadow: '4px 4px 5px rgba(0, 0, 0, 0.3)', letterSpacing: '1px' }}> Request a free consult now!</h4>
                  <div className="col form-group" data-aos="fade-left" data-aos-duration="1000" data-aos-once="false" data-aos-mirror="true">
                    <label htmlFor="name" style={{ color: 'whitesmoke', display: 'flex', fontSize: '15px' }}>Your Name (Required)</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required />
                  </div>
                  <div className="col form-group" data-aos="fade-left" data-aos-duration="1000" data-aos-once="false" data-aos-mirror="true">
                    <label htmlFor="email" style={{ color: 'whitesmoke', display: 'flex', fontSize: '15px' }}>Your Email (Required)</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />
                  </div>
                </div>
                <div className="form-group" data-aos="fade-left" data-aos-duration="1000" data-aos-once="false" data-aos-mirror="true" style={{ marginTop: '20px' }}>
                  <label htmlFor="phone" style={{ color: 'whitesmoke', display: 'flex', fontSize: '15px' }}>Phone (Optional)</label>
                  <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" />
                </div>
                <div className="form-group" data-aos="fade-left" data-aos-duration="1000" data-aos-once="false" data-aos-mirror="true" style={{ marginTop: '20px' }}>
                  <label htmlFor="requirement" style={{ color: 'whitesmoke', display: 'flex', fontSize: '15px' }}>Tell Us About Your Requirement</label>
                  <textarea id="requirement" name="requirement" rows="4" placeholder="Describe your needs in detail"></textarea>
                </div>
                <button data-aos="fade-left" data-aos-duration="1200" data-aos-once="false" data-aos-mirror="true" id="btnSubmit"><span>Contact Us</span></button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Carousel;
