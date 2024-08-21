import React from 'react'
import '../style/process.css'
import img from '../images/companyimg2.png'

const Process = () => {
    return (
        <>
            <div className="company6-section-area section-padding5">
                <div className="container">
                    <div className="row align-items-center" style={{ textAlign: 'start' }}>
                        <div className="col-lg-5 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                            <div className="company6text6">
                                <span className="trusts font-16 lineh-16 font-nunito weight-600 color-h5 d-inline-block">In-House Proven Process</span>
                                <h1 className="font-lora font-44 lineh-52 weight-600 colorwel margin-b" style={{ textShadow: '4px 4px 5px rgba(0, 0, 0, 0.3)', color: 'rgba(32, 64, 99, 0.8)', marginTop: '10px' }}>Our Work Process</h1>
                                <p className="font-nunito font16 weight-500 color-nuni lineh-26 margin-b30" style={{ fontFamily: 'inherit' }}>Our professionals have developed a quick way to meet your needs, over the years as,</p>
                            </div>

                            <div className="accordian-area accordian5">
                                <div className="accordion accordian4" id="accordionExample">
                                    <div className="accordion-item aos-init" data-aos="fade-right" data-aos-duration="1200">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                Discovery Session
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
                                            <div className="accordion-body">
                                                <p className="font-nunito font-16 lineh-26 weight-500 color-30 ">Once the tailored solutions are presented, we will work to collaboratively with you to develop a strategic plan .</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item aos-init" data-aos="fade-right" data-aos-duration="1400">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Initial Consultation
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p className="font-nunito font-16 lineh-26 weight-500 color-30 ">We review your past data and records, existing records, external views and opinions for better understanding.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item aos-init" data-aos="fade-right" data-aos-duration="1600">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Open Planning
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p className="font-nunito font-16 lineh-26 weight-500 color-30 ">After technical resource organising, we work with you to develop the best processes, delivery paths, and tools and dedicate employees and rates to meet your needs.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item aos-init" data-aos="fade-right" data-aos-duration="1800">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                Implementation
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p className="font-nunito font-16 lineh-26 weight-500 color-30 ">Active implementation is done backed up by continuous monitoring and real-time communication. Changes are made based on this.</p>
                                            </div>
                                        </div>
                                    </div><div className="accordion-item aos-init" data-aos="fade-right" data-aos-duration="1800">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                Ongoing Support
                                            </button>
                                        </h2>
                                        <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p className="font-nunito font-16 lineh-26 weight-500 color-30 ">Our backend team is always ready to help you. We are just a call or mail away. Fill out the form below and our executive will connect you.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-6 aos-init aos-animate" data-aos="zoom-out" data-aos-duration="1600">
                            <div className="companyimgaes">
                                <img id='imgPro' src={img} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Process
