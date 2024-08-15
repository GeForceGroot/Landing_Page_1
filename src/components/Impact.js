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
              <img src={img1} alt="" data-aos="zoom-out" data-aos-duration="1200" />
              <img src={img2} alt="" className="elementor-9 keyframe3" />
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1200" style={{ textAlign: 'start' }}>
            <div className="about3-textarea1">
              <span className="about3span font-ks lineh-16 font-16 weight-600 color-29 d-inline-block margin-b24">About Us</span>
              <h1
                className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20"
                style={{ textShadow: '4px 4px 5px rgba(0, 0, 0, 0.3)', color: 'rgba(32, 64, 99, 0.8)' }}
              >
                Mission &amp; Values Of Your Law Consult Firm
              </h1>
              <p className="font-ks font-16 lineh-26 weight-500 color-30 " style={{ fontFamily: 'inherit' }}>
                Provide professional advice and guidance on legal matters, helping clients understand their rights, obligations, and potential courses.
              </p>
              <div className="counter3-area3" ref={ref}>
                <div className="row">
                  <div className="col-lg-6 col-md-6" data-aos="fade-left" data-aos-duration="1200">
                    <div className="counter3-boxarea4 text-center margin-b20 margin-t32">
                      <div className="counter4-boxarea4">
                        <h1 className="font-lora font-40 lineh-40 color-29 margin-b weight-600">
                          {inView && <CountUp start={0} end={959} duration={2} />}+
                        </h1>
                        <p className="font-ks font-16 lineh-16 weight-500 color-30">Case Settlement</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6" data-aos="fade-left" data-aos-duration="1200">
                    <div className="counter3-boxarea4 text-center margin-b20 margin-t32">
                      <div className="counter4-boxarea4">
                        <h1 className="font-lora font-40 lineh-40 color-29 margin-b weight-600">
                          {inView && <CountUp start={0} end={250} duration={2} />}+
                        </h1>
                        <p className="font-ks font-16 lineh-16 weight-500 color-30">Insurance Settlement</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="counter3-boxarea4 text-center">
                      <div className="counter4-boxarea4">
                        <h1 className="font-lora font-40 lineh-40 color-29 margin-b weight-600">
                          {inView && <CountUp start={0} end={388} duration={2} />}+
                        </h1>
                        <p className="font-ks font-16 lineh-16 weight-500 color-30">Personal Injury</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="counter3-boxarea4 text-center">
                      <div className="counter4-boxarea4">
                        <h1 className="font-lora font-40 lineh-40 color-29 margin-b weight-600">
                          {inView && <CountUp start={0} end={400} duration={2} />}+
                        </h1>
                        <p className="font-ks font-16 lineh-16 weight-500 color-30">Divorce Case</p>
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
