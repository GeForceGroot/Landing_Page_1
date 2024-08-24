/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import sidelogo from '../images/elementor17.png'
import mainImg from '../images/bookkeeping-san-diego (2).png'
import cehck from '../images/check1.png'
import '../style/contact.css';
import '../style/navbar.css';

const BusinessFamily = () => {
  return (
    <>
      <div className="container" style={{marginTop:'25px'}}>
        <div className="row align-items-center" id="rowReverse">
          <div className="col-lg-6 aos-init" data-aos="zoom-out" data-aos-duration="800">
            <div className="about5-images">
              <img src={mainImg} alt="" className="about5ims" />
              <img src={sidelogo} alt="" className="elementor-9 keyframe3" />
            </div>
          </div>
          <div className="col-lg-6 aos-init aos-animate" id="centerData" data-aos="fade-right" data-aos-duration="800">
            <div className="abou-5textarea5">
              <span className="font-16 font-outfit weight-500 lineh-16 color36 d-inline-block consultingspan " style={{ color: '#007DE7' }}>About Us</span>
              <h2 className="font-outfit font-44 lineh-52 color37 weight-600 margin-b20 aos-init aos-animate" data-aos="fade-right" data-aos-duration="800" style={{ marginTop: '10px', textShadow: '4px 4px 5px rgba(0, 0, 0, 0.3)', color: 'rgba(32, 64, 99, 0.8)' }}>Join Our Community</h2>
              <p className="font-outfit font-16 lineh-26 weight-400 color38">Build a strong and capable team with our organizational development expertise. From leadership training to talent acquisition strategies, we'll help you create a high-performing workforce.</p>
              <div className="animationcss aos-init aos-animate" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="600">
                <div className="about5-authorarea margin-t32">
                  <div className="author0mages">
                    <img src={cehck} alt="" className="ts" />
                  </div>
                  <div className="about5-authortext">
                    <h4 className="font-20 weight-600 color37 lineh-20  d-inline-block font-outfit ts" id="missionCss">Your Business Family</h4>
                    <p className="font-outfit font-16 lineh-26 weight-400 color38 ts" >Your second home to support your success. Know us better on why and how we aim to help you. How we offer low-cost services, our business model and more.
                    </p>
                  </div>
                </div>
              </div>
              <div className="animationcss aos-init" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="800">
                <div className="about5-authorarea margin-t32">
                  <div className="author0mages"><img src={cehck} alt="" className="ts" /></div>

                  <div className="about5-authortext">
                    <h4 className="font-outfit font-20 lineh-20 color37 weight-600  d-inline-block team-section-textarea ts" id="missionCss">Mission</h4>
                    <p className="font-outfit font-16 lineh-26 weight-400 color38 team-section-textarea ts" >Our mission is to speed up accounting and bookkeeping processes; considering modern complex operations and a highly competitive market. When people aim for fast services, we want to be their first choice.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessFamily;
