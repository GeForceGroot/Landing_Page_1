import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../style/mainservices.css'
import logo from '../images/b.png'
import img1 from '../images/4720378.png'
import img2 from '../images/1.png'
import img3 from '../images/s.png'
import img4 from '../images/r.png'
import img5 from '../images/d.png'
import img6 from '../images/e.png'
import img7 from '../images/g.png'
import img8 from '../images/a.png'
import img9 from '../images/st.png'
import img10 from '../images/cs.svg'

const MainServices = () => {

    useEffect(() => {
        AOS.init({
            duration: 1200, // Global duration for animations
            easing: 'linear',
            once: false, // Animation happens every time the element enters the viewport
        });
        AOS.refresh(); // Refresh AOS to ensure it detects changes in the DOM
    }, []);
    return (
        <>
            <div className="service10-section-area section-padding8">
                <div className="container" style={{ marginTop: '50px' }}>
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="service10-header text-center margin-b60">
                                <span className="font-16 lineh-16 weight-600 color-h10 about10span d-inline-block margin-b20">Quickly Provided Comprehensive Services</span>
                                <h1 className="font-44 lineh-54 weight-600 colorhp3 font-lora margin-b24s" style={{ textShadow: '4px 4px 5px rgba(0, 0, 0, 0.3)', color: 'rgba(32, 64, 99, 0.8)' }}>Tailored Services At Your Every Success Step</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: '50px' }}>
                        <div className="col-lg-4 col-md-6 aos-init" data-aos="zoom-in" data-aos-duration="1200" data-aos-easing="linear">
                            <div className="service10-boxarea text-center">
                                <div className="welcome-ellipsbox ts">
                                    <img src="assets/images/elementor/elementor64.png" alt="" className="keyframe3 ts" />
                                    <div className="elips-icon6 ts">
                                        <img src={img1} width={'38px'} height={'38px'} alt="" className="ts" />
                                    </div>
                                </div>
                                <a href="servicemiddle.html" className="font-lora font-24 weight-600 colorhp3 d-inline-block margin-b ts" >Outsourcing services</a>
                                <ul className="listStyle">
                                    <li>Have extra hands for payment processing</li>
                                    <li>Maintaining vendor master data Process journal entries</li>
                                    <li>Bank reconciliations Record tax accounting</li>
                                    <li>get detailed and graphical reports</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 aos-init" data-aos="zoom-in" data-aos-duration="800" data-aos-easing="linear">
                            <div className="service10-boxarea text-center">
                                <div className="welcome-ellipsbox ts">
                                    <img src="assets/images/elementor/elementor64.png" alt="" className="keyframe3 ts" />
                                    <div className="elips-icon6 ts">
                                        <img src={logo} width={'38px'} height={'38px'} alt="" className="ts" />
                                    </div>
                                </div>
                                <a href="servicemiddle.html" className="font-lora font-24 weight-600 colorhp3 d-inline-block margin-b ts">Bookkeeping</a>
                                <ul className="listStyle">
                                    <li>Detailed recordings</li>
                                    <li>Records all information</li>
                                    <li>Automated data recording from multiple sources</li>
                                    <li>Record reconciliations </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 aos-init" data-aos="zoom-in" data-aos-duration="1200" data-aos-easing="linear">
                            <div className="service10-boxarea text-center">
                                <div className="welcome-ellipsbox ts">
                                    <img src="assets/images/elementor/elementor64.png" alt="" className="keyframe3 ts" />
                                    <div className="elips-icon6 ts">
                                        <img src={img9} width={'38px'} height={'38px'} alt="" className="ts" />
                                    </div>
                                </div>
                                <a href="servicemiddle.html" className="font-lora font-24 weight-600 colorhp3 d-inline-block margin-b ts">Gst/Hst</a>
                                <ul className="listStyle">
                                    <li>T1 to T5 tax filings</li>
                                    <li>Maintain your presence and<br />records</li>
                                    <li>Support to manage fines</li>
                                    <li>Timely filing and record-keeping  </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 aos-init" data-aos="zoom-in" data-aos-duration="1200" data-aos-easing="linear">
                            <div className="service10-boxarea text-center">
                                <div className="welcome-ellipsbox ts">
                                    <img src="assets/images/elementor/elementor64.png" alt="" className="keyframe3 ts" />
                                    <div className="elips-icon6 ts">
                                        <img src={img8} width={'38px'} height={'38px'} alt="" className="ts" />
                                    </div>
                                </div>
                                <a href="servicemiddle.html" className="font-lora font-24 weight-600 colorhp3 d-inline-block margin-b ts">Audits And Financial Reviews</a>
                                <ul className="listStyle">
                                    <li>Follows recognised audit procedures</li>
                                    <li>Internal and External audits</li>
                                    <li>Avoid legal fines</li>
                                    <li>We represent your business to external authorities</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 aos-init" data-aos="zoom-in" data-aos-duration="1200" data-aos-easing="linear">
                            <div className="service10-boxarea text-center">
                                <div className="welcome-ellipsbox ts">
                                    <img src="assets/images/elementor/elementor64.png" alt="" className="keyframe3 ts" />
                                    <div className="elips-icon6 ts">
                                        <img src={img7} width={'38px'} height={'38px'} alt="" className="ts" />
                                    </div>
                                </div>
                                <a href="servicemiddle.html" className="font-lora font-24 weight-600 colorhp3 d-inline-block margin-b ts">Governance And Compliance</a>
                                <ul className="listStyle">
                                    <li>International alliance with CPAs and CAs</li>
                                    <li>Adheres to local laws and industrial standards</li>
                                    <li>Provides clear formats to reduce headaches at year-end</li>
                                    <li>Follows ethical workplace culture</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 aos-init" data-aos="zoom-in" data-aos-duration="1200" data-aos-easing="linear">
                            <div className="service10-boxarea text-center">
                                <div className="welcome-ellipsbox ts">
                                    <img src="assets/images/elementor/elementor64.png" alt="" className="keyframe3 ts" />
                                    <div className="elips-icon6 ts">
                                        <img src={img6} width={'38px'} height={'38px'} alt="" className="ts" />
                                    </div>
                                </div>
                                <a href="servicemiddle.html" className="font-lora font-24 weight-600 colorhp3 d-inline-block margin-b ts">Tax Planning And Filing</a>
                                <ul className="listStyle">
                                    <li>Get strategic and tactical advice for tax<br /> planning</li>
                                    <li>Save more with Quick Accounting</li>
                                    <li>Complies with all laws</li>
                                    <li>Working CPAs at your service  </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 aos-init" data-aos="zoom-in" data-aos-duration="1200" data-aos-easing="linear">
                            <div className="service10-boxarea text-center">
                                <div className="welcome-ellipsbox ts">
                                    <img src="assets/images/elementor/elementor64.png" alt="" className="keyframe3 ts" />
                                    <div className="elips-icon6 ts">
                                        <img src={img5} width={'38px'} height={'38px'} alt="" className="ts" />
                                    </div>
                                </div>
                                <a href="servicemiddle.html" className="font-lora font-24 weight-600 colorhp3 d-inline-block margin-b ts">Data Management Solutions</a>
                                <ul className="listStyle">
                                    <li>Automated data fetch</li>
                                    <li>AI-based data segregation</li>
                                    <li>Data analysis and reporting</li>
                                    <li>Cloud-based storage with additional security</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 aos-init" data-aos="zoom-in" data-aos-duration="1200" data-aos-easing="linear">
                            <div className="service10-boxarea text-center">
                                <div className="welcome-ellipsbox ts">
                                    <img src="assets/images/elementor/elementor64.png" alt="" className="keyframe3 ts" />
                                    <div className="elips-icon6 ts">
                                        <img src={img4} width={'38px'} height={'38px'} alt="" className="ts" />
                                    </div>
                                </div>
                                <a href="servicemiddle.html" className="font-lora font-24 weight-600 colorhp3 d-inline-block margin-b ts">Revenue Projections</a>
                                <ul className="listStyle">
                                    <li>Accurate resource allocations with AI</li>
                                    <li>Market analysis</li>
                                    <li>Custom projections</li>
                                    <li>Graphical reports for decision-making</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 aos-init" data-aos="zoom-in" data-aos-duration="1200" data-aos-easing="linear">
                            <div className="service10-boxarea text-center">
                                <div className="welcome-ellipsbox ts">
                                    <img src="assets/images/elementor/elementor64.png" alt="" className="keyframe3 ts" />
                                    <div className="elips-icon6 ts">
                                        <img src={img3} width={'38px'} height={'38px'} alt="" className="ts" />
                                    </div>
                                </div>
                                <a href="servicemiddle.html" className="font-lora font-24 weight-600 colorhp3 d-inline-block margin-b ts" >Processing Services</a>
                                <ul className="listStyle">
                                    <li>Timely Pay</li>
                                    <li>Accurate calculations considering diverse needs</li>
                                    <li>Premium portal access</li>
                                    <li>CPC & EI details</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-2 aos-init" data-aos="zoom-in" data-aos-duration="1200" data-aos-easing="linear"></div>
                        <div className="col-lg-4 col-md-6 aos-init" data-aos="zoom-in" data-aos-duration="1200" data-aos-easing="linear">
                            <div className="service10-boxarea text-center">
                                <div className="welcome-ellipsbox ts">
                                    <img src="assets/images/elementor/elementor64.png" alt="" className="keyframe3 ts" />
                                    <div className="elips-icon6 ts">
                                        <img src={img2} width={'38px'} height={'38px'} alt="" className="ts" />
                                    </div>
                                </div>
                                <a href="servicemiddle.html" className="font-lora font-24 weight-600 colorhp3 d-inline-block margin-b ts">E-Accountants</a>
                                <ul className="listStyle">
                                    <li>Get experienced accounts from the same industry for extra care</li>
                                    <li>Get one at your doorstep</li>
                                    <li>Affordable fees</li>
                                    <li>Reduce errors and ensure compliance</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 aos-init" data-aos="zoom-in" data-aos-duration="1200" data-aos-easing="linear">
                            <div className="service10-boxarea text-center">
                                <div className="welcome-ellipsbox ts">
                                    <img src="assets/images/elementor/elementor64.png" alt="" className="keyframe3 ts" />
                                    <div className="elips-icon6 ts">
                                        <img src={img10} width={'38px'} height={'38px'} alt="" className="ts" style={{ textAlign: 'center' }} />
                                    </div>
                                </div>
                                <a href="servicemiddle.html" className="font-lora font-24 weight-600 colorhp3 d-inline-block margin-b ts">Contracted Services</a>
                                <ul className="listStyle">
                                    <li>Affordable prices</li>
                                    <li>Experienced professionals</li>
                                    <li>Get helping hands in peak seasons</li>
                                    <li>One-stop solution for all your<br />needs</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 aos-init" data-aos="zoom-in" data-aos-duration="1200" data-aos-easing="linear"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainServices
