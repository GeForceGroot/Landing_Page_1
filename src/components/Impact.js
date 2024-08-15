import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import '../style/impact.css';
import img1 from '../images/about3-img1.png';
import img2 from '../images/elementor17.png';

const Impact = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Counter will reset every time it comes into view
    threshold: 0.3, // Trigger when 30% of the element is in view
  });

  return (
    <div className="about3-section-area section-padding5" style={{ marginBottom: '25px' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1200">
            <div className="about3-images1">
              <img src={img1} alt="" data-aos="zoom-out" data-aos-duration="1200" width={'100%'}  height={'100%'}/>
              <img src={img2} alt="" className="elementor-9 keyframe3" />
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1200" style={{ textAlign: 'start' }}>
            <div className="about3-textarea1">
              <span className="about3span font-ks lineh-16 font-16 weight-600 color-29 d-inline-block margin-b24">Discover Your New Insights</span>
              <h1
                className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20"
                style={{ textShadow: '4px 4px 5px rgba(0, 0, 0, 0.3)', color: 'rgba(32, 64, 99, 0.8)' }}
              >
                Beyond Trends Towards Setting New Standards
              </h1>
              <p className="font-ks font-16 lineh-26 weight-500 color-30 " style={{ fontFamily: 'inherit' }}>
                <strong>Consultancy Services: </strong>Don't want to outsource the whole process? No worries get the best strategies and recommendations based on AI-based market analysis to have the best actions before rivals
              </p>
              <div className="counter3-area3" ref={ref}>
                <div className="row">
                  <div className="col-lg-6 col-md-6" data-aos="fade-left" data-aos-duration="1200">
                    <div className="counter3-boxarea4 text-center margin-b20 margin-t32">
                      <div className="counter4-boxarea4">
                        <h1 className="font-lora font-40 lineh-40 color-29 margin-b weight-600">
                          {inView && <CountUp start={0} end={50} duration={1} />}+
                        </h1>
                        <p className="font-ks font-16 lineh-16 weight-500 color-30">Reporting</p>
                        {/* <p style={{color:'black', textAlign:"center"}}>reports annually along with basic day-to-day service reports. Get graphic-based specific information for easy decision-making and analyse reports for accuracy. </p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6" data-aos="fade-left" data-aos-duration="1200">
                    <div className="counter3-boxarea4 text-center margin-b20 margin-t32">
                      <div className="counter4-boxarea4">
                        <h1 className="font-lora font-40 lineh-40 color-29 margin-b weight-600">
                          {inView && <CountUp start={0} end={14} duration={1} />}+
                        </h1>
                        <p className="font-ks font-16 lineh-16 weight-500 color-30">Years of Experience</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="counter3-boxarea4 text-center">
                      <div className="counter4-boxarea4">
                        <h1 className="font-lora font-40 lineh-40 color-29 margin-b weight-600">
                          {inView && <CountUp start={0} end={1427} duration={2} />}+
                        </h1>
                        <p className="font-ks font-16 lineh-16 weight-500 color-30">HST Remitted</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="counter3-boxarea4 text-center">
                      <div className="counter4-boxarea4">
                        <h1 className="font-lora font-40 lineh-40 color-29 margin-b weight-600">
                          {inView && <CountUp start={0} end={800} duration={2} />}+
                        </h1>
                        <p className="font-ks font-16 lineh-16 weight-500 color-30">Clients on are Recrurring Basis</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
