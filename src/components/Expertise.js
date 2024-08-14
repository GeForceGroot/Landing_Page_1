import React from 'react'
import '../style/expertise.css'
import img from '../images/tax-consulting4.png'

const Expertise = () => {
    return (
        <>
            <div class="servicebenefites8-section-area section-padding8">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 m-auto">
                            <div class="servicebenifites8 text-center margin-b60">
                                <span class=" about8 font-ks font-16 lineh-16 color39 weight-500 margin-b20 d-inline-block">Service Benefit</span>
                                <h1 class="font-lora font-44 weight-600 lineh-52 color39 margin-b20" style={{textShadow: '4px 4px 5px rgba(0, 0, 0, 0.3)', color: 'rgba(32, 64, 99, 0.8)'}}>Success With Expert <br/> Tax Consulting</h1>
                            </div>
                        </div>
                    </div>

                    <div class="row" style={{textAlign:'start'}}>
                        <div class="col-lg-6 aos-init" data-aos="zoom-out" data-aos-duration="1000">
                            <div class="servicebrne8area margin-b30">
                                <div class="servicebene-icons ts">
                                    <img src={img} alt="" class="ts"/>
                                </div>
                                <a href="servicemiddle.html" class="font-20 lineh-20 weight-600 color39 d-inline-block margin-b14 font-lora ts">Compliance with Tax Laws</a>
                                <p class="font-16 weight-500 font-ks colorhp1 lineh-26 ts">Tax laws and regulations can be complex and constantly changing. Tax consultants stay up-to-date with the latest changes and help.</p>
                            </div>
                        </div>

                        <div class="col-lg-6 aos-init" data-aos="zoom-out" data-aos-duration="1200">
                            <div class="servicebrne8area margin-b30">
                                <div class="servicebene-icons ts">
                                    <img src={img} alt="" class="ts"/>
                                </div>
                                <a href="servicemiddle.html" class="font-20 lineh-20 weight-600 color39 d-inline-block margin-b14 font-lora ts">Tax Planning and Optimization</a>
                                <p class="font-16 weight-500 font-ks colorhp1 lineh-26 ts">Tax laws and regulations can be complex and constantly changing. Tax consultants stay up-to-date with the latest changes and help.</p>
                            </div>
                        </div>


                        <div class="col-lg-6 aos-init" data-aos="zoom-out" data-aos-duration="1400">
                            <div class="servicebrne8area margin-b30">
                                <div class="servicebene-icons ts">
                                    <img src={img} alt="" class="ts"/>
                                </div>
                                <a href="servicemiddle.html" class="font-20 lineh-20 weight-600 color39 d-inline-block margin-b14 font-lora ts">Expertise and Knowledge</a>
                                <p class="font-16 weight-500 font-ks colorhp1 lineh-26 ts">Tax laws and regulations can be complex and constantly changing. Tax consultants stay up-to-date with the latest changes and help.</p>
                            </div>
                        </div>


                        <div class="col-lg-6 aos-init" data-aos="zoom-out" data-aos-duration="1600">
                            <div class="servicebrne8area margin-b30">
                                <div class="servicebene-icons ts">
                                    <img src={img} alt="" class="ts"/>
                                </div>
                                <a href="servicemiddle.html" class="font-20 lineh-20 weight-600 color39 d-inline-block margin-b14 font-lora ts">Risk Management</a>
                                <p class="font-16 weight-500 font-ks colorhp1 lineh-26 ts">Tax laws and regulations can be complex and constantly changing. Tax consultants stay up-to-date with the latest changes and help.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Expertise
