import React from 'react'
import '../style/process.css'
import img from '../images/companyimg2.png'

const Process = () => {
    return (
        <>
            <div class="company6-section-area section-padding5">
                <div class="container">
                    <div class="row align-items-center" style={{textAlign:'start'}}>
                        <div class="col-lg-5 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                            <div class="company6text6">
                                <span class="trusts font-16 lineh-16 font-nunito weight-600 color-h5 d-inline-block">How it Works</span>
                                <h1 class="font-lora font-44 lineh-52 weight-600 colorwel margin-b" style={{textShadow: '4px 4px 5px rgba(0, 0, 0, 0.3)', color: 'rgba(32, 64, 99, 0.8)',marginTop:'10px'}}>Our Work Process</h1>
                                <p class="font-nunito font16 weight-500 color-nuni lineh-26 margin-b30" style={{fontFamily:'inherit'}}>Crafting a roadmap to your financial goals. Our comprehensive <br /> planning covers investments, savings, debt management more.</p>
                            </div>

                            <div class="accordian-area accordian5">
                                <div class="accordion accordian4" id="accordionExample">
                                    <div class="accordion-item aos-init" data-aos="fade-right" data-aos-duration="1200">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                Discovery Session
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample" >
                                            <div class="accordion-body">
                                                <p class="font-nunito font-16 lineh-26 weight-500 color-30 ">Once the tailored solutions are presented, we will work to collaboratively with you to develop a strategic plan .</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item aos-init" data-aos="fade-right" data-aos-duration="1400">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Personalized Strategy
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <p class="font-nunito font-16 lineh-26 weight-500 color-30 ">Once the tailored solutions are presented, we will work to collaboratively with you to develop a strategic plan .</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item aos-init" data-aos="fade-right" data-aos-duration="1600">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Ongoing Support
                                            </button>
                                        </h2>
                                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <p class="font-nunito font-16 lineh-26 weight-500 color-30 ">Once the tailored solutions are presented, we will work to collaboratively with you to develop a strategic plan .</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item aos-init" data-aos="fade-right" data-aos-duration="1800">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                Celebrating Milestones
                                            </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <p class="font-nunito font-16 lineh-26 weight-500 color-30 ">Once the tailored solutions are presented, we will work to collaboratively with you to develop a strategic plan .</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-1"></div>
                        <div class="col-lg-6 aos-init aos-animate" data-aos="zoom-out" data-aos-duration="1600">
                            <div class="companyimgaes">
                                <img src={img} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <img src="assets/images/elementor/elementor37.png" alt="" class="elementor-16" />
                <img src="assets/images/elementor/elementor38.png" alt="" class="elementors5" />
            </div>
        </>
    )
}

export default Process
