import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../style/service.css';
import deagin1 from '../images/elementor26.png';
import deagin2 from '../images/elementor28.png';
import value2 from '../images/6955960.webp';
import value1 from '../images/5213375.png';
import value3 from '../images/10966100.png';
import value5 from '../images/8629253.png';
import value4 from '../images/75-757195_customer-clipart-end-user-customer-blue-icon-png.png';

const Service = () => {
  useEffect(() => {
    AOS.init({
      once: false, // Animation will repeat when elements re-enter the viewport
      mirror: true, // Elements animate out when scrolling past them
    });
  }, []);

  return (
    <>
      <div className="company5-section-area section-padding5" style={{ backgroundColor: '#EEF7FF' }}>
        <img src={deagin1} alt="" className="elementoe5" />
        <div className="container">
          <span className="font-16 font-outfit weight-500 lineh-16 color36 d-inline-block consultingspan margin-b20">How We Works</span>
          <div className="row align-items-centers">
            <div className="col-lg-6" id='removeCol' >
              <div className="works5-sectino">
                <p style={{ textShadow: '4px 4px 5px rgba(0, 0, 0, 0.3)', color: 'rgba(32, 64, 99, 0.8)', fontSize: '100px' }} className="font-outfit font-44 lineh-52 color37 weight-600 margin-b20" data-aos="fade-right" data-aos-duration="1200">Q</p>
                <p style={{ textShadow: '4px 4px 5px rgba(0, 0, 0, 0.3)', color: 'rgba(32, 64, 99, 0.8)', fontSize: '100px', marginTop: "70px" }} className="font-outfit font-44 lineh-52 color37 weight-600 margin-b20" data-aos="fade-right" data-aos-duration="1200">U</p>
                <p style={{ textShadow: '4px 4px 5px rgba(0, 0, 0, 0.3)', color: 'rgba(32, 64, 99, 0.8)', fontSize: '100px', marginTop: '70px' }} className="font-outfit font-44 lineh-52 color37 weight-600 margin-b20" data-aos="fade-right" data-aos-duration="1200">I</p>
                <p style={{ textShadow: '4px 4px 5px rgba(0, 0, 0, 0.3)', color: 'rgba(32, 64, 99, 0.8)', fontSize: '100px', marginTop: '70px' }} className="font-outfit font-44 lineh-52 color37 weight-600 margin-b20" data-aos="fade-right" data-aos-duration="1200">C</p>
                <p style={{ textShadow: '4px 4px 5px rgba(0, 0, 0, 0.3)', color: 'rgba(32, 64, 99, 0.8)', fontSize: '100px', marginTop: '70px' }} className="font-outfit font-44 lineh-52 color37 weight-600 margin-b20" data-aos="fade-right" data-aos-duration="1200">K</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="works-servicearea margin-b30 equel" id='setColor' data-aos="fade-right" data-aos-duration="1000">
                <div className="worksicons5">
                  <img src={value1} width={'34px'} height={'34px'} alt="" />
                </div>
                <div className="workstext">
                  <a href="servicemiddle.html" className="font-outfit font-24 weight-600 color37 margin-b14 lineh-26 d-inline-block ts">Quest</a>
                  <p className="font-outfit font-16 weight-400 lineh-26 color38 ts">At Quick Accounting we always quest for technology, innovation and new ways to reduce service delivery time. Our unique culture is crafted to have curious employees for quality.</p>
                </div>
              </div>

              <div className="works-servicearea margin-b30" id='setColor' data-aos="fade-right" data-aos-duration="1200">
                <div className="worksicons5">
                  <img src={value2} width={'34px'} height={'34px'} alt="" />
                </div>
                <div className="workstext">
                  <a href="servicemiddle.html" className="font-outfit font-24 weight-600 color37 margin-b14 lineh-26 d-inline-block ts">Uniqueness</a>
                  <p className="font-outfit font-16 weight-400 lineh-26 color38 ts">We believe in doing things differently. Our years of experience makes us know the importance of unique services. We experiment with new things each day so you can have quick information.</p>
                </div>
              </div>

              <div className="works-servicearea" data-aos="fade-right" id='setColor' data-aos-duration="1400">
                <div className="worksicons5">
                  <img src={value3} width={'34px'} height={'34px'} alt="" />
                </div>
                <div className="workstext">
                  <a href="servicemiddle.html" className="font-outfit font-24 weight-600 color37 margin-b14 lineh-26 d-inline-block ts">Integrity</a>
                  <p className="font-outfit font-16 weight-400 lineh-26 color38 ts">Support from stakeholders is equally important and thus the treatment. We integrate with our employees and treat them equally. Our culture ensures accountability and reliability to our employees for trusted and consistent services.</p>
                </div>
              </div>

              <div className="works-servicearea" id='setColor' data-aos="fade-right" data-aos-duration="1400">
                <div className="worksicons5">
                  <img src={value4} width={'34px'} height={'34px'} alt="" />
                </div>
                <div className="workstext">
                  <a href="servicemiddle.html" className="font-outfit font-24 weight-600 color37 margin-b14 lineh-26 d-inline-block ts" >Customer Centric</a>
                  <p className="font-outfit font-16 weight-400 lineh-26 color38 ts">Our business model is been designed around clients to provide them with both what they want and what the market demands. We are good advisors as well.</p>
                </div>
              </div>

              <div className="works-servicearea" id='setColor' data-aos="fade-right" data-aos-duration="1400">
                <div className="worksicons5">
                  <img src={value5} width={'34px'} height={'34px'} alt="" />
                </div>
                <div className="workstext">
                  <a href="servicemiddle.html" className="font-outfit font-24 weight-600 color37 margin-b14 lineh-26 d-inline-block ts">Knowledge</a>
                  <p className="font-outfit font-16 weight-400 lineh-26 color38 ts">Knowledge is the great power of all, and our unique training models and employee development ensure that our employees are well-equipped with new laws, employee skills, technical information, market trends and more.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={deagin2} alt="" className="elementoe16" />
      </div>
    </>
  );
};

export default Service;
