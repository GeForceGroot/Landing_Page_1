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
                                <span class=" about8 font-ks font-16 lineh-16 color39 weight-500 margin-b20 d-inline-block">This Is What Sets Us Apart</span>
                                <h1 class="font-lora font-44 weight-600 lineh-52 color39 margin-b20" style={{textShadow: '4px 4px 5px rgba(0, 0, 0, 0.3)', color: 'rgba(32, 64, 99, 0.8)'}}>Unparalleled Expertise, Uncompromising Quality</h1>
                            </div>
                        </div>
                    </div>

                    <div class="row" style={{textAlign:'start'}}>
                        <div class="col-lg-6 aos-init" id='setExp' data-aos="zoom-out" data-aos-duration="1000">
                            <div class="servicebrne8area margin-b30">
                                <div class="servicebene-icons ts">
                                    <img src={img} alt="" class="ts"/>
                                </div>
                                <a href="servicemiddle.html" class="font-20 lineh-20 weight-600 color39 d-inline-block margin-b14 font-lora ts">Affordable Rates</a>
                                <p class="font-16 weight-500 font-ks colorhp1 lineh-26 ts">Proper asset management and timely completion save us money, which we transfer to you as profits.</p>
                            </div>
                        </div>

                        <div class="col-lg-6 aos-init" id='setExp' data-aos="zoom-out" data-aos-duration="1200">
                            <div class="servicebrne8area margin-b30">
                                <div class="servicebene-icons ts">
                                    <img src={img} alt="" class="ts"/>
                                </div>
                                <a href="servicemiddle.html" class="font-20 lineh-20 weight-600 color39 d-inline-block margin-b14 font-lora ts">Client-Oriented</a>
                                <p class="font-16 weight-500 font-ks colorhp1 lineh-26 ts">Our values make us to revolve around client needs and objectives. We do not create services and adjust them as per client. Our services are created for you and licensed to you.</p>
                            </div>
                        </div>


                        <div class="col-lg-6 aos-init" id='setExp' data-aos="zoom-out" data-aos-duration="1400">
                            <div class="servicebrne8area margin-b30">
                                <div class="servicebene-icons ts">
                                    <img src={img} alt="" class="ts"/>
                                </div>
                                <a href="servicemiddle.html" class="font-20 lineh-20 weight-600 color39 d-inline-block margin-b14 font-lora ts">Experience</a>
                                <p class="font-16 weight-500 font-ks colorhp1 lineh-26 ts">Years of experience from diverse industries make us unique in that resolve your basic issues and make your business agile to external market trends for better adaptation.</p>
                            </div>
                        </div>


                        <div class="col-lg-6 aos-init" id='setExp' data-aos="zoom-out" data-aos-duration="1600">
                            <div class="servicebrne8area margin-b30">
                                <div class="servicebene-icons ts">
                                    <img src={img} alt="" class="ts"/>
                                </div>
                                <a href="servicemiddle.html" class="font-20 lineh-20 weight-600 color39 d-inline-block margin-b14 font-lora ts">Leveraging Technology</a>
                                <p class="font-16 weight-500 font-ks colorhp1 lineh-26 ts">Technology is our core focus, and we leverage technology and spend more so that you do not have to. Get the latest features, and tools and save your time to core service.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Expertise
