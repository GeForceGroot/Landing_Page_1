import React from 'react'
import '../style/expertise.css'
import img1 from '../images/af.png'
import img2 from '../images/co.png'
import img3 from '../images/ex.png'
import img4 from '../images/t.png'

const Expertise = () => {
    return (
        <>
            <div className="servicebenefites8-section-area section-padding8">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 m-auto">
                            <div className="servicebenifites8 text-center margin-b60">
                                <span className=" about8 font-ks font-16 lineh-16 color39 weight-500 margin-b20 d-inline-block">This Is What Sets Us Apart</span>
                                <h1 className="font-lora font-44 weight-600 lineh-52 color39 margin-b20" style={{textShadow: '4px 4px 5px rgba(0, 0, 0, 0.3)', color: 'rgba(32, 64, 99, 0.8)'}}>Unparalleled Expertise, Uncompromising Quality</h1>
                            </div>
                        </div>
                    </div>

                    <div className="row" style={{textAlign:'start'}}>
                        <div className="col-lg-6 aos-init" id='setExp' data-aos="zoom-out" data-aos-duration="800">
                            <div className="servicebrne8area margin-b30">
                                <div className="servicebene-icons ts">
                                    <img src={img1} width={'38px'} height={'38px'} alt="" className="ts"/>
                                </div>
                                <p  className="font-20 lineh-20 weight-600 color39 d-inline-block margin-b14 font-lora ts">Affordable Rates</p>
                                <p className="font-16 weight-500 font-ks colorhp1 lineh-26 ts">Proper asset management and timely completion save us money in areas such as reduced maintenance costs, improved asset utilization, decreased downtime, and avoided penalties for late delivery.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 aos-init" id='setExp' data-aos="zoom-out" data-aos-duration="1000">
                            <div className="servicebrne8area margin-b30">
                                <div className="servicebene-icons ts">
                                    <img src={img2} width={'38px'} height={'38px'} alt="" className="ts"/>
                                </div>
                                <p  className="font-20 lineh-20 weight-600 color39 d-inline-block margin-b14 font-lora ts">Client-Oriented</p>
                                <p className="font-16 weight-500 font-ks colorhp1 lineh-26 ts">Our values make us revolve around our clients' needs and objectives. We do not create services and then adjust them to fit the client. Our services are specifically designed for you.</p>
                            </div>
                        </div>


                        <div className="col-lg-6 aos-init" id='setExp' data-aos="zoom-out" data-aos-duration="1200">
                            <div className="servicebrne8area margin-b30">
                                <div className="servicebene-icons ts">
                                    <img src={img3} width={'38px'} height={'38px'} alt="" className="ts"/>
                                </div>
                                <p  className="font-20 lineh-20 weight-600 color39 d-inline-block margin-b14 font-lora ts">Experience</p>
                                <p className="font-16 weight-500 font-ks colorhp1 lineh-26 ts">Years of experience from diverse industries make us unique in that resolve your basic issues and make your business agile to external market trends.</p>
                            </div>
                        </div>


                        <div className="col-lg-6 aos-init" id='setExp' data-aos="zoom-out" data-aos-duration="1400">
                            <div className="servicebrne8area margin-b30">
                                <div className="servicebene-icons ts">
                                    <img src={img4} width={'38px'} height={'38px'} alt="" className="ts"/>
                                </div>
                                <p  className="font-20 lineh-20 weight-600 color39 d-inline-block margin-b14 font-lora ts">Leveraging Technology</p>
                                <p className="font-16 weight-500 font-ks colorhp1 lineh-26 ts">Technology is our core focus, and we leverage technology and spend more so that you do not have to. Get the latest features, and tools and save your time.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Expertise
