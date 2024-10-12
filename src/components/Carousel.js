import React, { useRef, useEffect, useState } from "react";
import { Link } from 'react-scroll';
import emailjs from '@emailjs/browser';
import logo from '../images/logo.jpg';
import '../style/contact.css';
import '../style/navbar.css';

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
                <a href="/">
                  <img id="imgLogo" src={logo} alt="logo" className="img-fluid" />
                </a>
              </div>
              <div className="col-md-8">
                <ul className="nav justify-content-center">
                  <li className="nav-item" >
                    <Link to="home" smooth={true} duration={600} className="nav-link" style={{ color: scrolled ? '#015c91' : 'white', fontWeight: '500', fontSize: '16px', cursor: "pointer" }}>Home</Link>
                  </li>
                  <li className="nav-item" >
                    <Link to="about-us" smooth={true} duration={600} className="nav-link" style={{ color: scrolled ? '#015c91' : 'white', fontWeight: '500', fontSize: '16px', cursor: "pointer" }}>
                      About&nbsp;Us
                    </Link>
                  </li>
                  <li className="nav-item" >
                    <Link to="services" smooth={true} duration={600} className="nav-link" style={{ color: scrolled ? '#015c91 ' : 'white', fontWeight: '500', fontSize: '16px', cursor: "pointer" }}>
                      Services
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="container" style={{ marginTop: "150px" }}>
          <div className="row" id="resposniveCaro">
            <div className="col">
              <div className="innerBox" style={{ marginTop: '75px', color: '#b9def4', fontSize: '18px', borderRadius: '4px', padding: '8px 14px', background: 'rgb(182 225 248 / 10%)' }}>
                Maximize Your Earnings with Expert Tax and Bookkeeping Solutions
              </div>
              <p style={{ marginTop: "25px", fontSize: '45px', fontWeight: "600", fontFamily: 'ui-sans-serif', color: 'whitesmoke' }}>"Your Quick Way To Success"</p>
              <p className="paraText" id="paraCaro">
                Are you looking for efficient ways to manage your operations? Whether it's improving performance, implementing AI technologies, handling transactions, or processing payroll, we’re here to support you.
              </p>
            </div>
            <div className="col">
              <form ref={form} className="form" onSubmit={sendEmail}>
                <h4 style={{ display: 'flex', color: 'rgba(32, 64, 99, 0.8)', fontWeight: '700', textShadow: '4px 4px 5px rgba(0, 0, 0, 0.3)', letterSpacing: '1px' }}> Request a free consult now!</h4>
                <div className='row' id="makeBlock">
                  <div className="col form-group">
                    <label htmlFor="name" style={{ color: 'whitesmoke', display: 'flex', fontSize: '15px' }}>Your Name (Required)</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required />
                  </div>
                  <div className="col form-group">
                    <label htmlFor="email" style={{ color: 'whitesmoke', display: 'flex', fontSize: '15px' }}>Your Email (Required)</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />
                  </div>
                </div>
                <div className="form-group" style={{ marginTop: '20px' }}>
                  <label htmlFor="phone" style={{ color: 'whitesmoke', display: 'flex', fontSize: '15px' }}>Phone (Optional)</label>
                  <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" />
                </div>
                <div className="form-group" style={{ marginTop: '20px' }}>
                  <label htmlFor="requirement" style={{ color: 'whitesmoke', display: 'flex', fontSize: '15px' }}>Tell Us About Your Requirement</label>
                  <textarea id="requirement" name="requirement" rows="4" placeholder="Describe your needs in detail"></textarea>
                </div>
                <button id="btnSubmit"><span>Contact Us</span></button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
