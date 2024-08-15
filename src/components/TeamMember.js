import React from 'react'
import '../style/team.css'
import img from '../images/kaushik.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
AOS.init();

const TeamMember = () => {
    return (
        <>
            <div class="team-details-sectionarea section-padding5" style={{marginTop:'25px'}}>
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="team-detailsimg">
                                <img data-aos="zoom-in" data-aos-duration="1200" src={img} style={{borderRadius:'15px', boxShadow: '0 15px 25px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.2)'}} width={'400px'} height={'400px'} alt=""/>
                            </div>
                        </div>
                        <div class="col-lg-6" style={{textAlign:'start', paddingTop:'50px'}}>
                            <div class="team-detailsarea">
                            <span class="font-16 font-outfit weight-500 lineh-16 color36 d-inline-block consultingspan margin-b20" data-aos="fade-right" data-aos-duration="1200">Team Members</span>
                                <h1 data-aos="fade-right" data-aos-duration="1200" class="font-lora font-48 lineh-54 weight-600 color-29 margin-b" style={{textShadow: '4px 4px 5px rgba(0, 0, 0, 0.3)', color: 'rgba(32, 64, 99, 0.8)'}}>Mr Kaushik Thakkar</h1>
                                <p data-aos="fade-right" data-aos-duration="1200" class="font-16 lineh-26 weight-500 color-30 font-ks" style={{marginTop:'20px', fontFamily:'inherit'}}>Mr Kaushik Thakkar is our managing director who has successfully managed and saved bookkeeping and other operations for several organisations. With more than 11 years of experience working in dynamic industries in the USA, Canada, UK, Australia and India. He has expertise in GST/HST, sales tax, bookkeeping, accounting, budgets, audits, payrolls and more. His alliance with various CPAs and CAs across these countries leads to excellent international law support and compliance with international standards. Mr Kaushik Never sets back from learning.</p>
                                <button className='aos-init' data-aos="fade-left" data-aos-duration="1200" id="btnContact"><span>Get In Touch</span><i className="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamMember
