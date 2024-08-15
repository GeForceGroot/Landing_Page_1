/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../style/footerStyle.css'
import img from '../images/logo.jpg'



const Footer = () => {
    return (
        <>
            <div class="footer-section">
                <div class="container" style={{ paddingTop: '70px' }}>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1200" style={{ textAlign: 'start' }}>
                            <div class="footer-logo-text">
                                <img src={img} alt="Logo" class="footer-logo" />
                                <p class="footer-description">
                                    Reduce seasonal tax headaches with our experienced professionals under reputed CAs who have in-depth knowledge of tax regulations and strategies for optimal solutions.
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="footer-links aos-init aos-animate" data-aos="zoom-in" data-aos-duration="1200">
                                <h2 class="footer-title">Links</h2>
                                <ul style={{ marginTop: '60px' }}>
                                    <li><a href="#about" class="footer-link">About Us</a></li>
                                    <li><a href="#service" class="footer-link">Service</a></li>
                                    <li><a href="#contact" class="footer-link">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-left" data-aos-duration="1200" style={{ textAlign: 'start' }}>
                            <div class="footer-contact">
                                <h2 class="footer-title">Contact Us</h2>
                                <div class="footer-contact-info">
                                    <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" alt="Email" class="footer-icon" />
                                    <a href="mailto:info@cleveraccounting.com" class="footer-contact-link">
                                        info@cleveraccounting.com<br />usa@intqbooks.com
                                    </a>
                                </div>
                                <div class="footer-contact-info">
                                    <img src="https://icons.iconarchive.com/icons/alecive/flatwoken/512/Apps-Home-icon.png" alt="Location" class="footer-icon" />
                                    <a href="#" class="footer-contact-link">2482 Yonge Street, Toronto, ON, Canada</a>
                                </div>
                                <div class="footer-contact-info">
                                    <img src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/256/Phone-icon.png" alt="Phone" class="footer-icon" />
                                    <a href="tel:+13155576525" class="footer-contact-link">+1 (315)-557-6525</a>
                                </div>
                            </div>
                        </div>
                        <div class="footer-divider"></div>
                        <div class="footer-copyright text-center">
                            <p>&copy; 2024 <a href="https://intqbooks.com/">Clever Accounting</a></p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer
